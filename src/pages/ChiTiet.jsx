import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import diaChiDo from "../data/diaChiDo";
import Lightbox from "../components/Lightbox";

function ChiTiet() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [toast, setToast] = useState("");

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


  // ===========================
  // CHIA SẺ TRANG
  // ===========================

  const sharePage = async () => {

    const shareData = {
      title: item.ten,

      text:
        `Khám phá ${item.ten} - Địa chỉ đỏ xã Khánh Hưng`,

      url: window.location.href,
    };


    try {

      if (navigator.share) {

        await navigator.share(shareData);

      } else {

        await navigator.clipboard.writeText(
          window.location.href
        );

        alert("Đã sao chép liên kết!");

      }

    } catch (error) {

      console.log(
        "Chia sẻ đã bị hủy:",
        error
      );

    }

  };


  // ===========================
  // SAO CHÉP LIÊN KẾT
  // ===========================

  const copyLink = async () => {

    try {

    await navigator.clipboard.writeText(
      window.location.href
    );

    setToast("Đã sao chép liên kết!");

    setTimeout(() => {
      setToast("");
    }, 2000);

  } catch (error) {

    setToast("Không thể sao chép liên kết.");

    setTimeout(() => {
      setToast("");
    }, 2500);

    }

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


          {/* ===========================
              THÔNG TIN NHANH
          =========================== */}

          <div className="detail-quick-info">


            {/* LOẠI ĐỊA ĐIỂM */}

            <div className="quick-info-item">

              <div className="quick-info-icon">
                🏛
              </div>

              <div className="quick-info-text">

                <strong>
                  Loại địa điểm
                </strong>

                <span>
                  Địa chỉ đỏ
                </span>

              </div>

            </div>


            {/* HÌNH ẢNH */}

            <div className="quick-info-item">

              <div className="quick-info-icon">
                📸
              </div>

              <div className="quick-info-text">

                <strong>
                  Tư liệu
                </strong>

                <span>
                  {item.gallery?.length || 0} hình ảnh
                </span>

              </div>

            </div>


            {/* VIDEO */}

            <div className="quick-info-item">

              <div className="quick-info-icon">
                🎥
              </div>

              <div className="quick-info-text">

                <strong>
                  Video
                </strong>

                <span>
                  Giới thiệu địa điểm
                </span>

              </div>

            </div>


          </div>


          {/* ===========================
              CHIA SẺ
          =========================== */}

          <div className="detail-share">


            <div className="detail-share-title">

              📤 Chia sẻ địa chỉ đỏ

            </div>


            <div className="detail-share-buttons">


              <button
                className="share-btn share"
                onClick={sharePage}
              >

                📤 Chia sẻ

              </button>


              <button
                className="share-btn copy"
                onClick={copyLink}
              >

                📋 Sao chép liên kết

              </button>


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


            {item.gallery.map((img, index) => (

              <div
                className="gallery-item"
                key={index}
                onClick={() =>
                  openLightbox(index)
                }
              >

                <img
                  src={img}
                  alt={`Ảnh ${index + 1}`}
                />


                <div className="gallery-overlay">

                  🔍 Xem ảnh

                </div>

              </div>

            ))}


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
      {toast && (

  <div className="toast-message">

    <span className="toast-icon">
      ✓
    </span>

    <span>
      {toast}
    </span>

  </div>

)}

    </>

  );

}

export default ChiTiet;