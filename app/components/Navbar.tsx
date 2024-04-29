// components/Navbar.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaEnvelope, FaFacebook } from "react-icons/fa";

const menuItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ];
const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className=" bg-red-700 text-gray-200">
      <div className="flex justify-between items-center">
        <div className="flex items-center pl-8">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={400} height={200} />
          </Link>
        </div>

        {/* MOBILE NAV ICON */}
        <div className="md:hidden block absolute top-4 right-8 fixed">
          <button
            aria-label="navigation"
            type="button"
            className="md:hidden text-gray-200 transition duration-300 focus:outline-none focus:text-white hover:text-white"
            onClick={toggleMobileMenu}
          >
            <FaBars className="text-3xl" />
          </button>
        </div>

        {/* NAVIGATION - LARGE SCREENS */}
        <div className="hidden md:flex">
          <ul className="hidden md:flex">
          {menuItems.map((item, index) => (
              <li key={index} className="text-lg pr-8">
                <Link
                  href={item.href}
                  className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
                  style={{ textUnderlineOffset: "8px" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex mr-10">
          <Link href="/">
            <FaFacebook className="text-3xl pr-3 transition duration-300 focus:text-yellow-500 hover:text-yellow-500" />
          </Link>
          <Link href="/">
            <FaEnvelope className="text-3xl pr-3 transition duration-300 focus:text-yellow-500 hover:text-yellow-500" />
          </Link>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobileMenu"
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } w-full mx-auto py-8 text-center md:hidden`}
      >
        <div className="flex flex-col justify-center items-center w-full">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block text-gray-200 cursor-pointer py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
              style={{ textUnderlineOffset: "8px" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
