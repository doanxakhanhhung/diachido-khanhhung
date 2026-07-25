import { useEffect, useState } from "react";
import logo from "../assets/images/logo-doan.png";

function Header() {

  const [active, setActive] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 80) {
        setActive(true);
      } else {
        setActive(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <header className={active ? "header active" : "header"}>

      <div className="header-container">

        <div className="logo">
          <img src={logo} alt="Logo Đoàn" />
        </div>

        <div className="title">
          <h2>ĐOÀN TNCS HỒ CHÍ MINH</h2>
          <h3>XÃ KHÁNH HƯNG</h3>
          <p>TỈNH TÂY NINH</p>
        </div>

      </div>

    </header>

  );

}

export default Header;