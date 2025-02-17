import { Regiao } from "./regiao";
import { Capital } from "./capital";

export interface Planeta {
    capital: Capital;
    descricao: string;
    curiosidade: string;
    img: string;
    leisFisicas: string;
    magia: string;
    mapa: string;
    persona: string;
    personalidade: string;
    regioes: Regiao[];
    rowid: number;
    sociedade: string;
    subtitulo: string;
    titulo: string;
}