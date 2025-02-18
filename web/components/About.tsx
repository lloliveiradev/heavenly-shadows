'use client';

import { motion } from 'framer-motion';
import { TypingText } from '.';
import { staggerContainer } from '../utils/motion';
import styles from '../styles/index';
import Card from './Card';

export default function About({ cores }) {
    const bio = `Nascido em 1997, Brasil, Leo é um jovem escritor de poesia e ficção fantástica que deu início em sua jornada
    de escrita aos 20 anos, inspirado por grandes franquias da cultura Pop, como: O Senhor dos Anéis, Percy Jackson e Harry
    Potter. Leo tem sido um grande admirador do universo da magia, do universo e da espiritualidade, se interessando e
    estudando as mais diversas culturas desde sua infância. \n \n
    Na poesia, o escritor tem influência de Fernando Pessoa e Cora Coralina. De fato, tal como Pessoa, Oliveira dividiu seu
    processo de escrita utilizando personas que traduzem visões e momentos distintos da sua vida pessoa para discorrer sobre
    temas profundos do ser. \n \n
    Como jovem artísta, Leo teve início na cena cultural de sua cidade natal, Anápolis, em 2018, quando apresentou suas
    poesias na 2ª edição do Evento Sem Nome, produzido pelo coletivo Piranha Mansa. Desde então, tem participado de diversas
    edições de eventos como: Culturart, Conexão Cultural, sarais promovidos pelo Galpão Cultural e por universidades,
    tais como UEG e UniEvangélica, além das edições seguintes do evento de sua estréia. \n \n
    Em 2018, Leo lançou sua primeira obra, intitulada "Sombras de um vislumbre Celeste", que reúne poesias escritas ao longo
    de sua jornada e encontros com suas personas, refletindo sobre a vida, o amor, a morte e o além.
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

                <Card
                    img={'/images/poet-4.jpg'}
                    titulo="Leo L. Oliveira"
                    descricao={bio}
                    subtitulo="O Poeta Interestelar"
                    cores={cores}
                    position={"left"}
                />
            </motion.div>
        </section>
    )
}