const StepTwo = ({ currentStep, setCurrentStep }) => {
  return (
    <form className="w-[480px] h-[655px] rounded-lg bg-white mt-[200px] p-[30px] relative">
      <img src="/logo.png" className="w-[60px] h-[60px]" />
      <h1 className="text-[26px] font-semibold text-black">Join Us! 😎</h1>
      <p className="text-[18px] font-normal text-[#8E8E8E] mb-[28px] ">
        Please provide all current information accurately.
      </p>
      <div className="text-[14px] text-[#334155]">
        <h1 className="mb-[8px]">Email *</h1>
        <input
          type="text"
          name=""
          id=""
          className="border-[1px] w-[416px] h-[44px] rounded-lg p-[12px] mb-[12px] "
        />
        <h1 className="mb-[8px]">Phone number *</h1>
        <input
          type="text"
          name=""
          id=""
          className="border-[1px] w-[416px] h-[44px] rounded-lg p-[12px] mb-[12px]"
        />
        <h1 className="mb-[8px]">Password *</h1>
        <input
          type="password"
          name=""
          id=""
          className="border-[1px] w-[416px] h-[44px] rounded-lg p-[12px] mb-[12px]"
        />
        <h1 className="mb-[8px]">Confirm password *</h1>
        <input
          type="password"
          name=""
          id=""
          className="border-[1px] w-[416px] h-[44px] rounded-lg p-[12px]"
        />
      </div>
      <div className="flex gap-[8px] absolute bottom-0 mb-[32px]">
        <button
          onClick={() => {
            setCurrentStep(1);
          }}
          className="w-[128px] h-[44px] rounded-md bg-white border-[1px] flex justify-center items-center text-black gap-[12px] "
        >
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.70504 1.41L6.29504 0L0.295044 6L6.29504 12L7.70504 10.59L3.12504 6L7.70504 1.41Z"
              fill="#121316"
            />
          </svg>

          <span>Back</span>
        </button>
        <button
          onClick={() => {
            setCurrentStep(3);
          }}
          className="w-[280px] h-[44px] rounded-md py-[10px] px-[12px] bg-[#D6D8DB] flex items-center justify-center gap-[12px] "
        >
          <span className="text-[#A9ACAF]">Continue 2/3</span>
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
      </div>
    </form>
  );
};
export { StepTwo };
