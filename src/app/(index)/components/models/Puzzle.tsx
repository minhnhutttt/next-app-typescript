import { forwardRef, useEffect, useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
// @ts-ignore
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler"; 
// @ts-ignore
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";
import { Float } from "@react-three/drei";

const Puzzle = forwardRef((props: JSX.IntrinsicElements['group'], ref: any) => {
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
  const [mousePosition, setMousePosition] = useState<THREE.Vector3 | null>(null);
  const [brushSize] = useState(2.5);
  const [minScale] = useState(1);
  const [maxScale] = useState(3);
  const numPoints = 8000;
  const rotationSpeed = 0.012;

  const obj = useLoader(OBJLoader, "/assets/models/puzzle.obj");
  const boxGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);

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

  const updateInstancesWithEffect = (mousePosition?: THREE.Vector3) => {
    if (!instancedMeshRef.current) return;
  
    const tempObject = new THREE.Object3D();
    const { positions, scales, colors, rotations } = pointsRef.current;
  
    positions.forEach((originalPosition, i) => {
      const currentPosition = originalPosition.clone();
      let currentScale = minScale;
      if (mousePosition) {
        const distanceToMouse = mousePosition.distanceTo(currentPosition);
        if (distanceToMouse < brushSize) {
          const factor = 1 - distanceToMouse / brushSize;
          currentScale = minScale + (maxScale - minScale) * factor;
  
          rotations[i].x += rotationSpeed * factor;
          rotations[i].y += rotationSpeed * factor;
          rotations[i].z += rotationSpeed * factor;

          const displacement = currentPosition
            .clone()
            .normalize()
            .multiplyScalar(0.5 * factor);
          currentPosition.add(displacement);
        }
      }
  
      const floatFactor = Math.sin(performance.now() * 0.005 + i) * 0.02;
      currentPosition.y += floatFactor;
  
      scales[i] = currentScale;
  
      tempObject.position.copy(currentPosition);
      tempObject.scale.setScalar(currentScale * 0.3);
      tempObject.rotation.copy(rotations[i]);
      tempObject.updateMatrix();
  
      instancedMeshRef.current?.setMatrixAt(i, tempObject.matrix);
      instancedMeshRef.current?.setColorAt(i, colors[i]);
    });
  
    instancedMeshRef.current.instanceMatrix.needsUpdate = true;
    if (instancedMeshRef.current.instanceColor) {
      instancedMeshRef.current.instanceColor.needsUpdate = true;
    }
  };
  
  useEffect(() => {
    if (model) updateInstancesWithEffect();
  }, [model, mousePosition]);

  const handlePointerMove = (e: any) => {
    if (!modelRef.current || !instancedMeshRef.current) return;
  
    const worldMousePosition = new THREE.Vector3(e.point.x, e.point.y, e.point.z);
    const localMousePosition = modelRef.current.worldToLocal(worldMousePosition);
  
    updateInstancesWithEffect(localMousePosition);
    setMousePosition(localMousePosition);
  };
  
  const handlePointerOut = () => {
    setMousePosition(null);
    updateInstancesWithEffect(); 
  };

  useFrame(() => {
    if (mousePosition) {
      updateInstancesWithEffect(mousePosition);
    } 
  });
  
  return (
    <group dispose={null} {...props} ref={ref}>
      {model && (
        <Float>
          <group ref={modelRef} scale={0.3} rotation={[0,Math.PI/2,Math.PI/2]} position={[2,0,0]}>
            <mesh
              geometry={(model.children[0] as THREE.Mesh).geometry}
              onPointerMove={handlePointerMove}
              onPointerOut={handlePointerOut}
            >
              <meshBasicMaterial transparent opacity={0} visible={false} />
            </mesh>

            <instancedMesh
              ref={instancedMeshRef}
              args={[boxGeometry, undefined, numPoints]}
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

Puzzle.displayName = 'Puzzle';
export default Puzzle;