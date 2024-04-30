"use client"
import { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaBars, FaEnvelope, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

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
  const logoRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const animateOnLoad = () => {
      if (logoRef.current && hamburgerRef.current && navRef.current && mobileMenuRef.current) {
        logoRef.current.style.animation = "slideInLeft 1s ease-out forwards";
        hamburgerRef.current.style.animation =
          "slideInRight 1s ease-out forwards";
          navRef.current.style.animation = "slideDown 0.5s ease-out forwards";
          mobileMenuRef.current.style.animation = "slideDown 0.5s ease-out forwards";
      }
    };

    animateOnLoad();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav 
    ref={navRef}
    className="  text-gray-200 absolute top-0 right-0 left-0 z-10 animate-slide-down">
      <div className="flex justify-between items-center bg-red-700">
        <div className="flex items-center pl-8" ref={logoRef}>
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={250} height={60} />
          </Link>
        </div>

        {/* MOBILE NAV ICON */}
        <div
          className="md:hidden block absolute top-4 right-8"
          ref={hamburgerRef}
        >
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
                className="text-sm flex items-center transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500 relative"
                style={{ textUnderlineOffset: "8px" }}
              >
                {item.label}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 transition-transform origin-left transform scale-x-0 group-hover:scale-x-100"></div>
                {item.label === "Projects" && (
                  <FaAngleDown className="ml-1 text-sm" /> // Add the dropdown icon
                )}
              </Link>
              {item.label === "Projects" && isDropdownOpen && (
                <div className="absolute top-full left-0 w-40 bg-white rounded-lg shadow-lg py-2 z-10">
                  {item.dropdownItems?.map((dropdownItem, i) => (
                    <Link
                      key={i}
                      href={dropdownItem.href}
                      className="text-sm block px-4 text-gray-900 py-2 hover:bg-red-700 hover:text-white"
                    >
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
            <FaFacebook className="text-2xl pr-3 transition duration-300 focus:text-yellow-500 hover:text-yellow-500 mr-6" />
          </Link>
          <Link href="mailto:info@trustholdgroup.com">
            <FaEnvelope className="text-2xl pr-3 transition duration-300 focus:text-yellow-500 hover:text-yellow-500" />
          </Link>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobileMenu"
        className={`mobile-menu overflow-hidden transition-all duration-500 bg-red-700 bg-opacity-75 ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
        ref={mobileMenuRef}
      >
        <div className="flex flex-col justify-center items-center w-full">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block text-gray-200 cursor-pointer py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
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
