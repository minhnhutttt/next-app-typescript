const Contact = () => {
  return (
    <div className="px-5 pb-30 md:pb-50">
      <h5 className="contact-up text-center text-[19.44vw] font-semibold min-[1440px]:text-[280px]">
        CONTACT
      </h5>
      <div className="fade-up md:px-10">
        <div className="mx-auto block w-full max-w-[1060px] rounded-[16px] md:rounded-[32px]">
          <div className="relative -mt-[11.11vw] overflow-hidden rounded-[12px] min-[1440px]:-mt-40 md:rounded-[30px]">
            <img src="/assets/images/contact-bg.png" alt="" />
            <div className="absolute inset-0 flex flex-col items-center gap-4 pt-[10vw] min-[1440px]:pt-36 md:gap-6">
              <h6 className="text-center text-[5vw] font-semibold min-[1440px]:text-[40px] md:text-[2.78vw]">
                UNITED STATES HEADQUARTERS <br />
                AIS Holdings Group Inc.
              </h6>
              <a
                href="mailto:info@ais-holdings-group.ai"
                className="block duration-300 hover:opacity-70"
              >
                <img
                  className="max-[1440px]:w-[12.85vw] max-md:w-[15vw]"
                  src="/assets/images/ic-arrow.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
