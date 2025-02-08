import Link from "next/link";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-2 px-4 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo2.jpg"
            width={50}
            height={50}
            alt="Logo"
            className="w-[40px] h-[40px] rounded-full"
          />
          <h1 className="text-white text-lg font-bold ml-2">Muneer Watches</h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="text-gray-300 hover:text-orange-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="text-gray-300 hover:text-orange-400 transition">
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-300 hover:text-orange-400 transition">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-300 hover:text-orange-400 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-300 text-2xl">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
