"use client"

import { useRef } from "react"
import { Group } from "three"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Float } from "@react-three/drei"
import { Puzzle } from "../models/Puzzle"

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {}

export default function ScenePuzzle({}: Props) {

    const puzzleRef = useRef<Group>(null)
  return (
    <group>
        <Float>
        <Puzzle ref={puzzleRef} />
        </Float>
        <ambientLight intensity={2} color="#9DDEFA" />
    </group>
  )
}