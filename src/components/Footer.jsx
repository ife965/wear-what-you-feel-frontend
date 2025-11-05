import { assets } from "../assets/frontend_assets/assets";
import { FaFacebookF, FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-black w-full border-t ">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm leading-relaxed">

        {/* Logo & Tagline + Social Media */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <img
            src={assets.logo}
            alt="Company Logo"
            className="w-36 mb-4 object-contain"
          />
          {/* <p className="max-w-xs text-gray-700 mb-6">
            <strong>Wear What You Feel</strong> — more than fashion, it's your
            identity. Every piece is crafted to inspire confidence, freedom, and
            comfort. Be bold. Be yourself.
          </p> */}

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 text-gray-600">
            <a href="#" className="hover:text-black transition">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="hover:text-black transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="hover:text-black transition">
              <FaXTwitter size={18} />
            </a>
            <a href="#" className="hover:text-black transition">
              <FaTiktok size={18} />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-lg font-semibold mb-4">Company</p>
          <ul className="space-y-2 text-gray-700">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">About Us</li>
            <li className="hover:text-black cursor-pointer">Delivery</li>
            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Quick Shop */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-lg font-semibold mb-4">Quick Shop</p>
          <ul className="space-y-2 text-gray-700">
            <li className="hover:text-black cursor-pointer">Men’s Collection</li>
            <li className="hover:text-black cursor-pointer">Women’s Wear</li>
            <li className="hover:text-black cursor-pointer">New Arrivals</li>
            <li className="hover:text-black cursor-pointer">Best Sellers</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-lg font-semibold mb-4">Get in Touch</p>
          <ul className="space-y-2 text-gray-700">
            <li>+234 908 234 1106</li>
            <li>AbisoyeIfe@gmail.com</li>
            <li>Lagos, Nigeria</li>
          </ul>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-gray-300 mt-6 py-5 text-center">
        <p className="text-sm text-gray-700">
          © {currentYear} <strong>Wear What You Feel</strong> — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
