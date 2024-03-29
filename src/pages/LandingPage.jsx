import Header from "../components/header/Header";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Qualification from "../components/qualification/Qualification";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import ScrollUp from "../components/scrollup/ScrollUp";
import Projects from "../components/projects/Projects";

const LandingPage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />;
    </>
  );
};

export default LandingPage;