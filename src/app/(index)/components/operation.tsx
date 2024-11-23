"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { ReactNode } from "react";

const OperationTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h5 className="md:text-[32px] text-[24px] font-bold text-white tracking-wide">
      {children}
    </h5>
  );
};

const OperationList = ({
  items,
  type = "",
}: {
  items: string[];
  type?: string;
}) => {
  return (
    <ul
      className={`md:text-[18px] text-[15px] text-white md:mt-10 mt-6 tracking-wide space-y-3 md:space-y-[18px] ${
        type !== "" && "pl-5"
      } ${type === "decimal" && "list-decimal"} ${
        type === "disc" && "list-disc"
      }`}
    >
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const Operation = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative pt-[135px]">
      <div className="bg-[url('/assets/images/operation-bg.png')] bg-cover bg-top md:pt-[290px] pt-[180px]">
        <div className="w-full mx-auto pt-16 md:pt-[100px]">
          <h3 className="text-center md:text-[48px] text-[32px] font-bold tracking-wide text-white">
            Project management and transparency
          </h3>
          <div className="flex md:mt-[90px] mt-12 divide-x divide-white">
            <div className="w-full md:w-1/2">
              <div className="px-5 xl:px-[60px] md:py-[92px] py-10 border-b border-white relative bg-[#1F0031]/[0.4]">
                <span className="absolute bottom-[-100px] left-[230px]">
                  <img src="/assets/images/icon-02.png" alt="" />
                </span>
                <OperationTitle>
                  Decentralized Autonomous <br />
                  Organization (DAO) Governance
                </OperationTitle>
                <OperationList
                  items={[
                    "The BGT project leverages DAO to create a collaborative system where the community and experts work together to support historical discoveries.",
                  ]}
                />
              </div>
              <div className="px-5 xl:px-[60px] md:py-[155px] py-28 border-b border-white relative bg-[#1F0031]/[0.4]">
                <span className="absolute bottom-[-185px] left-[130px]">
                  <img src="/assets/images/icon-04.png" alt="" />
                </span>
                <OperationTitle>
                  Donation-Based Activity Support System
                </OperationTitle>
                <OperationList
                  type="decimal"
                  items={[
                    "Funding Goals: Set clear fundraising targets for each project.",
                    "Donation Campaigns: Launch donation drives for selected projects.",
                    "Milestone-Based Fund Release: Funds are released in stages based on project progress.",
                    "Transparency: All financial flows are traceable on the blockchain.",
                  ]}
                />
              </div>
              <div className="px-5 xl:px-[60px] md:pt-[155px] md:pb-[220px] py-28 border-b border-white relative bg-[#1F0031]/[0.4]">
                <span className="absolute bottom-[15px] left-[330px]">
                  <img src="/assets/images/icon-06.png" alt="" />
                </span>
                <OperationTitle>
                  Project Selection and Evaluation Mechanism
                </OperationTitle>
                <OperationList
                  type="disc"
                  items={[
                    "Evaluation Criteria: Historical significance, scientific validity, feasibility, and social impact.",
                    "Evaluation Methods: Expert reviews, community voting, and public discussions.",
                  ]}
                />
              </div>
              <div className="px-5 xl:px-[60px] md:py-[128px] py-16 relative bg-[#1F0031]/[0.4]">
                <span className="absolute top-[15px] left-0">
                  <img src="/assets/images/icon-00.png" alt="" />
                </span>
                <a
                  href="#"
                  className="w-[310px] h-[50px] md:h-[70px] flex items-center justify-center bg-[#000A23] mx-auto text-[#FFCD00] md:text-[26px] text-[20px] rounded-[5px] relative z-10"
                >
                  WHITEPAPER
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pt-20">
              <div className="px-5 xl:px-[60px] md:py-[92px] py-10 border-b border-white relative bg-[#1F0031]/[0.4]">
                <span className="absolute bottom-[-100px] left-[230px]">
                  <img src="/assets/images/icon-02.png" alt="" />
                </span>
                <OperationTitle>Project Proposal Process</OperationTitle>
                <OperationList
                  type="decimal"
                  items={[
                    "Idea Development: Craft ideas for historical discovery projects of significant value.",
                    "Proposal Submission: Submit detailed project plans via the BGT platform.",
                    "Review and Evaluation: Expert panels and the community evaluate and vote on proposals.",
                    "Final Selection: Projects are selected based on voting results and expert opinions.",
                  ]}
                />
              </div>
              <div className="px-5 xl:px-[60px] md:py-[92px] py-10 border-b border-white relative bg-[#1F0031]/[0.4]">
                <span className="absolute bottom-[-100px] left-[230px]">
                  <img src="/assets/images/icon-02.png" alt="" />
                </span>
                <OperationTitle>Outcome Sharing and Social Contribution</OperationTitle>
                <OperationList
                  type="decimal"
                  items={[
                    "Regular Updates: Share project progress with the BGT community.",
                    "Open Access: Make project outcomes publicly accessible whenever possible.",
                    "Educational Use: Utilize results for education and exhibitions to benefit society.",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Operation;
