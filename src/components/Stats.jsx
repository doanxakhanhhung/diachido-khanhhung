import { useEffect, useState } from "react";

function Counter({ end, suffix = "" }) {

  const [count, setCount] = useState(0);

  useEffect(() => {

    let start = 0;

    const duration = 1800;

    const increment = end / (duration / 20);

    const timer = setInterval(() => {

      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(Math.floor(start));

    }, 20);

    return () => clearInterval(timer);

  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );

}

function Stats() {

  return (

    <section className="stats">

      <div
        className="stat"
        data-aos="fade-up"
      >
        <h2>
          <Counter end={3} />
        </h2>

        <p>Địa chỉ đỏ</p>

      </div>

      <div
        className="stat"
        data-aos="fade-up"
      >

        <h2>
          <Counter end={100} suffix="+" />
        </h2>

        <p>Hình ảnh tư liệu</p>

      </div>

      <div
        className="stat"
        data-aos="fade-up"
      >

        <h2>
          <Counter end={10} suffix="+" />
        </h2>

        <p>Video giới thiệu</p>

      </div>

      <div
        className="stat"
        data-aos="fade-up"
      >

        <h2>24/7</h2>

        <p>Truy cập mọi lúc</p>

      </div>

    </section>

  );

}

export default Stats;