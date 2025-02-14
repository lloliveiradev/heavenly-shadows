'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, XIcon } from 'lucide-react';
import { TitleText, TypingText } from './index';
import { Poesia } from '@/types';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import PoesiaCard from './PoesiaCard';
import { useRef, useState } from 'react';
import ModalPoesia from './ModalPoesia';

export default function PoesiaCarousel({ data, persona }) {
    // Embla Carousel
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

    // Modal
    const [modalIsOpen, setOpen] = useState(false);
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    function openModal(event: React.MouseEvent<HTMLElement>) {
        setOpen(true);
        const rowid = event.currentTarget.getAttribute('data-rowid');
        const poesia = data.find((poesia: Poesia) => poesia.id === rowid);
        setTitle((current) => current = poesia.titulo);
        setText((current) => current = poesia.texto);
    };

    return (
        <section className="bg-primary-black text-white pt-20" id='main'>
            <motion.div
                variants={staggerContainer(0.1, 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <TypingText title="| Coletânea" textStyles="text-center" />
                <TitleText title={<>{persona.convite.replace(/[\n]/g, '')}</>} textStyles="text-center text-[20px] md:text-[25px] px-20 lg:px-[200px] pt-5" />
            </motion.div>

            <div className="flex items-center gap-2 pt-10 px-3">
                <div className='flex items-center justify-center'>
                    <button
                        className='bg-white flex items-center justify-center w-10 h-10 rounded-full shadow-lg cursor-pointer'
                        onClick={scrollPrev}
                    >
                        <ChevronLeft className='w-6 h-6 text-gray-600' />
                    </button>
                </div>
                <div className='overflow-hidden flex-1 items-center justify-center' ref={emblaRef}>
                    <div className='flex'>
                        {data.map((poesia: Poesia, i: number) => (
                            <PoesiaCard
                                key={poesia.id}
                                id={poesia.id}
                                title={poesia.titulo}
                                img={poesia.img}
                                text={poesia.resumo}
                                openModal={openModal}
                                persona={persona}
                            />
                        ))}
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <button
                        className='bg-white flex items-center justify-center w-10 h-10 rounded-full shadow-lg cursor-pointer'
                        onClick={scrollNext}
                    >
                        <ChevronRight className='w-6 h-6 text-gray-600' />
                    </button>
                </div>
            </div>

            <ModalPoesia open={modalIsOpen} textRef={textRef} text={text} titleRef={titleRef} title={title} setOpen={setOpen} />
        </section>
    )
};

const childVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const lineContainer = { // Nova variante para as linhas
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 }, // Velocidade da digitação por linha
    },
};