import { getPoesias } from "../../server/poesia";
import { getPersonas } from "../../server/persona";
import { getPlaneta } from "@/server/planeta";

import PoesiaCarousel from "@/components/PoesiaCarousel";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PersonaAbout from "@/components/PersonaAbout";
import BackToTop from "@/components/BackToTop";
import PlanetaCarousel from "@/components/PlanetaCarousel";

interface ColetaneaPageProps {
    params?: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Coletanea({ searchParams }: ColetaneaPageProps) {
    const params = await searchParams;
    const id_persona = Array.isArray(params.persona) ? params.persona[0] : params.persona;
    const options = { filters: [{ key: 'persona', op: '==', val: id_persona }] };
    const persona = await getPersonas(process.env.API_URL, id_persona, null);
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