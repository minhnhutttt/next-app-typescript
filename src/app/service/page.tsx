import PageContainer from "../components/common/pageContainer";
import ServiceArticle from "../components/pages/service/serviceArticle";
import ServiceHead from "../components/pages/service/serviceHead";
import ServiceSolutions from "../components/pages/service/serviceSolutions";
import ServiceTitle from "../components/pages/service/serviceTitle";

export default function Service() {
  return (
    <main>
      <PageContainer>
          <ServiceHead />
          <div className="space-y-12 px-5">
          <ServiceArticle number="I" type="INNOVATION" title="BLOCKCHAIN DEVELOPMENT" href="/">
          Dive into the world of blockchain with our comprehensive solutions. We specialize in developing robust platforms, crafting smart contracts, and creating decentralized applications (DApps) to transform your business operations.
          </ServiceArticle>
          <ServiceArticle number="II" type="INTELLIGENCE" title="AI DEVELOPMENT" href="/">
          Elevate your online presence with our website development services. From captivating front-end designs to powerful back-end functionalities, we ensure your website stands out and performs impeccably.
          </ServiceArticle>
          </div>
          <ServiceTitle />
          <div className="space-y-12 px-5">
          <ServiceArticle number="III" type="INTEGRATION" title="APPLICATION DEVELOPMENT" href="/">
          Bring your app ideas to life with our end-to-end application development services. We excel in creating intuitive mobile apps and seamlessly integrating systems to provide a smooth user experience across various platforms.
          </ServiceArticle>
          <ServiceArticle number="IV" type="INTELLIGENCE" title="AI DEVELOPMENT" href="/">
          Step into the future with our AI development services. Harness the power of machine learning, natural language processing, and image & voice recognition to unlock new insights and automate complex processes.
          </ServiceArticle>
          </div>
          <ServiceSolutions />
      </PageContainer>
    </main>
  );
}
