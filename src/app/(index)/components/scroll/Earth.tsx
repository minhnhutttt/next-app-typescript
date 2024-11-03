import * as THREE from 'three'
import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import gsap from "gsap";
type GLTFResult = GLTF & {
  nodes: {
    earth_1: THREE.Mesh
    earth_2: THREE.Mesh
  }
  materials: {
    clouds_MAT: THREE.MeshStandardMaterial
    earth_MAT: THREE.MeshStandardMaterial
  }
}

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOOR = 3;

export function Earth(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/assets/models/earth.glb') as GLTFResult
  const [scale, setScale] = useState(1)

  const tl = useRef<any>();
  const earthRef = useRef<any>();
  const scroll = useScroll();

  useFrame(() => {
    if (scroll) {
      tl.current.progress(scroll.offset);
      // tl.current.seek(scroll.offset * tl.current.duration());
    }
  });
  useLayoutEffect(() => {
      tl.current = gsap.timeline();

      tl.current.to(earthRef.current.postion,
        {
          duration: 2,
          y: -FLOOR_HEIGHT * (NB_FLOOR -1 )
        },0
      )

      tl.current.to(
        earthRef.current.rotation,
        { duration: 1, x: 0, y: Math.PI / 6, z: 0 },
        0
      );
    },[])

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth
      const newScale = (screenWidth * 0.2) / 1000
      setScale(newScale)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <group {...props}  ref={earthRef} dispose={null} position={[0,0,0]}>
      <group >
        <mesh geometry={nodes.earth_1.geometry} material={materials.clouds_MAT} />
        <mesh geometry={nodes.earth_2.geometry} material={materials.earth_MAT} />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/earth.glb')
