// app/[lang]/page.tsx
import { getDictionary, Locale } from '../dictionaries';

interface HomePageProps {
  params: {
    lang: Locale;
  };
}

export default async function Home({ params: { lang } }: HomePageProps) {
  const dict = await getDictionary(lang);
  
  return (
    <main>
      <h1>{dict.homepage.title}</h1>
      <p>{dict.homepage.description}</p>
      <section>
        <h2>{dict.homepage.features.title}</h2>
        <div className="features-grid">
          <div>
            <h3>{dict.homepage.features.feature1.title}</h3>
            <p>{dict.homepage.features.feature1.description}</p>
          </div>
          <div>
            <h3>{dict.homepage.features.feature2.title}</h3>
            <p>{dict.homepage.features.feature2.description}</p>
          </div>
          <div>
            <h3>{dict.homepage.features.feature3.title}</h3>
            <p>{dict.homepage.features.feature3.description}</p>
          </div>
        </div>
      </section>
    </main>
  );
}