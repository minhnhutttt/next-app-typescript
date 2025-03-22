import { locales } from '../lib/i18n';
import { Locale } from '../dictionaries';
import { getDictionary } from '../dictionaries';

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
    <html lang={lang}>
      <head>
        <title>{dict.common.title}</title>
        <meta name="description" content={dict.common.description} />
      </head>
      <body>
        <header>
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
      </body>
    </html>
  );
}