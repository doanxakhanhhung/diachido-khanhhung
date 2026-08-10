import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import DiaChi from "./pages/DiaChi";
import BanDo from "./pages/BanDo";
import ThuVien from "./pages/ThuVien";
import Video from "./pages/Video";
import ChiTiet from "./pages/ChiTiet";


// ===========================
// CUỘN LÊN ĐẦU TRANG
// ===========================

function ScrollToTop() {

  const { pathname } = useLocation();

  useEffect(() => {

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

  }, [pathname]);

  return null;
}


// ===========================
// APP
// ===========================

function App() {

  // ===========================
  // AOS
  // ===========================

  useEffect(() => {

    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

  }, []);


  return (

    <>

      {/* Tự động đưa trang lên đầu khi chuyển trang */}
      <ScrollToTop />


      {/* ===========================
          ROUTES
      =========================== */}

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/dia-chi"
          element={<DiaChi />}
        />

        <Route
          path="/ban-do"
          element={<BanDo />}
        />

        <Route
          path="/thu-vien"
          element={<ThuVien />}
        />

        <Route
          path="/video"
          element={<Video />}
        />

        <Route
          path="/chi-tiet/:id"
          element={<ChiTiet />}
        />

      </Routes>

    </>

  );

}

export default App;