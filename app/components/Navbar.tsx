// components/Navbar.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaAngleDown, FaBars, FaEnvelope, FaFacebook } from "react-icons/fa";

interface MenuItem {
    label: string;
    href: string;
    dropdownItems?: { label: string; href: string }[];
  }
  
  const menuItems: MenuItem[] = [
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    {
      label: "Projects",
      href: "#",
      dropdownItems: [
        { label: "Spears 1858", href: "#" },
        { label: "Rubik 1709", href: "#" },
        { label: "Loft 705", href: "#" },
        { label: "Spears 88", href: "#" },

      ],
    },
    { label: "Media", href: "#" },
    { label: "News", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact us", href: "#" },
  ];
  
const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

  return (
    <nav className=" bg-red-700 text-gray-200">
      <div className="flex justify-between items-center">
        <div className="flex items-center pl-8">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={200} height={200} />
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
        <div className="hidden md:flex space-x-4">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.label === "Projects" && toggleDropdown()}
                onMouseLeave={() => item.label === "Projects" && toggleDropdown()}
              >
                <Link
                  href={item.href}
                  className="text-sm flex items-center transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
                  style={{ textUnderlineOffset: "8px" }}
                >
                  {item.label}{item.label === "Projects" && (
                  <FaAngleDown className="ml-1 text-sm" /> // Add the dropdown icon
                )}
                </Link>
                {item.label === "Projects" && isDropdownOpen && (
                  <div className="absolute top-full left-0 w-40 bg-white rounded-lg shadow-lg py-2 z-10">
                    {item.dropdownItems?.map((dropdownItem, i) => (
                      <Link key={i} href={dropdownItem.href} className="text-sm block px-4 text-gray-900 py-2 hover:bg-red-700 hover:text-white">
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

        <div className="hidden md:flex mr-10">
          <Link href="https://www.facebook.com/TrustholdGroup" target="_blank">
            <FaFacebook className="text-3xl pr-3 transition duration-300 focus:text-yellow-500 hover:text-yellow-500 mr-6" />
          </Link>
          <Link href="mailto:info@trustholdgroup.com">
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
