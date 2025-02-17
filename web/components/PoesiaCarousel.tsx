'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, XIcon } from 'lucide-react';
import { TitleText, TypingText } from './index';
import { Poesia } from '@/types';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import PoesiaCard from './PoesiaCard';
import { useRef, useState } from 'react';
import Modal from './Modal';
import AudioPlayer from './AudioPlayer';
import splitText from '@/utils/splitText';

export default function PoesiaCarousel({ poesias, persona }) {
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

    // Modal
    const [modalIsOpen, setOpen] = useState(false);
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    function openModal(event: React.MouseEvent<HTMLElement>) {
        setText('');
        setTitle('');
        setOpen(true);
        const rowid = event.currentTarget.getAttribute('data-rowid');
        const poesia = poesias.find((poesia: Poesia) => poesia.id === rowid);
        setTitle(poesia.titulo);
        setText(poesia.texto);
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
                <div className='flex items-center justify-center pt-5'>
                    <AudioPlayer src={persona.audio} cores={persona.cores} />
                </div>
                <TitleText
                    title={<>{persona.convite.replace(/[\n]/g, '')}</>}
                    textStyles="text-center text-[20px] md:text-[25px] px-20 lg:px-[200px] pt-5"
                />
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
                        {poesias.map((poesia: Poesia, i: number) => (
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

            <Modal open={modalIsOpen}>
                <div className="h-[100vh] md:h-[90vh] text-center overflow-y-scroll bg-primary-black bg-opacity-70 text-white px-2 md:px-6 pb-10 pt-5 rounded-lg scrollbar-rounded">
                    <div className="flex items-center justify-between px-2 border-b border-gray-300 pb-4">
                        <h3 className="text-[30px] fw-bold text-white uppercase" ref={titleRef}>{title}</h3>
                        <button title='Fechar' className="rounded-full p-2 bg-white hover:bg-gray-300 text-black cursor-pointer" onClick={() => { setOpen(false), setText(''), setTitle(''); }} >
                            <XIcon />
                        </button>
                    </div>

                    <div className="p-4">
                        <motion.div variants={staggerContainer(1, 1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.25 }}
                            className="text-lg text-justify text-gray-100" ref={textRef}
                        >
                            {splitText(text)}
                        </motion.div>
                    </div>
                    <div className='md:hidden flex items-center justify-center'>
                        <button title='Fechar' className="rounded-full p-2 bg-white hover:bg-gray-300 text-black cursor-pointer" onClick={() => { setOpen(false), setText(''), setTitle(''); }} >
                            <XIcon />
                        </button>
                    </div>
                </div>
            </Modal>
        </section>
    )
};