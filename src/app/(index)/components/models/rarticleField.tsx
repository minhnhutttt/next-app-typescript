import React, { useRef, useMemo, forwardRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleField = forwardRef((props, ref: any) => {
    const pointsRef = useRef<THREE.Group>(null);
    const texture = useLoader(THREE.TextureLoader, '/assets/images/sample.png');

    const particles = useMemo(() => {
        const particlesArray = [];
        for (let i = 0; i < 200; i++) {
            const initialPosition = new THREE.Vector3(
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 5
            );
            const color = new THREE.Color(Math.random(), Math.random(), Math.random());
            const scale = Math.random() * 0.2 + 0.05;
            particlesArray.push({ initialPosition, color, scale });
        }
        return particlesArray;
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        particles.forEach((particle, index) => {
            const { initialPosition } = particle;
            const floatFactor = 0.1;
            const floatSpeed = 0.05;

            const x = initialPosition.x + Math.sin(time * floatSpeed + index) * floatFactor;
            const y = initialPosition.y + Math.sin(time * (floatSpeed + 0.5) + index) * floatFactor;
            const z = initialPosition.z + Math.sin(time * (floatSpeed + 1) + index) * floatFactor;

            const sprite = pointsRef.current?.children[index];
            if (sprite) {
                sprite.position.set(x, y, z);
                sprite.rotation.set(0, 0, Math.sin(time + index) * 0.2);
            }
        });
    });

    return (
        <group ref={ref || undefined} {...props}>
            <group ref={pointsRef} scale={1.2}>
                {particles.map((particle, index) => (
                    <sprite
                        key={index}
                        position={particle.initialPosition}
                        scale={[particle.scale, particle.scale, 1]}
                    >
                        <spriteMaterial
                            map={texture}
                            color={particle.color}
                            transparent={true}
                            alphaTest={0.5}
                            depthWrite={false}
                        />
                    </sprite>
                ))}
            </group>
        </group>
    );
});
ParticleField.displayName = 'ParticleField';
export default ParticleField;
