import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DiaChi from "./pages/DiaChi";
import BanDo from "./pages/BanDo";
import ThuVien from "./pages/ThuVien";
import Video from "./pages/Video";
import ChiTiet from "./pages/ChiTiet";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dia-chi" element={<DiaChi />} />
      <Route path="/ban-do" element={<BanDo />} />
      <Route path="/thu-vien" element={<ThuVien />} />
      <Route path="/video" element={<Video />} />
      <Route path="/chi-tiet/:id" element={<ChiTiet />} />
    </Routes>
  );
}

export default App;