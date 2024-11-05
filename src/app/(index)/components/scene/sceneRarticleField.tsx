"use client"

import { useRef } from "react"
import { Group } from "three"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParticleField from "../models/rarticleField"

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {}

export default function SceneRarticleField({}: Props) {

    const particlehRef = useRef<Group>(null)
  return (
    <group>
        <ParticleField ref={particlehRef} />
    </group>
  )
}