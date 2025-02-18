'use client';

import { Fragment } from 'react';
import Image from 'next/image';

export default function RegiaoCard({ id, title, img, text, cores }) {
    return (
        <div key={id} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/3)] px-2 md:px-3'>
            <article className={`bg-[${cores.fundo || '#1e293b'}] p-0 rounded-2xl text-white space-y-4 h-full flex flex-col`}>
                <div className='h-[200px] md:h-[300px] overflow-hidden relative tooltip' data-rowid={id}>
                    <Image
                        src={img}
                        alt={title}
                        className='object-cover h-fit w-fit p-0 m-0 rounded-t-2xl hover:scale-115 transform transition-all duration-300'
                        fill
                    />
                </div>
                <div className='flex-1 flex-col items-start justify-between select-none'>
                    <h3 className={`text-[25px] uppercase font-bold text-[${cores.titulo || '#1e293b'}] mb-2 text-center bg-white`}>{title}</h3>
                    <p className={`text-[${cores?.texto || '#f3f4f6'}] text-[20px] md:text-[18px] text-justify p-4 mb-4`}>
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