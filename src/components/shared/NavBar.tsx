"use client";
import { useState } from "react";
import { navLinks } from "@/constants/nav";
import Link from "next/link";
import { Button } from "../ui/button";
import logo from "@/assets/hackquest logo.png";
import Image from "next/image";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed z-50 w-full">
      <div className="absolute left-24 hidden md:block top-14 w-48 font-primary">
        <Image src={logo} alt="logo" />
      </div>
      <div className="md:absolute mx-24 md:right-24 md:mx-auto md:top-8 z-10 mt-12 md:mt-0 flex flex-col md:gap-8 items-center justify-center rounded-2xl md:rounded-full bg-glassmorphism p-3 text-primary md:px-12 md:w-fit md:flex-row md:p-5 ">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={() => setIsOpen(!isOpen)} //  Event handler for a click event that toggles the value of isOpen.
          className="hover:text-primary focus:ring-cta inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-primary ring-primary focus:outline-none focus:ring-2  dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {/* Map over the navLinks array and render a Link component for each item */}
        {/* These links are hidden on small screens and visible on medium and larger screens */}
        {navLinks.map((link, key) => (
          <Link
            key={key}
            href={link.path}
            className="hidden px-4 py-2 font-medium hover:text-secondary md:block"
          >
            {link.title}
          </Link>
        ))}
        <Link href="/register">
          <Button className="rounded-full px-6 hidden md:block">Register</Button>
        </Link>

        {/* If the navigation menu is open, render a div with the navigation links */}
        {/* This div is displayed on small screens and hidden on medium and larger screens */}
        {isOpen && (
          <div className="z-10 mt-3 flex w-full flex-col px-3 py-4 text-center text-base font-semibold md:hidden">
            {navLinks.map((data) => (
              <Link
                href={data.path}
                onClick={() => setIsOpen(false)}
                key={data.title}
                className="hover:text-secondary block py-2 px-8"
              >
                {data.title}
              </Link>
            ))}
            <Link href="/register">
          <Button className="rounded-full px-6">Register</Button>
        </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
