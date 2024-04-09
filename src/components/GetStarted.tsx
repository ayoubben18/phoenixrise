"use client";
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
          description: "Message Sent successfuly",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description:
            "The service might be down for the mement please try again later or contact us through linkedin.",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description:
          "The service might be down for the mement please try again later or contact us through linkedin.",
      });
    }
  }
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    await sendEmail(data.name, data.subject, data.email, data.message);
    reset();
    setLoading(false);
  };
  return (
    <div className="flex w-full py-20 px-2 sm:px-10" id="getstarted">
      <div className="mx-auto max-w-3xl w-full px-4">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold">
            Getting Started with PhoenixRise
          </h2>
          <p className="text-gray-500 py-2">
            Elevate Your Digital Branding with PhoenixRise Discover Unique
            Branding Solutions
            <br /> Explore our tailored digital branding services that redefine
            your brand's online presence.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-1">
            <h3 className="text-xl font-bold">Explore Our Services</h3>
            <p className="text-gray-500">
              Discover our comprehensive digital branding services designed to
              propel your business towards success.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold">Understand Our Mission</h3>
            <p className="text-gray-500">
              In PhoenixRise, we target authenticity and conciseness to provide
              promising solutions to our clients ensuring they embark on their
              journey with a sense of originality
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold">Schedule a Consultation</h3>
            <p className="text-gray-500">
              Discuss your digital goals and let PhoenixRise help you achieve
              them through personalized consultation.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold">Join Our Community</h3>
            <p className="text-gray-500">
              Follow us for the latest insights in digital marketing and design,
              and become part of our thriving community.
            </p>
          </div>
        </div>
        <form className="grid w-full gap-4" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-2xl font-bold mt-10 -mb-2">Contact us</h2>
          <div className="space-y-2">
            <Label className="text-sm" htmlFor="name">
              Name
            </Label>
            <Input id="name" placeholder="Your name" {...register("name")} />
          </div>
          <div className="space-y-2">
            <Label className="text-sm" htmlFor="subject">
              Subject
            </Label>
            <Input
              id="subject"
              placeholder="Subject"
              {...register("subject")}
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm" htmlFor="email">
              Email
            </Label>
            <Input id="email" placeholder="Email" {...register("email")} />
          </div>
          <div className="space-y-2">
            <Label className="text-sm" htmlFor="request">
              How can we help you embark on your journey?
            </Label>
            <Textarea
              {...register("message")}
              className="min-h-[100px]"
              id="request"
              placeholder="Describe your project or needs "
            />
          </div>
          <Button size="lg" disabled={loading}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
