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
          <img className="w-full" src="/assets/images/aboutus.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Video
