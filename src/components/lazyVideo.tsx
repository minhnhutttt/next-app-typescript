import { useRef, useState, useEffect } from "react";
import NoiseAnimation from "./noiseAnimation";

export function LazyVideo({ src, className }: { src: string; className: string }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (videoRef.current) observer.observe(videoRef.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible && videoRef.current) {
            videoRef.current.play();
        } else if (videoRef.current) {
            videoRef.current.pause();
        }
    }, [isVisible]);

    return (
        <div className={`${className} ${isVisible ? "visible" : "invisible"}`}>
        <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="auto"
        >
            <source src={src} type="video/mp4" />
        </video>
        <NoiseAnimation triggerAnimation={true} />
        </div>
    );
}
