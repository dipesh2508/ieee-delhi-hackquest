"use client"
import { useEffect, useState } from "react";
import ScrollNavBar from "../shared/scrollNavBar";
import NavBar from "../shared/NavBar";

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 30) { // Check if ref exists before dereferencing
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup function to remove event listener
      return () => window.removeEventListener('scroll', handleScroll);
    }, [isVisible]);
  return (
    <header className="fixed z-50 top-0 w-full">
        {isVisible && <ScrollNavBar />}
        {!isVisible && <NavBar />}
    </header>
  )
}

export default Header