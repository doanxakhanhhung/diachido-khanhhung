function Hero() {

  const scrollToDiaChi = () => {
    const section = document.getElementById("diachi");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="hero">

      <div className="overlay">

        <h1>
          ĐỊA CHỈ ĐỎ SỐ
        </h1>

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