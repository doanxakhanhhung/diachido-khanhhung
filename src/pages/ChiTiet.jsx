import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import diaChiDo from "../data/diaChiDo";
import Lightbox from "../components/Lightbox";

function ChiTiet() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const item = diaChiDo.find((x) => x.id == id);

  if (!item) {
    return (
      <div className="detail-container">
        <div className="detail-content">
          <h2>Không tìm thấy địa chỉ đỏ.</h2>

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

  const openLightbox = (index) => {

    setCurrentImage(index);
    setLightboxOpen(true);

  };

  const closeLightbox = () => {

    setLightboxOpen(false);

  };

  const nextImage = () => {

    setCurrentImage(
      (prev) => (prev + 1) % item.gallery.length
    );

  };

  const prevImage = () => {

    setCurrentImage(
      (prev) =>
        (prev - 1 + item.gallery.length) %
        item.gallery.length
    );

  };

  return (

    <>

      <div
        className="detail-container"
        data-aos="fade-up"
      >

        {/* ẢNH ĐẠI DIỆN */}

        <img
          src={item.hinhanh}
          alt={item.ten}
          className="detail-banner"
        />

        <div className="detail-content">

          <h1>{item.ten}</h1>

          <hr />

          {/* ĐỊA CHỈ */}

          <h2>📍 Địa chỉ</h2>

          <p>
            {item.diachi}
          </p>


          {/* GIỚI THIỆU */}

          <h2>📖 Giới thiệu</h2>

          <p>
            {item.mota}
          </p>


          {/* LỊCH SỬ */}

          <h2>📜 Lịch sử</h2>

          <p>
            {item.lichsu}
          </p>


          {/* Ý NGHĨA */}

          <h2>⭐ Ý nghĩa giáo dục</h2>

          <p>
            {item.ynghia}
          </p>


          {/* THƯ VIỆN ẢNH */}

          <h2>📸 Thư viện ảnh</h2>

          <div className="gallery">

            {item.gallery.map((img, index) => (

              <img
                key={index}
                src={img}
                alt={`Ảnh ${index + 1}`}
                onClick={() => openLightbox(index)}
              />

            ))}

          </div>


          {/* VIDEO */}

          <h2>🎥 Video</h2>

          <a
            href={item.video}
            target="_blank"
            rel="noreferrer"
          >
            ▶ Xem Video
          </a>


          {/* GOOGLE MAPS */}

          <h2>🗺 Google Maps</h2>

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
          >
          </iframe>


          {/* CHỈ ĐƯỜNG */}

          <br />
          <br />

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


          {/* QR */}

          <h2>📱 Mã QR</h2>

          <img
            src={item.qr}
            alt="QR Code"
            width="220"
          />

          <br />
          <br />


          {/* QUAY LẠI */}

          <button
            className="btn-back"
            onClick={() => navigate("/")}
          >
            ⬅ Quay lại Trang chủ
          </button>

        </div>

      </div>


      {/* LIGHTBOX */}

      {lightboxOpen && (

        <Lightbox
          images={item.gallery}
          currentIndex={currentImage}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />

      )}

    </>

  );

}

export default ChiTiet;