import { useState, useEffect } from "react";

import banner1 from "../assets/images/banner/banner1.jpg";
import banner2 from "../assets/images/banner/banner2.jpg";
import banner3 from "../assets/images/banner/banner3.jpg";

function Hero() {
  const banners = [banner1, banner2, banner3];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,50,120,.55), rgba(0,50,120,.55)),
          url(${banners[current]})
        `,
      }}
    >
      <div className="overlay">
        <h1>ĐỊA CHỈ ĐỎ SỐ</h1>

        <p>
          Khám phá lịch sử cách mạng quê hương Khánh Hưng
        </p>

        <button>BẮT ĐẦU KHÁM PHÁ</button>
      </div>
    </section>
  );
}

export default Hero;