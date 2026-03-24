import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/team" },
    { name: "Tutorial", path: "/tutorial" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex flex-col items-center relative z-[9999]">
      
      {/* Navbar */}
      <nav
        className={`fixed top-4 w-[95%] md:w-[90%] mx-auto z-50 flex items-center justify-between px-6 py-3 rounded-2xl border border-white/20 backdrop-blur-lg shadow-[0_8px_20px_rgba(0,255,255,0.1)] transition-all duration-300 ${
          scrolled ? "bg-white/25" : "bg-white/15"
        }`}
      >
        {/* Logo + Text */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-12" />
          <span className="text-lg font-bold text-gray-800">
            Smart Pathshala
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center text-gray-800 font-medium">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <NavLink
                to={item.path}
                className="px-2 py-1 rounded-md hover:text-[#F29200] transition"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3">
  <a
    href="https://school.smartpathshalabd.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="px-4 py-1.5 rounded-full bg-[#F29200] text-white text-sm hover:shadow-md transition">
      School Login
    </button>
  </a>

  <a
    href="https://school.smartpathshalabd.com/institute-onboard"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="px-4 py-1.5 rounded-full bg-[black] text-white text-sm hover:shadow-md transition">
      Register Now
    </button>
  </a>
</div>

        {/* Mobile Menu Button */}
        <FiMenu
          onClick={() => setShowMenu(true)}
          className="w-6 h-6 text-gray-700 md:hidden cursor-pointer"
        />
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300 ${
          showMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setShowMenu(false)}
      ></div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-[9999] shadow-lg transform transition-transform duration-300 md:hidden ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-6 border-b border-gray-300">
          <span className="text-lg font-bold">Smart Pathshala</span>
          <FiX
            className="w-6 h-6 text-gray-600 cursor-pointer"
            onClick={() => setShowMenu(false)}
          />
        </div>

        <ul className="flex flex-col items-start gap-4 mt-5 px-6 text-lg font-medium">
          {navItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              onClick={() => setShowMenu(false)}
              className="hover:text-[#F29200]"
            >
              {item.name}
            </NavLink>
          ))}

          <a
  href="https://school.smartpathshalabd.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="px-4 py-1.5 rounded-full bg-[#F29200] text-white text-sm">
    School Login
  </button>
</a>

<a
  href="https://school.smartpathshalabd.com/institute-onboard"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="px-4 py-1.5 rounded-full bg-[black] text-white text-sm">
    Register Now
  </button>
</a>
        </ul>
      </div>
    </div>
  );
}