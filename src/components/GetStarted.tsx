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
  message: string;
};

export default function GetStartedWithPhoenixRise() {
  async function sendEmail(name: string, message: string) {
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_OPTIONS_KEY,
    });

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        "template_yztlcau",
        {
          name: name,
          message: message,
        },
        process.env.NEXT_PUBLIC_OPTIONS_KEY
      );

      toast({
        description: "Message Sent successfuly",
      });
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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    await sendEmail(data.name, data.message);
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
          <p className="text-gray-500">
            Ready to elevate your digital presence? Here’s how you can embark on
            your transformative journey with PhoenixRise.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-1">
            <h3 className="text-xl font-bold">Discover Our Services</h3>
            <p className="text-gray-500">
              Explore our striking web design and social media content services
              to drive your business towards greatness.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold">Understand Our Mission</h3>
            <p className="text-gray-500">
              Learn how we propel brands from concept to conquest in the digital
              realm.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold">Schedule a Consultation</h3>
            <p className="text-gray-500">
              Let’s talk about your digital goals and how PhoenixRise can help
              you achieve them.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold">Join Our Community</h3>
            <p className="text-gray-500">
              Follow us to get insights into the latest in digital marketing and
              design.
            </p>
          </div>
        </div>
        <form className="grid w-full gap-4" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-2xl font-bold mt-10 -mb-2">
            Add your suggestions
          </h2>
          <div className="space-y-2">
            <Label className="text-sm" htmlFor="name">
              Name
            </Label>
            <Input id="name" placeholder="Your name" {...register("name")} />
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
