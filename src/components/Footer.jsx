import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Pricing", "Templates", "Integrations"],
    Company: ["About", "Blog", "Careers", "Press"],
    Resources: ["Documentation", "Help Center", "Community", "Contact"],
  };

  const socialLinks = [
    { icon: FaInstagram, href: "#" },
    { icon: FaFacebookF, href: "#" },
    { icon: FaXTwitter, href: "#" },
  ];

  return (
    <footer className="bg-[#0F172A] text-gray-400 pt-20 pb-10 px-6 md:px-20 font-manrope">
      <div className="max-w-7xl mx-auto">
        {/* Top Footer Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 pb-20">
          
          {/* Logo + Description */}
          <div className="max-w-sm space-y-6">
            <h2 className="text-4xl font-bold text-white tracking-tight">
              DigiTools
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Links and Socials Container */}
          <div className="flex flex-wrap gap-12 md:gap-24">
            {/* Footer Links Mapping */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="min-w-30">
                <h4 className="text-white font-semibold text-lg mb-6">
                  {title}
                </h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social Links Section - Fixed ESLint Error */}
            <div className="min-w-37.5">
              <h4 className="text-white font-semibold text-lg mb-6">
                Social Links
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => {
                  // Destructuring inside the map and capitalizing fixes the 'never used' error
                  const SocialIcon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
                    >
                      <SocialIcon size={20} className="text-[#0F172A]" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <p>© 2026 Digitools. All rights reserved.</p>

          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;