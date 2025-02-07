"use client";

import { useRef } from "react";
import { Group } from "three";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Earth from "../models/Earth";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import Light from "../models/Light";
import Cloud from "../models/Cloud";
import Puzzle from "../models/Puzzle";
gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {};

export default function Scane({}: Props) {
  const earthRef = useRef<Group>(null);
  const lighthRef = useRef<Group>(null);
  const cloudRef =useRef<Group>(null);
  const puzzleRef =useRef<Group>(null);
  useGSAP(() => {
    if (!earthRef.current || !lighthRef.current || !cloudRef.current || !puzzleRef.current) return;
    lighthRef.current.visible = false;
    cloudRef.current.visible = false;
    puzzleRef.current.visible = false;

    gsap.set(earthRef.current.position, {
      x: 2,
      z: -2,
    });
    gsap.set(lighthRef.current.position, {
      opacity: 0,
      x: 2,
      z: -2,
    });
    gsap.set(lighthRef.current.scale, {
      x: 4,
      y: 4,
      z: 4,
    });
    gsap.set(cloudRef.current.scale, {
      x: 6,
      y: 6,
      z: 6,
    });
    gsap.set(cloudRef.current.position, {
      x: 5
    });
    gsap.set(puzzleRef.current.scale, {
      x: 6,
      y: 6,
      z: 6,
    });
    gsap.set(puzzleRef.current.position, {
      x: -10,
      y: 5
    });
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

    scrollTl.to(earthRef.current.rotation, { x: 0, y: Math.PI / 2, z: 0 }, 0);
    scrollTl.to(
      earthRef.current.position,
      {
        x: -3,
      },
      0
    );
    scrollTl.to(earthRef.current.scale, { x: 4, y: 4, z: 4 }, 0);
    const scrollTl2 = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: "#vision",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 0.7,
        onEnter: () => {
          if (lighthRef.current && earthRef.current) {
            lighthRef.current.visible = true;
            earthRef.current.visible = false;
          }
        },
        onLeaveBack: () => {
          if (lighthRef.current && earthRef.current) {
            lighthRef.current.visible = false;
            earthRef.current.visible = true;
          }
        }
      },
    });
    scrollTl2.to(earthRef.current.position, { x: 2 }, 0);

    scrollTl2.to(
      earthRef.current.scale,
      {
        x: 0,
        y: 0,
        z: 0,
      },
      0
    );

    scrollTl2.to(lighthRef.current.scale, { x: 1, y: 1, z: 1 }, 0);

    const scrollTl3 = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: "#issue",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 0.7,
      },
    });

    scrollTl3.to(lighthRef.current.scale, { x: 9, y: 9, z: 9,
     }, 0);

     const scrollTl4 = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: "#issue",
        start: "top bottom-=50%",
        end: "bottom bottom",
        scrub: 0.7,
        onEnter: () => {
          if (lighthRef.current && cloudRef.current) {
            cloudRef.current.visible = true;
            lighthRef.current.visible = false;
          }
        },
        onLeaveBack: () => {
          if (lighthRef.current && cloudRef.current) {
            lighthRef.current.visible = true;
            cloudRef.current.visible = false;
          }
        }
      },
    });

    scrollTl4.to(cloudRef.current.scale, { x: 1, y: 1, z: 1}, 0);
    scrollTl4.to(cloudRef.current.position, {
      x: 0
    },0);

    const scrollTl5 = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: "#solution",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 0.7,
      },
    });

    scrollTl5.to(cloudRef.current.scale, { x: 9, y: 9, z: 9,
     }, 0);
     scrollTl5.to(cloudRef.current.position, { x: 10
     }, 0);

     const scrollTl6 = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: "#solution",
        start: "top bottom-=50%",
        end: "bottom bottom",
        scrub: 0.7,
        onEnter: () => {
          if (puzzleRef.current && cloudRef.current) {
            puzzleRef.current.visible = true;
            cloudRef.current.visible = false;
          }
        },
        onLeaveBack: () => {
          if (puzzleRef.current && cloudRef.current) {
            puzzleRef.current.visible = false;
            cloudRef.current.visible = true;
          }
        }
      },
    });

    scrollTl6.to(puzzleRef.current.scale, { x: 1, y: 1, z: 1}, 0);
    scrollTl6.to(puzzleRef.current.position, {
      x: 0,
      y: 0
    },0);

    const scrollTl7 = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: "#feature",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 0.7,
        
      },
    });
    scrollTl7.to(puzzleRef.current.scale, {
      x: 10,
      y: 10,
      z: 10
    },0);
    scrollTl7.to(puzzleRef.current.position, {
      x: -10,
      y: 22
    },0);

  });
    useFrame((state, delta) => {
      easing.damp3(state.camera.position, [(state.pointer.x / 3), (state.pointer.y / 3) *-1 , 4.5], 0.4, delta)
    })
  return (
    <group>
      <Earth ref={earthRef} />
      <Light ref={lighthRef} />
      <Cloud ref={cloudRef} />
      <Puzzle ref={puzzleRef} />
    </group>
  );
}
