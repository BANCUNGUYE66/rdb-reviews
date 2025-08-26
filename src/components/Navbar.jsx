import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Investment", path: "/investment" },
    { name: "Tourism", path: "/tourism" },
    { name: "Export", path: "/export" },
    { name: "e-Services", path: "/" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <motion.nav
      className="bg-blue-900 text-white shadow-lg"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/rdb-logo.png"
            alt="RDB Logo"
            className="h-10 w-auto"
          />
          <span className="font-bold text-lg hidden sm:block">
            Rwanda Development Board
          </span>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <Link to={item.path} className="hover:text-yellow-300 transition">
                {item.name}
              </Link>
              {/* Yellow underline animation */}
              <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-yellow-400 transition-all duration-300"></span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
