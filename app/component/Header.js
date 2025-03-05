"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/images/logo/logo.svg";
import mobileLogo from "@/public/images/logo/new-logo.svg";
import call from "@/public/images/call.svg";
import menu from "@/public/images/menu.svg";
import Link from "next/link";
import CrossIcon from "./svg/CrossIcon";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="w-full h-[46px] md:h-[100px] flex justify-center shadow-md bg-white">
        <div className="max-w-[1250px] w-full flex justify-between items-center pr-4 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Logo"
              width={198}
              height={53}
              quality={100}
              priority
              className="md:block hidden"
            />

            <Image
              src={mobileLogo}
              alt="Mobile Logo"
              width={160}
              height={46}
              quality={100}
              priority
              className="md:hidden"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden font-poppins text-[16px] text-[#333333] md:flex items-center gap-6">
            <Link
              href="#herosection"
              className="text-gray-700 hover:text-[#2B95FA] transition"
            >
              Home
            </Link>
            <Link
              href="#choose"
              className="text-gray-700 hover:text-[#2B95FA] transition"
            >
              About
            </Link>

            <Link
              href="#contact"
              className="text-gray-700 hover:text-[#2B95FA] transition"
            >
              Contact Us
            </Link>

            <Link
              href="#faq"
              className="text-gray-700 hover:text-[#2B95FA] transition"
            >
              FAQ
            </Link>
            <Link href="#" target="_blank">
              <button className="bg-[#2B95FA] lg:w-[152px] lg:h-[48px] rounded-[30px] text-white px-6 py-2 transition hover:bg-[#1A7AC4]">
                Get Started
              </button>
            </Link>
          </nav>
          <div className="md:hidden flex gap-3 ">
            <Link href="#">
              <Image
                className="md:hidden"
                src={call}
                width={24}
                height={24}
                alt=""
              />
            </Link>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <CrossIcon />
              ) : (
                <Image src={menu} width={24} height={24} alt="" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Menu (Left Side) */}
      <div
        className={`fixed top-0 right-0 w-[50%] h-full sm:w-[50%] bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden font-poppins text-[16px] text-[#333333] flex flex-col items-start p-6 z-50`}
      >
        <button
          className="self-end text-gray-700 mb-4"
          onClick={() => setIsOpen(false)}
        >
          <CrossIcon />
        </button>
        <Link
          href="#herosection"
          className="text-gray-700 py-2 text-lg w-full"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          href="#choose"
          className="text-gray-700 py-2 text-lg w-full"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          href="#contact"
          className="text-gray-700 py-2 text-lg w-full"
          onClick={() => setIsOpen(false)}
        >
          Contact Us
        </Link>
        <Link
          href="#faq"
          className="text-gray-700 py-2 text-lg w-full"
          onClick={() => setIsOpen(false)}
        >
          FAQ
        </Link>
        <Link href="#" target="_blank" className="w-full">
          <button className="bg-[#2B95FA] w-full rounded-[30px] text-white py-3 mt-4">
            Get Started
          </button>
        </Link>
      </div>
    </>
  );
};

export default Header;
