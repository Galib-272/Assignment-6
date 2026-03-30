const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "0",
      description: "Perfect for getting started",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      buttonText: "Get Started Free",
      isFeatured: false,
    },
    {
      name: "Pro",
      price: "29",
      description: "Best for professionals",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics",
      ],
      buttonText: "Start Pro Trial",
      isFeatured: true,
    },
    {
      name: "Enterprise",
      price: "99",
      description: "For teams and businesses",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
      buttonText: "Contact Sales",
      isFeatured: false,
    },
  ];

  return (
    <section className="py-24 bg-white font-manrope" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-[#1E293B] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-lg">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-10 rounded-3xl transition-all duration-300 flex flex-col text-left ${
                plan.isFeatured
                  ? "text-white scale-105 shadow-2xl z-10"
                  : "bg-white border border-gray-100 shadow-sm"
              }`}
              style={
                plan.isFeatured
                  ? { background: "linear-gradient(135deg, #4F39F6, #9514FA)" }
                  : {}
              }
            >
              {plan.isFeatured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#D97706] text-xs font-bold px-4 py-1 rounded-full shadow-sm">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>

              <p
                className={`text-sm mb-8 ${plan.isFeatured ? "text-purple-100" : "text-gray-500"}`}
              >
                {plan.description}
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-black">${plan.price}</span>
                <span
                  className={
                    plan.isFeatured ? "text-purple-100" : "text-gray-400"
                  }
                >
                  /Month
                </span>
              </div>

              <ul className="space-y-4 mb-10 grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <svg
                      className={`w-5 h-5 shrink-0 ${
                        plan.isFeatured ? "text-white" : "text-[#10B981]"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-full font-bold text-lg transition-all hover:opacity-90 ${
                  plan.isFeatured ? "bg-white text-[#4F39F6]" : "text-white"
                }`}
                style={
                  !plan.isFeatured
                    ? {
                        background: "linear-gradient(135deg, #4F39F6, #9514FA)",
                      }
                    : {}
                }
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
