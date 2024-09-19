'use client'

import { useEffect, useRef } from 'react'

const Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!videoRef.current) return
    videoRef.current.play()
  }, [])
  return (
    <div className="mb-[256px] max-md:mb-[82px]">
      <div>
        <div>
          <video ref={videoRef} muted loop className="w-full" poster="">
            <source src="/assets/videos/about.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

export default Video
