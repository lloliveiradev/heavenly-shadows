'use client';

import Image from 'next/image';
import Link from "next/link";
import styles from '../styles/index';
import logo from "../public/images/full_logo.png";
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import { useState } from "react";

export default function Navbar({ navItems }) {
  const [isMobile, setIsMobile] = useState(false);
  const toggleMobile = () => {
    setIsMobile(!isMobile);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 px-5 relative bg-gradient-to-r from-[#1e293b] to-[#080b10]`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`mx-auto flex justify-between gap-8`}>
        <Link href="#home" className="mr-4 block cursor-pointer pt-2" >
          <Image
            src={logo}
            alt="logo sombras celestes"
            priority
            className="object-cover h-[62px] w-[250px] absolute -mt-[12px]"
          />
        </Link>

        <div className="lg:hidden">
          <button
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={toggleMobile} type="button" >
            <span className="text-white hover:text-violet-500 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="#fff"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path fill='#ffffff'
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed top-0 left-0 min-h-screen w-80 bg-[#1e293b] shadow-lg transform transition-transform duration-300 ease-in-out ${isMobile ? "translate-x-0" : "-translate-x-full"} lg:hidden z-50`}>
          <div className="flex flex-row items-center border-b pb-4">
            <Link href="#home" className="cursor-pointer text-sky-600 font-bold text-xl pt-4 ps-4">
              SOMBRAS CELESTES
            </Link>
            <button onClick={toggleMobile} className="absolute top-4 right-4 text-gray-100 hover:text-violet-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col h-full gap-4 p-4">
            {navItems.map((item: any, index: number) => (
              <li key={index} className="flex items-center p-1 text-lg gap-x-2 text-gray-100 hover:text-violet-500">
                <Link href={item.href} className="flex items-center" onClick={toggleMobile}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {navItems.map((item: any, index: number) => (
              <li key={index} className="flex items-center p-1 text-lg gap-x-2 text-gray-100 hover:text-violet-500">
                <Link href={item.href} className="flex items-center">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}