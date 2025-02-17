import React from 'react';
import { motion } from 'framer-motion';
import { TitleText, TypingText } from './CustomTexts';
import { staggerContainer } from '@/utils/motion';
import splitText from '@/utils/splitText';

const Card = ({ img, titulo, subtitulo, descricao, cores }) => {
    return (
        <motion.div
            className={`bg-${cores?.secundaria?.includes('#') ? `[${cores.secundaria}]` : cores?.secundaria || 'gray-800'} rounded-lg overflow-hidden sm:flex sm:flex-row`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <motion.div
                className="sm:w-[30%] sm:h-auto h-[30%] w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                <img
                    src={img}
                    alt={titulo}
                    className="object-cover w-full h-full"
                />
            </motion.div>
            <motion.div
                variants={staggerContainer(0.5, 0.25)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`sm:w-[70%] w-full p-6`}
            >
                <TypingText title={`${titulo} - ${subtitulo}`} textStyles="text-left pb-2 font-bold uppercase text-[22px] md:text-[18px]" />
                <motion.div
                    className="text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <TitleText title={splitText(descricao)} textStyles="text-justify text-[22px] md:text-[18px] text-white" />
                </motion.div>

            </motion.div>
        </motion.div>
    );
};

export default Card;