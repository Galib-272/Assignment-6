import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  const menuItems = [
    { name: "Products", path: "/products" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm font-manrope">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo - Fixed with requested Gradient */}
        <div className="flex items-center">
          <Link to="/" className="text-3xl font-extrabold">
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              DigiTools
            </span>
          </Link>
        </div>

        {/* Center Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-600 hover:text-[#4F39F6] font-bold text-sm transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          <Link to="/cart" className="relative cursor-pointer flex items-center justify-center p-2">
            <FaShoppingCart
              size={22}
              className="text-gray-700 hover:text-[#4F39F6] transition-colors"
            />
            {/* Red Badge for items */}
            {cartCount > 0 && (
              <span
                className="absolute -top-1 -right-1 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-black shadow-sm"
                style={{
                  backgroundColor: "#EF4444", 
                }}
              >
                {cartCount}
              </span>
            )}
          </Link>

          <Link
            to="/login"
            className="hidden md:block text-gray-600 hover:text-[#4F39F6] font-bold text-sm transition-colors"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="hidden md:block text-white text-sm font-bold px-8 py-3 rounded-full transition-all duration-200 hover:opacity-90 shadow-md shadow-purple-100"
            style={{ background: "linear-gradient(135deg, #4F39F6, #9514FA)" }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;