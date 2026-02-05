import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Service from "../components/Service";
import Portfolio from "../components/Portfolio";
import Counters from "../components/Counters";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import { useState } from "react";

const Home = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div>
      <Navigation />
      <main id="main" className="site-main">
        <Hero />
        <About />
        <Skills />
        <Service />
        <Portfolio onOpenModal={(id) => setSelectedId(id)} />
        <Counters />
        <Contact />
      </main>
      <Footer />
      <Modal activeId={selectedId} onClose={() => setSelectedId(null)} />
    </div>
  );
};

export default Home;
