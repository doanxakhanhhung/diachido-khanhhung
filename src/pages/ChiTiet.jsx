import { useParams, useNavigate } from "react-router-dom";
import diaChiDo from "../data/diaChiDo";

function ChiTiet() {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = diaChiDo.find((x) => x.id == id);

  if (!item) {
    return <h2>Không tìm thấy địa chỉ đỏ.</h2>;
  }

  return (
    <div
  className="detail-container"
  data-aos="fade-up"
>
      <img
        src={item.hinhanh}
        alt={item.ten}
        className="detail-banner"
      />

      <div className="detail-content">
        <h1>{item.ten}</h1>

        <hr />

        <h2>📍 Địa chỉ</h2>
        <p>{item.diachi}</p>

        <h2>📖 Giới thiệu</h2>
        <p>{item.mota}</p>

        <h2>📜 Lịch sử</h2>
        <p>{item.lichsu}</p>

        <h2>⭐ Ý nghĩa giáo dục</h2>
        <p>{item.ynghia}</p>

        <h2>📸 Thư viện ảnh</h2>

        <div className="gallery">
          {item.gallery.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Ảnh ${index + 1}`}
            />
          ))}
        </div>

        <h2>🎥 Video</h2>

        <a
          href={item.video}
          target="_blank"
          rel="noreferrer"
        >
          ▶ Xem Video
        </a>

        <h2>🗺 Google Maps</h2>

        {/* Bước 7: Hiển thị bản đồ ngay trên website */}
        <iframe
          src={item.map}
          width="100%"
          height="450"
          style={{
            border: 0,
            borderRadius: "12px",
            marginTop: "15px",
          }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>

        <br />
        <br />

        {/* Bước 8: Nút chỉ đường */}
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            item.diachi
          )}`}
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn-back">
            📍 Chỉ đường đến đây
          </button>
        </a>

        <h2>📱 Mã QR</h2>

        <img
          src={item.qr}
          alt="QR Code"
          width="220"
        />

        <br />
        <br />

        <button
          className="btn-back"
          onClick={() => navigate("/")}
        >
          ⬅ Quay lại Trang chủ
        </button>
      </div>
    </div>
  );
}

export default ChiTiet;