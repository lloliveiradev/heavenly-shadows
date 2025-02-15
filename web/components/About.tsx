'use client';

import { motion } from 'framer-motion';
import { TypingText } from '.';
import { staggerContainer } from '../utils/motion';
import styles from '../styles/index';
import Card from './Card';

export default function About() {
    const bio = `Leo L. Oliveira, nascido em 25 de julho de 1997, na cidade de Anápolis-GO, é um jovem escritor de poesia e ficção fantástica. Teve início em sua jornada de escrita ao 20 anos, inspirado por grandes franquias da cultura Pop, como: O Senhor dos Anéis, Star Wars e Percy Jackson. Leo sempre foi um grande admirador do universo da magia e das mitologias, se interessando e estudando as mais diversas culturas desde sua infância.
    Na poesia, o escritor tem influência de Fernando Pessoa e Cora Coralina. De fato, Oliveira divide seu processo de escrita utilizando personas que traduzem visões distintas sobre os mais diversos assuntos.
    Como jovem artísta, Leo teve início na cena cultural de Anápolis em 2018, quando apresentou suas poesias na segunda edição do Evento Sem Nome, promovido pelo coletivo Piranha Mansa. Desde então, tem participado de diversas edições de eventos como: Evento Sem Nome, Culturart, Conexão Cultural, sarais promovidos por universidades e pelo Galpão Cultural.
    Em 2018, Leo lançou seu primeiro livro de poesia, intitulado "Sombras de um vislumbre Celeste", que reúne poesias escritas ao longo de sua jornada. O livro é uma viagem pelo tempo, onde o autor se encontra com suas personas e reflete sobre a vida, o amor e a morte, tecendo poesias, contos e prosas.
    `;
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

                <Card img={'/images/poet.webp'} titulo="" descricao={bio} subtitulo="" />
            </motion.div>
        </section>
    )
}