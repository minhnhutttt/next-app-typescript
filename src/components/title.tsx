import { ReactNode } from 'react'

export interface ButtonPropsType {
  sub: ReactNode
  children?: ReactNode
}

const Title = ({ sub, children }: ButtonPropsType) => {
  return (
    <div className="fade-up">
        <p className="text-center md:text-[32px] text-[4.5vw] font-semibold text-[#0D0A8E] font-['Inter']">{sub}</p>
        {children &&
            <h3 className="text-center md:text-[48px] text-[6.5vw] font-semibold font-gothic">{children}</h3>
        }
    </div>
  )
}

export default Title
