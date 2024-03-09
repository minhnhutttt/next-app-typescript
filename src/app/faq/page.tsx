import TextBlock from "../components/common/textBlock";
import Container from "../components/container";
import PageHead from "../components/pageHead";
export default function FAQ() {
  return (
    <main className="bg-top bg-cover relative">
        <PageHead />
      <Container 
        title="ARDOREX FAQs"
        >
          <TextBlock title="What services does ARDOREX provide?">
          ARDOREX offers a wide range of business support services with a core focus on ICT. While our main business revolves around ICT services, we extend our offerings to accommodate various business needs of our clients, providing comprehensive business solutions to address diverse challenges they face.
          </TextBlock>
          <TextBlock title="Can you tell me about the fees for your services?">
          The fees for each service vary depending on the nature and complexity of the service. For detailed information on the fees or pricing structure for our ICT services and other support services, please contact us for further guidance.
          </TextBlock>
          <TextBlock title="What about proposals that require advanced customization?">
          Proposals requiring specific solutions tailored to client demands or detailed strategic planning necessitate considerable effort and time. Consequently, costs may incur for such advanced customization proposals.
          </TextBlock>
          <TextBlock title="What is the pricing structure for including consulting services?">
          Proposals that include specialized analysis or consulting services will incur fees for these services. Our consulting services are based on expertise that delivers tangible value to our clients.
          </TextBlock>
          <TextBlock title="Are there any impacts of industry or regional customs?">
          In certain industries or regions, it is common practice to charge for proposal creation. ARDOREX accommodates these customs while ensuring clear agreements with clients, providing our services based on mutual understanding. <br />
          <br />
            These FAQs aim to address general inquiries about the range of services ARDOREX offers, our fee structure, and our proposal process. For more detailed information, please do not hesitate to contact us.
          </TextBlock>
      </Container>
    </main>
  );
}
