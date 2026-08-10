import { useEffect } from "react";

function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) {

  // Nhấn ESC để đóng
  useEffect(() => {

    const handleKeyDown = (e) => {

      if (e.key === "Escape") {
        onClose();
      }

      if (e.key === "ArrowLeft") {
        onPrev();
      }

      if (e.key === "ArrowRight") {
        onNext();
      }

    };

    document.addEventListener("keydown", handleKeyDown);

    // Khóa cuộn trang khi Lightbox mở
    document.body.style.overflow = "hidden";

    return () => {

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = "auto";

    };

  }, [onClose, onPrev, onNext]);

  return (

    <div
      className="lightbox"
      onClick={onClose}
    >

      <button
        className="lightbox-close"
        onClick={onClose}
      >
        ✕
      </button>

      <button
        className="lightbox-prev"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
      >
        ‹
      </button>

      <img
        src={images[currentIndex]}
        alt={`Ảnh ${currentIndex + 1}`}
        className="lightbox-image"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        className="lightbox-next"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        ›
      </button>

      <div className="lightbox-counter">
        Ảnh {currentIndex + 1} / {images.length}
      </div>

    </div>

  );

}

export default Lightbox;