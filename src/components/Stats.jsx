import { useEffect, useState, useRef } from "react";

function Counter({ end, suffix = "" }) {

  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  const counterRef = useRef(null);

  // Chỉ chạy khi cuộn tới Stats
  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }

      },

      {
        threshold: 0.4,
      }

    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();

  }, []);

  // Hiệu ứng đếm số
  useEffect(() => {

    if (!start) return;

    let current = 0;

    const duration = 1800;

    const stepTime = 20;

    const increment = end / (duration / stepTime);

    const timer = setInterval(() => {

      current += increment;

      if (current >= end) {

        current = end;

        clearInterval(timer);

      }

      setCount(Math.floor(current));

    }, stepTime);

    return () => clearInterval(timer);

  }, [start, end]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
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
        data-aos-delay="100"
      >

        <h2>
          <Counter end={100} suffix="+" />
        </h2>

        <p>Hình ảnh tư liệu</p>

      </div>

      <div
        className="stat"
        data-aos="fade-up"
        data-aos-delay="200"
      >

        <h2>
          <Counter end={10} suffix="+" />
        </h2>

        <p>Video giới thiệu</p>

      </div>

      <div
        className="stat"
        data-aos="fade-up"
        data-aos-delay="300"
      >

        <h2>24/7</h2>

        <p>Truy cập mọi lúc</p>

      </div>

    </section>

  );

}

export default Stats;