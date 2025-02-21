export default function SunSVG() {
    return (
        <svg width="80" height="80" viewBox="0 0 100 100">
            <defs>
                {/* Filtro para criar um efeito de brilho suave */}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            {/* Corpo central do sol */}
            <circle cx="50" cy="50" r="15" fill="#FFD700" filter="url(#glow)" />
            {/* Raios finos – 16 linhas distribuídas circularmente */}
            {Array.from({ length: 16 }).map((_, i) => {
                const angle = (i * 360) / 16;
                const rad = (angle * Math.PI) / 180;
                const x1 = 50 + Math.cos(rad) * 20;
                const y1 = 50 + Math.sin(rad) * 20;
                const x2 = 50 + Math.cos(rad) * 30;
                const y2 = 50 + Math.sin(rad) * 30;
                return (
                    <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#FFD700"
                        strokeWidth="1"
                        strokeLinecap="round"
                        filter="url(#glow)"
                    />
                );
            })}
        </svg>
    );
};