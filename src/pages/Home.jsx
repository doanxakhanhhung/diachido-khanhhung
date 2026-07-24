import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Menu from "../components/Menu";
import DiaChiList from "../components/DiaChiList";
import Footer from "../components/Footer";

import "../css/style.css";
import Stats from "../components/Stats";

function Home() {
  return (
    <>
      <Header />
      <Stats />
      <Hero />
      <Menu />
      <DiaChiList />
      <Footer />
    </>
  );
}

export default Home;