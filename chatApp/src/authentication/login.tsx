import { Check } from "lucide-react";

const Login = () => {
  const steps = [
    { id: 1, label: "basic info", completed: true },
    { id: 2, label: "bio", completed: true },
    { id: 3, label: "security", completed: false },
    { id: 4, label: "finish up", completed: false },
    { id: 5, label: "proceed", completed: false },
  ];

  return (
    <div className="sm:flex gap-4 items-start">
      {/* left container */}
      <div className="bg-white sm:w-[60vw]">
        {/* inner container */}
        <h1 className="p-4 sm:text-3xl text-2xl text-gray-900 font-bold">
          Create Account
        </h1>
        <p className="p-4 text-sm text-gray-600">
          Create a Pixsy account and enjoy knowing with each other, chatting and
          connecting with your friends
        </p>

        {/* progress bar entirely here */}
        <div className="w-full flex flex-col items-center mb-8">
          <p className="text-lg font-semibold text-gray-700 mb-6">
            <span className="text-blue-600">20%</span> completed
          </p>

          <div className="flex items-start justify-center w-full max-w-3xl relative">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col items-center relative w-full"
              >
                {/* Circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium z-10 ${
                    step.completed
                      ? "bg-blue-600 text-white"
                      : "border-2 border-gray-300 text-gray-500 bg-white"
                  }`}
                >
                  {step.completed ? <Check size={18} /> : step.id}
                </div>

                {/* Label directly below */}
                <p
                  className={`text-sm mt-3 ${
                    step.completed ? "text-gray-800" : "text-gray-500"
                  }`}
                >
                  {step.label}
                </p>

                {/* Connector line */}
                {index !== steps.length - 1 && (
                  <div
                    className={`absolute top-5 left-[55%] right-[-45%] h-[2px] ${
                      steps[index + 1].completed
                        ? "bg-blue-600"
                        : "bg-blue-500 opacity-50"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* input fields of id _1 here 👇 */}
        <div className="space-y-6">
          {/* first row */}
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
          {/* second row */}
          <div className="md:flex md:space-y-0 space-y-4 gap-4">
            <input
              type="text"
              className="p-3 border border-gray-300 placeholder-gray-300 rounded-sm w-full"
              placeholder="+254 -000-999-111"
            />
            <input
              type="text"
              className="p-3 border border-gray-300 placeholder-gray-300 rounded-sm w-full col-span-2"
              placeholder="YY/MM/DD"
            />
          </div>
          {/* third row */}
          <div className="md:flex md:space-y-0 space-y-4 gap-4">
            <input
              type="text"
              className="p-3 border border-gray-300 placeholder-gray-300 rounded-sm w-full"
              placeholder="password"
            />
            <input
              type="text"
              className="p-3 border border-gray-300 placeholder-gray-300 rounded-sm w-full col-span-2"
              placeholder="confirm password"
            />
          </div>
        </div>

        {/* after the inputs */}
        <div className="mt-8">
          <button className="w-full bg-[#0437FF] p-3 text-white rounded-sm shadow-xs">
            Continue
          </button>
          <hr className="mt-12 mb-8 h-[0.5px] bg-gray-100 opacity-10" />

          <p className="text-center text-xs">
            Already have an account?{" "}
            <span className="font-bold text-[#0437FF]">
              Click here to Login
            </span>
          </p>
        </div>
      </div>

      {/* right container */}
      <div className="hidden sm:w-[40vw] sm:inline-flex h-[100vh] font-bold sm:bg-[#0437FF] text-white"></div>
    </div>
  );
};

export default Login;
