import { motion } from 'framer-motion';

function splitText(text: string) {
    const words = text.split(' ').filter(word => ![' ', ''].includes(word));
    return words.map((word: string, wordIx: number) => (
        <motion.span
            key={`${wordIx}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: wordIx * 0.2 }}
        >
            {word === '\\n' ? <br /> : (word + ' ')}
        </motion.span>
    ));
};

export default splitText;