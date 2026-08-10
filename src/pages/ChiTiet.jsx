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

          <h2>
            Không tìm thấy địa chỉ đỏ.
          </h2>

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


  // ===========================
  // LIGHTBOX
  // ===========================

  const openLightbox = (index) => {

    setCurrentImage(index);

    setLightboxOpen(true);

  };


  const closeLightbox = () => {

    setLightboxOpen(false);

  };


  const nextImage = () => {

    setCurrentImage(
      (prev) =>
        (prev + 1) % item.gallery.length
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

        {/* ===========================
            ẢNH ĐẠI DIỆN
        =========================== */}

        <img
          src={item.hinhanh}
          alt={item.ten}
          className="detail-banner"
        />


        <div className="detail-content">


          {/* ===========================
              TIÊU ĐỀ + ĐỊA CHỈ
          =========================== */}

          <div className="detail-title">

            <h1>
              {item.ten}
            </h1>

            <div className="detail-address">
              📍 {item.diachi}
            </div>

          </div>

          <hr />


          {/* ===========================
              BỐ CỤC 2 CỘT
          =========================== */}

          <div className="detail-two-column">


            {/* ===========================
                CỘT TRÁI
            =========================== */}

            <div className="detail-info">


              {/* GIỚI THIỆU */}

              <div className="detail-section">

                <h2>
                  📖 Giới thiệu
                </h2>

                <p>
                  {item.mota}
                </p>

              </div>


              {/* LỊCH SỬ */}

              <div className="detail-section">

                <h2>
                  📜 Lịch sử
                </h2>

                <p>
                  {item.lichsu}
                </p>

              </div>


              {/* Ý NGHĨA */}

              <div className="detail-section">

                <h2>
                  ⭐ Ý nghĩa giáo dục
                </h2>

                <p>
                  {item.ynghia}
                </p>

              </div>


              {/* ===========================
                  VIDEO
              =========================== */}

              <div className="detail-section">

                <h2>
                  🎥 Video
                </h2>

                <p>
                  Xem video giới thiệu về địa chỉ đỏ:
                </p>

                <a
                  href={item.video}
                  target="_blank"
                  rel="noreferrer"
                >
                  ▶ Xem Video
                </a>

              </div>


            </div>


            {/* ===========================
                CỘT PHẢI
            =========================== */}

            <div className="detail-map">

              <div className="detail-map-box">


                {/* GOOGLE MAP */}

                <h2>
                  🗺 Vị trí
                </h2>

                <iframe
                  src={item.map}
                  width="100%"
                  height="350"
                  style={{
                    border: 0,
                    borderRadius: "12px",
                    marginTop: "10px",
                  }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                >
                </iframe>


                {/* CHỈ ĐƯỜNG */}

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

                <div className="detail-qr">

                  <h2>
                    📱 Mã QR
                  </h2>

                  <p>
                    Quét mã QR để truy cập thông tin.
                  </p>

                  <img
                    src={item.qr}
                    alt="QR Code"
                  />

                </div>


              </div>

            </div>

          </div>


          {/* ===========================
              THƯ VIỆN ẢNH
          =========================== */}

          <h2>
            📸 Thư viện ảnh
          </h2>

          <div className="gallery">

            {item.gallery.map(
              (img, index) => (

                <img
                  key={index}
                  src={img}
                  alt={`Ảnh ${index + 1}`}
                  onClick={() =>
                    openLightbox(index)
                  }
                />

              )
            )}

          </div>


          {/* ===========================
              QUAY LẠI
          =========================== */}

          <button
            className="btn-back"
            onClick={() => navigate("/")}
          >
            ⬅ Quay lại Trang chủ
          </button>


        </div>

      </div>


      {/* ===========================
          LIGHTBOX
      =========================== */}

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