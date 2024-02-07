import Map from "../components/common/map";
import PageContainer from "../components/common/pageContainer";
import Talk from "../components/pages/home/talk";
import WorkFlowArticle from "../components/pages/workflow/workFlowArticle";
import WorkflowHead from "../components/pages/workflow/workflowHead";

export default function Workflow() {
  return (
    <main>
        <PageContainer>
            <WorkflowHead />
            <div className="relative">
              <div className="mt-2 px-[3.75vw] md:px-11 relative">
                  <WorkFlowArticle
                      number="I"
                      type="PROJECT INITIATION"
                      title={<p className="text-[#FF84C8]">By Client</p>}
                      left="ENGAGE & DEFINE"
                      right="Engage with the development team and define your project vision, objectives, and expectations."
                  />
                  <WorkFlowArticle
                      number="II"
                      type="SCOPE DEFINITION"
                      title={<p className="text-[#0EFFFF]">By Our</p>}
                      left="ASSESS & OUTLINE"
                      right="Assess the client's requirements, outline the scope, and prepare a detailed project blueprint."
                  />
                  <WorkFlowArticle
                      number="III"
                      type="SOLUTION PLANNING"
                      title={<p className="text-[#0EFFFF]">By Our</p>}
                      left="STRATEGIZE & DESIGN"
                      right="Strategize the development approach, design the architecture, and plan resource allocation."
                  />
                  <WorkFlowArticle
                      number="IV"
                      type="PRESENT & REVIEW"
                      title={<p className="text-[#0EFFFF]">By Our</p>}
                      left="STRPRESENT & REVIEW"
                      right="Present a comprehensive proposal, including timelines, costs, and deliverables, for the client's review."
                  />
                  <WorkFlowArticle
                      number="V"
                      type="AGREEMENT FINALIZATION"
                      title={<p className="text-gradient">By Client & Our</p>}
                      left="NEGOTIATE & SIGN"
                      right="Negotiate terms, address concerns, and sign the contract to officially kick off the project."
                  />
                  <WorkFlowArticle
                      number="VI"
                      type="DEVELOPMENT PHASE"
                      title={<p className="text-[#0EFFFF]">By Our</p>}
                      left="BUILD & DEVELOP"
                      right="Develop the solution, ensuring adherence to the agreed-upon milestones and quality standards."
                  />
                  <WorkFlowArticle
                      number="VII"
                      type="QUALITY ASSURANCE"
                      title={<p className="text-[#0EFFFF]">By Our</p>}
                      left="TEST & REFINE"
                      right="Conduct rigorous testing, gather feedback, and refine the solution to meet the quality criteria."
                  />
                  <WorkFlowArticle
                      number="VIII"
                      type="DELIVERY & IMPLEMENTATION"
                      title={<p className="text-gradient">By Client & Our</p>}
                      left="DEPLOY & INTEGRATE"
                      right="Deliver and deploy the solution, ensuring seamless integration into the client's environment."
                  />
                  <WorkFlowArticle
                      number="IX"
                      type="PROJECT CLOSURE"
                      title={<p className="text-[#0EFFFF]">By Our</p>}
                      left="EVALUATE & SUPPORT"
                      right="Evaluate the project's success, provide necessary documentation, and offer post-launch support."
                  />
              </div>
            </div>
            <Map />
        </PageContainer>
        <Talk />
    </main>
  );
}
