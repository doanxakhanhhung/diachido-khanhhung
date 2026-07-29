function BanDo() {

  return (

    <div className="detail-container">

      <div className="detail-content">

        <h1>🗺 BẢN ĐỒ ĐỊA CHỈ ĐỎ</h1>

        <p>
          Xem toàn bộ các địa chỉ đỏ của xã Khánh Hưng trên bản đồ.
        </p>

        <iframe
          src="DÁN_LINK_GOOGLE_MAPS"
          width="100%"
          height="650"
          style={{
            border:0,
            borderRadius:"15px",
            marginTop:"20px"
          }}
          loading="lazy"
          allowFullScreen
        />

      </div>

    </div>

  );

}

export default BanDo;