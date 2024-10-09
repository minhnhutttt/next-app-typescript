import BackgroundGradient from "@/components/backgroundGradient";
import GatewayPageHead from "./gatewayPageHead";
import GatewayFeature from "./gateWayFeature";
import GatewayBenefits from "./gatewayBenefits";
import PageBackground from "@/components/pageBackground";
import GatewayGuide from "./gatewayGuide";
import GatewayFaq from "./gatewayFaq";
import GatewayTerms from "./gatewayTerms";

export default function RPCGateway() {
  return (
    <main>
      <BackgroundGradient>
        <PageBackground>
          <GatewayPageHead />
          <GatewayFeature />
          <GatewayBenefits />
          <GatewayGuide />
          <GatewayFaq />
          <GatewayTerms />
        </PageBackground>
      </BackgroundGradient>
    </main>
  );
}
