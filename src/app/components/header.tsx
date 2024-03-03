export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 px-5 md:px-[60px]">
      <div className="mx-auto max-md:py-6 w-full flex md:items-center justify-start md:h-[106px] md:gap-10 gap-5">
        <a
          href="/"
          className="duration-150 hover:opacity-75 max-md:flex-[0_0_130px]"
        >
          <img
            className="md:w-[164px] w-[140px]"
            src="/images/logo.png"
            alt="RWA Tag"
          />
        </a>
        <div className="flex items-center justify-end gap-3 md:gap-5 max-md:flex-wrap">
          <a
            href="https://apps.apple.com/jp/app/diver-tag/id6449664504"
            target="_blank"
            rel="noopener noreferrer"
            className="duration-150 hover:opacity-75"
          >
            <img
              className="max-md:w-[140px]"
              src="/images/btn-appstore.png"
              alt="App Store"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.world.scan.project.tag&hl=ja&gl=US"
            target="_blank"
            rel="noopener noreferrer"
            className="duration-150 hover:opacity-75"
          >
            <img
              className="max-md:w-[140px]"
              src="/images/btn-google-play.png"
              alt="Google Play"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
