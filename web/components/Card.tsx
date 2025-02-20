import React from 'react';
import { motion } from 'framer-motion';
import { TitleText, TypingText } from './CustomTexts';
import { staggerContainer } from '@/utils/motion';
import splitText from '@/utils/splitText';
import Image from 'next/image';

const Card = ({ img, titulo, subtitulo, descricao, cores, position }) => {
    return (
        <motion.div
            className={`bg-[${cores.fundo || '#364153'}] rounded-lg overflow-hidden sm:flex sm:flex-row`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            {!position || position == 'left' && <motion.div
                className="sm:w-[30%] sm:h-auto h-[30%] w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                <Image
                    src={img}
                    alt={titulo}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                />
            </motion.div>}

            <motion.div
                variants={staggerContainer(0.5, 0.25)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`sm:w-[70%] w-full p-6`}
            >
                <TypingText title={`${titulo} - ${subtitulo}`} textStyles={`text-[${cores.titulo || '#fff'}] text-left pb-2 font-bold uppercase text-[22px] md:text-[18px]`} />
                <motion.div
                    className="text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <TitleText title={splitText(descricao)} textStyles="text-justify text-[22px] md:text-[18px] text-white" />
                </motion.div>
            </motion.div>

            {position == 'right' && <motion.div
                className="sm:w-[30%] sm:h-auto h-[30%] w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                <Image
                    src={img}
                    alt={titulo}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                />
            </motion.div>}
        </motion.div>
    );
};

export default Card;