"use client"

import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  // Check scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // show button after 300px scroll
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null; // hide button if not scrolled enough

  return (
<button
  onClick={scrollToTop}
  className="fixed bottom-8 right-8 bg-gray-500 text-white p-4 rounded-full"
>
  <FaArrowUp size={20} /> 
</button>


  );
}
