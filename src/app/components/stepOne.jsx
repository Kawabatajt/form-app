import { useState } from "react";

const StepOne = ({ currentStep, setCurrentStep, form, onChange, errors }) => {
  return (
    <form className="w-[480px] h-[655px] rounded-lg bg-white mt-[200px] p-[30px] relative">
      <img src="/logo.png" className="w-[60px] h-[60px]" />
      <h1 className="text-[26px] font-semibold text-black">Join Us! 😎</h1>
      <p className="text-[18px] font-normal text-[#8E8E8E] mb-[28px] ">
        Please provide all current information accurately.
      </p>
      <div className=" text-[#334155]">
        <h1 className="mb-[8px]">First name *</h1>
        <input
          value={form.firstName}
          type="text"
          name=""
          id="firstName"
          onChange={onChange}
          className="border-[1px] w-[416px] h-[44px] rounded-lg p-[12px] mb-[12px] "
        />
        {errors && <span>{errors.firstName}</span>}
        <h1 className="mb-[8px]">Last name *</h1>
        <input
          value={form.lastName}
          type="text"
          name=""
          onChange={onChange}
          id="lastName"
          className="border-[1px] w-[416px] h-[44px] rounded-lg p-[12px] mb-[12px]"
        />
        <h1 className="mb-[8px]">Username *</h1>
        <input
          value={form.userName}
          onChange={onChange}
          type="text"
          name=""
          id="userName"
          className="border-[1px] w-[416px] h-[44px] rounded-lg p-[12px]"
        />
      </div>
      <button
        onClick={() => {
          setCurrentStep(2);
        }}
        className="w-[416px] h-[44px] rounded-md py-[10px] px-[12px] bg-[#D6D8DB] flex items-center justify-center text-[16px] text-[#A9ACAF] absolute bottom-0 mb-[32px] gap-[12px] "
      >
        <span>Continue 1/3</span>
        <svg
          width="9"
          height="12"
          viewBox="0 0 9 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.20504 0L0.795044 1.41L5.37504 6L0.795044 10.59L2.20504 12L8.20505 6L2.20504 0Z"
            fill="#A9ACAF"
          />
        </svg>
      </button>
    </form>
  );
};
export { StepOne };
