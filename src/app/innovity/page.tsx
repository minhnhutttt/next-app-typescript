import TextBlock from "../components/common/textBlock";
import Container from "../components/container";
import PageHead from "../components/pageHead";
export default function Innovity() {
  return (
    <main className="bg-top bg-cover relative">
        <PageHead />
      <Container 
        title="Innovity"
        >
          <TextBlock title="Innovation and Consistency">
          Innovity represents our pursuit of the latest technologies and ideas, leading industry trends while maintaining consistent quality and approach, ensuring long-term trust and stable results.
          </TextBlock>
          <TextBlock title="Continual Evolution">
          We continuously evolve to meet the changing business environment, providing services that consistently exceed our clients' expectations.
          </TextBlock>
          <TextBlock title="Assurance of Quality">
          Even amidst change, we uphold the quality of our services, valuing a consistent approach to achieve sustainable outcomes and long-term partnerships.
          </TextBlock>
      </Container>
    </main>
  );
}
