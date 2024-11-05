"use client"

import { useRef } from "react"
import { Group } from "three"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Float } from "@react-three/drei"
import Cloud from "../models/Cloud"

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {}

export default function SceneCloud({}: Props) {

    const cloudRef = useRef<Group>(null)
    useGSAP(()=> {
        if (!cloudRef.current) return
        gsap.set(cloudRef.current.position, {
            x: 1,
            y: 2
        })
        gsap.set(cloudRef.current.scale, {
            x: 200,
            y: 200,
            z: 200
        })

        const scrollTl = gsap.timeline({
            defaults: {
              duration: 2,
            },
            scrollTrigger: {
              trigger: "#brain",
              start: "top bottom",
              end: "bottom bottom",
              scrub: 1,
            },
        });
        scrollTl.to(cloudRef.current.scale, { duration: 3, x: 1, y: 1, z: 1 },0)
        scrollTl.to(cloudRef.current.position, { duration: 3, x: -1, y: -0.75, z: 0 },0)

        const scrollTl2 = gsap.timeline({
            defaults: {
              duration: 2,
            },
            scrollTrigger: {
              trigger: "#solution",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
        });
        scrollTl2.to(cloudRef.current.scale, { x: 20, y: 20, z: 20 },0)
        scrollTl2.to(cloudRef.current.rotation, { x: 0, y: Math.PI / 2, z: 0 },0)
        scrollTl2.to(cloudRef.current.position, { duration: 3, x: 0, y: 4, z: 25 },0)
    })

  return (
    <group>
        <Float>
        <Cloud ref={cloudRef} />
        </Float>
        <ambientLight intensity={2} color="#9DDEFA" />
    </group>
  )
}