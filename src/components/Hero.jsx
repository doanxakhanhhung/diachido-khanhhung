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

  }, []);

  const scrollToDiaChi = () => {

    const section = document.getElementById("diachi");

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
      });

    }

  };

  return (

    <section
      className="hero"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),
          url(${images[current]})
        `,
      }}
    >

      <div className="overlay">

        <h1>ĐỊA CHỈ ĐỎ SỐ</h1>

        <p>
          Khám phá lịch sử cách mạng quê hương Khánh Hưng
        </p>

        <button onClick={scrollToDiaChi}>
          BẮT ĐẦU KHÁM PHÁ
        </button>

      </div>

    </section>

  );

}

export default Hero;