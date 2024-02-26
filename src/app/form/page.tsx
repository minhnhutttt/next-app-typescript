"use client";
import { useEffect, useRef, useState } from "react";
import CreateHead from "../components/pages/create/createHead";
import CreatePlan from "../components/pages/create/createPlan";
import CreateCard from "../components/pages/create/createCard";
import CreateForm from "../components/pages/create/createForm";

export default function Create() {
  const [step, setStep] = useState<number>(1);
  const nextStep = () => {
    setStep(step + 1);
  };
  const formRef = useRef<HTMLDivElement>(null);

  const handleStepChange = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <main>
      <CreateHead step={step} />
      <div ref={formRef}>
        {step === 1 && (
          <CreatePlan
            handleStep={() => {
              nextStep();
              handleStepChange();
            }}
          />
        )}
        {step === 2 && (
          <CreateCard
            handleStep={() => {
              nextStep();
              handleStepChange();
            }}
          />
        )}
        {step === 3 && <CreateForm />}
      </div>
    </main>
  );
}
