import BackgroundGradient from "@/components/backgroundGradient";
import PageBackground from "@/components/pageBackground";
import UseCasePageHead from "./components/useCasePageHead";
import UseCaseArticles from "./components/useCaseArticles";
import UseCaseMessage from "./components/useCaseMessage";
import UseCaseClosing from "./components/useCaseClosing";


export default function RPCGateway() {
  return (
    <main>
      <BackgroundGradient>
        <PageBackground>
          <UseCasePageHead />
          <UseCaseArticles />
          <UseCaseMessage />
          <UseCaseClosing />
        </PageBackground>
      </BackgroundGradient>
    </main>
  );
}
