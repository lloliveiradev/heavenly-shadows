'use client';

import { Ellipsis } from 'lucide-react';
import Image from 'next/image';
import { Fragment } from 'react';

export default function PoesiaCard({ id, title, img, text, openModal }) {
    return (
        <div key={id} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/2)] px-3'>
            <article className='bg-[#1e293b] p-6 rounded-lg text-white p-6 space-y-4 h-full flex flex-col'>
                <div className='h-[500px] overflow-hidden relative' data-rowid={id} onClick={openModal}>
                    <Image
                        src={img}
                        alt={title}
                        className='object-cover h-fit w-fit p-0 m-0 rounded-lg'
                        fill
                        sizes='100vw'
                    />
                    <button type='button' title='Ler integra' className="absolute bottom-0 right-0 bg-amber-500 p-2 rounded-bl-lg" data-rowid={id} onClick={openModal}>
                        <Ellipsis />
                    </button>
                </div>
                <div className='flex-1 flex-col items-start justify-between select-none'>
                    <h3 className='text-[25px] uppercase font-bold my-1 text-center'>{title}</h3>
                    <p className='text-gray-300 text-lg text-center'>
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