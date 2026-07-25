import { useEffect, useState } from "react";

import banner1 from "../assets/images/banner/banner1.jpg";
import banner2 from "../assets/images/banner/banner2.jpg";
import banner3 from "../assets/images/banner/banner3.jpg";

function Hero() {

  const images = [
    banner1,
    banner2,
    banner3,
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrent((prev) => (prev + 1) % images.length);

    }, 5000);

    return () => clearInterval(timer);

  }, [images.length]);

  const scrollToDiaChi = () => {

    const section = document.getElementById("diachi");

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
      });

    }

  };

  const nextSlide = () => {

    setCurrent((prev) => (prev + 1) % images.length);

  };

  const prevSlide = () => {

    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  };

  return (

    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)), url(${images[current]})`,
      }}
    >

      <div
        className="overlay"
        data-aos="zoom-in"
      >

        <h1>ĐỊA CHỈ ĐỎ SỐ</h1>

        <p>
          Khám phá lịch sử cách mạng quê hương Khánh Hưng
        </p>

        <button onClick={scrollToDiaChi}>
          BẮT ĐẦU KHÁM PHÁ
        </button>

      </div>

      <button
        className="arrow left"
        onClick={prevSlide}
      >
        ❮
      </button>

      <button
        className="arrow right"
        onClick={nextSlide}
      >
        ❯
      </button>

      <div className="dots">

        {images.map((_, index) => (

          <span
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          />

        ))}

      </div>

    </section>

  );

}

export default Hero;