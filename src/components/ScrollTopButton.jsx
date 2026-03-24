import { useState, useEffect } from "react";

const ScrollTopButton = () => {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollTop}
      className="fixed bottom-6 right-6 bg-[#F29200] text-white w-12 h-12 rounded-full shadow-lg hover:bg-black transition z-50"
    >
      ↑
    </button>
  );
};

export default ScrollTopButton;