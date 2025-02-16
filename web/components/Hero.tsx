'use client';

import styles from '../styles/index';
import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '../utils/motion';

export default function Hero({ title, subtitle, text, img }) {
    return (
        <section className='relative overflow-hidden py-16 px-10 h-[100vh]' id='home'>
            <div className={`w-full h-full inset-0 bg-cover bg-center absolute z-0`}
                style={{ backgroundImage: img ? `url('${img}')` : 'url("./images/hero-index.webp")' }}
            >
                <div className='absolute inset-0 bg-black opacity-40'></div>
            </div>
            <motion.div variants={staggerContainer(0.1, 0.1)} initial="hidden"
                whileInView="show" viewport={{ once: false, amount: 0.25 }}
                className={`flex flex-col items-center justify-center`}>
                <div className="flex justify-center items-center flex-col relative z-20 pb-5">
                    <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
                        {title}
                    </motion.h1>
                    {subtitle && <motion.div variants={textVariant(1.2)} className="flex flex-row justify-center items-center">
                        <h1 className={styles.heroHeading + ' drop-shadow-xl text-center'}>{subtitle}</h1>
                    </motion.div>}
                    <motion.div variants={textVariant(1.5)}>
                        <p className='text-white bg-black/70 rounded-4xl p-4 fw-bold text-center mt-5 md:mt-0 text-[30px] leading-[40px] lg:text-[40px] lg:leading-[50px] px-[20px] md:px[100px] lg:px-[200px] md:text-center'>
                            {text}
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}