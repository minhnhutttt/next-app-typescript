"use client";

const Download = () => {
  return (
    <section id="download" className="relative px-5 md:py-[100px] py-[60px]">
        <div className="w-full md:max-w-[912px] max-w-[440px] mx-auto rounded-[20px] flex bg-[#2157E3] pt-9 pb-6 px-[40px] gap-14 max-md:flex-col-reverse">
            <div data-scroll className="ani-fade-up">
                <figure className="animate-[anim-bounce_1.2s_infinite_ease-in-out]">
                    <img src="/assets/images/img-download-diver.png" alt="" />
                </figure>
                <div className="mt-5">
                    <div className="flex justify-center max-md:flex-col items-center gap-3">
                        <a href="https://apps.apple.com/jp/app/diver-wallet/id6444421722" target="_blank" rel="noopener noreferrer" className="block duration-150 hover:opacity-75">
                        <img src="/assets/images/btn-appstore.png" alt="" /></a>
                        <a href="https://play.google.com/store/apps/details?id=com.hyerdesign.diver.wallet&hl=ln" target="_blank" rel="noopener noreferrer" className="block duration-150 hover:opacity-75">
                        <img src="/assets/images/btn-google.png" alt="" /></a>
                    </div>
                    <div className="flex justify-center">
                        <img src="/assets/images/img-download-pc.png" alt="" />
                    </div>
                    <div className="flex justify-center">
                    <a href="https://chromewebstore.google.com/detail/diver-wallet/pdlocjdlejekdbpghdcmedeacpkfiiof?hl=ja" target="_blank" rel="noopener noreferrer" className="block duration-150 hover:opacity-75">
                    <img src="/assets/images/btn-web.png" alt="" /></a>
                    </div>
                </div>
            </div>
            <div data-scroll className="ani-fade-up">
                <img src="/assets/images/img-download.png" alt="" />
            </div>
        </div>
    </section>
  );
};

export default Download;
