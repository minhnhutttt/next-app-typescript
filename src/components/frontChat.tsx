'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

const chatId = 'ff110502e637f78c24024cc7402ee994'

const FrontChat = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  const initialize = () => {
    if (window.FrontChat) {
      window.FrontChat('init', {
      chatId,
      useDefaultLauncher: false,
      })
    }
  }

  useEffect(() => {
    if (isLoaded) {
      initialize()
    }
  }, [isLoaded])

  return (
    <Script
      id="front-chat-script"
      src="https://chat-assets.frontapp.com/v1/chat.bundle.js"
      strategy="lazyOnload"
      onLoad={() => setIsLoaded(true)}
    />
  )
}

export default FrontChat