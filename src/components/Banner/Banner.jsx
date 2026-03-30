import bannerImg from "../../assets/banner.png";
import { FaPlay } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="flex-1 space-y-7 text-left">
          <div className="inline-flex items-center gap-2 bg-[#EEF2FF] text-[#6366F1] text-xs font-bold px-4 py-2 rounded-full shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[#6366F1] animate-pulse" />
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-[#1E293B] leading-[1.1]">
            Supercharge Your <br />
            Digital Workflow
          </h1>

          <div className="space-y-4">
            <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today.
            </p>
            <p className="text-gray-400 text-sm font-medium hover:text-[#7C3AED] cursor-pointer transition-colors">
              Explore Products
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <button
              className="px-8 py-3.5 text-white font-bold rounded-full shadow-xl shadow-purple-100 transition-transform hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #4F39F6, #9514FA)",
              }}
            >
              Explore Products
            </button>

            <button className="group flex items-center gap-2 px-8 py-3.5 bg-white border-2 border-[#4F39F6] text-[#4F39F6] font-bold rounded-full hover:bg-blue-50 transition-all">
              <FaPlay
                size={12}
                className="group-hover:scale-110 transition-transform"
              />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg">
            <img
              src={bannerImg}
              alt="Digital Workflow"
              className="rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] w-full object-cover border-8 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
