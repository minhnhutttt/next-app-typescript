import TextBlock from "../components/common/textBlock";
import Container from "../components/container";
import PageHead from "../components/pageHead";
export default function GetConnection() {
  return (
    <main className="bg-top bg-cover relative">
        <PageHead />
      <Container 
        title="Get Connection"
        >
          <TextBlock title="Seeking Connection">
          At ARDOREX, we value deep connections with our clients. These relationships form the foundation of trust and mutual understanding, paving the way to success.
          </TextBlock>
          <TextBlock title="The Importance of Communication">
          Effective communication is key to success. From initial inquiries to project implementation, we maintain close communication to provide optimal solutions tailored to your needs.
          </TextBlock>
          <TextBlock title="Growing Together">
          ARDOREX aims to grow alongside our clients. Our connection will bring new value to your business, building shared success.
          </TextBlock>
      </Container>
    </main>
  );
}
