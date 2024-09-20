'use client'

import { useEffect, useRef } from 'react'

const FV = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!videoRef.current) return
    videoRef.current.play()
  }, [])
  return (
    <div className="mb-[256px] max-md:mb-[82px]">
      <div className="pt-[30vh] max-md:pt-[20vh]">
        <h1 className="relative mb-[-1.5em] px-[32px]  font-anton text-[calc(24px_+_18vw)] uppercase leading-none">
        Innovate.
          <br />
          <span className="stroke">Create.</span>
          <br />
          <span className="text-white">Elevate.</span>
        </h1>
        <div>
          <video ref={videoRef} muted loop className="w-full" poster="">
            <source src="/assets/videos/mv.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

export default FV
