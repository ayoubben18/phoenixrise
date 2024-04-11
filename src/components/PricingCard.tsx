import { BellRing, Check, CircleDollarSign, MoveRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const notification = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

type CardProps = React.ComponentProps<typeof Card> & {
  notifications: string[];
  darker?: boolean;
  title: string;
  color: string;
  description: string;
};

export function PricingCard() {
  return (
    <div className="flex md:flex-row flex-col items-center gap-4">
      <Card className="w-[300px] xs:w-[400px] bg-white text-[#1a202c]">
        <CardHeader>
          <CardTitle>Individual</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold">Single Service Pricing Plan</div>
          <ul className="my-4 space-y-2">
            <li>✔ Customized service for your specific requirement</li>
            <li>✔ Expert consultation and guidance throughout the process</li>
            <li>✔ High-quality deliverables tailored to your brand's needs</li>
            <li>✔ Seamless communication and quick turnaround time</li>
            <li>
              ✔ Flexible and cost-effective solution for your immediate needs
            </li>
          </ul>
          <div className="text-sm text-gray-600 mt-4">
            Our Single Service Plan offers expert solutions for individual
            digital services, including logo design, promotional videos, and
            social media content creation.
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full text-white bg-[#1a202c] hover:text-[#1a202c]">
            Get started
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-[300px] xs:w-[400px] bg-[#1a202c] text-white">
        <CardHeader className=" mt-4">
          <CardTitle>Business</CardTitle>
        </CardHeader>
        <CardContent className=" mt-4">
          <div className="text-4xl font-bold">Small Business Package</div>
          <ul className="my-4 space-y-2">
            <li>
              ✔ Discounted package offering cost savings for multiple services
            </li>
            <li>✔ Custom logo design to represent your brand identity</li>
            <li>✔ Engaging social media content creation and management</li>
            <li>✔ Professional website development and optimization.</li>
          </ul>
          <div className="text-sm text-gray-400 mt-4">
            Boost your small business with our Digital Footprint Package,
            covering logo creation, social media, website development, and more
            for a cohesive online presence, now with a discount.
          </div>
        </CardContent>
        <CardFooter className=" mt-1">
          <Button className="w-full bg-white text-black hover:text-white">
            Get started
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
