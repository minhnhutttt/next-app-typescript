import Map from "../components/common/map";
import PageContainer from "../components/common/pageContainer";
import ContactContainer from "../components/pages/contact/contactContainer";
import ContactHead from "../components/pages/contact/contactHead";
import ContactTitle from "../components/pages/contact/contactTitle";

export default function Service() {
  return (
    <main>
      <PageContainer>
          <ContactHead />
          <ContactContainer />
          <ContactTitle />
          <Map />
      </PageContainer>
    </main>
  );
}
