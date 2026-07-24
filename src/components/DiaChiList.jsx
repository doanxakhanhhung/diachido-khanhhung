import diaChiDo from "../data/diaChiDo";
import DiaChiCard from "./DiaChiCard";

function DiaChiList() {
  return (
    <section
  id="diachi"
  className="diachi"
>
      <h2>📍 ĐỊA CHỈ ĐỎ NỔI BẬT</h2>

      <div className="diachi-grid">
        {diaChiDo.map((item) => (
          <DiaChiCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}

export default DiaChiList;