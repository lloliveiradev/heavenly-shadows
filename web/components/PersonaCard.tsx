'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

export default function PersonaCard({ persona, index, active, handleClick }) {
    const { id, img, icon, titulo, subtitulo, descricao } = persona;
    return (
        <motion.div
            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
            className={`relative ${active === id ? 'lg:flex-[3.5] flex-10' : 'lg:flex-[0.5] flex-2'
                } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
            onClick={() => handleClick(id)}
        >
            <Image
                src={img}
                alt={titulo}
                width={500}
                height={500}
                className="absolute w-full h-full object-cover rounded-[24px]"
            />
            {active !== id ? (
                <h3 className="font-semibold sm:text-[32px] text-[26px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
                    {titulo}
                </h3>
            ) : (
                <div className="absolute bottom-0 p-3 pt-1 lg:pt-8 lg:p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.6)] rounded-b-[24px]">
                    <h2 className="mt-1 lg:mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white flex items-center gap-5">
                        {titulo}{icon}
                    </h2>
                    <p className='font-bold uppercase mb-2'>{subtitulo}</p>
                    <p className="font-normal text-[16px] leading-[20.16px] text-white text-justify">
                        {descricao}
                    </p>
                    <Link href={`/coletanea?persona=${id}`}>
                        <button type='button' className={`mt-1 lg:mt-4 bg-gray-800 text-white font-bold uppercase py-2 px-4 rounded-[8px] hover:bg-gray-600 transition-[background-color] duration-300 ease-in-out float-end cursor-pointer`}>
                            Explore
                        </button>
                    </Link>
                </div>
            )}
        </motion.div>
    )
};
