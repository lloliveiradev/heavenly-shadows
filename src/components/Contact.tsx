"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form";

import { InstagramLogo, SpotifyLogo, YoutubeLogo, XLogo } from '@phosphor-icons/react';
import WattpadLogo from "./WattpadLogo";
import { TitleText, TypingText } from "./CustomTexts";
import { fadeIn, staggerContainer } from "../utils/motion";
import { motion } from 'framer-motion';
import { postContato } from "../server/contato";
import { JSX, useState } from "react";
import { Alert } from "./Alert";
import Loader from "./Loader";

const formSchema = z.object({
    email: z.string().email({
        message: "Por favor, informe um endereço de e-mail válido.",
    }),
    message: z.string().min(10, {
        message: "Sua mensagem de ter ao menos 10 caractéres.",
    }),
    name: z.string().min(3, {
        message: "Seu nome deve ter ao menos 3 letras.",
    }),
    subject: z.string().min(1, {
        message: "O assunto deve ter ao menos 1 letra.",
    }),
});

const defAlert = {
    show: false,
    title: '',
    description: '',
    cancel: { show: false, text: '' },
    confirm: { show: false, text: '' },
};

interface SocialIcons {
    name: string;
    icon: JSX.Element;
    href: string;
}

export default function Contact({ API_URL }: { API_URL: string }) {
    const [alert, setAlert] = useState(defAlert);
    const [loading, setLoading] = useState(false);
    async function onCancel() {
        setAlert(defAlert);
    };
    async function onConfirm() {
        setAlert(defAlert);
    };
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            message: "",
            name: "",
            subject: "",
        },
    });
    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setLoading(true);
            await postContato(API_URL,
                {
                    email: values.email,
                    message: values.message,
                    name: values.name,
                    subject: values.subject,
                }
            );
            setAlert({
                show: true,
                title: 'Pronto!',
                description: 'Mensagem registrada! \n Em breve, entraremos em contato.',
                cancel: { show: false, text: '' },
                confirm: { show: true, text: 'Ok' },
            });
        } catch (error) {
            console.error('@onSubmit-error', error);
            setAlert({
                show: true,
                title: 'Ops!',
                description: 'Tivemos um problema ao registrar sua mensagem, tente novamente mais tarde.',
                cancel: { show: false, text: '' },
                confirm: { show: true, text: 'Ok' },
            });
        } finally {
            setLoading(false);
        };
    };
    const social = [
        { name: 'Twitter', icon: <XLogo className="me-2 hover:opacity-75" size={28} fill="#1c9cea" />, href: "https://x.com/SombrasCelestes" },
        { name: 'Instagram', icon: <InstagramLogo className="me-2 hover:opacity-75" size={28} fill="#d62977" />, href: "https://www.instagram.com/oliverleonlop/" },
        { name: 'Spotify', icon: <SpotifyLogo className="me-2 hover:opacity-75" size={28} fill="#1db954" />, href: "https://open.spotify.com/playlist/43hJlDYp2vDol9GQnnwYwc?si=f7d8b4e50e5b4937" },
        { name: 'YouTube', icon: <YoutubeLogo className="me-2 hover:opacity-75" size={28} fill="#ed0000" />, href: "https://www.youtube.com/c/SombrasCelestes" },
        { name: 'Wattpad', icon: <WattpadLogo className="me-2 hover:opacity-75" width="28" height="28" fill="#f64d09" />, href: "https://www.wattpad.com/story/159069820-sombras-de-um-vislumbre-celeste" },
    ];
    const faleConosco = 'Se tiver dúvidas ou sugestões, se quizer encomendar um poema especial para alguém, ou ainda, se quiser desenvolver uma parceria, entre em contato conosco através das redes sociais ou pelo formulário abaixo.'

    return (
        <section className="bg-primary-black text-white py-16" id="contact">
            {loading && <Loader />}
            <div className="container mx-auto px-4 w-full md:w-[70vw] lg:w-[50vw]">
                <motion.div
                    variants={staggerContainer(0.5, 0.25)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className="flex items-center justify-center py-2 border-4 border-gray-800 rounded-t-lg"
                >
                    <TypingText title="| Contato" textStyles="w-full text-3xl font-bold text-center" />
                </motion.div>
                <motion.div
                    variants={staggerContainer(0.5, 0.25)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className="w-full grid grid-cols-1 md:grid-cols-2 gap-7 py-5 border-x-4 border-x-gray-800"
                >
                    <div className="space-y-4">
                        <h2 className="text-2xl text-center md:text-end">Redes Sociais</h2>
                        <ul className="space-y-4 pt-2 md:float-end">
                            {social.map((item: SocialIcons, index: number) => {
                                return (
                                    <motion.li
                                        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
                                        className="pb-2" key={item.name}>
                                        <a className="flex items-center justify-center md:justify-start" href={item.href} target="_blank" rel="noreferrer">
                                            {item.icon}
                                            {item.name}
                                        </a>
                                    </motion.li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="space-y-4 text-center md:text-start">
                        <h2 className="text-2xl">Fale Conosco</h2>
                        <TitleText textStyles="w-full text-justify pt-2 px-7 md:ps-0" title={faleConosco} />
                    </div>
                </motion.div>
                <div className="flex items-center justify-center">
                    <div className="w-full p-5 bg-gray-800 rounded-b-2xl">
                        <Alert data={alert} onCancel={onCancel} onConfirm={onConfirm} />
                        <Form  {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <FormField control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="mb-4">
                                            <FormLabel htmlFor="name">Nome:</FormLabel>
                                            <FormControl>
                                                <Input id="name" type="text" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField control={form.control}
                                    name="subject"
                                    render={({ field }) => (
                                        <FormItem className="mb-4">
                                            <FormLabel htmlFor="subject">Assunto:</FormLabel>
                                            <FormControl>
                                                <Input id="subject" autoComplete="false" type="text" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="mb-4">
                                            <FormLabel htmlFor="subject">E-mail:</FormLabel>
                                            <FormControl>
                                                <Input id="email" type="email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem className="mb-4">
                                            <FormLabel htmlFor="message">Mensagem:</FormLabel>
                                            <FormControl>
                                                <Input id="message" type="text" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className="rounded-lg float-end bg-violet-500 hover:bg-violet-700 text-white cursor-pointer">
                                    Enviar
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </section >
    )
}
