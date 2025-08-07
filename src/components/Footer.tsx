
const Footer = () => {
    return (
      <>
      
          <svg style={{display: 'none'}}>
            <filter id="lg-dist" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.008 0.008" numOctaves="2" seed="92" result="noise" />
              <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
              <feDisplacementMap in="SourceGraphic" in2="blurred" scale="70" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </svg>
      <footer className="md:mt-[12rem] max-md:mb-[12rem]">
            <p className="text-center p-12 tracking-widest max-md:p-[2rem]">&</p>
        </footer>
        </>
    );
  };
  
  export default Footer;
  