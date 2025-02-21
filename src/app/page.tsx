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
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Personas", href: "#persons" },
    { name: "Contato", href: "#contact" },
  ];
  const cores = {
    fundo: '#1d293d',
    gradient: '#1d293d',
    primaria: 'slate-700',
    secundaria: '#1e2939',
    terciaria: 'blue-900',
    texto: 'white',
    titulo: 'slate-700',
  };
  return (
    <div className="bg-primary-black overflow-hidden" id="pageAppElement">
      <Navbar navItems={navItems} cores={cores} />
      <Hero
        cores={cores}
        img=""
        title="Sombras"
        subtitle="Celestes"
        text='um viagem literária ao lado do poeta interestelar'
      />
      <About cores={cores} />
      <Main personas={data} />
      <Contact API_URL={process.env.API_URL} />
      <Footer />
      <BackToTop cores={cores} />
    </div>
  );
}
