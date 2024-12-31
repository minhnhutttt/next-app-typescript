"use client";

const Footer = () => {
  return (
    <footer className="bg-[#21012D] md:pt-[144px] pt-20 pb-6">
      <div className="flex justify-center md:pb-[100px] pb-16">
        <a href="/" className="">
          <img className="max-md:w-[260px]" src="/assets/images/logo-footer.svg" alt="" />
        </a>
      </div>
      <p className="md:text-[15px] text-[13px] text-white text-center font-light">
      copyright © 2025 open fave
      </p>
    </footer>
  );
};

export default Footer;
