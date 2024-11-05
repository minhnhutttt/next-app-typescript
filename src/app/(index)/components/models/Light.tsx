import * as THREE from 'three'
import React, { forwardRef, useEffect, useMemo, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF, MeshSurfaceSampler } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    a_light_bulb_205001: THREE.Mesh
    a_light_bulb_205001_1: THREE.Mesh
  }
  materials: {
    ['a_light_bulb_205_Mat_glass.001']: THREE.MeshStandardMaterial
    ['a_light_bulb_206_light_Mat.001']: THREE.MeshStandardMaterial
  }
}

export const Light = forwardRef((props: JSX.IntrinsicElements['group'], ref: any) => {
  const { nodes, materials } = useGLTF('/assets/models/light.glb') as GLTFResult

  materials['a_light_bulb_205_Mat_glass.001'].wireframe = true
  materials['a_light_bulb_206_light_Mat.001'].wireframe = true

  const texture = useMemo(() => new THREE.TextureLoader().load('/assets/images/sample.png'), [])

  const createGeometryWithColors = (mesh: any, sampleCount: number) => {
    const vertices = []
    const colors = []
    const tempPosition = new THREE.Vector3()
    const sampler = new MeshSurfaceSampler(mesh).build()

    for (let i = 0; i < sampleCount; i++) {
      sampler.sample(tempPosition)
      vertices.push(tempPosition.x, tempPosition.y, tempPosition.z)
      
      const color = new THREE.Color(Math.random(), Math.random(), Math.random())
      colors.push(color.r, color.g, color.b)
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
    return geometry
  }

  const pointsGeometry1 = useMemo(() => createGeometryWithColors(nodes.a_light_bulb_205001, 4000), [nodes.a_light_bulb_205001])
  const pointsGeometry2 = useMemo(() => createGeometryWithColors(nodes.a_light_bulb_205001_1, 2000), [nodes.a_light_bulb_205001_1])


  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    const positions1 = pointsGeometry1.attributes.position.array
    const positions2 = pointsGeometry2.attributes.position.array

    for (let i = 1; i < positions1.length; i += 3) {
      positions1[i] += Math.sin(time + i * 0.1) * 0.002 
    }

    for (let i = 1; i < positions2.length; i += 3) {
      positions2[i] += Math.sin(time + i * 0.1) * 0.002
    }

    pointsGeometry1.attributes.position.needsUpdate = true
    pointsGeometry2.attributes.position.needsUpdate = true
  })

  return (
    <group {...props} ref={ref} dispose={null} rotation={[Math.PI / 2, 0, 0]} position={[2,-15,0]}>
      <group scale={0.15}>
      <points geometry={pointsGeometry1}>
        <pointsMaterial
          map={texture}
          size={0.08}
          sizeAttenuation={true}
          vertexColors={true}
          transparent={true}
          depthWrite={false}
        />
      </points>
      <points geometry={pointsGeometry2}>
        <pointsMaterial
          map={texture}
          size={0.08}
          sizeAttenuation={true}
          vertexColors={true}
          transparent={true}
          depthWrite={false}
        />
      </points>
      </group>
    </group>
  )
})

useGLTF.preload('/assets/models/light.glb')
