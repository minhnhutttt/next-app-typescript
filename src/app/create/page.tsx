"use client";
import { useState } from "react";
import CreateHead from "../components/pages/create/createHead";
import CreatePlan from "../components/pages/create/createPlan";
import CreateCard from "../components/pages/create/createCard";
import CreateForm from "../components/pages/create/createForm";

export default function Create() {
  const [step, setStep] = useState<number>(1);
  const nextStep = () => {
    setStep(step + 1);
  };
  return (
    <main>
      <CreateHead step={step} />
      {step === 1 && <CreatePlan handleStep={nextStep} />}
      {step === 2 && <CreateCard handleStep={nextStep} />}
      {step === 3 && <CreateForm />}
    </main>
  );
}
