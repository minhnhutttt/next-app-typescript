
import * as THREE from 'three'
import React, { forwardRef, useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF, MeshSurfaceSampler } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

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

export const Earth = forwardRef((props: JSX.IntrinsicElements['group'], ref: any) => {
  const { nodes, materials } = useGLTF('/assets/models/earth.glb') as GLTFResult
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

  const pointsGeometry1 = useMemo(() => createGeometryWithColors(nodes.earth_1, 10000), [nodes.earth_1])


  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    const positions1 = pointsGeometry1.attributes.position.array

    for (let i = 1; i < positions1.length; i += 3) {
      positions1[i] += Math.sin(time + i * 0.1) * 0.001 
    }

    pointsGeometry1.attributes.position.needsUpdate = true
  })
  return (
    <group {...props} ref={ref} dispose={null}>
      <group scale={0.2}>
      <points geometry={pointsGeometry1}  onPointerOver={(e) => console.log(e)}>
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

useGLTF.preload('/assets/models/earth.glb')
Earth.displayName = 'Earth';
export default Earth;