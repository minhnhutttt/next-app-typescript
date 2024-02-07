import PageContainer from "../components/common/pageContainer";
import AboutContent from "../components/pages/about/aboutContent";
import AboutHead from "../components/pages/about/aboutHead";
import ServiceHead from "../components/pages/service/serviceHead";

export default function About() {
  return (
    <main>
      <div className="bg-[url('/images/bg-about.png')] bg-cover pt-[120px] md:pt-[12vw] pb-20 min-[1440px]:pt-[170px] bg-no-repeat bg-top overflow-hidden">
          <AboutHead />
          <AboutContent />
      </div>
    </main>
  );
}
