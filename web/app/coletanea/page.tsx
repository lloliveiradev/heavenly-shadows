interface ColetaneaProps {
    searchParams: { persona: string }
}

import { Persona, Poesia } from "../../types";
import { getPoesias } from "../../server/poesia";
import { getPersonas } from "../../server/persona";
import PoesiaCarousel from "@/components/PoesiaCarousel";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PersonaAbout from "@/components/PersonaAbout";
import BackToTop from "@/components/BackToTop";

export default async function Coletanea({ searchParams }: ColetaneaProps) {
    const params = await searchParams;
    const id_persona = params.persona;
    const persona: Persona = await getPersonas(process.env.API_URL, id_persona);
    const data: Poesia[] = await getPoesias(process.env.API_URL, null, {
        filters: [{ key: 'persona', op: '==', val: id_persona }]
    });
    const navItems = [
        { name: "Home", href: "/" },
        { name: "Sobre", href: "#about" },
        { name: "Coletânea", href: "#main" },
    ];
    return (
        <div className="bg-primary-black overflow-hidden" id="pageAppElement">
            <Navbar navItems={navItems} />
            <Hero
                img={`./images/hero-${persona.id}.webp`}
                title={persona.titulo}
                subtitle={persona.subtitulo}
                text={persona.icon}
            />
            <PersonaAbout persona={persona} />
            <PoesiaCarousel data={data} persona={persona} />
            <Footer />
            <BackToTop cores={persona.cores} />
        </div>
    );
}