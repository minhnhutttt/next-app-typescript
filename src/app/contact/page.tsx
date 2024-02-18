"use client"
import { useState } from "react";
import ContactHead from "../components/pages/contact/contactHead";
import ContactPlan from "../components/pages/contact/contactPlan";
import ContactCard from "../components/pages/contact/contactcCard";

export default function Contact() {
    const [step, setStep] = useState<number>(1);
    const nextStep = () => {
        setStep(step + 1);
      };
  return (
    <main>
      <ContactHead step={step} />
      {step === 1 && <ContactPlan handleStep={nextStep} />}
      {step === 2 && <ContactCard handleStep={nextStep} />}
    </main>
  );
}
