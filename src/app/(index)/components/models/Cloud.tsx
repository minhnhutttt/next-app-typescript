import { forwardRef, useEffect, useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
// @ts-ignore
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler"; 
// @ts-ignore
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";
import { Float } from "@react-three/drei";

const Cloud = forwardRef((props: JSX.IntrinsicElements['group'], ref: any) => {
  const [model, setModel] = useState<THREE.Group | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const samplerRef = useRef<MeshSurfaceSampler | null>(null);
  const instancedMeshRef = useRef<THREE.InstancedMesh | null>(null);
  const pointsRef = useRef({
    positions: [] as THREE.Vector3[],
    scales: [] as number[],
    colors: [] as THREE.Color[],
    rotations: [] as THREE.Euler[],
  });

  const [brushSize] = useState(10);
  const [minScale] = useState(1);
  const [maxScale] = useState(4);
  const numPoints = 3000;

  const obj = useLoader(OBJLoader, "/assets/models/cloud.obj");
  const ipdcModel = useLoader(OBJLoader, "/assets/models/ipdc.obj");

  const colors = ["#4AF492", "#4AC7FA", "#F2DA4C", "#E649F5", "#FFFFFF"];

  useEffect(() => {
    const modelMesh = obj.children[0] as THREE.Mesh;
    const sampler = new MeshSurfaceSampler(modelMesh).build();
    samplerRef.current = sampler;

    const positions: THREE.Vector3[] = [];
    const scales: number[] = Array(numPoints).fill(minScale);
    const pointColors: THREE.Color[] = [];
    const pointRotations: THREE.Euler[] = []; 

    for (let i = 0; i < numPoints; i++) {
      const tempPosition = new THREE.Vector3();
      sampler.sample(tempPosition);
      positions.push(tempPosition);

      const randomColor = new THREE.Color(colors[Math.floor(Math.random() * colors.length)]);
      pointColors.push(randomColor);

      const randomRotation = new THREE.Euler(
        Math.random() * Math.PI * 3,
        Math.random() * Math.PI * 3,
        Math.random() * Math.PI * 3 
      );
      pointRotations.push(randomRotation);
    }

    pointsRef.current = { positions, scales, colors: pointColors, rotations: pointRotations };
    setModel(obj);
  }, [obj]);

  const updateInstances = () => {
    if (!instancedMeshRef.current) return;

    const tempObject = new THREE.Object3D();
    const { positions, scales, colors, rotations } = pointsRef.current;

    positions.forEach((pos, i) => {
      tempObject.position.copy(pos);
      tempObject.scale.setScalar(scales[i] * 0.02);
      tempObject.rotation.copy(rotations[i]); 
      tempObject.updateMatrix();
      instancedMeshRef.current?.setMatrixAt(i, tempObject.matrix);

      const color = colors[i];
      instancedMeshRef.current?.setColorAt(i, color);
    });

    instancedMeshRef.current.instanceMatrix.needsUpdate = true;
    if (instancedMeshRef.current.instanceColor) {
      instancedMeshRef.current.instanceColor.needsUpdate = true;
    }
  };

  useEffect(() => {
    if (model) updateInstances();
  }, [model]);

  const handlePointerMove = (e: any) => {
    if (!modelRef.current || !instancedMeshRef.current) return;

    const worldMousePosition = new THREE.Vector3(e.point.x, e.point.y, e.point.z);
    const localMousePosition = modelRef.current.worldToLocal(worldMousePosition);

    const { positions, scales } = pointsRef.current;

    for (let i = 0; i < positions.length; i++) {
      const distance = localMousePosition.distanceTo(positions[i]);
      scales[i] =
        distance < brushSize
          ? minScale + (maxScale - minScale) * (1 - distance / brushSize)
          : minScale;
    }

    updateInstances();
  };

  const handlePointerOut = () => {
    const { scales } = pointsRef.current;
    pointsRef.current.scales = scales.map(() => minScale);
    updateInstances();
  };

  useFrame(() => {
    const { rotations } = pointsRef.current;
    for (let i = 0; i < rotations.length; i++) {
      rotations[i].x += 0.001;
      rotations[i].y += 0.001;
      rotations[i].z += 0.001;
    }
    updateInstances();
  });

  return (
    <group dispose={null} {...props} ref={ref}>
      {model && (
        <Float>
          <group ref={modelRef} scale={0.08} position={[-1.5,-1.5,0]}>
            <mesh
              geometry={(model.children[0] as THREE.Mesh).geometry}
              onPointerMove={handlePointerMove}
              onPointerOut={handlePointerOut}
            >
              <meshBasicMaterial transparent opacity={0} visible={false} />
            </mesh>

            <instancedMesh
              ref={instancedMeshRef}
              args={[(ipdcModel.children[0] as THREE.Mesh).geometry, undefined, numPoints]}
            >
              <meshStandardMaterial  />
            </instancedMesh>
          </group>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
        </Float>
      )}
    </group>
  );
});

export default Cloud;
