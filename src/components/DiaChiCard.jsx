function DiaChiCard({ item }) {
  return (
    <div className="diachi-card">

      <img src={item.hinhanh} alt={item.ten} />

      <div className="card-content">

        <h3>{item.ten}</h3>

        <p>{item.diachi}</p>

        <button>Xem chi tiết</button>

      </div>

    </div>
  );
}

export default DiaChiCard;