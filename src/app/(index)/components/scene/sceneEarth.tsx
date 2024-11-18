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
        gsap.set(earthRef.current.scale, {duration: 2,x: 20, y: 20, z: 200 })
        const scrollTl = gsap.timeline({
            defaults: {
              duration: 2,
            },
            scrollTrigger: {
              trigger: "#fv",
              start: "top top",
              end: "bottom top",
              scrub: 0.7,
            },
        });
        scrollTl.to(earthRef.current.scale, {duration: 2,x: 20, y: 20, z: 200 },0)
    
    })

  return (
    <group>
        <Earth ref={earthRef} />
    </group>
  )
}