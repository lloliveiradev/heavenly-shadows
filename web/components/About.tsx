'use client';

import { motion } from 'framer-motion';
import { TypingText } from '.';
import { fadeIn, staggerContainer } from '../utils/motion'
import poet from '../public/images/poet.webp';
import styles from '../styles/index';
import Image from 'next/image';

export default function About() {
    return (
        <section className={`${styles.paddings} pt-10 relative z-10 bg-primary-black text-white`} id='about'>
            <div className="gradient-02 z-0" />
            <motion.div
                variants={staggerContainer(0.5, 0.25)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
            >
                <TypingText title="| Sobre" textStyles="text-center" />

                <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 justify-center items-center'>
                    <motion.div variants={fadeIn('right', 'spring', 0.5, 0.75)}
                        className={`relative flex justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}>
                        <motion.div variants={fadeIn('up', 'tween', 0.3, 1)}>
                            <Image
                                src={poet}
                                alt="poeta"
                                width={400}
                                height={400}
                                className="object-contain rounded-lg p-0 m-0"
                            />
                        </motion.div>
                    </motion.div>
                    <motion.p variants={fadeIn('up', 'tween', 0.2, 1)}
                        className="font-normal sm:text-[22px] text-[15px] text-center text-white">
                        Leo L. Oliveira, escritor de poesia e ficção fantástica, nasceu em Anápolis/GO,
                        Brasil, em 1997, e desde cedo mergulhou no universo da magia e das mitologias.
                        Encontra sua essência nas influências de Fernando Pessoa e Cora Coralina,
                        explorando diferentes visões por meio de personas que dão voz a sentimentos e
                        reflexões distintas, épicas e introspectivas.
                    </motion.p>
                </div>
            </motion.div>
        </section>
    )
}