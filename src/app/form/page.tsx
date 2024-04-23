"use client";
import { useEffect, useRef, useState } from "react";
import FormHead from "./components/formHead";
import FormCard from "./components/formCard";
import FormContent from "./components/formContent";

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
      <FormHead step={step} />
      <div ref={formRef}>
        {step === 1 && (
          <FormCard
            handleStep={() => {
              nextStep();
              handleStepChange();
            }}
          />
        )}
        {step === 2 && <FormContent />}
      </div>
    </main>
  );
}
