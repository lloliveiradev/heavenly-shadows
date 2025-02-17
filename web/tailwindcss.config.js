/** @type {import('tailwindcss').Config} */
module.exports = {
    safelist: [
        //apollo
        'bg-[#1e2939]',//fundo
        'bg-[#bd9d5f]',//primaria
        'bg-[#af8023]',//secundaria
        'from-[#af8023]',//gradiente
        'text-[#1e2939]',//fundo
        'text-[#bd9d5f]',//primaria e titulo
        'text-[#af8023]',//secundaria
        'text-[#f3f4f6]',//texto
        //irwin
        'bg-cyan-800',
        'text-cyan-800',
        'bg-cyan-600',
        'text-cyan-600',
        'bg-blue-900',
        'text-blue-900',
        'from-[#053345]',
        //munir
        'bg-emerald-900',
        'text-emerald-900',
        'bg-emerald-700',
        'text-emerald-700',
        'bg-sky-300',
        'text-sky-300',
        'from-[#002c22]',
        //corvus
        'bg-slate-700',
        'text-slate-700',
        'bg-violet-950',
        'text-violet-950',
        'text-violet-800',
        'bg-violet-800',
        'from-[#1e1a4d]',
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
        'bg-transparent',
        'bg-blue-900',
        'text-blue-900',
        'bg-gray-800',
        'text-gray-800',
        'bg-sky-700',
        'text-sky-700',
        'from-[#1d293d]',
        'bg-[#1e2939]'
    ],
};