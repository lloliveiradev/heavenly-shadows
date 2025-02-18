/** @type {import('tailwindcss').Config} */
module.exports = {
    safelist: [
        //apollo
        'bg-[#1e2939]',//fundo
        'bg-[#bd9d5f]',//primaria e titulo
        'bg-[#af8023]',//secundaria
        'bg-[#fdc700]',//terciaria
        'from-[#af8023]',//gradiente
        'text-[#1e2939]',//fundo
        'text-[#bd9d5f]',//primaria e titulo
        'text-[#af8023]',//secundaria
        'text-[#fdc700]',//terciaria
        'text-[#f3f4f6]',//texto
        //corvus
        'bg-[#1e1a4d]',//primaria
        'bg-[#372aac]',//secundaria
        'bg-[#8c85dd]',//titulo
        'bg-[#312c85]',//terciaria
        'from-[#1e1a4d]',//gradiente
        'text-[#1e1a4d]',//fundo
        'text-[#8c85dd]',//primaria e titulo
        'text-[#372aac]',//secundaria
        'text-[#312c85]',//terciaria
        //irwin
        'bg-[#0092b8]',//primaria e titulo
        'bg-[#005f78]',//secundaria
        'bg-[#0084d1]',//terciaria
        'from-[#053345]',//gradiente
        'text-[#0092b8]',//primaria e titulo
        'text-[#005f78]',//secundaria
        'text-[#0084d1]',//terciaria
        //munir
        'bg-[#009689]',//primaria e titulo
        'bg-[#00786f]',//secundaria
        'bg-[#bedbff]',//terciaria
        'from-[#00302f]',//gradiente
        'text-[#009689]',//primaria e titulo
        'text-[#00786f]',//secundaria
        'text-[#bedbff]',//terciaria
        //geral
        'bg-gray-700',
        'text-gray-100',
        'text-violet-500',
        'bg-violet-700',
        'bg-violet-500',
        { pattern: /bg-./, variants: ['hover:', '/'] },
        { pattern: /text-./, variants: ['hover:', '/'] },
        'w-[40px]',
        'bg-black',
        'bg-black/70',
        'bg-transparent',
        'bg-blue-900',
        'text-blue-900',
        'bg-gray-800',
        'text-gray-800',
        'bg-sky-700',
        'text-sky-700',
        'from-[#1d293d]',
        'bg-[#1e2939]',
        'bg-[#1d293d]',
    ],
};