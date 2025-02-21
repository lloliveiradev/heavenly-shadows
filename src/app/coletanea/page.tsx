import { getPoesias } from "../../server/poesia";
import { getPersonas } from "../../server/persona";
import { getPlaneta } from "../../server/planeta";

import PoesiaCarousel from "../../components/PoesiaCarousel";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import PersonaAbout from "../../components/PersonaAbout";
import BackToTop from "../../components/BackToTop";
import PlanetaCarousel from "../../components/PlanetaCarousel";

export default async function Coletanea({
    searchParams,
}: {
    searchParams: Promise<{ persona: string }>;
}) {
    const id_persona = (await searchParams).persona;
    const options = { filters: [{ key: 'persona', op: '==', val: id_persona }] };
    const persona = await getPersonas(process.env.API_URL, id_persona);
    const poesias = await getPoesias(process.env.API_URL, null, options);
    const planeta = (await getPlaneta(process.env.API_URL, null, options)).find(planeta => planeta.persona === id_persona);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Sobre", href: "#about" },
        { name: "Planeta", href: "#planet" },
        { name: "Coletânea", href: "#main" },
    ];

    return (
        <div className="bg-primary-black overflow-hidden" id="pageAppElement">
            <Navbar navItems={navItems} cores={persona.cores} />
            <Hero
                img={`./images/hero-${persona.id}.webp`}
                title={persona.titulo}
                subtitle={persona.subtitulo}
                text={persona.icon}
                cores={persona.cores}
            />
            <PersonaAbout persona={persona} />
            <PlanetaCarousel planeta={planeta} persona={persona} />
            <PoesiaCarousel poesias={poesias} persona={persona} />
            <Footer />
            <BackToTop cores={persona.cores} />
        </div>
    );
};