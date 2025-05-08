'use client'

import { usePathname } from 'next/navigation'

import Fv from './fv'
import LineButton from './lineButton'

const Mainvisual = () => {
  const pathname = usePathname()

  return (
    <div
      className={`top-0 pb-5  max-xl:absolute max-xl:inset-0 max-xl:z-50 max-xl:animate-[fadeOut_8s_forwards] md:flex-[0_0_600px] xl:sticky xl:h-screen xl:overflow-hidden ${
        pathname !== '/' ? 'max-xl:!hidden' : ''
      }`}
    >
      <Fv />
      <div className="px-5 max-xl:hidden">
        <LineButton />
      </div>
    </div>
  )
}

export default Mainvisual
