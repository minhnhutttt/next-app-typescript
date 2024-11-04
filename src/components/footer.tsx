"use client";

const Footer = () => {
  return (
    <footer className="bg-black md:pt-[88px] pt-[60px] pb-[23px]">
      <div className="flex justify-center">
        <a href="/" className="">
          <img className="max-md:w-[260px]" src="/assets/images/logo-footer.svg" alt="" />
        </a>
      </div>
      <div className="flex justify-center md:py-11 py-7">
      <a href="https://mercury-vault.com/privacy-and-policy.html" className="block" target="_blank">
        Privacy Policy
        </a>
      </div>
      <p className="md:text-[14px] text-[12px] text-white text-center font-light">
      © 2024 MERCURY VAULT
      </p>
    </footer>
  );
};

export default Footer;
