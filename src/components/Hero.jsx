import { useEffect, useState } from "react";

import logo from "../assets/images/logo-doan.png";

function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={scroll ? "header active" : "header"}>
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="title">
          <h2>ĐỊA CHỈ ĐỎ SỐ</h2>
          <h3>XÃ KHÁNH HƯNG</h3>
          <p>Khám phá lịch sử bằng công nghệ số</p>
        </div>
      </div>
    </header>
  );
}

export default Header;