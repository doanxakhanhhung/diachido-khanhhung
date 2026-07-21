import { useParams } from "react-router-dom";
import diaChiDo from "../data/diaChiDo";

function ChiTiet() {
  const { id } = useParams();

  const item = diaChiDo.find((x) => x.id == id);

  if (!item) {
    return <h2>Không tìm thấy địa chỉ.</h2>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <img
        src={item.image}
        alt={item.ten}
        style={{
          width: "100%",
          maxHeight: "500px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <h1 style={{ marginTop: "20px" }}>{item.ten}</h1>

      <p>
        <strong>Địa chỉ:</strong> {item.diachi}
      </p>

      <p>
        <strong>Mô tả:</strong>
      </p>

      <p>{item.mota}</p>
    </div>
  );
}

export default ChiTiet;