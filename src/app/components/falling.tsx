"use client"
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const Falling = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);


  const options: any = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      particles: {
        number: {
          value: 80,
          density: {
            enable: false,
            value_area: 10,
          },
        },
        color: {
          value: ["#FF88C1", "#DDDDDD"],
        },
        shape: {
          type: ["edge", "polygon"],
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: true,
            speed: 20,
            opacity_min: 0,
            sync: false,
          },
        },
        size: {
          value: 4,
          random: true,
          anim: {
            enable: true,
            speed: 1.3,
            size_min: 0.8,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          enable: true,
          speed: 5,
          direction: "bottom" as "bottom",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: false,
          },
          onclick: {
            enable: false,
          },
          resize: {
            enable: true,
          },
        },
      },
      retina_detect: true,
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        className="absolute inset-0"
        options={options}
      />
    );
  }

  return <></>;
};