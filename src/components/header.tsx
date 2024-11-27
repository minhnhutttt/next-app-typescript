'use client'

import { useCallback, useState } from 'react'

import Button from './button'
import ModalForm from './modalForm'
import { useModal } from '@/context/ModalContext'

interface NavLink {
  link: string
  text: string
  target?: string
}

const links: NavLink[] = [
  {
    link: '/#service',
    text: 'メタでペット供養とは？',
  },
  {
    link: '/#faq',
    text: 'FAQ',
  },
]

const Header = () => {
  const [NavOpen, setNavOpen] = useState(false)

  const close = useCallback(() => {
    setNavOpen(false)
  }, [])

  const { openModal } = useModal()
  return (
    <header className="absolute inset-x-0 top-0 z-40 flex items-center px-3">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center justify-between pr-4 pt-4 md:pl-4 md:pr-10 md:pt-8 lg:pl-14">
          <a href="/" className="relative block duration-150 hover:opacity-75">
            <img
              className="max-[1300px]:w-[20.923vw] max-xl:w-[260px] max-md:w-[200px]"
              src="/assets/images/logo.png"
              alt=""
            />
          </a>
        </div>
        <div
          className={`z-10 flex items-center justify-center px-5 max-xl:fixed max-xl:left-0 max-xl:top-0 max-xl:h-screen max-xl:w-full max-xl:flex-col max-xl:overflow-y-scroll max-xl:bg-[#EB6642]/[0.9] ${
            NavOpen ? '' : 'max-xl:invisible max-xl:opacity-0'
          }`}
        >
          <ul className="flex gap-8 max-xl:mb-10 max-xl:flex-col md:mr-[60px] xl:items-center xl:gap-[60px]">
            {links.map(({ link, text, target }, index) => (
              <li key={index}>
                <a
                  href={link}
                  className="inline-block text-[20px] font-bold text-white duration-150 [text-shadow:1px_1px_0px_rgba(0,_0,_0,_0.50)] hover:opacity-75 md:text-[24px] xl:text-[18px]"
                  target={target}
                  onClick={close}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
          <Button
            onclick={openModal}
            rect="md:text-[18px] text-[16px] w-[230px] h-[66px] bg-[#EB6642] rounded-[60px] border-2 border-white"
          >
            お問い合わせ
          </Button>
        </div>
        <button
          className={`group relative z-30 mr-6 h-6  w-8 max-lg:mt-5 xl:hidden ${
            NavOpen ? 'active' : ''
          }`}
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <span className="absolute left-0 top-0 block h-0.5 w-full -translate-y-1/2 bg-white transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:rotate-45"></span>
          <span className="absolute left-0 top-2.5 block h-0.5 w-full -translate-y-1/2 bg-white transition-transform duration-500 ease-in-out group-[.active]:opacity-0"></span>
          <span className="absolute bottom-0 left-0 block h-0.5 w-full -translate-y-1/2 bg-white transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:-rotate-45"></span>
        </button>
      </div>
    </header>
  )
}

export default Header
