"use client";

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
  return (
    <section className="relative md:pt-[135px] pt-[100px]">
      <div className="bg-[url('/assets/images/operation-bg.png')] bg-cover bg-top md:pt-[290px] pt-[140px] pb-[253px]">
        <div className="w-full mx-auto pt-16 md:pt-[100px]">
          <h3 data-scroll className="ani-fade-in text-center md:text-[48px] text-[32px] font-bold tracking-wide text-white">
            Project management and transparency
          </h3>
          <div className="flex md:mt-[90px] mt-12 md:divide-x divide-white max-md:flex-col">
            <div className="w-full md:w-1/2">
              <div data-scroll className="ani-fade-in px-5 xl:px-[60px] md:py-[92px] py-14 border-b border-white relative bg-[#1F0031]/[0.4]">
                <span className="absolute z-10 md:bottom-[-100px] bottom-[-40px] md:left-[230px] left-[50%]">
                  <img className="max-md:max-w-[120px]" src="/assets/images/icon-02.png" alt="" />
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
              <div data-scroll className="ani-fade-in px-5 xl:px-[60px] md:py-[155px] py-20 border-b border-white relative bg-[#1F0031]/[0.4]">
                <span className="absolute z-10 md:bottom-[-185px] bottom-[-85px] md:left-[130px] left-[30%]">
                  <img className="max-md:max-w-[170px]" src="/assets/images/icon-04.png" alt="" />
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
              <div data-scroll className="ani-fade-in px-5 xl:px-[60px] md:pt-[155px] md:pb-[220px] py-24 border-b border-white relative bg-[#1F0031]/[0.4]">
                <span className="absolute z-10 md:bottom-[15px] bottom-[5px] md:left-[330px] left-[15%]">
                  <img className="max-md:max-w-[70px]" src="/assets/images/icon-06.png" alt="" />
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
              <div data-scroll className="ani-fade-in max-md:hidden px-5 xl:px-[60px] md:py-[128px] py-16 relative z-10">
                <span className="absolute z-10 top-[-100px] left-0">
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
            <div className="w-full md:w-1/2 md:pt-20 relative">
            <div className=" bg-[#1F0031]/[0.4] h-full border-b border-white relative">
            <span className="absolute z-10 top-[-20px] md:top-[-190px] md:right-0 right-[4%]">
                  <img className="max-md:max-w-[140px]" src="/assets/images/icon-01.png" alt="" />
                </span>
              <div data-scroll className="ani-fade-in px-5 xl:px-[60px] md:py-[138px] py-28 border-b border-white relative">
              <span className="absolute z-10 md:bottom-[-100px] bottom-[-40px] md:left-[280px] left-[50%]">
                  <img className="max-md:max-w-[100px]" src="/assets/images/icon-03.png" alt="" />
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
              <div data-scroll className="ani-fade-in px-5 xl:px-[60px] md:pt-[138px] md:pb-[191px] py-20 border-b border-white relative bg-[#1F0031]/[0.4]">
                <span className="absolute z-10 md:bottom-[-65px] bottom-[-25px] md:left-[260px] left-[45%]">
                  <img className="max-md:max-w-[90px]" src="/assets/images/icon-05.png" alt="" />
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
              <div data-scroll className="ani-fade-in px-5 xl:px-[60px] md:pt-[138px] md:pb-[191px] py-20 relative bg-[#1F0031]/[0.4]">
                <OperationTitle>Transparency in Fund Management</OperationTitle>
                <OperationList
                  type="decimal"
                  items={[
                    "Real-Time Tracking: Monitor the flow of donations in real-time on the blockchain.",
                    "Detailed Reporting: Publish detailed breakdowns of fund usage.",
                    "Smart Contracts: Automate fund disbursement based on predefined conditions.",
                    "External Audits: Conduct regular audits by third-party organizations.",
                  ]}
                />
              </div>
              <span className="absolute z-10 md:bottom-[-65px] bottom-[-35px] md:left-[220px] left-[40%]">
                  <img className="max-md:max-w-[70px]" src="/assets/images/icon-07.png" alt="" />
                </span>
            </div>
            </div>
            <div data-scroll className="ani-fade-in md:hidden px-5 xl:px-[60px] md:py-[128px] py-16 relative">
                <span className="absolute z-10 top-[-50px] left-0 max-md:max-w-[300px] max-md:w-full">
                  <img  src="/assets/images/icon-00.png" alt="" />
                </span>
                <a
                  href="#"
                  className="w-[310px] h-[50px] md:h-[70px] flex items-center justify-center bg-[#000A23] mx-auto text-[#FFCD00] md:text-[26px] text-[20px] rounded-[5px] relative z-10"
                >
                  WHITEPAPER
                </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Operation;
