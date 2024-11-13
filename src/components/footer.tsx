
const Footer = () => {
    return (
      <footer className="relative px-5 md:px-10 bg-[url('/assets/images/bg-footer.png')] bg-cover border-t border-white pb-6 ">
        <div className="xmasTree">
          <div className="flex items-center justify-between w-full max-md:flex-col max-w-[556px] mx-auto md:pt-20 pt-12 md:pb-12 pb-8">
            <a href="/" className="flex"><img className="max-md:w-[200px]" src="/assets/images/logo.svg" alt="" /></a>
            <div className="flex items-end tracking-widest max-md:mt-10">
              <ul className="text-[16px] font-medium text-white flex flex-col gap-2.5">
                <li><a href="/#project-vision" className="block ">Project Vision</a></li>
                <li><a href="/#children-in-need" className="block ">Children in Need</a></li>
                <li><a href="/#solution" className="block ">SANTA Solution</a></li>
                <li><a href="/#tokenomics" className="block ">Tokenomics</a></li>
                <li><a href="/#dao" className="block ">DAO</a></li>
              </ul>
            </div>
          </div>
          <p className="text-center text-[14px] text-white font-medium">Copyright © SANTA</p>
          </div>
      </footer>
    );
  };
  
  export default Footer;
  