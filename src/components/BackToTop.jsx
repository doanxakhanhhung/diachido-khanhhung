import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Lên đầu trang"
      title="Lên đầu trang"
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        width: "45px",
        height: "45px",
        borderRadius: "50%",
        border: "none",
        background: "#0054a6",
        color: "#fff",
        fontSize: "20px",
        fontWeight: "bold",
        cursor: "pointer",
        zIndex: 9999,
        boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
      }}
    >
      ↑
    </button>
  );
}