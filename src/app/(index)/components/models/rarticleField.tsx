import React, { useRef, useMemo, forwardRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { OBJLoader } from 'three-stdlib';

const colors = ["#4AF492", "#4AC7FA", "#F2DA4C", "#E649F5", "#FFFFFF"];

const ParticleField = forwardRef((props, ref: any) => {
    const pointsRef = useRef<THREE.Group>(null);

    const model = useLoader(OBJLoader, '/assets/models/ipdc.obj');

    const particles = useMemo(() => {
        const particlesArray = [];
        for (let i = 0; i < 200; i++) {
            const initialPosition = new THREE.Vector3(
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 5
            );
            const color = colors[Math.floor(Math.random() * colors.length)];
            const scale = Math.random() * 0.005;

            const rotationSpeed = new THREE.Vector3(
                Math.random() * 0.01 - 0.005,
                Math.random() * 0.01 - 0.005, 
                Math.random() * 0.01 - 0.005
            );

            particlesArray.push({ initialPosition, color, scale, rotationSpeed });
        }
        return particlesArray;
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        particles.forEach((particle, index) => {
            const { initialPosition, rotationSpeed } = particle;
            const floatFactor = 0.1;
            const floatSpeed = 0.05;

            const x = initialPosition.x + Math.sin(time * floatSpeed + index) * floatFactor;
            const y = initialPosition.y + Math.sin(time * (floatSpeed + 0.5) + index) * floatFactor;
            const z = initialPosition.z + Math.sin(time * (floatSpeed + 1) + index) * floatFactor;

            const mesh = pointsRef.current?.children[index] as THREE.Object3D;
            if (mesh) {
                mesh.position.set(x, y, z);

                mesh.rotation.x += rotationSpeed.x;
                mesh.rotation.y += rotationSpeed.y;
                mesh.rotation.z += rotationSpeed.z;
            }
        });
    });

    return (
        <group ref={ref || undefined} {...props}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <group ref={pointsRef} scale={1}>
                {particles.map((particle, index) => {
                    const clonedModel = model.clone();
                    clonedModel.traverse((child: any) => {
                        if (child.isMesh) {
                            child.material = new THREE.MeshStandardMaterial({
                                color: particle.color,
                            });
                        }
                    });
                    return (
                        <primitive
                            key={index}
                            object={clonedModel}
                            position={particle.initialPosition}
                            scale={[particle.scale, particle.scale, particle.scale]}
                        />
                    );
                })}
            </group>
        </group>
    );
});

ParticleField.displayName = 'ParticleField';
export default ParticleField;
