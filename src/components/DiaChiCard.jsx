import { Link } from "react-router-dom";

function DiaChiCard({ item }) {
  return (
    <Link
      to={`/chi-tiet/${item.id}`}
      className="card-link"
    >
      <div
        className="diachi-card"
        data-aos="zoom-in"
      >
        <div className="image-box">
          <img
            src={item.hinhanh}
            alt={item.ten}
          />

          <span className="badge">
            📍 Địa chỉ đỏ
          </span>
        </div>

        <div className="card-content">

          <h3>{item.ten}</h3>

          <p className="address">
            📌 {item.diachi}
          </p>

          <p className="description">
            {item.mota}
          </p>

          <button>
            Khám phá ngay →
          </button>

        </div>

      </div>
    </Link>
  );
}

export default DiaChiCard;