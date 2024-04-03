"use client";
import React, {useState} from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { Textarea } from "@/components/ui/textarea"
import {useForm, SubmitHandler, set} from "react-hook-form"
import emailjs from "@emailjs/browser";
import {useToast} from "@/components/ui/use-toast";

type Inputs = {
    fullname: string
    subject: string
    email: string
    message: string
}

export function SignupFormDemo() {
    async function sendEmail(email: string,subject:string, fullname: string, message: string) {
        emailjs.init({
            publicKey:process.env.NEXT_PUBLIC_OPTIONS_KEY
        });

        try {
            const response = await emailjs.send(
                process.env.NEXT_PUBLIC_SERVICE_ID!,
                process.env.NEXT_PUBLIC_TEMPLATE_ID!,
                {
                    fullname: fullname,
                    message: message,
                    sender: email,
                    subject:subject
                },
                process.env.NEXT_PUBLIC_OPTIONS_KEY
            );

            toast({
                description: "Email Sent successfuly",
            })
        } catch (error) {
            console.log(error)
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "The service might be down for the mement please try again later or contact us through linkedin.",
            })
        }
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },reset,
    } = useForm<Inputs>()
    const { toast } = useToast()
    const [loading, setLoading] = useState(false)
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setLoading(true)
        await sendEmail(data.email, data.subject, data.fullname, data.message)
        reset()
        setLoading(false)
        
    }
    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Contact Us
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                please it is necessary to leave us your correct email to contact you back
            </p>

            <form className="my-8 " onSubmit={handleSubmit(onSubmit)}>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="firstname">Full Name</Label>
                        <Input id="firstname" placeholder="Full Name" type="text" {...register("fullname")} />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="lastname">Subject</Label>
                        <Input {...register("subject")} id="lastname" placeholder="Subject" type="text" />
                    </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input {...register("email")} id="email" placeholder="example@fc.com" type="email" />
                </LabelInputContainer>

                <LabelInputContainer className="mb-8">
                    <Label htmlFor="twitterpassword">Your twitter password</Label>
                    <Textarea {...register("message")}
                        id="twitterpassword"
                        placeholder="Your Message"
                    />
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                    disabled={loading}
                >
                    Send &rarr;
                    <BottomGradient />
                </button>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            {/*    <div className="flex flex-col space-y-4">*/}
            {/*        <button*/}
            {/*            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"*/}
            {/*            type="submit"*/}
            {/*        >*/}
            {/*            <IconBrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />*/}
            {/*            <span className="text-neutral-700 dark:text-neutral-300 text-sm">*/}
            {/*  Linkedin*/}
            {/*</span>*/}
            {/*            <BottomGradient />*/}
            {/*        </button>*/}
            {/*        <button*/}
            {/*            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"*/}
            {/*            type="submit"*/}
            {/*        >*/}
            {/*            <IconBrandGmail className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />*/}
            {/*            <span className="text-neutral-700 dark:text-neutral-300 text-sm">*/}
            {/*  Google*/}
            {/*</span>*/}
            {/*            <BottomGradient />*/}
            {/*        </button>*/}
            {/*        <button*/}
            {/*            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"*/}
            {/*            type="submit"*/}
            {/*        >*/}
            {/*            <IconBrandInstagram className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />*/}
            {/*            <span className="text-neutral-700 dark:text-neutral-300 text-sm">*/}
            {/*  Instagram*/}
            {/*</span>*/}
            {/*            <BottomGradient />*/}
            {/*        </button>*/}
            {/*    </div>*/}
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
                                 children,
                                 className,
                             }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
