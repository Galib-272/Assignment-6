const CTABanner = () => {
  return (
    <section
      className="py-16 px-4 text-center"
      style={{
        background: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight"
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-purple-200 text-sm md:text-base mb-8 max-w-lg mx-auto opacity-70">
          Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="btn bg-white text-purple-700 font-semibold rounded-full px-4 py-3.75 border-0 hover:bg-purple-50 shadow-lg">
            Explore Products
          </button>
          <button className="btn bg-transparent text-white font-semibold rounded-full px-4 py-3.75 border-2 border-white/40 hover:bg-white/10">
            View Pricing
          </button>
        </div>
        <p className="text-white mt-16 opacity-70">14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </section>
  );
};

export default CTABanner;
