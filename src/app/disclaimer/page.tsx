import TextBlock from "../components/common/textBlock";
import Container from "../components/container";
import PageHead from "../components/pageHead";
export default function Disclaimer() {
  return (
    <main className="bg-top bg-cover relative">
        <PageHead />
      <Container 
        title="Service Terms & Disclaimer"
        >
          <TextBlock title="1. Scope of Service Provision">
          ARDOREX will provide ICT services solely within the scope explicitly agreed upon between the client and us. We bear responsibility only for the delivery of services outlined in the contract document, and not for any other outcomes.
          </TextBlock>
          <TextBlock title="2.  Third-Party Services">
          Our services may include third-party products or services. ARDOREX does not guarantee the quality of these third-party services and bears no responsibility for issues arising from them.
          </TextBlock>
          <TextBlock title="3.  Accuracy of Information">
          We do not guarantee the accuracy or completeness of the information provided. ARDOREX shall not be liable for any damages arising from the use of information provided by us.
          </TextBlock>
          <TextBlock title="4.  Interruption and Termination of Services">
          We reserve the right to interrupt or terminate our services without notice. ARDOREX shall not be liable for any damages resulting from such interruption or termination.
          </TextBlock>
          <TextBlock title="5.  Copyright">
          All contents included in the services and related documents are the property of ARDOREX or our licensors. Unauthorized use, reproduction, or modification is strictly prohibited.
          </TextBlock>
          <TextBlock title="6.  Choice of Payment Method">
          We accept payments via PayPal or Bitcoin, understanding that each payment method comes with its inherent risks. By choosing a specific method, clients agree to accept these risks under their own responsibility.
          </TextBlock>
          <TextBlock title="7.  Cross-Border Transactions">
          Clients acknowledge and accept the risks associated with cross-border transactions, including exchange rate fluctuations and differences in tax laws.
          </TextBlock>
          <TextBlock title="8.  Venturing into New Industries">
          Clients understand and accept the risks associated with ARDOREX&apos;s venture into new industries through innovative technologies and services.
          </TextBlock>
          <TextBlock title="9.  Legal Jurisdiction">
          This disclaimer shall be interpreted in accordance with the laws of Singapore. In the event of a dispute, the courts of Singapore shall have exclusive jurisdiction.
          </TextBlock>
          <TextBlock title="">
          Clients are required to carefully read and agree to this disclaimer before using our services. This document aims to clarify the risks and responsibilities associated with the use of ARDOREX services, establishing a trust-based relationship between the client and us..
          </TextBlock>
      </Container>
    </main>
  );
}
