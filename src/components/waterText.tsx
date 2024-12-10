//@ts-ignore
import { DistortionText } from "react-text-fun";

export default function WaterText() {
  return (
    <div className="flex justify-center *:flex *:justify-center *:flex-col *:items-center">
      <DistortionText
        text="　　DIVER　　"
        fill="white"
        fontFamily="League Spartan"
        fontSize={120}
        speed={0.4}
        rotation={45}
        distortX={0.5}
        distortY={0.5}
        noiseAmplitude={0.12}
        noiseVolatility={1}
      />
      <DistortionText
        text="　　Time Network　　"
        fill="white"
        fontFamily="League Spartan"
        fontSize={120}
        speed={0.4}
        rotation={45}
        distortX={0.5}
        distortY={0.5}
        noiseAmplitude={0.12}
        noiseVolatility={1}
      />
    </div>
  );
}
