import { Link } from "react-router-dom";

function Menu() {
  return (
    <section className="menu">

      <Link to="/" className="card-link">
        <div className="card">
          <h2>🏠</h2>
          <h3>Trang chủ</h3>
        </div>
      </Link>

      <Link to="/dia-chi" className="card-link">
        <div className="card">
          <h2>📍</h2>
          <h3>Địa chỉ đỏ</h3>
        </div>
      </Link>

      <Link to="/ban-do" className="card-link">
        <div className="card">
          <h2>🗺</h2>
          <h3>Bản đồ</h3>
        </div>
      </Link>

      <Link to="/thu-vien" className="card-link">
        <div className="card">
          <h2>🖼</h2>
          <h3>Thư viện</h3>
        </div>
      </Link>

      <Link to="/video" className="card-link">
        <div className="card">
          <h2>🎥</h2>
          <h3>Video</h3>
        </div>
      </Link>

    </section>
  );
}

export default Menu;