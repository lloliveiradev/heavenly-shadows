'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles/index';
import { staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from './index';
import { Persona } from '@/types';
import PersonaCard from './PersonaCard';

export default function Main({ personas }) {
    const [active, setActive] = useState('apollo');

    return (
        <section className={`${styles.paddings} bg-primary-black text-white pt-20`} id="persons">
            <motion.div
                variants={staggerContainer(0.1, 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
                <TypingText title="| Personas" textStyles="text-center" />
                <TitleText
                    title={<>Escolha a persona que deseja explorar</>}
                    textStyles="text-center text-secondary-white text-[20px] md:text-[25px]"
                />
                <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
                    {personas.map((p: Persona, index: number) => (
                        <PersonaCard
                            key={p.id}
                            {...p}
                            index={index}
                            active={active}
                            handleClick={setActive}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}