// components/ParticlesBackground.tsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import type { ISourceOptions } from "tsparticles-engine";

interface ParticlesBackgroundProps {
  className?: string;
  style?: React.CSSProperties;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({ 
  className = "",
  style = {}
}) => {
  // Khởi tạo tsparticles engine
  const particlesInit = useCallback(async (engine: Engine) => {
    // Load slim version để giảm bundle size
    await loadSlim(engine);
  }, []);

  // Callback khi particles container được load
  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles container loaded", container);
  }, []);

  // Configuration cho particles - tương đương với code gốc của bạn
  const particlesOptions: ISourceOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    particles: {
      number: {
        value: 10,
        density: {
          enable: true,
          area: 1200,
        },
      },
      color: {
        value: ["#2EDCFF", "#FE2C55", "#DB00B2"],
      },
      shape: {
        type: "polygon",
        polygon: {
          sides: 4,
        },
      },
      opacity: {
        value: 1,
        random: true,
        animation: {
          enable: true,
          speed: 0.2,
          minimumValue: 0,
          sync: false,
        },
      },
      size: {
        value: 8,
        random: true,
      },
      links: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "out",
        },
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: false,
        },
        onClick: {
          enable: false,
        },
        resize: true,
      },
    },
    detectRetina: true,
  };

  const defaultStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    transform: "rotate(45deg)",
    ...style,
  };

  return (
    <Particles
      className={className}
      style={defaultStyle}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    />
  );
};

export default ParticlesBackground;