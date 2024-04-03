import {AnimatedTooltipPreview} from "@/components/AnimatedTooltipPreview";
import { AiOutlineTeam } from "react-icons/ai";

export const AboutUs = () => {
    return (
        <div className='flex flex-col pb-20 gap-6 items-center justify-center min-h-1/2 tracking-widest'>
            <h1 className='title-section'>Our Team <AiOutlineTeam /></h1>
            <div className='h-1 bg-blue-500 w-20'/>
            <div className=' flex flex-col bg-black rounded-3xl gap-10 py-20'><AnimatedTooltipPreview/>
                <p className='text-justify text-lg px-10 sm:text-xl md:text-2xl  '>
                    At PhoenixRise, we specialize in leveraging the power of
                    striking web design and captivating social media content to drive businesses towards greatness. Our
                    mission is to propel your brand from concept to conquest in the digital realm. We harness the power
                    of digital innovation to ensure your success.
                </p>
            </div>
        </div>
    );
};