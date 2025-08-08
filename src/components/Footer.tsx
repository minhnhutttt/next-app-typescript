
const Footer = () => {
  return (
    <>
      <svg style={{ display: 'none' }}>
        <filter id="lg-dist" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.008 0.008" numOctaves="2" seed="92" result="noise" />
          <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
          <feDisplacementMap in="SourceGraphic" in2="blurred" scale="70" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <footer className="px-5">
        <div className="w-full max-w-[1260px] mx-auto">
          <div className="h-0.5 bg-[linear-gradient(_to_left,_#343045_0%,_#C0B7E8_34.8958%,_#8176AF_68.75%,_#343045_100%_)]"></div>
          <div className="flex justify-center items-center md:py-[147px] py-20">
            <a href="/">
              <img className="max-md:w-[280px]" src="/assets/images/logo.svg" alt="Storage Coin" />
            </a>
          </div>
        </div>
        <p className="text-center md:text-[16px] text-[13px] p-5">Copyright © Storage Coin (STRG)</p>
      </footer>
    </>
  );
};

export default Footer;
