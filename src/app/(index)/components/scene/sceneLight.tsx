"use client"

import { useRef } from "react"
import { Earth } from "../models/Earth"
import { Group } from "three"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Float } from "@react-three/drei"
import { Light } from "../models/Light"

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {}

export default function SceneLight({}: Props) {

    const lightRef = useRef<Group>(null)
    useGSAP(()=> {
        if (!lightRef.current) return
        gsap.set(lightRef.current.position, {
            x: 1,
            y: 2
        })
        gsap.set(lightRef.current.scale, {
            x: 200,
            y: 200,
            z: 200
        })

        const scrollTl = gsap.timeline({
            defaults: {
              duration: 2,
            },
            scrollTrigger: {
              trigger: "#introduction",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
        });
        scrollTl.to(lightRef.current.scale, { duration: 3, x: 1, y: 1, z: 1 },0)
        scrollTl.to(lightRef.current.position, { duration: 3, x: 1, y: -1.1, z: 0 },0)

        const scrollTl2 = gsap.timeline({
          defaults: {
            duration: 2,
          },
          scrollTrigger: {
            trigger: "#brain",
            start: "top bottom",
            end: "bottom +=50%",
            scrub: 1,
          },
      });
      scrollTl2.to(lightRef.current.scale, { x: 20, y: 20, z: 20 },0)
      scrollTl2.to(lightRef.current.rotation, { x: Math.PI / 2, y: 0, z: Math.PI / 2 },0)
      scrollTl2.to(lightRef.current.position, { duration: 3, x: 1, y: 0, z: 10 },1)
    })

  return (
    <group>
        <Float>
        <Light ref={lightRef} />
        </Float>
        <ambientLight intensity={2} color="#9DDEFA" />
    </group>
  )
}