import logo from "../assets/images/logo-doan.png";

function Header() {
  return (
    <header className="header">

      <div className="header-container">

        <div className="logo">

          <img src={logo} alt="Logo Đoàn" />

        </div>

        <div className="title">

          <h2>ĐOÀN TNCS HỒ CHÍ MINH</h2>

          <h3>XÃ KHÁNH HƯNG</h3>

          <p>ĐỊA CHỈ ĐỎ SỐ</p>

        </div>

      </div>

    </header>
  );
}

export default Header;