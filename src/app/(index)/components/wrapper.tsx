'use client'

import { ReactNode, useEffect } from 'react'
import ScrollOut from 'scroll-out'

const Wrapper = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    ScrollOut({
      once: true,
    })
    setTimeout(() => {
      if (window && document) {
        const splitting = require('splitting')
        splitting()
      }
    })
  }, [])

  return <main>{children}</main>
}

export default Wrapper
