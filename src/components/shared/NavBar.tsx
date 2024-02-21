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
    <div>
      <div className="absolute left-24 top-14 z-10 w-48 font-primary">
        <Image src={logo} alt="logo" />
      </div>
      <div className="absolute right-24 top-8 z-10 mx-auto flex flex-col items-center justify-center rounded-full bg-glassmorphism bg-opacity-30 p-3 px-12 text-primary md:w-fit md:flex-row md:p-5 ">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={() => setIsOpen(!isOpen)} //  Event handler for a click event that toggles the value of isOpen.
          className="hover:text-cta focus:ring-cta inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-primary ring-primary focus:outline-none focus:ring-2  dark:focus:ring-gray-600 md:hidden"
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
          <Button className="rounded-full px-6">Register</Button>
        </Link>

        {/* If the navigation menu is open, render a div with the navigation links */}
        {/* This div is displayed on small screens and hidden on medium and larger screens */}
        {isOpen && (
          <div className="bg-dark-2 z-10 mt-3 flex w-full flex-col px-3 py-4 text-center text-base font-semibold md:hidden">
            {navLinks.map((data) => (
              <Link
                href={data.path}
                onClick={() => setIsOpen(false)}
                key={data.title}
                className="hover:text-cta block py-2 pl-3 pr-4"
              >
                {data.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
