'use client'

import { useCallback, useState } from 'react'

const Header = () => {
  const [NavOpen, setNavOpen] = useState(false)

  const close = useCallback(() => {
    setNavOpen(false)
  }, [])

  return (
    <header className="absolute inset-x-0 top-0 z-[25] flex items-center px-5 pt-3 md:pt-7">
      <div className="flex h-[66px] w-full items-center justify-between">
        <div className="flex">
          <a href="/">
            <img src="/assets/images/logo.svg" alt="" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
