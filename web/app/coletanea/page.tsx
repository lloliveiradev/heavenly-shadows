interface ColetaneaProps {
    searchParams: { hash: string }
}

import { Poesia } from "../../types";
import { Footer, Navbar, PoesiaCarousel } from "../../components";
import { getPoesias } from "../../server/poesia";

export default async function Coletanea({ searchParams }: ColetaneaProps) {
    const params = await searchParams;
    const id_persona = atob(params.hash);
    const data: Poesia[] = await getPoesias(process.env.API_URL, id_persona);

    return (
        <div className="bg-black overflow-hidden">
            <Navbar />
            <PoesiaCarousel data={data} />
            <Footer />
        </div>
    );
}