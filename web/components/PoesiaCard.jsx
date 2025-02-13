'use client';

import { Ellipsis } from 'lucide-react';
import Image from 'next/image';

export default function PoesiaCard({ id, title, img, text, figcaption }) {
    function openModal(id) { };
    return (
        <div key={id} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/2)] px-3'>
            <article className='bg-[#1e293b] p-6 rounded-lg text-white p-6 space-y-4 h-full flex flex-col'>
                <figcaption>{figcaption}</figcaption>
                <div className='h-48 overflow-hidden relative' id={id} onClick={openModal}>
                    <Image
                        src={img}
                        alt={title}
                        className='object-cover w-fit p-0 m-0 rounded-lg'
                        fill
                        sizes='100vw'
                    />
                    <button type='button' className="btn btn-floating halfway-fab blue-logo modal-trigger">
                        <Ellipsis />
                    </button>
                </div>
                <div className='flex-1 flex items-start justify-between'>
                    <h3 className='text-xl font-bold my-1'>{title}</h3>
                    <p className='text-gray-300 text-lg select-none text-justify pe-6'>
                        {text}
                    </p>
                </div>
            </article>
        </div>
    );
};