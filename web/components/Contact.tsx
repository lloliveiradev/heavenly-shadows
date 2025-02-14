// "use client"

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod"

// import { Button } from "./ui/button";
// import {
//     Form,
//     FormControl,
//     FormDescription,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from "./ui/form"
// import { Input } from "./ui/input";

// const formSchema = z.object({
//     username: z.string().min(2, {
//         message: "Username must be at least 2 characters.",
//     }),
// })

export default function Contact() {
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm({
    //     resolver: zodResolver(formSchema),
    // })
    return (
        <section className="bg-primary-black text-white py-16" id="contact">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center">Contact</h2>
                {/* <Form onSubmit={handleSubmit((data) => console.log(data))}>
                    <FormItem>
                        <FormLabel htmlFor="username">Username</FormLabel>
                        <FormField>
                            <Input
                                id="username"
                                type="text"
                                {...register("username")}
                            />
                        </FormField>
                        <FormMessage>
                            {errors.username?.message}
                        </FormMessage>
                    </FormItem>
                    <FormItem>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <FormField>
                            <Input
                                id="email"
                                type="email"
                                {...register("email")}
                            />
                        </FormField>
                        <FormMessage>
                            {errors.email?.message}
                        </FormMessage>
                    </FormItem>
                    <FormItem>
                        <FormLabel htmlFor="message">Message</FormLabel>
                        <FormField>
                            <Input
                                id="message"
                                type="text"
                                {...register("message")}
                            />
                        </FormField>
                        <FormMessage>
                            {errors.message?.message}
                        </FormMessage>
                    </FormItem>
                    <Button type="submit">Submit</Button>
                </Form> */}
            </div>
        </section>
    )
}
