import React from "react";

const Stats = () => {
  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "200+", label: "Premium Tools" },
    { value: "4.9", label: "Rating" },
  ];

  return (
    <section
      className="py-16 px-4"
      style={{
        background: "linear-gradient(135deg, #4F39F6 0%, #9514FA 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-0">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            {/* Stat Item */}
            <div className="flex-1 text-center">
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-blue-50 text-sm md:text-base font-medium opacity-90">
                {stat.label}
              </p>
            </div>

            {index < stats.length - 1 && (
              <div className="hidden sm:block h-16 w-px bg-white/20" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Stats;
