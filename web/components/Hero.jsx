'use client';

import styles from '../styles/index';
import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '../utils/motion';

export default function Hero() {
    return (
        <section className='relative overflow-hidden py-16 px-10 h-[100vh]' id='home'>
            <div className='w-full h-full inset-0 bg-[url(/images/planet-3.webp)] bg-cover bg-center absolute z-0'>
                <div className='absolute inset-0 bg-black opacity-50'></div>
            </div>
            <motion.div variants={staggerContainer} initial="hidden"
                whileInView="show" viewport={{ once: false, amount: 0.25 }}
                className={`flex flex-col items-center justify-center`}>
                <div className="flex justify-center items-center flex-col relative z-20 pb-5">
                    <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
                        Sombras
                    </motion.h1>
                    <motion.div variants={textVariant(1.2)} className="flex flex-row justify-center items-center">
                        <h1 className={styles.heroHeading}>Celestes</h1>
                    </motion.div>
                    <motion.div variants={textVariant(1.5)}>
                        <p className='text-white text-center mt-5 md:mt-0 text-[30px] leading-[40px] lg:text-[40px] lg:leading-[50px] px-[20px] md:px[100px] lg:px-[200px] text-justify md:text-center'>
                            Explore a mente, os pensamentos, dores, amores, desejos, devaneios e fantasias
                            do poeta na viagem literária em busca das sombras de um vislumbre celeste.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}