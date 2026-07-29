function About() {

  return (

    <section className="about">

      <div className="about-container">

        <h2>ĐỊA CHỈ ĐỎ XÃ KHÁNH HƯNG</h2>

        <p>
          Hệ thống Địa chỉ đỏ số nhằm giới thiệu các di tích,
          nhà bia tưởng niệm và những địa điểm gắn liền với lịch sử
          đấu tranh cách mạng của quê hương Khánh Hưng.
        </p>

        <div className="about-grid">

          <div className="about-box">
            <span>📍</span>
            <h3>Địa chỉ lịch sử</h3>
            <p>Giới thiệu các địa chỉ đỏ tiêu biểu.</p>
          </div>

          <div className="about-box">
            <span>📖</span>
            <h3>Tư liệu</h3>
            <p>Lưu giữ thông tin lịch sử chính xác.</p>
          </div>

          <div className="about-box">
            <span>🎥</span>
            <h3>Hình ảnh</h3>
            <p>Kho tư liệu ảnh và video.</p>
          </div>

          <div className="about-box">
            <span>🗺</span>
            <h3>Bản đồ</h3>
            <p>Xem vị trí trên Google Maps.</p>
          </div>

        </div>

      </div>

    </section>

  );

}

export default About;