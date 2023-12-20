import { useState, useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const GoTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    useEffect(() => {
      window.addEventListener("scroll", toggleVisibility);

      return () => {
        window.removeEventListener("scroll", toggleVisibility);
      };
    }, []);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

  return (
    <button
      className={`fixed bottom-10 right-10 bg-blue-500 text-2xl hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow focus:outline-none ${
        isVisible ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <FaArrowAltCircleUp/>
    </button>
  );
};
export default GoTop;
