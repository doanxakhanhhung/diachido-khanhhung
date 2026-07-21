import { Link } from "react-router-dom";

function DiaChiCard({ item }) {
  return (
    <Link
      to={`/chi-tiet/${item.id}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div className="diachi-card">
        <img src={item.hinhanh} alt={item.ten} />

        <div className="card-content">
          <h3>{item.ten}</h3>

          <p>{item.diachi}</p>

          <button>Xem chi tiết</button>
        </div>
      </div>
    </Link>
  );
}

export default DiaChiCard;