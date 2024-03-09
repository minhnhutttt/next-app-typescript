import TextBlock from "../components/common/textBlock";
import Container from "../components/container";
import PageHead from "../components/pageHead";
export default function Flextegrity() {
  return (
    <main className="bg-top bg-cover relative">
        <PageHead />
      <Container 
        title="Flextegrity"
        >
          <TextBlock title="The Fusion of Flexibility and Integrity">
          Flextegrity symbolizes our commitment to adapt to each client's specific needs while upholding ethical values, offering optimal solutions in complex business environments.
          </TextBlock>
          <TextBlock title="Building Trust">
          Trust is paramount to us. Our sincere approach lays the foundation for long-lasting relationships.
          </TextBlock>
          <TextBlock title="Adapting to Change">
          The business world is ever-changing. Our team's flexibility allows us to guide your business to the next level efficiently.
          </TextBlock>
      </Container>
    </main>
  );
}
