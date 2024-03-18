"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
export interface ButtonPopupPropsType {
    sm?: boolean,
    navOpen?: boolean; 
  }
const ButtonPopup = ({sm, navOpen}: ButtonPopupPropsType) => {
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        if (!navOpen) {
          setModalOpen(false);
        }
      }, [navOpen]);
  return (
    <>
    <button type="button" onClick={() => setModalOpen(true)}
      className={`fade-up default-gradient flex items-center justify-center rounded-[40px] text-[16px] text-black duration-300 hover:tracking-widest md:text-[18px] ${sm ? 'h-12 px-6' : 'md:h-[64px] md:px-[60px] h-[50px] px-8'}`}
    >
      fliQt NEEDs YOU
    </button>
    <div className={`fixed inset-0 pointer-events-none opacity-0 p-6 flex items-center justify-center z-[90] ${modalOpen ? "pointer-events-auto opacity-100" : ""}`}  data-lenis-prevent>
        <div className="absolute inset-0 backdrop-blur backdrop-filter" onClick={() => setModalOpen(false)}></div>
        <div className="w-full lg:max-w-[862px] mx-auto h-[calc(100vh-160px)] lg:h-[96%] bg-black/90 rounded-xl relative [box-shadow:0px_8px_8px_-4px_rgba(16,_24,_40,_0.04),_0px_20px_24px_-4px_rgba(16,_24,_40,_0.10)] px-3 md:px-4  py-14">
        <div className="flex justify-end pt-3 md:pt-4 absolute top-0 right-5">
            <button type="button" onClick={() => setModalOpen(false)}>
                <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 16.8285L16 28.8285M16 16.8285L28 28.8285" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            </div>
          <div className="h-full relative overflow-auto">
            <div className="pb-3 md:pb-4 px-5 md:text-[16px] text-[14px]">
                <div className="flex justify-center mb-6">
                <Link
                    href="mailto:info@fliqt.io"
                    className="default-gradient flex h-[50px] items-center justify-center rounded-[40px] px-8 text-[16px] text-black duration-300 hover:tracking-widest md:h-[64px] md:px-[60px] md:text-[18px]"
                    >
                    JOIN OUR TEAM
                    </Link>
                </div>
            fliQt was born to offer solutions to the most challenging and urgent problems faced by humanity. <br />
            <br />
            Our passion lies in using technology to solve real-world challenges and enrich people's lives. By leveraging advanced technologies like AI and blockchain, we tackle problems previously considered impossible. We aim not just to develop technology, but to use it to solve concrete problems society faces and make the world a better place.<br />
            <br />
            <br />
            Our mission is to address the fundamental challenges humanity faces, such as environmental protection, economic and financial fairness, and public health.<br />
            <br />
            We push the limits to create groundbreaking solutions that can change the world in these areas. By passionately solving problems, we directly improve people's lives and lay the foundation for a sustainable future.<br />
            <br />
            <br />
            Our approach is innovative and swift.<br />
            <br />
            Once a problem is identified, we quickly shape solutions. Through fast deep learning with AI and iterative trial and error, we rapidly develop effective solutions and immediately assess their impact in the real world. By not fearing failure and learning as we progress, we continuously break new ground.<br />
            <br />
            <br />
            At our core is open innovation, working with creative minds worldwide to solve problems from a broader perspective.<br />
            <br />
            Through this collaboration, we generate more diverse and inclusive solutions, benefiting people globally. We believe technology should have a direct impact on people's lives, hence our solutions are designed to be intuitive, accessible, and available for everyone.<br />
            <br />
            <br />
            fliQt is not just an IT company but a community dedicated to seriously addressing social challenges and offering solutions.<br />
            <br />
            We have a strong sense of mission to create social impact through technology and make the world a better place. Our passion and determination to solve the problems we face are the driving forces behind creating a better future for all humanity. This is just the beginning of our journey. Let's take the steps together to make our vision a reality.<br />
            <br />
            <br />
            Why was fliQt founded?<br />
            <br />
            There are three reasons:<br />
            <br />
            The first is to balance centralization and decentralization. AI significantly increases in accuracy when fed a large database, with exponential performance improvement as the input data interlinks. However, this could lead to data monopolization by large corporations, potentially monopolizing AI use itself. Blockchain can solve this by allowing data to be equally held by anyone, neutralizing AI's centralization with blockchain's decentralization. Though a poetic expression, we thought this was necessary.<br />
            <br />
            The second reason is the need for an international development group. We know that each country has its specialties in development fields. With development bases in 13 countries worldwide, fliQt has no weaknesses.<br />
            <br />
            The third reason is geographical advantage. Blockchain is almost synonymous with cryptocurrency, subject to strict regulations worldwide. Singapore has open regulations for blockchain and cryptocurrencies, making it ideal for business. Blockchain is a part of FinTech, a field where finance and IT merge. Adding AI to this can lead to phenomenal business growth, necessitating the establishment of fliQt in Singapore.<br />
            <br />
            fliQt needs you.
            <div className="flex justify-center mt-6">
                <Link
                    href="mailto:info@fliqt.io"
                    className="default-gradient flex h-[50px] items-center justify-center rounded-[40px] px-8 text-[16px] text-black duration-300 hover:tracking-widest md:h-[64px] md:px-[60px] md:text-[18px]"
                    >
                    JOIN OUR TEAM
                </Link>
            </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default ButtonPopup
