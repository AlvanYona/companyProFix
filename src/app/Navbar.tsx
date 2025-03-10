"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter(); // Digunakan untuk navigasi kembali ke home

  // Menutup dropdown jika klik di luar area dropdown
  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <nav className="bg-[#47cad2] sticky top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4 relative">
        {/* Logo (Klik untuk kembali ke Home) */}
        <button onClick={() => router.push("/")} className="focus:outline-none">
          <Image src="/logo.png" alt="SRNDPT" width={50} height={50} className="h-auto cursor-pointer" />
        </button>

        {/* Tombol Menu untuk Desktop */}
        <div className="hidden md:flex gap-6">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/aboutus" },
            { name: "Product", path: "/product" },
            { name: "Teams", path: "/teams" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => router.push(item.path)}
              className="w-[12vh] h-10 bg-white rounded-md border-2 border-black shadow-md text-[15px] font-semibold text-black transition active:shadow-none active:translate-x-[2px] active:translate-y-[2px] focus:outline-none"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Dropdown Menu untuk Mobile */}
        <div className="md:hidden relative" ref={dropdownRef}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className="flex items-center gap-2 text-black focus:outline-none"
          >
            Menu {isOpen ? <IoChevronUp size={20} /> : <IoChevronDown size={20} />}
          </button>

          {/* Dropdown */}
          {isOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white shadow-md rounded-md py-2 w-40 z-50">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/aboutus" },
                { name: "Product", path: "/product" },
                { name: "Teams", path: "/teams" },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    router.push(item.path);
                    setIsOpen(false); // Menutup dropdown setelah klik
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
