import { forwardRef, useEffect, useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
// @ts-ignore
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler"; 
// @ts-ignore
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";
import { Float } from "@react-three/drei";

const Light = () => {
  const [model, setModel] = useState<THREE.Group | null>(null);
  const [pointsData, setPointsData] = useState<{
    vertices: number[];
    originalVertices: number[];
    colors: number[];
    sizes: number[];
  }>({
    vertices: [],
    originalVertices: [],
    colors: [],
    sizes: [],
  });
  const [mousePosition, setMousePosition] = useState<THREE.Vector3 | null>(null);
  const [brushSize] = useState(2.3);

  const obj = useLoader(OBJLoader, "/assets/models/light.obj");
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
    const totalPoints = 7000;
    const tempPosition = new THREE.Vector3();
    const vertices: number[] = [];
    const originalVertices: number[] = [];
    const colors: number[] = [];
    const sizes: number[] = [];
    const fixedColors = ["#4AF492", "#4AC7FA", "#F2DA4C", "#E649F5", "#FFFFFF"];
    for (let i = 0; i < totalPoints; i++) {
      sampler.sample(tempPosition);
      vertices.push(tempPosition.x, tempPosition.y, tempPosition.z);
      originalVertices.push(tempPosition.x, tempPosition.y, tempPosition.z);
  
      const randomColor = new THREE.Color(fixedColors[Math.floor(Math.random() * fixedColors.length)]);
      colors.push(randomColor.r, randomColor.g, randomColor.b);
  
      sizes.push(0.1);
    }

    setPointsData({
      vertices,
      originalVertices,
      colors,
      sizes,
    });
  };

  const updateSizes = () => {
    if (!pointsRef.current || !materialRef.current) return;
  
    const { position, size } = pointsRef.current.attributes;
    const positions = position.array as Float32Array;
    const sizes = size.array as Float32Array;
    const defaultSize = 0.1;
  
    for (let i = 0; i < positions.length; i += 3) {
      const index = i / 3;
      if (mousePosition) {
        const vertex = new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]);
        const distanceToMouse = vertex.distanceTo(mousePosition);
        sizes[index] = distanceToMouse < brushSize 
          ? 0.2 + (1 - distanceToMouse / brushSize) / 10 
          : defaultSize;
      } else {
        sizes[index] = defaultSize;
      }
    }
  
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
  };
  
  
  const handlePointerOut = () => {
    setMousePosition(null);
  };

  return (
    <>
      {model && (
        <Float>
        <group dispose={null} ref={ref} scale={0.38} position={[0,-2.5,0]}>
          <mesh geometry={(model.children[0] as THREE.Mesh).geometry}  onPointerMove={handlePointerMove} onPointerOut={handlePointerOut}>
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

export default Light;
