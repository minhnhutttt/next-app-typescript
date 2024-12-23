"use client";

import React, { ReactNode } from "react";

interface FormLabelProps {
  number: string;
  label: ReactNode;
}

const FormLabel = ({ number, label }: FormLabelProps) => {
  return <div className="flex flex-col items-center justify-center md:mb-[26px] mb-5">
    <div className="">
        <img src={`/assets/images/number-${number}.svg`} alt="" />
    </div>
    <p className="md:text-[18px] font-semibold text-center mt-2">{label}</p>
  </div>;
};

export default FormLabel;
