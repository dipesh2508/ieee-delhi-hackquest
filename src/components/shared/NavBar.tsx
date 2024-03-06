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
    <nav className="w-full flex flex-row items-center gap-8 justify-center mt-8 align-middle h-auto">
      <div className="w-36 ml-12 hidden md:block font-primary">
        <img src="https://raw.githubusercontent.com/dipesh2508/ieee-delhi-hackquest/main/public/SAC_Logo.png" alt="logo" />
      </div>
      <div className="flex flex-col items-center justify-center rounded-2xl bg-glassmorphism p-3 text-primary md:mx-auto md:mt-0 md:w-fit md:flex-row md:gap-8 md:rounded-full md:p-5 md:px-12 ">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={() => setIsOpen(!isOpen)} //  Event handler for a click event that toggles the value of isOpen.
          className="focus:ring-cta inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-primary ring-primary hover:text-primary focus:outline-none focus:ring-2  dark:focus:ring-gray-600 md:hidden"
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
        <Link href="https://unstop.com/p/hackquest-hackathon-ieee-delhi-section-student-activities-committee-906129?lb=juhgQeA">
          <Button className="hidden rounded-full px-6 md:block">
            Register
          </Button>
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
                className="block px-8 py-2 hover:text-secondary"
              >
                {data.title}
              </Link>
            ))}
            <Link href="https://unstop.com/p/hackquest-hackathon-ieee-delhi-section-student-activities-committee-910168">
              <Button className="rounded-full px-6">Register</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
