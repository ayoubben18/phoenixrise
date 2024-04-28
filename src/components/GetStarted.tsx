"use client";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { useToast } from "./ui/use-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

type Inputs = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

export default function GetStartedWithPhoenixRise() {
  const { register, handleSubmit, reset } = useForm<Inputs>();
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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  return (
    <motion.div
      className="flex w-full py-20 px-2 sm:px-10"
      id="getstarted"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-3xl w-full px-4">
        <motion.div variants={textVariants} className="space-y-2">
          <h2 className="text-4xl font-bold">
            Getting Started with PhoenixRise
          </h2>
          <p className="text-gray-500 py-2">
            Elevate Your Digital Branding with PhoenixRise Discover Unique
            Branding Solutions
            <br /> Explore our tailored digital branding services that redefine
            your brand's online presence.
          </p>
        </motion.div>
        <motion.div
          variants={textVariants}
          className="grid gap-6 md:grid-cols-2"
        >
          {[
            {
              title: "Explore Our Services",
              description:
                "Discover our comprehensive digital branding services designed to propel your business towards success.",
            },
            {
              title: "Understand Our Mission",
              description:
                "In PhoenixRise, we target authenticity and conciseness to provide promising solutions to our clients ensuring they embark on their journey with a sense of originality.",
            },
            {
              title: "Schedule a Consultation",
              description:
                "Discuss your digital goals and let PhoenixRise help you achieve them through personalized consultation.",
            },
            {
              title: "Join Our Community",
              description:
                "Follow us for the latest insights in digital marketing and design, and become part of our thriving community.",
            },
          ].map((item, index) => (
            <div key={index} className="space-y-1">
              <motion.h3 variants={textVariants} className="text-xl font-bold">
                {item.title}
              </motion.h3>
              <motion.p variants={textVariants} className="text-gray-500">
                {item.description}
              </motion.p>
            </div>
          ))}
        </motion.div>
        <motion.form
          className="grid w-full gap-4"
          onSubmit={handleSubmit(onSubmit)}
          variants={textVariants}
        >
          <motion.h2
            variants={textVariants}
            className="text-2xl font-bold mt-10 -mb-2"
          >
            Contact us
          </motion.h2>
          {["name", "subject", "email"].map((field, index) => (
            <motion.div
              key={field}
              variants={textVariants}
              className="space-y-2"
            >
              <Label className="text-sm" htmlFor={field}>
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </Label>
              <Input
                id={field}
                placeholder={`Your ${field}`}
                {...register(field as keyof Inputs)}
              />
            </motion.div>
          ))}
          <motion.div variants={textVariants} className="space-y-2">
            <Label className="text-sm" htmlFor="request">
              How can we help you embark on your journey?
            </Label>
            <Textarea
              {...register("message")}
              className="min-h-[100px]"
              id="request"
              placeholder="Describe your project or needs "
            />
          </motion.div>
          <motion.div variants={textVariants}>
            <Button size="lg" disabled={loading}>
              Submit
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </motion.div>
  );
}
