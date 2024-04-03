"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
    {
        id: 1,
        name: "Ayoub Bensalah",
        designation: "Founder",
        image:
            "/ayoub.jpg",
    },
    {
        id: 2,
        name: "Houda Boussaid",
        designation: "Co-Founder",
        image:
            "/houda.jpg",
    },

];

export function AnimatedTooltipPreview() {
    return (
        <div className="flex flex-row items-center justify-center w-full">
            <AnimatedTooltip items={people} />
        </div>
    );
}
