"use client";

import Link from "next/link";
import { FaArrowCircleUp } from "react-icons/fa";
import { useEffect, useState } from "react";
const ToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        // Check if ref exists before dereferencing
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);
  return <div>{isVisible && <UpElement />}</div>;
};

function UpElement() {
  return (
    <div className="fixed bottom-8 right-8 hidden h-12 w-12 items-center align-middle text-secondary md:flex">
      <Link href="/">
        <FaArrowCircleUp size={48} />
      </Link>
    </div>
  );
}

export default ToTop;
