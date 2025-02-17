'use client';

import { motion } from 'framer-motion';
import { TypingText } from '.';
import { staggerContainer } from '../utils/motion'
import styles from '../styles/index';
import Card from './Card';

export default function PersonaAbout({ persona }) {
    return (
        <section className={`${styles.paddings} pt-10 relative z-10 bg-primary-black text-white`} id='about'>
            <motion.div
                variants={staggerContainer(0.5, 0.25)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`mx-auto ${styles.flexCenter} flex-col w-full md:w-[70hw]`}
            >
                <TypingText title="| Sobre" textStyles="text-center pb-10" />

                <Card img={persona.gif || persona.img} titulo={persona.titulo} descricao={persona.bio} subtitulo={persona.subtitulo} cores={persona.cores} position={"left"} />
            </motion.div>
        </section>
    )
}