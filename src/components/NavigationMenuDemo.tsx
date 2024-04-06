"use client";
import { IoHomeSharp } from "react-icons/io5";
import React, { useState } from "react";
import {HoveredDiv, HoveredLink, LogoItem, Menu, MenuItem, ProductItem} from "@/components/ui/navigation-menu";
import { cn } from "@/utils/cn";
import {Home} from "lucide-react";

export function Nav() {
    return (
        <div className="sticky w-full flex top-2  items-center justify-center z-50">
            <Navbar className="top-2" />
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("top-10 inset-x-0 max-w-2xl mx-auto px-1 xs:px-10", className)}
        >
            <Menu setActive={setActive} >
                <LogoItem logo={<Home size={20} />}/>
                <MenuItem setActive={setActive} active={active} item="Services">
                    <div className="flex flex-col space-y-4 text-sm">

                        <HoveredLink href='/services/web-dev'>Web Development</HoveredLink>
                        <HoveredDiv>Graphic Design</HoveredDiv>
                        <HoveredDiv >Video Editing</HoveredDiv>
                        <HoveredDiv >Software Creation</HoveredDiv>
                        <HoveredLink href="/pricing">Pricing</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Products">
                    <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Instagram Posts"
                            src="https://assets.aceternity.com/demos/algochurn.webp"
                            description="Prepare for tech interviews like never before."
                        />
                        <ProductItem
                            title="Landing Pages"
                            src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                            description="Production ready Tailwind css components for your next project"
                        />
                        <ProductItem
                            title="E-commerce Stores"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                            description="Never write from scratch again. Go from idea to blog in minutes."
                        />
                        <ProductItem
                            title="Promotion Videos"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                            description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                        />
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Contact">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="mailto:phoenixriseteam@gmail.com">Email</HoveredLink>
                        <HoveredLink href="https://www.linkedin.com/company/phoenixriseteam/">Linkedin</HoveredLink>
                        <HoveredLink href="/team">Instagram</HoveredLink>
                    </div>
                </MenuItem>

            </Menu>
        </div>
    );
}
