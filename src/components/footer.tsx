import Link from 'next/link'

interface NavLink {
  link: string
  text: string
  target?: string
}

const links: NavLink[] = [
  {
    link: '/service',
    text: 'SERVICE',
  },
  {
    link: '/workflow',
    text: 'WORKFLOW',
  },
  {
    link: '/about',
    text: 'ABOUT',
  },
  {
    link: '/contact',
    text: 'CONTACT',
  },
]

const Footer = () => {
  return (
    <footer>
      <div className="px-5 pb-24 pt-12 md:pt-24">
        <div className="mx-auto flex w-full max-w-[840px] items-center justify-center gap-10 max-md:flex-col lg:gap-[100px]">
          <Link href="/" className="relative z-10 block">
            <img
              className="w-full max-w-[100px] md:max-w-[130px]"
              src="/assets/images/logo-footer.svg"
              alt="fliQt"
            />
          </Link>
          <nav>
            <ul className="flex gap-6 font-solaris max-md:flex-wrap max-md:justify-center lg:gap-[100px]">
              {links.map(({ link, text, target }, index) => (
                <li key={index}>
                  <a
                    href={link}
                    target={target}
                    className="block text-[18px] duration-300 hover:scale-125 md:text-[21px]"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mb-8 mt-10 flex items-center justify-center md:mb-[90px] md:mt-[30px]">
          <a href="/privacy-policy" className="text-[16px]">
            PRIVACY POLICY
          </a>
        </div>
        <p className="text-center text-[14px]">Copyright © 2024 fliQt.</p>
      </div>
    </footer>
  )
}

export default Footer
