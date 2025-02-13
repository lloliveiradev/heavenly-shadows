'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PoesiaCard, TypingText } from './index';

export default function PoesiaCarousel({ data }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        slidesToScroll: 1,
        breakpoints: {
            768: {
                slidesToScroll: 2
            }
        }
    });

    function scrollPrev() {
        emblaApi?.scrollPrev();
    };

    function scrollNext() {
        emblaApi?.scrollNext();
    };

    return (
        <section className="relative z-10">
            <div className="gradient-02 z-0" />
            <TypingText title="| Coletânea" textStyles="text-center" />

            <div className="relative">
                <div className='overflow-hidden' ref={emblaRef}>
                    <div className='flex'>
                        {data.map((poesia, i) => (
                            <PoesiaCard
                                key={poesia.id}
                                id={poesia.id}
                                title={poesia.titulo}
                                img={poesia.img}
                                text={poesia.texto}
                                figcaption={poesia.figcaption}
                            />
                        ))}
                    </div>
                </div>

                <button
                    className='bg-white flex items-center justify-center w-10 h-10 rounded-full shadow-lg absolute top-1/2 left-3 -translate-y-1/2 shadow-md z-10 -translate-x-1/2'
                    onClick={scrollPrev}
                >
                    <ChevronLeft className='w-6 h-6 text-gray-600' />
                </button>
                <button
                    className='bg-white flex items-center justify-center w-10 h-10 rounded-full shadow-lg absolute top-1/2 -right-6 -translate-y-1/2 shadow-md z-10 -translate-x-1/2'
                    onClick={scrollNext}
                >
                    <ChevronRight className='w-6 h-6 text-gray-600' />
                </button>
            </div>
        </section>
    )
};