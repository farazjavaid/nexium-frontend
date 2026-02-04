"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  isScrolled?: boolean;
  whiteMenu?: boolean;
}

const menuItems = [
  { name: "About Us", href: "/about-us" },
  { name: "Our Services", href: "/our-services" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Navbar({ isScrolled = false, whiteMenu = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const hamburgerColor = whiteMenu ? "bg-white" : "bg-[#353638]";

  return (
    <>
      <button
        onClick={toggleMenu}
        className="flex flex-col gap-1.5 w-8 h-6 justify-center items-center relative z-[70] focus:outline-none focus-visible:outline-none"
        aria-label="Toggle menu"
      >
        <span
          className={`w-full h-0.5 ${hamburgerColor} transition-all duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`w-full h-0.5 ${hamburgerColor} transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`w-full h-0.5 ${hamburgerColor} transition-all duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      <div
        className={`fixed top-[100px] lg:top-[110px] left-0 right-0 bottom-0 bg-white z-50 transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <div className="h-full flex items-center justify-center px-6">
          <nav className="w-full max-w-7xl">
            <ul className="space-y-6 lg:space-y-8">
              {menuItems.map((item, index) => (
                <li
                  key={item.href}
                  className={`transform transition-all duration-500 ease-out ${
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: isOpen ? `${index * 50}ms` : "0ms" }}
                >
                  <Link
                    href={item.href}
                    onClick={toggleMenu}
                    className={`block text-4xl lg:text-6xl font-light uppercase tracking-tight hover:text-[#267275] transition-colors duration-300 ${
                      pathname === item.href
                        ? "text-[#267275]"
                        : "text-[#353638]"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div
              className={`mt-16 lg:mt-20 transform transition-all duration-500 ease-out ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? `${menuItems.length * 50}ms` : "0ms" }}
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                <div>
                  <p className="text-[#727272] text-sm uppercase tracking-wider mb-3">
                    Email
                  </p>
                  <a
                    href="mailto:support@nexiumtrio.com"
                    className="text-[#353638] text-lg lg:text-xl hover:text-[#267275] transition-colors duration-300"
                  >
                    support@nexiumtrio.com
                  </a>
                </div>
                <div>
                  <p className="text-[#727272] text-sm uppercase tracking-wider mb-3">
                    Follow Us
                  </p>
                  <div className="flex gap-6">
                    <a
                      href="#"
                      className="text-[#353638] text-lg lg:text-xl hover:text-[#267275] transition-colors duration-300"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="#"
                      className="text-[#353638] text-lg lg:text-xl hover:text-[#267275] transition-colors duration-300"
                    >
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="text-[#353638] text-lg lg:text-xl hover:text-[#267275] transition-colors duration-300"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
