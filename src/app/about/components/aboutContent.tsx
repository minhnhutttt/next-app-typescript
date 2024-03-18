'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'

const AboutContent = () => {
  const ref = useScrollAnimations()

  return (
    <div className="px-5" ref={ref}>
      <div className="mx-auto w-full max-w-[1250px] pt-5" id="story">
        <div className="md:space-y-[50px]">
          <div className="fade-down flex max-md:flex-col max-md:items-start lg:pr-[125px]">
            <figure className="relative flex-[0_0_200px] md:flex-[0_0_250px]">
              <img
                src="/assets/images/image-about-01.jpg"
                className="rounded-t-[40px] rounded-bl-[40px]"
                alt=""
              />
            </figure>
            <div className="flex items-center justify-center rounded-[40px] bg-black/40 px-8 py-8 text-[16px] leading-snug md:ml-[-125px] md:mt-[120px] md:px-[100px] md:py-[60px] md:pl-[157px] md:text-[18px] lg:px-[157px]">
              In a world where digital innovation is the heartbeat of progress,
              fliQt was founded to lead the charge. Our story is one of
              pioneering technology across multiple domains: blockchain, web,
              app, and AI. We began with the vision to not just participate in
              the digital era but to define it, shaping solutions that resonate
              with efficiency, creativity, and integrity. <br />
              <br />
              At fliQt, we&apos;ve always been more than a development hub. We
              are visionaries, thinkers, and creators. Our team, an ensemble of
              experts in their respective fields, shares a common passion for
              transforming complex challenges into elegant, user-friendly
              solutions. We believe in the power of technology to connect,
              empower, and drive businesses and individuals forward.
            </div>
          </div>
          <div className="fade-down flex flex-row-reverse max-md:-mt-5 max-md:flex-col max-md:items-end lg:pl-[125px]">
            <figure className="relative flex-[0_0_200px] md:flex-[0_0_250px]">
              <img
                src="/assets/images/image-about-02.jpg"
                className="rounded-t-[40px] rounded-br-[40px]"
                alt=""
              />
            </figure>
            <div className="flex items-center justify-center rounded-[40px] bg-black/40 px-8 py-8 text-[16px] leading-snug md:mr-[-125px] md:mt-[120px] md:px-[100px] md:py-[60px] md:pr-[157px] md:text-[18px] lg:px-[157px]">
              Our commitment has always been to deliver excellence. To us, that
              means developing solutions that are not only robust and efficient
              but also intuitive and adaptable, meeting the ever-evolving needs
              of our clients. We understand that in the tapestry of the digital
              world, each thread – each client&apos;s story – is unique, and we
              pride ourselves on weaving solutions that add real, measurable
              value. <br />
              <br />
              As we look to the future, our drive for innovation remains
              unwavering. fliQt is more than a company; it&apos;s a movement. We
              are dedicated to building a future where technology bridges gaps,
              fosters collaboration, and redefines the boundaries of what&apos;s
              possible. Together, we are setting the stage for a future where
              digital solutions are synonymous with excellence and trust.
              <br />
              <br />
              With fliQt, we continue to explore the possibilities technology
              brings. Starting today, let&apos;s build a future together where
              the challenges your business faces are met with innovative
              solutions.
            </div>
          </div>
        </div>
        <div className="fade-down mt-20 flex items-center justify-center max-md:flex-col max-md:gap-6 md:mt-[150px] md:items-end">
          <figure>
            <img
              src="/assets/images/image-about-03.jpg"
              className="rounded-[20px]"
              alt=""
            />
          </figure>
          <p className="w-full max-w-[747px] text-[20px] leading-[1.8] md:mb-[-100px] md:ml-[-144px] md:text-[25px] xl:text-[32px]">
            AS WE ADVANCE IN THE DIGITAL ERA, OUR MISSION ENDURES: TO ELEVATE
            YOUR BUSINESS WITH COMPREHENSIVE SOLUTIONS IN BLOCKCHAIN, WEB, APP,
            AND AI, ENSURING OPERATIONAL EXCELLENCE, SECURITY, AND SEAMLESS
            INTEGRATION.
          </p>
        </div>
        <div className="fade-down mx-auto mt-[100px] flex w-full max-w-[1100px] items-center gap-6 max-md:flex-col-reverse md:mt-[200px] md:gap-[40px] lg:gap-[128px]">
          <div>
            <p className="mb-3 text-[24px] md:mb-5 md:text-[40px]">
              COMPANY OVERVIEW
            </p>
            <p className="text-[18px] md:mb-4 md:text-[32px]">FLIQT Pte Ltd</p>
            <p className="text-[16px] leading-loose md:text-[20px]">
              346C King George&apos;s Avenue, <br />
              King George&apos;s Building, <br />
              SINGAPORE 208577
            </p>
          </div>
          <div>
            <img
              className="max-md:max-w-[60vw]"
              src="/assets/images/image-about-04.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
