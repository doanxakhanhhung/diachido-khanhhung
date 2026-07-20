import Header from "../components/Header";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

import "../css/style.css";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Menu />
      <DiaChiList />
      <Footer />
    </>
  );
}

export default Home;
import DiaChiList from "../components/DiaChiList";