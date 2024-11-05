"use client"

import { useRef } from "react"
import { Earth } from "../models/Earth"
import { Group } from "three"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Float } from "@react-three/drei"
import { Light } from "../models/Light"
import { Puzzle } from "../models/Puzzle"

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {}

export default function ScenePuzzle({}: Props) {

    const puzzleRef = useRef<Group>(null)
    useGSAP(()=> {
        if (!puzzleRef.current) return
        gsap.set(puzzleRef.current.position, {
            x: 1,
            y: 2
        })
        gsap.set(puzzleRef.current.scale, {
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
              end: "bottom top",
              scrub: 1,
            },
        });
        scrollTl.to(puzzleRef.current.scale, { duration: 3, x: 1.5, y: 1.5, z: 1.5 },0)
        scrollTl.to(puzzleRef.current.position, { duration: 3, x: 1, y: 0, z: 0 },0)

        const scrollTl2 = gsap.timeline({
          defaults: {
            duration: 2,
          },
          scrollTrigger: {
            trigger: "#feature",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
      });
      scrollTl2.to(puzzleRef.current.scale, { x: 20, y: 20, z: 20 },0)
      scrollTl2.to(puzzleRef.current.rotation, { x: 0, y: Math.PI / 2, z: 0 },0)
      scrollTl2.to(puzzleRef.current.position, { duration: 3, x: 1, y: 0, z: 20 },0)
    })

  return (
    <group>
        <Float>
        <Puzzle ref={puzzleRef} />
        </Float>
        <ambientLight intensity={2} color="#9DDEFA" />
    </group>
  )
}