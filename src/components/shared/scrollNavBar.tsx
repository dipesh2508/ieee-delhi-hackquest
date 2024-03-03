"use client";

import logo from "@/assets/hackquest logo.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { navLinks } from "@/constants/nav";
import { MotionDiv } from "../animation/motionDiv";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

/**
 * A functional component representing a navigation bar.
 * @returns {JSX.Element} - The JSX element representing the navigation bar.
 */
const ScrollNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      transition={{
        delay: 0.3,
        ease: "easeInOut",
        duration: 0.3,
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <nav className=" border-b-2 border-primary bg-dark py-6 text-primary">
        <div className="mx-auto my-auto flex max-h-96 max-w-screen-xl flex-wrap items-center justify-between px-2 align-middle md:px-0">
          <a href="" className="flex w-48 items-center">
            <Image src={logo} className="m-0" alt="HackQuest" loading="lazy" />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            onClick={() => setIsOpen(!isOpen)} //  Event handler for a click event that toggles the value of isOpen.
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-primary hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-primary dark:text-cyan-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
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
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="mt-4 flex flex-col p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:p-0 ">
              {navLinks.map((nav, key) => (
                <li key={key}>
                  <Link
                    href={nav.path}
                    className="duration-250 relative block cursor-pointer
                    px-4
                    py-2
                    transition-all
                    before:absolute
                    before:-bottom-0.5
                    before:left-1/2
                    before:h-1
                    before:w-0
                    before:-translate-x-1/2
                    before:rounded-full
                    before:bg-gradient-to-r
                    before:from-primary
                    before:via-secondary
                    before:to-primary
                    before:opacity-0
                    before:transition-all
                    before:duration-500
                    before:content-['']
                    hover:text-secondary
                    hover:before:w-3/4
                    hover:before:opacity-100"
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}

              <Link href="https://unstop.com/p/hackquest-hackathon-ieee-delhi-section-student-activities-committee-906129?lb=juhgQeA">
                <Button className="hidden rounded-full px-6 md:block">
                  Register
                </Button>
              </Link>
            </ul>
          </div>
        </div>
        {isOpen && (
          <div className="absolute z-50 mt-3 flex w-full flex-col bg-dark px-3 py-4 text-center text-base font-semibold md:hidden">
            {navLinks.map((data, id) => (
              <Link
                href={`#${data.path}`}
                onClick={() => setIsOpen(false)}
                key={id}
                className="block py-2 pl-3 pr-4 hover:rounded hover:bg-cyan-300 hover:text-secondary"
              >
                {data.title}
              </Link>
            ))}
            <Link href="https://unstop.com/p/hackquest-hackathon-ieee-delhi-section-student-activities-committee-906129?lb=juhgQeA">
            <Button>Register</Button>
            </Link>
          </div>
        )}
      </nav>
    </MotionDiv>
  );
};

export default ScrollNavBar;
