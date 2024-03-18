'use client'

import { useState, useRef, useEffect, ReactNode } from 'react'

interface CardProps {
  children: ReactNode
}

const Card = ({ children }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [mouseLeaveDelay, setMouseLeaveDelay] = useState<NodeJS.Timeout | null>(
    null
  )

  useEffect(() => {
    if (cardRef.current) {
      setWidth(cardRef.current.offsetWidth)
      setHeight(cardRef.current.offsetHeight)
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      setMouseX(e.pageX - cardRef.current.offsetLeft - width / 2)
      setMouseY(e.pageY - cardRef.current.offsetTop - height / 2)
    }
  }

  const handleMouseEnter = () => {
    if (mouseLeaveDelay) clearTimeout(mouseLeaveDelay)
  }

  const handleMouseLeave = () => {
    const delay = setTimeout(() => {
      setMouseX(0)
      setMouseY(0)
    }, 1000)
    setMouseLeaveDelay(delay)
  }

  const mousePX = mouseX / width
  const mousePY = mouseY / height

  const cardStyle = {
    transform: `rotateY(${mousePX * 30}deg) rotateX(${mousePY * -30}deg)`,
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div
        className="relative z-20 h-full w-full overflow-hidden rounded-xl border border-[#939393] [transition:1s_cubic-bezier(0.445,_0.05,_0.55,_0.95)] max-md:p-3"
        style={cardStyle}
      >
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Card
