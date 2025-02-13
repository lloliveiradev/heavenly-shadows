import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Main from "../components/Main";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

import { getPersonas } from '../server/persona';
import { Persona } from '../types';

export default async function Home() {
  const data: Persona[] = await getPersonas(process.env.API_URL);

  return (
    <div className="bg-black overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Main personas={data} />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
