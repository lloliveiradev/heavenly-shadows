'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, XIcon } from 'lucide-react';
import { TypingText } from './index';
import { Poesia } from '@/types';
import PoesiaCard from './PoesiaCard';
import React, { Fragment } from 'react';
import Modal from './Modal';

export default function PoesiaCarousel({ data }) {
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
    const [modalIsOpen, setOpen] = React.useState(false);
    const titleRef = React.useRef(null);
    const textRef = React.useRef(null);
    const [title, setTitle] = React.useState('');
    const [text, setText] = React.useState('');
    function openModal(event: React.MouseEvent<HTMLElement>) {
        setOpen(true);
        const rowid = event.currentTarget.getAttribute('data-rowid');
        const poesia = data.find((poesia: Poesia) => poesia.id === rowid);
        setTitle((current) => current = poesia.titulo);
        setText((current) => current = poesia.texto);
    };

    return (
        <section className="bg-primary-black text-white pt-20">
            <TypingText title="| Coletânea" textStyles="text-center" ref />

            <div className="relative pt-10">
                <div className='overflow-hidden' ref={emblaRef}>
                    <div className='flex'>
                        {data.map((poesia: Poesia, i: number) => (
                            <PoesiaCard
                                key={poesia.id}
                                id={poesia.id}
                                title={poesia.titulo}
                                img={poesia.img}
                                text={poesia.resumo}
                                openModal={openModal}
                            />
                        ))}
                    </div>
                </div>

                <button
                    className='bg-white flex items-center justify-center w-10 h-10 rounded-full shadow-lg absolute top-1/2 left-3 -translate-y-1/2 shadow-md z-50 -translate-x-1/2'
                    onClick={scrollPrev}
                >
                    <ChevronLeft className='w-6 h-6 text-gray-600' />
                </button>
                <button
                    className='bg-white flex items-center justify-center w-10 h-10 rounded-full shadow-lg absolute top-1/2 -right-6 -translate-y-1/2 shadow-md z-50 -translate-x-1/2'
                    onClick={scrollNext}
                >
                    <ChevronRight className='w-6 h-6 text-gray-600' />
                </button>
            </div>

            <Modal open={modalIsOpen}>
                <div className="h-[90vh] text-center overflow-y-scroll bg-primary-black bg-opacity-70 text-white px-6 pb-10 pt-5 rounded-lg scrollbar scrollbar-thumb-slate-700 scrollbar-thumb-rounded-lg">
                    <div className="flex items-center justify-between px-2 border-b border-gray-300 pb-4">
                        <h3 className="text-[30px] fw-bold text-white uppercase" ref={titleRef}>{title}</h3>
                        <button className="rounded-full p-2 bg-white text-black" onClick={() => setOpen(false)} >
                            <XIcon />
                        </button>
                    </div>
                    <div className="p-4">
                        <TypingText textStyles="text-lg text-justify text-gray-100" ref={textRef} title={text.split('\\n').map((linha: string, index: number) => (
                            <Fragment key={index}>
                                {linha}
                                <br />
                            </Fragment>
                        ))}>
                        </TypingText>
                    </div>
                </div>
            </Modal>
        </section>
    )
};