import Header from "../components/Header";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import DiaChiList from "../components/DiaChiList";
import Footer from "../components/Footer";
import "../css/style.css";
import About from "../components/About";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <DiaChiList />
      <Footer />
    </>
  );
}

export default Home;