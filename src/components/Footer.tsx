"use client";

const Footer = () => {
  return (
    <footer className="mt-12 bg-gray-100">
    <div className="px-2.5 py-6">
        <div><a className="mx-auto mb-6 block max-w-[200px]" href="/"><img alt="" loading="lazy" width="200"
                    height="170" decoding="async" data-nimg="1" src="/assets/images/logo-vertical.svg"/></a>
            <div className="mb-4">
                <div className="flex items-center justify-center gap-4">
                    <div className="flex gap-1.5"><img alt="" loading="lazy" width="20" height="21" decoding="async"
                            data-nimg="1" src="/assets/images/icon/lang.svg" />
                        <div className="text-[17px]">Region:</div>
                    </div>
                    <div className="space-x-2 text-[16px]"><button
                            className="cursor-pointer transition-colors hover:opacity-80 ">日本語</button><button
                            className="cursor-pointer transition-colors hover:opacity-80 pointer-events-none font-medium"
                            >English</button></div>
                </div>
            </div>
            <div className="mb-2">
                <div
                    className="justifi-center flex flex-wrap justify-center gap-3 text-[14px] font-bold tracking-wider">
                    <a className="transition-opacity hover:opacity-80" href="/company">company</a><a
                        className="transition-opacity hover:opacity-80" href="/term">terms of service</a><a
                        className="transition-opacity hover:opacity-80" href="/privacy-policy">privacy policy</a><a
                        className="transition-opacity hover:opacity-80" href="mailto:info@open-fave.com">contact</a>
                </div>
            </div>
            <div className="mb-2 text-center text-[12px]">Copyright © OPEN FAVE</div>
        </div>
    </div>
</footer>
  );
};

export default Footer;
