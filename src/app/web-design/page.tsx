import PageTitle from "@/components/pageTitle";
import Banner from "@/components/banner";
import Provide from "@/components/provide";
import Faq from "@/components/faq";
import Contact from "@/components/contact";

const DataProvide = [
  {
    id: '1',
    title: 'MOCKUP',
    content: (<>We conduct interviews and create design mockups according to the client&apos;s business type and target users.</>)
  },
  {
    id: '2',
    title: 'CONCEPT',
    content: (<>We determine the design concept, including typography and colors, which will form the basis of the design.</>)
  },
  {
    id: '3',
    title: 'USER FLOWS',
    content: (<>We design precise user flows according to the content of the project.</>)
  },
  {
    id: '4',
    title: 'IMPROVE',
    content: (<>After project guidance, we make improvements according to changes in the situation.</>)
  },
]

const DataFaq = [
  {
    id: '1',
    title: 'How much does it cost?',
    content: (<>First tell us what kind of design you need. <br />We respect our clients.</>)
  },
  {
    id: '2',
    title: 'Can you accept requests from out of the country?',
    content: (<>Many of our clients are located overseas.</>)
  },
  {
    id: '3',
    title: 'Can you design an app?',
    content: (<>We can both develop and design apps, which is beneficial for our clients.</>)
  },
  {
    id: '4',
    title: 'How do I make a request?',
    content: (<>First, please contact us by email. <br />info@1stcon.co</>)
  },
]

export default function WebDesign() {
  return (
    <main>
        <PageTitle>Web Design</PageTitle>
        <Banner image="/assets/images/design.jpg">
            Web design is the face of the company or brand, and it performs to
            an overwhelmingly large number of unspecified people in a short time
            and at a low cost. That is why it is necessary to have an optimal
            design that is in line with the business type and target audience.
            We are able to exceed our clients&apos; expectations based on the
            knowledge and experience we have acquired over the years.
        </Banner>
        <Provide title="We provide high quality WEB design." items={DataProvide} />
        <Faq items={DataFaq} />
        <Contact title="Do you have an idea that you would like to give shape to?">Do you need the best website design? Or do you need system development? Or a web strategy? We aim to provide services that meet the goals of our clients.</Contact>
    </main>
  );
}
