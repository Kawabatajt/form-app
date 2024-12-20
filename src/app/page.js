"use client";
import { use, useState } from "react";
import Image from "next/image";
import { StepOne } from "./components/stepOne";
import { StepTwo } from "./components/stepTwo";
import { StepThree } from "./components/stepThree";
import { Success } from "./components/success";
import { Inter } from "next/font/google";
import { validateStepOne } from "./components/input";
const inter = Inter({ subsets: ["latin"] });
const FormBody = ({
  currentStep,
  setCurrentStep,
  onChange,
  form,
  errors,
  setErrors,
}) => {
  if (currentStep === 1) {
    return (
      <StepOne
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        onChange={onChange}
        form={form}
        errors={errors}
        setErrors={setErrors}
      />
    );
  }
  if (currentStep === 2) {
    return (
      <StepTwo
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        onChange={onChange}
      />
    );
  }
  if (currentStep === 3) {
    return (
      <StepThree
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        onChange={onChange}
      />
    );
  }
  if (currentStep === 4) {
    return <Success />;
  }
};

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
  });

  const onChange = (e) => {
    const field = e.target.id;
    const newValues = { ...form, [field]: e.target.value };
    setForm(newValues);
    const isValidFirstName = (firstName) => {
      const numbers = "1234567890";
      const symbols = "!@#$%^&*()_+{}|:";
      for (let i = 0; i < numbers.length; i++) {
        if (firstName.includes(numbers[i])) {
          return false;
        }
      }
      for (let i = 0; i < symbols.length; i++) {
        if (firstName.includes(symbols[i])) {
          return false;
        }
      }
      return true;
    };
  };
  console.log(form);
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <div className={`flex justify-center ${inter.className}`}>
      <FormBody
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        onChange={onChange}
        form={form}
        errors={errors}
        setErrors={setErrors}
      />
    </div>
  );
}
