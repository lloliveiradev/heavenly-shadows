import Image from 'next/image';
import logo from '../public/images/full_logo.png';
import dateNow from '../utils/dateNow';

export default function Footer() {
    const date = dateNow();
    return (
        <section className="bg-primary-black text-white py-16">
            <div className="container mx-auto px-4 flex items-center flex-col">
                <Image
                    src={logo}
                    height={100}
                    alt="Logo - Sombras Celestes"
                    className="center"
                />
                <p className="pt-5"> Copyright © Sombras Celestes 2018-{date.year}. Todos os direitos reservados.</p>
            </div>
        </section>
    )
}