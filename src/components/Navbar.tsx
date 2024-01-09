"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="flex bg-white overflow-hidden justify-around z-[1000] items-center md:px-10 py-2 px-3 cursor-pointer w-full ease-in-out transition-all relative">
      <Link href="/">
        <Image
          width={120}
          height={100}
          src="/images/evveland_ai_agent_logo.png"
          alt="Evveland AI platform logo"
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-between gap-8 items-center font-bold">
        <Link href="/">Home</Link>
        <Link href="">Solutions</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/contact">Talk to us</Link>
      </div>

      <div className="flex justify-between font-bold">
        <Link href="/login">
          <button className="py-2 px-4 rounded-full bg-gray-100">Login</button>
        </Link>
        <Link href="/signup">
          <button className="py-2 px-4 rounded-full bg-green-100">
            Signup
          </button>
        </Link>
      </div>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed top-0 right-0 bg-gray-500 overflow-hidden transition-transform transform w-64">
          <div className="absolute top-4 right-4">
            <FaTimes
              className="text-black cursor-pointer"
              onClick={closeMobileMenu}
            />
          </div>
          <ul className="md:flex flex-col ml-8 space-y-4 mt-8">
            <li className="hover:text-gray-300">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link href="/solutions">Solutions</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link href="/pricing">Pricing</Link>
            </li>
          </ul>

          {/* Horizontal Divider */}
          <hr className="border-t my-4 border-gray-100" />

          <div className="md:flex flex-col space-y-4 space-x-2 mt-4 ml-8 pb-4">
            <Link href="/login">
              <button className="py-2 px-4 rounded-full bg-gray-100">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="py-2 px-4 rounded-full bg-green-100">
                Signup
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
