import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { imgs_assets } from "../assets/assets";

const Login = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, label: "basic info" },
    { id: 2, label: "bio" },
    { id: 3, label: "security" },
    { id: 4, label: "finish up" },
    { id: 5, label: "proceed" },
  ];

  // move to next step
  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  // click handler for steps
  const handleStepClick = (id: number) => {
    setCurrentStep(id);
  };

  // conditional rendering
  const renderStepContent = () => {
    if (currentStep === 1) {
      return (
        <div className="space-y-6">
          <div className="md:flex md:space-y-0 space-y-4 gap-4">
            <input
              type="text"
              className="p-3 border border-gray-300 placeholder-gray-300 rounded-sm w-full"
              placeholder="first name"
            />
            <input
              type="text"
              className="p-3 border border-gray-300 placeholder-gray-300 rounded-sm w-full"
              placeholder="second name"
            />
          </div>

          <div className="md:flex md:space-y-0 space-y-4 gap-4">
            <input
              type="text"
              className="p-3 border border-gray-300 placeholder-gray-300 rounded-sm w-full"
              placeholder="+254 -000-999-111"
            />
            <input
              type="text"
              className="p-3 border border-gray-300 placeholder-gray-300 rounded-sm w-full"
              placeholder="YY/MM/DD"
            />
          </div>

          <div className="md:flex md:space-y-0 space-y-4 gap-4">
            <input
              type="password"
              className="p-3 border border-gray-300 placeholder-gray-300 rounded-sm w-full"
              placeholder="password"
            />
            <input
              type="password"
              className="p-3 border border-gray-300 placeholder-gray-300 rounded-sm w-full"
              placeholder="confirm password"
            />
          </div>
        </div>
      );
    }

    if (currentStep === 2) {
      return (
        <div className="space-y-6">
          <input
            type="text"
            className="p-3 border border-gray-300 placeholder-gray-300 rounded-sm w-full"
            placeholder="Bio"
          />
          <input
            type="text"
            className="p-3 border border-gray-300 placeholder-gray-300 rounded-sm w-full"
            placeholder="username"
          />
          <input
            type="text"
            className="p-3 border border-gray-300 placeholder-gray-300 rounded-sm w-full"
            placeholder="pronouns"
          />
        </div>
      );
    }

    if (currentStep === 3) {
      return (
        <div className="space-y-6">
          <input
            type=""
            className="p-3 border border-gray-300 placeholder-gray-300 rounded-sm w-full"
            placeholder="phone number"
          />
          <input
            type="text"
            className="p-3 border border-gray-300 placeholder-gray-300 rounded-sm w-full"
            placeholder="re enter email"
          />
        </div>
      );
    }

    if (currentStep === 4) {
      return (
        <div className="text-gray-700 mt-10 max-w-2xl mx-auto text-left flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-center mb-4">
            You’re almost done! Let’s{" "}
            <span className="text-[#0437FF]">finish up</span>.
          </h2>

          {/* Scrollable container */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4 text-xs leading-relaxed h-[300px] sm:h-[100px] overflow-y-auto w-full shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Pixsy Terms of Service & User Agreement
            </h3>

            <p>
              By creating a Pixsy account, you agree to follow our terms and use
              Pixsy responsibly. Please take a moment to review the main points:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Use Pixsy only for lawful and respectful communication.</li>
              <li>Keep your login details private and secure.</li>
              <li>
                Your uploaded content remains yours, but Pixsy can display it
                for engagement.
              </li>
              <li>Pixsy may suspend accounts that violate these rules.</li>
              <li>Your data is handled according to our Privacy Policy.</li>
              <li>
                Do not post content that is hateful, explicit, or violates
                community standards.
              </li>
              <li>
                Pixsy reserves the right to update these terms at any time.
              </li>
              <li>
                Continued use of the platform means you agree to any new
                changes.
              </li>
            </ul>

            <p>
              These terms are designed to create a safe and respectful
              environment for all users.
            </p>

            <p>
              Please read carefully before proceeding. You can access the full
              Terms and Privacy Policy anytime from your account settings.
            </p>
          </div>

          {/* Agreement checkbox */}
          <div className="flex items-center mt-4 w-full">
            <input
              type="checkbox"
              id="agree"
              className="w-4 h-4 text-[#0437FF] border-gray-300 rounded focus:ring-[#0437FF]"
            />
            <label htmlFor="agree" className="ml-2 text-sm text-gray-700">
              I have read and agree to Pixsy’s Terms of Service and Privacy
              Policy.
            </label>
          </div>

          {/* Continue button */}
          {/* <button className="w-full mt-6 p-3 rounded-sm text-white font-semibold bg-[#0437FF] hover:bg-[#0025aa] transition-all duration-200">
            Continue
          </button> */}
        </div>
      );
    }

    if (currentStep === 5) {
      return (
        <div className="text-center text-gray-700 mt-10">
          <p className="text-lg">
            You’re ready to <span className="font-semibold">proceed</span>!
          </p>
        </div>
      );
    }
  };

  return (
    <div className="sm:flex gap-4 min-h-screen items-start">
      {/* left container */}
      <div className="bg-white sm:w-[60vw] p-6">
        <h1 className="text-2xl sm:text-3xl text-gray-900 font-bold mb-4">
          Create Account
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Create a Pixsy account and enjoy connecting with friends and making
          memories.
        </p>

        {/* progress bar */}
        <div className="w-full flex flex-col items-center mb-8">
          <p className="text-lg font-semibold text-gray-700 mb-6">
            <span className="text-blue-600">
              {Math.round((currentStep / steps.length) * 100)}%
            </span>{" "}
            completed
          </p>

          <div className="flex items-start justify-center w-full max-w-3xl relative">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col items-center relative w-full cursor-pointer"
                onClick={() => handleStepClick(step.id)} // 👈 clickable step
              >
                {/* Circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium z-10 transition-all duration-300 ${
                    step.id < currentStep
                      ? "bg-blue-600 text-white"
                      : step.id === currentStep
                      ? "bg-blue-500 text-white ring-4 ring-blue-200"
                      : "border-2 border-gray-300 text-gray-500 bg-white"
                  }`}
                >
                  {step.id < currentStep ? <Check size={18} /> : step.id}
                </div>

                {/* Label */}
                <p
                  className={`text-sm mt-3 transition-all ${
                    step.id <= currentStep
                      ? "text-gray-800 font-medium"
                      : "text-gray-500"
                  }`}
                >
                  {step.label}
                </p>

                {/* Line */}
                {index !== steps.length - 1 && (
                  <div
                    className={`absolute top-5 left-[55%] right-[-45%] h-[2px] ${
                      step.id < currentStep
                        ? "bg-blue-600"
                        : "bg-blue-500 opacity-50"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* render step content conditionally */}
        {renderStepContent()}

        <div className="mt-8">
          <button
            onClick={handleNext}
            className="w-full bg-[#0437FF] p-3 flex items-center justify-center gap-2 text-white text-center rounded-sm shadow-xs"
          >
            <span>{currentStep === steps.length ? "Finish" : "Continue"}</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* right container */}
      <div className="hidden sm:flex flex-col  h-screen justify-center items-center sm:w-[40vw]  bg-[#0437FF] text-white font-bold text-center p-6">
        <h1 className="text-3xl mb-4 tracking-wide">...</h1>
        <p className="text-sm font-normal max-w-xs">
          Explore, connect with friends, and make memories with Pixsy.
        </p>
        {imgs_assets.map((img, index) => (
          <img
            key={index}
            src={img.phones}
            alt="Pixsy phones"
            className="mt-8 w-1/2 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Login;
