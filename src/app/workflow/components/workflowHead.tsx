'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'
import WorkflowTextSVG from './workflowTextSVG'

const WorkflowHead = () => {
  const ref = useScrollAnimations()

  return (
    <div className="px-5 pb-20" ref={ref}>
      <div className="mt-6 text-center md:mt-10">
        <WorkflowTextSVG />
      </div>
      <p className="fade-down mx-auto mt-6 w-full max-w-[603px] text-[16px] max-md:px-5 md:mt-8 md:text-[18px]">
        FROM CONCEPT TO COMPLETION, WE BRING YOUR PROJECTS TO LIFE. OUR EXPERT
        TEAMS IN MAJOR TECH HUBS WORLDWIDE ENSURE YOUR DEVELOPMENT NEEDS ARE MET
        WITH PRECISION AND AGILITY, ANYTIME, ANYWHERE.
      </p>
    </div>
  )
}

export default WorkflowHead
