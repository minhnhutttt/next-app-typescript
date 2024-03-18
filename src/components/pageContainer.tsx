'use client'

import { ReactNode } from 'react'

interface PageContainerPropsType {
  children: ReactNode
}

const PageContainer = ({ children }: PageContainerPropsType) => {
  return (
    <div className="overflow-hidden bg-[url('/assets/images/bg.png')] bg-[length:100%_auto] bg-top bg-no-repeat pb-20 pt-[120px] md:pt-[12vw] min-[1440px]:pt-[170px]">
      {children}
    </div>
  )
}

export default PageContainer
