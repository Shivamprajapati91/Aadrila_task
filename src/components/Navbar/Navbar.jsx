import { motion } from "framer-motion";
import logo from "../../assets/logo.svg";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="flex justify-between items-center px-10 py-2"
    >
      {/* LOGO + BRAND */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Aadrila Logo"
          className="w-24 h-24 object-contain"
        />
        <span className="font-bold text-blue-700 text-lg">
          AADRILA
        </span>
      </div>

      {/* NAV LINKS */}
      <div className="hidden md:flex gap-6 text-gray-600 font-medium">
        <span className="cursor-pointer hover:text-blue-600 transition">
          Home
        </span>
        <span className="cursor-pointer hover:text-blue-600 transition">
          Products
        </span>
        <span className="cursor-pointer hover:text-blue-600 transition">
          Industries
        </span>
        <span className="cursor-pointer hover:text-blue-600 transition">
          About
        </span>
        <span className="cursor-pointer hover:text-blue-600 transition">
          Contact
        </span>
      </div>

      {/* CTA BUTTON */}
      <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
        Get a Demo
      </button>
    </motion.nav>
  );
}
