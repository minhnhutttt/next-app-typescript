import { ReactNode } from "react";
import TextBlock from "../components/common/textBlock";
import Container from "../components/container";
import PageHead from "../components/pageHead";

type OrderPropType = {
    step: string;
    image: string;
    title: string;
    children: ReactNode;
}

function OrderStep({step, image, title, children}:OrderPropType) {
    return (
        <div className="group flex text-white gap-4 border-b border-[#FFC01D]/[0.3] md:pb-6 pb-4">
            <figure>
                <img src={step} alt="" />
            </figure>
            <div className="max-md:flex-col md:group-even:flex-row-reverse flex justify-start md:pt-6 gap-5  md:gap-10">
                <figure className="max-md:w-auto max-[1440px]:w-[40%]">
                    <img src={image} alt={title} />
                </figure>
                <div className="flex-1 max-w-[400px]">
                    <p className="md:text-[21px] text-[17px] font-bol">{title}</p>
                    <p className="md:text-[17px] text-[13px] leading-loose md:mt-4 mt-3">
                        {children}
                    </p>
                </div>
            </div>
        </div>
    )
}


export default function OrderingFlow() {
  return (
    <main className="bg-top bg-cover relative">
        <PageHead />
      <Container 
        title="Order Now"
        >
          <div className="w-full border-l border-[#FFC01D]/[0.2] md:pl-6 pl-3 space-y-6">
            <OrderStep step="/images/number-01.png" image="/images/order-01.png" title="Needs Analysis & Hearing">
            Conduct detailed discussions to understand the client&apos;s needs, requirements, and business goals. Share the project overview, objectives, and expected outcomes.
            </OrderStep>
            <OrderStep step="/images/number-02.png" image="/images/order-02.png" title="Proposal & Estimation">
            Based on the hearing, create a proposal and estimate that includes the project scope, planned functionalities, timeline, and ROI. This step is crucial for laying the groundwork for the project.
            </OrderStep>
            <OrderStep step="/images/number-03.png" image="/images/order-03.png" title="Contract Signing">
            Once the proposal and estimate are agreed upon, formalize the agreement by signing a contract. This document will outline the project scope, responsibilities, and expected deliverables.
            </OrderStep>
            <OrderStep step="/images/number-04.png" image="/images/order-04.png" title="Initial Invoice">
            Issue an initial invoice for a predetermined percentage of the total cost as stipulated in the contract. This initial payment secures the resources and expertise necessary to commence the project.
            </OrderStep>
            <OrderStep step="/images/number-05.png" image="/images/order-05.png" title="Project Kick-off">
            Assemble the project team and develop a detailed project plan. An initial meeting with the client marks the official start of the project.
            </OrderStep>
            <OrderStep step="/images/number-06.png" image="/images/order-06.png" title="Development & Implementation Phase">
                Based on the hearing, create a proposal and estimate that includes the project scope, planned functionalities, timeline, and ROI. This step is crucial for laying the groundwork for the project.
            </OrderStep>
            <OrderStep step="/images/number-07.png" image="/images/order-07.png" title="Quality Assurance & Acceptance Testing">
                Conduct internal quality assurance tests following development. Subsequently, facilitate client acceptance testing to ensure the solution meets all requirements.
            </OrderStep>
            <OrderStep step="/images/number-08.png" image="/images/order-08.png" title="Final Invoice & Payment">
            Based on the hearing, create a proposal and estimate that includes the project scope, planned functionalities, timeline, and ROI. This step is crucial for laying the groundwork for the project.
            </OrderStep>
            <OrderStep step="/images/number-09.png" image="/images/order-09.png" title="Delivery & Release">
            Once the final payment is confirmed, formally deliver and release the project deliverables. Provide release support and training as necessary to ensure a smooth transition.
            </OrderStep>
            <OrderStep step="/images/number-10.png" image="/images/order-10.png" title="Final Invoice & Payment">
            Based on the hearing, create a proposal and estimate that includes the project scope, planned functionalities, timeline, and ROI. This step is crucial for laying the groundwork for the project.

            </OrderStep>
          </div>
      </Container>
    </main>
  );
}
