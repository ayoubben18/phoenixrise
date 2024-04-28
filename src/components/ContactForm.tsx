"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useToast } from "./ui/use-toast";
import { useState } from "react";

type Inputs = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

export default function Component() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  async function sendEmail(
    name: string,
    subject: string,
    email: string,
    message: string
  ) {
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_OPTIONS_KEY,
    });

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        {
          fullname: name,
          subject: subject,
          sender: email,
          message: message,
        },
        process.env.NEXT_PUBLIC_OPTIONS_KEY
      );
      if (response.status == 200) {
        toast({
          description: "Message Sent successfully",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description:
            "The service might be down for the moment please try again later or contact us through LinkedIn.",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description:
          "The service might be down for the moment please try again later or contact us through LinkedIn.",
      });
    }
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    await sendEmail(data.name, data.subject, data.email, data.message);
    reset();
    setLoading(false);
  };

  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      id="form"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-xl space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get in Touch
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="text-red-500">This field is required</p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500">This field is required</p>
                )}
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="Enter the subject"
                {...register("subject", { required: true })}
              />
              {errors.subject && (
                <p className="text-red-500">This field is required</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                className="min-h-[150px]"
                id="message"
                placeholder="Enter your message"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <p className="text-red-500">This field is required</p>
              )}
            </div>
            <Button className="w-full" type="submit" disabled={loading}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
