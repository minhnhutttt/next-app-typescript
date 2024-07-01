import PageTitle from "@/components/pageTitle";

const DataSitemap = [
    {
        href: '/',
        text: 'TOP'
    },
    {
        href: '/about',
        text: 'About us'
    },
    {
        href: '/solutions',
        text: 'Solutions'
    },
    {
        href: '/research',
        text: 'Research'
    },
    {
        href: '/agency',
        text: 'Agency'
    },
    {
        href: '/digital-marketing',
        text: 'Digital marketing'
    },
    {
        href: '/research-shield-ai',
        text: 'Research Shield+AI'
    },
    {
        href: '/sitemap',
        text: 'Sitemap'
    },
    {
        href: '/privacy-policy',
        text: 'Privacy Policy'
    },
]

export default function Sitemap() {
  return (
    <main>
      <PageTitle>Sitemap</PageTitle>
      <section className="mb-[256px] max-md:mb-[82px]">
        <div className="container">
          <h2 className="font-anton text-[calc(18px_+_8vw)] mb-[24px] border-b border-solid border-b-[rgba(172,172,172,0.3)]">
            Pages
          </h2>
          <div className="mb-[128px] flex flex-col">
            {DataSitemap.map((item, index)=>(
                <a
                className="text-[calc(18px_+_2vw)] py-[24px] border-b border-solid border-b-[rgba(172,172,172,0.3)] hover:py-[32px] hover:text-white ease-in-out relative before:content-[''] before:bg-black before:absolute before:top-0 before:right-0 before:left-0 before:bottom-0 before:scale-y-0 before:transition-all before:duration-[700ms] hover:before:scale-y-100 before:z-[-1]"
                href={item.href}
                key={index}
                >
                {item.text}
                </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
