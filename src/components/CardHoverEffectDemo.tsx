import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "Website Creation",
        description:
            "We craft custom websites that blend functionality with aesthetics, ensuring seamless user experiences across all devices.",
    },
    {
        title: "Logo Design",
        description:
            "Crafting unique logos that embody your brand's essence, leaving a memorable mark on your audience.",
    },
    {
        title: "Instagram Content Design",
        description:
            "Captivating visuals and engaging content tailored for Instagram, elevating your brand's presence.",
    },
    {
        title: "Ecommerce Stores",
        description:
            "Building intuitive online stores that drive sales, providing seamless shopping experiences for your customers.",
    },
    {
        title: "Video Editing",
        description:
            "Professional video editing services to create compelling visual narratives that resonate with your audience.",
    },
    {
        title: "Graphic Motion",
        description:
            "Bringing your ideas to life with captivating motion graphics that enhance brand storytelling.",
    },
];


