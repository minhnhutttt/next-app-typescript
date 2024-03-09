import TextBlock from "../components/common/textBlock";
import Container from "../components/container";
import PageHead from "../components/pageHead";
export default function Globality() {
  return (
    <main className="bg-top bg-cover relative">
        <PageHead />
      <Container 
        title="Globality"
        >
          <TextBlock title="The Value of Global and Diversity">
          Globality emphasizes our action based on a deep understanding of diverse cultures and markets worldwide, leveraging our global perspective and diversity to provide innovative solutions.
          </TextBlock>
          <TextBlock title="Cross-border Collaboration">
          Through international collaboration, we offer solutions to global challenges, representing a significant value to our clients and our strength.
          </TextBlock>
          <TextBlock title="Innovation Born from Diversity">
          Different perspectives and experiences bring new possibilities to business. With Globality, we utilize this rich diversity to deliver innovative solutions to your business.
          </TextBlock>
      </Container>
    </main>
  );
}
