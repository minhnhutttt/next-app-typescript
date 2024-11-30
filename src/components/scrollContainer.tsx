'use client'

import { ReactNode, useLayoutEffect } from 'react'

import ScrollOut from 'scroll-out'

type ScrollContainerPropsType = {
  children: ReactNode
}

const ScrollContainer = ({ children }: ScrollContainerPropsType) => {
  useLayoutEffect(() => {
    ScrollOut({
      once: true,
      threshold: 0.5,
    })
    setTimeout(() => {
      if (window && document) {
        const splitting = require('splitting')
        splitting()
      }
    })
  }, [])
  return <div>{children}</div>
}

export default ScrollContainer
