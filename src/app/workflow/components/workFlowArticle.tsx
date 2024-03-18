'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'
import CircleNumber from '@/components/circleNumber'

const Articles = [
  {
    number: 'I',
    type: 'PROJECT INITIATION',
    title: (
      <>
        <p className="text-[#FF84C8]">By Client</p>
      </>
    ),
    left: 'ENGAGE & DEFINE',
    right:
      'Engage with the development team and define your project vision, objectives, and expectations.',
  },
  {
    number: 'II',
    type: 'SCOPE DEFINITION',
    title: (
      <>
        <p className="text-[#0EFFFF]">By Our</p>
      </>
    ),
    left: 'ASSESS & OUTLINE',
    right:
      "Assess the client's requirements, outline the scope, and prepare a detailed project blueprint.",
  },
  {
    number: 'III',
    type: 'SOLUTION PLANNING',
    title: (
      <>
        <p className="text-[#0EFFFF]">By Our</p>
      </>
    ),
    left: 'STRATEGIZE & DESIGN',
    right:
      'Strategize the development approach, design the architecture, and plan resource allocation.',
  },
  {
    number: 'IV',
    type: 'PRESENT & REVIEW',
    title: (
      <>
        <p className="text-[#0EFFFF]">By Our</p>
      </>
    ),
    left: 'STRPRESENT & REVIEW',
    right:
      "Present a comprehensive proposal, including timelines, costs, and deliverables, for the client's review.",
  },
  {
    number: 'V',
    type: 'AGREEMENT FINALIZATION',
    title: (
      <>
        <p className="text-gradient">By Client & Our</p>
      </>
    ),
    left: 'NEGOTIATE & SIGN',
    right:
      'Negotiate terms, address concerns, and sign the contract to officially kick off the project.',
  },
  {
    number: 'VI',
    type: 'DEVELOPMENT PHASE',
    title: (
      <>
        <p className="text-[#0EFFFF]">By Our</p>
      </>
    ),
    left: 'BUILD & DEVELOP',
    right:
      'Develop the solution, ensuring adherence to the agreed-upon milestones and quality standards.',
  },
  {
    number: 'VII',
    type: 'QUALITY ASSURANCE',
    title: (
      <>
        <p className="text-[#0EFFFF]">By Our</p>
      </>
    ),
    left: 'TEST & REFINE',
    right:
      'Conduct rigorous testing, gather feedback, and refine the solution to meet the quality criteria.',
  },
  {
    number: 'VIII',
    type: 'DELIVERY & IMPLEMENTATION',
    title: (
      <>
        <p className="text-gradient">By Client & Our</p>
      </>
    ),
    left: 'DEPLOY & INTEGRATE',
    right:
      "Deliver and deploy the solution, ensuring seamless integration into the client's environment.",
  },
  {
    number: 'IX',
    type: 'PROJECT CLOSURE',
    title: (
      <>
        <p className="text-[#0EFFFF]">By Our</p>
      </>
    ),
    left: 'EVALUATE & SUPPORT',
    right:
      "Evaluate the project's success, provide necessary documentation, and offer post-launch support.",
  },
]

const WorkFlowArticle = () => {
  const ref = useScrollAnimations()

  return (
    <>
      <div className="relative mt-2 px-5 md:px-11" ref={ref}>
        {Articles.map((item, index) => (
          <div
            className="fade-down group relative mx-auto flex w-full items-start justify-center gap-5 pb-[60px] md:pb-[130px] md:even:flex-row-reverse"
            ref={ref}
            key={index}
          >
            <span className="absolute bottom-[-40px] left-[10.4vw] h-full w-px bg-[#D1D1D1] group-last:hidden md:left-1/2"></span>
            <div className="flex-1 max-md:hidden">
              <div className="w-[34.722vw] min-[1440px]:w-[500px]"></div>
            </div>
            <div className="max-md:flex-[0_0_20vw] md:w-[21.944vw] min-[1440px]:w-[316px]">
              <CircleNumber size="sm">{item.number}</CircleNumber>
            </div>
            <div className="flex-1">
              <div className="group-even:ml-auto md:w-[34.722vw] min-[1440px]:w-[500px]">
                <p className="mb-4 text-center text-[16px] md:text-[24px]">
                  {item.type}
                </p>
                <div className="border border-white">
                  <div className="flex h-[44px] items-center justify-center border-b border-white text-[13px] md:h-[57px] md:text-[16px]">
                    {item.title}
                  </div>
                  <div className="flex divide-x divide-white">
                    <div className="flex min-h-[154px] w-[45%] max-w-[225px] items-center justify-center p-3 text-center text-[14px] md:text-[18px]">
                      {item.left}
                    </div>
                    <div className="flex min-h-[154px] flex-1 items-center justify-center p-3 text-[13px] md:text-[16px]">
                      {item.right}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default WorkFlowArticle
