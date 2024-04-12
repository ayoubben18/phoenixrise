"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { X } from "lucide-react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

interface SidePanelProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const panelVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

const itemVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
};
export function Nav() {
  const [open, setOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navVisible, setNavVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setNavVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setNavVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (open) {
      setOpen(false);
    }
  }, [pathname]);
  return (
    <div
      className={`sticky w-full flex top-0 py-4 px-10 items-center justify-between bg-[#0d1317] z-50 transition-transform duration-300 ${
        navVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className=" flex  gap-2 items-center">
        <Link href={"/"}>
          <Image src={"/logo.png"} alt="logo" width={50} height={50} />
        </Link>
        <div className="hidden sm:flex ml-4">
          <NavigationMenu>
            <NavigationMenuList className=" gap-2">
              <NavigationMenuItem color="#11181e">
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            PhoenixRise
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Step into our digital haven, where captivating
                            experiences and amplified online presence await.
                            Elevate your brand effortlessly with our
                            comprehensive solutions.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/services/web-dev" title="Web Development">
                      We build websites and e-commerce stores
                    </ListItem>
                    <ListItem href="/docs/installation" title="Graphic Design">
                      We design social media content and logos
                    </ListItem>
                    <ListItem
                      href="/services/video-editing"
                      title="Video Editing"
                    >
                      We edit videos and create motion graphics
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      <div className=" hidden sm:flex items-center space-x-4">
        <Link href={"mailto:phoenixriseteam@gmail.com"}>
          <MailIcon className="text-white" />
        </Link>
        <Link
          target="_blank"
          href={"https://www.linkedin.com/company/phoenixriseteam"}
        >
          <LinkedinIcon className="text-white" />
        </Link>
        <InstagramIcon className="text-white" />
      </div>
      <div className="sm:hidden flex ">
        <button onClick={() => setOpen(true)} className="text-white">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16M4 12h16m-7 6h7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
      {open && (
        <motion.div
          initial="initial"
          animate={open ? "animate" : "exit"}
          variants={panelVariants}
          className="sm:hidden p-4 text-xl absolute top-0 left-0 right-0 bottom-0 h-screen bg-[#090D10]"
        >
          <div className="flex gap-3 items-center justify-between">
            <div className="flex gap-3 items-center ml-6">
              <Link href="/">
                <Image src="/logo.png" alt="logo" width={50} height={50} />
              </Link>
              <h1 className="text-2xl font-bold">PhoenixRise</h1>
            </div>
            <button onClick={() => setOpen(false)}>
              <X className="mr-6" />
            </button>
          </div>
          <Accordion type="single" collapsible className="w-full mt-10 px-6">
            <AccordionItem value="item-1">
              <AccordionTrigger>Services</AccordionTrigger>
              <AccordionContent>
                <motion.div variants={itemVariants}>
                  <Link
                    href="/services/web-dev"
                    className=" text-xl text-slate-300"
                  >
                    - Web Development
                  </Link>
                </motion.div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Contact Us</AccordionTrigger>
              <AccordionContent>
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-3 items-center justify-center gap-4 md:gap-8"
                >
                  {[
                    "https://www.linkedin.com/company/phoenixriseteam",
                    "https://www.instagram.com/phoenixrise.team/",
                    "mailto:phoenixriseteam@gmail",
                  ].map((link, index) => (
                    <Link
                      key={index}
                      href={link}
                      target="_blank"
                      className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white shadow-sm transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950"
                    >
                      {index === 0 && (
                        <>
                          <LinkedinIcon className="w-4 h-4" />
                          <span className="sr-only">LinkedIn</span>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <InstagramIcon className="w-10 h-4" />
                          <span className="sr-only">Instagram</span>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <MailIcon className="w-4 h-4" />
                          <span className="sr-only">Email</span>
                        </>
                      )}
                    </Link>
                  ))}
                </motion.div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>More</AccordionTrigger>
              <AccordionContent>
                <Link href="/pricing" className=" text-xl text-slate-300">
                  - Pricing
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      )}
    </div>
  );
}
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
