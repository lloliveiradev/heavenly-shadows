'use client';

import { Ellipsis } from 'lucide-react';
import Image from 'next/image';
import { Fragment } from 'react';

export default function PoesiaCard({ id, title, img, text, openModal, persona }) {
    const { cores } = persona;
    return (
        <div key={id} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/3)] px-2 md:px-3'>
            <article className={`bg-[${cores.fundo || '#1e293b'}] p-0 rounded-2xl text-white space-y-4 h-full flex flex-col`}>
                <div className='h-[200px] md:h-[300px] overflow-hidden relative cursor-pointer tooltip' data-rowid={id} onClick={openModal}>
                    <Image
                        src={img}
                        alt={title}
                        className='object-cover h-fit w-fit p-0 m-0 rounded-t-2xl hover:scale-115 transform transition-all duration-300'
                        fill
                    />
                    <button type='button' className={`absolute bottom-0 right-0 bg-[${cores.primaria || '#fff'}] p-2 rounded-tl-lg cursor-pointer`}
                        title='Clique para ler a integra' data-rowid={id} onClick={openModal}>
                        <Ellipsis />
                    </button>
                </div>
                <div className='flex-1 flex-col items-start justify-between select-none'>
                    <h3 className={`text-[25px] uppercase font-bold text-[${cores.titulo || '#1e293b'}] mb-2 text-center bg-white`}>{title}</h3>
                    <p className={`text-[${cores?.texto || '#f3f4f6'}] text-[20px] md:text-[18px] text-center p-4 mb-4`}>
                        {text.split('\\n').map((linha: string, index: number) => (
                            <Fragment key={index}>
                                {linha}
                                <br />
                            </Fragment>
                        ))}
                    </p>
                </div>
            </article>
        </div>
    );
};