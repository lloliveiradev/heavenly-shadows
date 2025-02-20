'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, XIcon } from 'lucide-react';
import { useRef, useState } from 'react';

import AudioPlayer from './AudioPlayer';
import PoesiaCard from './PoesiaCard';
import Modal from './Modal';
import { TitleText, TypingText } from './index';

import splitText from '@/utils/splitText';
import { staggerContainer } from '@/utils/motion';

import styles from '@/styles';

import { Persona, Poesia } from '@/types';

export default function PoesiaCarousel({ poesias, persona }: { poesias: Poesia[], persona: Persona }) {
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
    function closeModal() {
        setOpen(false);
        setText('');
        setTitle('');
    };

    const { audio, cores, convite } = persona;
    return (
        <section className={`${styles.paddings} pt-10 relative bg-primary-black text-white`} id='main'>
            <motion.div
                variants={staggerContainer(0.1, 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <TypingText title="| Coletânea" textStyles="text-center" />
                <div className='flex items-center justify-center pt-5'>
                    <AudioPlayer src={audio} cores={cores} />
                </div>
                <TitleText
                    title={<>{convite.replace(/[\n]/g, '')}</>}
                    textStyles="text-center text-[20px] md:text-[25px] px-20 lg:px-[200px] pt-5"
                />
            </motion.div>

            <div className="relative pt-10">
                <div className='overflow-hidden' ref={emblaRef}>
                    <div className='flex'>
                        {poesias.map((poesia: Poesia) => (
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

            <Modal open={modalIsOpen}>
                <div className="h-[100vh] md:h-[90vh] text-center overflow-y-scroll bg-primary-black bg-opacity-70 text-white px-2 md:px-6 pb-10 pt-5 rounded-lg scrollbar-rounded">
                    <div className="flex items-center justify-between px-2 border-b border-gray-300 pb-4">
                        <h3 className="text-[30px] fw-bold text-white uppercase" ref={titleRef}>{title}</h3>
                        <button title='Fechar' className="rounded-full p-2 bg-white hover:bg-gray-300 text-black cursor-pointer" onClick={closeModal} >
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
                    <div className='md:hidden flex items-center justify-center pt-10'>
                        <button title='Fechar' className="rounded-full p-2 bg-white hover:bg-gray-300 text-black cursor-pointer" onClick={closeModal} >
                            <XIcon />
                        </button>
                    </div>
                </div>
            </Modal>
        </section>
    )
};