import React from 'react';
import { motion } from 'framer-motion';
import SunSVG from './SunSVG';

const SunOrbit = () => {
    return (
        // Container que ocupa a metade direita da tela e esconde o que ultrapassa
        <div className="fixed top-0 right-0 w-1/2 h-full overflow-hidden pointer-events-none">
            {/* Centro da órbita: colocado na borda esquerda deste container */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2" style={{ perspective: 800 }}>
                {/* Container que roda continuamente */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "0 0" }}
                >
                    {/* 
              O deslocamento horizontal define o raio da órbita.
              Aqui, o sol é deslocado 150px à direita do centro de rotação.
          */}
                    <div style={{ transform: "translateX(150px) rotateX(20deg) rotateY(20deg)" }}>
                        <SunSVG />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SunOrbit;
