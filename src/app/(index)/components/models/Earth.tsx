import { forwardRef, useEffect, useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
// @ts-ignore
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler"; 
// @ts-ignore
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";
import { Float } from "@react-three/drei";

const Earth = () => {
  const [model, setModel] = useState<THREE.Group | null>(null);
  const [pointsData, setPointsData] = useState<{
    vertices: number[];
    originalVertices: number[];
    colors: number[];
    sizes: number[];
    floatOffsets: number[]; // Thêm mảng lưu các giá trị offset cho hiệu ứng trôi nổi
    floatSelectedIndices: Set<number>; // Thêm một mảng để lưu các chỉ số điểm được chọn
  }>({
    vertices: [],
    originalVertices: [],
    colors: [],
    sizes: [],
    floatOffsets: [],
    floatSelectedIndices: new Set(), // Khởi tạo Set cho các chỉ số điểm được chọn
  });
  const [mousePosition, setMousePosition] = useState<THREE.Vector3 | null>(null);
  const [brushSize] = useState(3.6);

  const obj = useLoader(OBJLoader, "/assets/models/earth.obj");
  const ref = useRef<any>(null);
  const samplerRef = useRef<any>(null);
  const pointsRef = useRef<THREE.BufferGeometry>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useEffect(() => {
    const modelMesh = obj.children[0] as THREE.Mesh;
    const sampler = new MeshSurfaceSampler(modelMesh).build();
    samplerRef.current = sampler;

    addPoints(sampler);
    setModel(obj);
  }, [obj]);

  const addPoints = (sampler: any) => {
    const totalPoints = 6000;
    const tempPosition = new THREE.Vector3();
    const vertices: number[] = [];
    const originalVertices: number[] = [];
    const colors: number[] = [];
    const sizes: number[] = [];
    const floatOffsets: number[] = [];
    const floatSelectedIndices = new Set<number>(); // Mảng trôi nổi
    const fixedColors = ["#4AF492", "#4AC7FA", "#F2DA4C", "#E649F5", "#FFFFFF"];

    for (let i = 0; i < totalPoints; i++) {
      sampler.sample(tempPosition);
      vertices.push(tempPosition.x, tempPosition.y, tempPosition.z);
      originalVertices.push(tempPosition.x, tempPosition.y, tempPosition.z);

      const randomColor = new THREE.Color(fixedColors[Math.floor(Math.random() * fixedColors.length)]);
      colors.push(randomColor.r, randomColor.g, randomColor.b);

      sizes.push(0.1);
      floatOffsets.push(Math.random() * Math.PI * 2);
    }

    setPointsData({
      vertices,
      originalVertices,
      colors,
      sizes,
      floatOffsets,
      floatSelectedIndices, // Gửi Set các chỉ số điểm được chọn
    });
  };

  const updateSizes = () => {
    if (!pointsRef.current || !materialRef.current) return;

    const { position, size } = pointsRef.current.attributes;
    const positions = position.array as Float32Array;
    const sizes = size.array as Float32Array;
    const defaultSize = 0.1;
    const maxDisplacement = 1; // Độ phồng tối đa

    const floatSpeed = 0.005; // Tốc độ trôi nổi

    for (let i = 0; i < positions.length; i += 3) {
      const index = i / 3;
      const originalVertex = new THREE.Vector3(
        pointsData.originalVertices[i],
        pointsData.originalVertices[i + 1],
        pointsData.originalVertices[i + 2]
      );

      // Kiểm tra nếu điểm nằm trong các chỉ số được chọn
      if (!pointsData.floatSelectedIndices.has(index)) continue;

      const floatOffset = pointsData.floatOffsets[index];
      const floatFactor = Math.sin(floatOffset + performance.now() * floatSpeed) * 0.05;

      // Cập nhật vị trí theo trục Y (hoặc trục khác nếu cần)
      positions[i + 1] = originalVertex.y + floatFactor;

      if (mousePosition) {
        const distanceToMouse = originalVertex.distanceTo(mousePosition);
        const factor = Math.max(0, 1 - distanceToMouse / brushSize);

        // Thay đổi kích thước
        sizes[index] = factor > 0 ? 0.2 + factor / 10 : defaultSize;

        // Thay đổi vị trí để tạo hiệu ứng căng phồng
        if (factor > 0) {
          const displacement = originalVertex
            .clone()
            .normalize()
            .multiplyScalar(maxDisplacement * factor);
          positions[i] = originalVertex.x + displacement.x;
          positions[i + 1] = originalVertex.y + displacement.y + floatFactor;
          positions[i + 2] = originalVertex.z + displacement.z;
        } else {
          // Reset về vị trí gốc
          positions[i] = originalVertex.x;
          positions[i + 1] = originalVertex.y + floatFactor;
          positions[i + 2] = originalVertex.z;
        }
      } else {
        // Reset về vị trí gốc
        sizes[index] = defaultSize;
        positions[i] = originalVertex.x;
        positions[i + 1] = originalVertex.y + floatFactor;
        positions[i + 2] = originalVertex.z;
      }
    }

    position.needsUpdate = true;
    size.needsUpdate = true;
  };

  useFrame(() => {
    updateSizes();
  });

  const handlePointerMove = (e: any) => {
    if (!ref.current) return;

    const { x, y, z } = e.point;
    const worldMousePosition = new THREE.Vector3(x, y, z);
    const localMousePosition = ref.current.worldToLocal(worldMousePosition);
    setMousePosition(localMousePosition);
    
    // Lưu các chỉ số điểm nằm trong vùng brush
    const brushRadius = brushSize / 2;
    pointsData.floatSelectedIndices.clear();
    for (let i = 0; i < pointsData.originalVertices.length / 3; i++) {
      const vertex = new THREE.Vector3(
        pointsData.originalVertices[i * 3],
        pointsData.originalVertices[i * 3 + 1],
        pointsData.originalVertices[i * 3 + 2]
      );
      if (vertex.distanceTo(localMousePosition) < brushRadius) {
        pointsData.floatSelectedIndices.add(i);
      }
    }
  };

  const handlePointerOut = () => {
    setMousePosition(null);
    pointsData.floatSelectedIndices.clear();
  };

  return (
    <>
      {model && (
        <Float>
          <group dispose={null} ref={ref} scale={0.38} position={[0, -1.2, 0]}>
            <mesh geometry={(model.children[0] as THREE.Mesh).geometry} onPointerMove={handlePointerMove} onPointerOut={handlePointerOut}>
              <meshBasicMaterial transparent opacity={0} visible={false} />
            </mesh>
            <points>
              <bufferGeometry ref={pointsRef}>
                <bufferAttribute
                  attach="attributes-position"
                  array={new Float32Array(pointsData.vertices)}
                  count={pointsData.vertices.length / 3}
                  itemSize={3}
                />
                <bufferAttribute
                  attach="attributes-color"
                  array={new Float32Array(pointsData.colors)}
                  count={pointsData.colors.length / 3}
                  itemSize={3}
                />
                <bufferAttribute
                  attach="attributes-size"
                  array={new Float32Array(pointsData.sizes)}
                  count={pointsData.sizes.length}
                  itemSize={1}
                />
              </bufferGeometry>
              <shaderMaterial
                ref={materialRef}
                opacity={0.5}
                side={THREE.DoubleSide}
                vertexColors={true}
                transparent={true}
                uniforms={{
                  pointTexture: { value: new THREE.TextureLoader().load("/assets/images/sample.png") },
                }}
                vertexShader={`
                  attribute float size;
                  varying vec3 vColor;

                  void main() {
                    vColor = color;
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    gl_PointSize = size * (300.0 / -mvPosition.z);
                    gl_Position = projectionMatrix * mvPosition;
                  }
                `}
                fragmentShader={`
                  uniform sampler2D pointTexture;
                  varying vec3 vColor;

                  void main() {
                    gl_FragColor = vec4(vColor, 1.0) * texture2D(pointTexture, gl_PointCoord);
                    if (gl_FragColor.a < 0.1) discard;
                  }
                `}
              />
            </points>
          </group>
        </Float>
      )}
    </>
  );
};

export default Earth;
