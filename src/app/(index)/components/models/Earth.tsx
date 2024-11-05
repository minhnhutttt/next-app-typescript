import * as THREE from 'three'
import React, { forwardRef, useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    earth001: THREE.Mesh
    earth001_1: THREE.Mesh
  }
  materials: {
    ['clouds_MAT.001']: THREE.MeshStandardMaterial
    ['earth_MAT.001']: THREE.MeshStandardMaterial
  }
}

export const Earth = forwardRef((props: JSX.IntrinsicElements['group'], ref: any) => {
  const { nodes, materials } = useGLTF('/assets/models/earth.glb') as GLTFResult


  return (
    <group {...props} ref={ref} dispose={null} scale={0.7}>
      <mesh geometry={nodes.earth001.geometry} material={materials['clouds_MAT.001']} />
      <mesh geometry={nodes.earth001_1.geometry} material={materials['earth_MAT.001']} />
    </group>
  )
})

useGLTF.preload('/assets/models/earth.glb')
