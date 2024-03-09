import TextBlock from "../components/common/textBlock";
import Container from "../components/container";
import PageHead from "../components/pageHead";
export default function PaymentMethod() {
  return (
    <main className="bg-top bg-cover relative">
        <PageHead />
      <Container 
        title="Payment method"
        >
          <TextBlock title="1. Scope of Service Provision">
          ARDOREX provides ICT services within the explicitly agreed scope between the client and us. Responsibility is limited to delivering services as detailed in the contract, excluding other outcomes.
          </TextBlock>
          <TextBlock title="2. Third-Party Services">
          Our offerings may incorporate third-party products or services. We do not guarantee their quality and are not responsible for any issues stemming from these third-party services.
          </TextBlock>
          <TextBlock title="3. Accuracy of Information">
          The accuracy or completeness of information provided by ARDOREX is not guaranteed. We are not liable for damages resulting from the utilization of the provided information.
          </TextBlock>
          <TextBlock title="4. Interruption and Termination of Services">
          ARDOREX reserves the right to interrupt or terminate services without prior notice. We will not be liable for any damages incurred from such actions.
          </TextBlock>
          <TextBlock title="5. Copyright">
          Content within our services and related documents is owned by ARDOREX or our licensors. Unauthorized use, reproduction, or modification is prohibited.
          </TextBlock>
          <TextBlock title="6. Payment Methods">
          We accept payments through PayPal, Bitcoin, and direct bank transfers to our local partner banks in various countries. Clients choosing bank transfers must acknowledge the inherent risks and responsibilities of international bank transactions. By selecting a payment method, clients agree to undertake these risks under their responsibility.
          </TextBlock>
          <TextBlock title="7. Cross-Border Transactions">
          Clients acknowledge and accept risks associated with cross-border transactions, including but not limited to exchange rate risks and differing tax legislations.
          </TextBlock>
          <TextBlock title="8. Venturing into New Industries">
          Clients understand and consent to the risks involved in ARDOREX's ventures into new industries with innovative technologies and services.
          </TextBlock>
          <TextBlock title="9. Legal Jurisdiction">
          This disclaimer is governed by the laws of Singapore. In case of disputes, the Singapore courts hold exclusive jurisdiction. <br />
          <br />
            Before utilizing our services, clients are required to read and agree to this disclaimer. This document is designed to clarify the scope of risks and responsibilities associated with the use of ARDOREX services, fostering a relationship of trust between clients and us.
          </TextBlock>
      </Container>
    </main>
  );
}
