import { locales } from '../lib/i18n';
import { Locale } from '../dictionaries';
import { getDictionary } from '../dictionaries';
import type { Metadata } from "next";
import "./globals.css";
import Menu from "../components/menu";
import Header from "../components/header";
import Footer from "../components/footer";
import Provider from "./provider";

export async function generateStaticParams() {
  return locales.map(lang => ({ lang }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}

export default async function RootLayout({
  children,
  params: { lang }
}: RootLayoutProps) {
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} suppressHydrationWarning>
      {/* <head>
        <title>{dict.common.title}</title>
        <meta name="description" content={dict.common.description} />
      </head> */}
      {/* <body>
        <header className='bg-black'>
          <nav>
            <ul>
              <li><a href={`/${lang}`}>{dict.navigation.home}</a></li>
              <li><a href={`/${lang}/about`}>{dict.navigation.about}</a></li>
              <li><a href={`/${lang}/products`}>{dict.navigation.products}</a></li>
              <li><a href={`/${lang}/contact`}>{dict.navigation.contact}</a></li>
            </ul>
          </nav>
        </header>
        {children}
        <footer>
          <p>{dict.footer.copyright}</p>
          <ul>
            <li><a href={`/${lang}/terms`}>{dict.footer.terms}</a></li>
            <li><a href={`/${lang}/privacy`}>{dict.footer.privacy}</a></li>
          </ul>
        </footer>
      </body> */}
      <body className="font-hiragino bg-[#F2F0E6] dark:bg-black relative">
        <Provider>
            <div className="flex">
              <div className="flex">
                <div className="w-10 md:w-11 flex items-center pl-2 md:pl-4 relative max-md:hidden">
                  <figure className="max-md:hidden dark:hidden">
                    <img src="/assets/images/ardorex-blog-vertical.png" alt="" />
                  </figure>
                  <figure className="max-md:hidden hidden dark:block">
                    <img src="/assets/images/ardorex-blog-vertical-dark.png" alt="" />
                  </figure>
                  <span className="w-[2px] md:hidden absolute right-0 h-full bg-[linear-gradient(40deg,_rgba(200,200,141,1)_0%,_rgba(175,34,227,1)_65%,_rgba(248,183,76,1)_100%)]"></span>
                  <span className="fixed max-md:hidden w-px top-0 left-11 h-full bottom-0 bg-[#989898] dark:bg-white"></span>
                </div>
              </div>
              <span className="w-[2px] md:hidden absolute left-0 h-full bg-[linear-gradient(40deg,_rgba(200,200,141,1)_0%,_rgba(175,34,227,1)_65%,_rgba(248,183,76,1)_100%)]"></span>
              <div className="flex-1 flex max-md:flex-col">
                <div className="flex max-md:w-full top-0 left-0">
                  <Menu />
                </div>
                <Header />
                <div className="flex w-full">
                <span className="w-[5px] max-md:hidden fixed top-0 left-[295px] h-full bottom-0 bg-[linear-gradient(40deg,_rgba(200,200,141,1)_0%,_rgba(175,34,227,1)_65%,_rgba(248,183,76,1)_100%)]"></span>
                <div className="flex-1 md:mt-12">
                  {children}
                </div>
                </div>
              </div>
            </div>
            <Footer />
          </Provider>
        </body>
    </html>
  );
}