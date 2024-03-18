import PageContainer from '@/components/pageContainer'
import Button from '@/components/button'
import Map from '@/components/map'
import CTA from '@/components/cta'

const NotFoundPage = () => {
  return (
    <PageContainer>
      <div className="mx-auto flex h-[40vh] max-w-[1200px] flex-col items-center justify-center">
        <h1 className="mb-6 text-center font-solaris text-[32px] lg:text-[64px]">
          PAGE NOT FOUND.
        </h1>
        <div className="mr-4 mt-6 flex justify-end md:mt-12">
          <Button href="/">TOP PAGE</Button>
        </div>
      </div>
      <Map />
      <CTA />
    </PageContainer>
  )
}

export default NotFoundPage
