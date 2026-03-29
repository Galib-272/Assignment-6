import React from "react";
import userIcon from "../assets/user.png";
import rocketIcon from "../assets/rocket.png";
import packageIcon from "../assets/package.png";

const steps = [
  {
    id: "01",
    icon: userIcon,
    title: "Create Account",
    description: "Sign up for free in seconds. No credit card required to get started.",
  },
  {
    id: "02",
    icon: packageIcon,
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
  },
  {
    id: "03",
    icon: rocketIcon,
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
  },
];

const Steps = () => {
  return (
    <section className="py-24 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header - Matching screenshot layout and size */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-[#1E293B] mb-5">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center p-12 bg-white rounded-4xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Step number - Fixed larger size and font */}
              <div className="absolute top-8 right-8">
                <span
                  className="text-sm font-bold w-10 h-10 flex items-center justify-center rounded-full text-white shadow-lg"
                  style={{ background: "linear-gradient(135deg, #4F39F6, #9514FA)" }}
                >
                  {step.id}
                </span>
              </div>

              {/* Icon - Circular with soft background */}
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center mb-8"
                style={{ background: "#F5F3FF" }}
              >
                {/* Fixed coloring using a CSS Mask to apply #4F39F6 strictly */}
                <div 
                  className="w-10 h-10"
                  style={{
                    backgroundColor: "#4F39F6",
                    maskImage: `url(${step.icon})`,
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    maskSize: "contain",
                    WebkitMaskImage: `url(${step.icon})`,
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    WebkitMaskSize: "contain",
                  }}
                />
              </div>

              {/* Text content - strictly Manrope */}
              <h3 className="text-2xl font-extrabold text-[#1E293B] mb-4">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;