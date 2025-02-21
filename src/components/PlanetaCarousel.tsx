'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Regiao } from '../types/src/regiao';

import { staggerContainer } from '../utils/motion';

import styles from '../styles';

import Card from './Card';
import RegiaoCard from './RegiaoCard';
import { TypingText } from './index';

export default function PlanetaCarousel({ planeta, persona }) {
    // Carousel
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        slidesToScroll: 1,
        breakpoints: { 768: { slidesToScroll: 2 } }
    });
    function scrollPrev() {
        emblaApi?.scrollPrev();
    };
    function scrollNext() {
        emblaApi?.scrollNext();
    };
    const { capital, img, titulo, subtitulo, descricao, regioes } = planeta;
    const { cores } = persona;
    return (
        <section className={`${styles.paddings} pt-10 relative bg-primary-black text-white`} id='planet'>
            <motion.div
                variants={staggerContainer(0.1, 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`mx-auto ${styles.flexCenter} flex-col w-full md:w-[70hw]`}
            >
                <TypingText title="| Planeta" textStyles="text-center mb-5" />
                <Card img={img} titulo={titulo} subtitulo={subtitulo} descricao={descricao} cores={cores} position='right' />
            </motion.div>

            <motion.div
                variants={staggerContainer(0.1, 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}>
                <TypingText title="| Capital" textStyles="text-center my-5" />
                <Card img={capital.img} titulo={capital.titulo} subtitulo={capital.subtitulo} descricao={capital.descricao} cores={cores} position='left' />
            </motion.div>

            <motion.div
                variants={staggerContainer(0.1, 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}>
                <TypingText title="| Regiões" textStyles="text-center mt-5" />
            </motion.div>

            <div className="relative pt-10">
                <div className='overflow-hidden' ref={emblaRef}>
                    <div className='flex'>
                        {regioes.map((regiao: Regiao) => (
                            <RegiaoCard
                                key={regiao.rowid}
                                id={regiao.rowid}
                                title={regiao.titulo}
                                img={regiao.img}
                                text={regiao.descricao}
                                cores={persona.cores}
                            />
                        ))}
                    </div>
                </div>

                <button
                    className={`bg-[${cores.titulo || '#fff'}] flex items-center justify-center w-10 h-10 rounded-full shadow-lg absolute top-1/2 md:-left-6 -translate-y-1/2 -translate-x-1/2 cursor-pointer opacity-30 hover:opacity-100`}
                    onClick={scrollPrev}
                >
                    <ChevronLeft className={`w-6 h-6 text-[${cores?.texto || '#1e2939'}]`} />
                </button>

                <button
                    className={`bg-[${cores.titulo || '#fff'}] flex items-center justify-center w-10 h-10 rounded-full shadow-lg absolute top-1/2 -right-10 md:-right-16 -translate-y-1/2 -translate-x-1/2 cursor-pointer opacity-30 hover:opacity-100`}
                    onClick={scrollNext}
                >
                    <ChevronRight className={`w-6 h-6 text-[${cores?.texto || '#1e2939'}]`} />
                </button>
            </div>
        </section>
    )
};