"use client";
import { useState } from "react";
import Image from "next/image";
import { StepOne } from "./components/stepOne";
import { StepTwo } from "./components/stepTwo";
import { StepThree } from "./components/stepThree";
import { Success } from "./components/success";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const FormBody = ({ currentStep, setCurrentStep }) => {
  if (currentStep === 1) {
    return (
      <StepOne currentStep={currentStep} setCurrentStep={setCurrentStep} />
    );
  }
  if (currentStep === 2) {
    return (
      <StepTwo currentStep={currentStep} setCurrentStep={setCurrentStep} />
    );
  }
  if (currentStep === 3) {
    return (
      <StepThree currentStep={currentStep} setCurrentStep={setCurrentStep} />
    );
  }
  if (currentStep === 4) {
    return <Success />;
  }
};
export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className={`flex justify-center ${inter.className}`}>
      <FormBody currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </div>
  );
}
