'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';
import React from 'react';

export const TypingText = ({ title, textStyles }) => (
    <motion.p
        variants={textContainer}
        className={textStyles}
    >
        {Array.from(title).map((letter: string, index) => (
            <motion.span variants={textVariant2} key={index}>
                {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
        ))}
    </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
    <motion.h2
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className={textStyles}
    >
        {title}
    </motion.h2>
);