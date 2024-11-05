"use client"

import { useRef } from "react"
import { Earth } from "../models/Earth"
import { Group } from "three"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Float } from "@react-three/drei"
import { useMediaQuery } from "@/hooks/useMediaQuery"

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {}

export default function SceneEarth({}: Props) {
    const isDesktop = useMediaQuery("(min-width: 768px)", true);
    const earthRef = useRef<Group>(null)
    useGSAP(()=> {
        if (!earthRef.current) return
        gsap.set(earthRef.current.position, {
            x: isDesktop ? 1 : 0,
            y: isDesktop ? -1 : -1.2
        })
        gsap.set(earthRef.current.scale, {
            x: isDesktop ? 0.7 : 0.4,
            y: isDesktop ? 0.7 : 0.4,
            z: isDesktop ? 0.7 : 0.4,
        })
        gsap.from(earthRef.current.rotation, {
            duration: 60,
            y: Math.PI * 2,
            repeat: -1,
            ease: 'none'
        })
    },{ dependencies: [isDesktop]})

  return (
    <group>
        <Float>
        <Earth ref={earthRef} />
        </Float>
        <ambientLight intensity={2} color="#9DDEFA" />
    </group>
  )
}