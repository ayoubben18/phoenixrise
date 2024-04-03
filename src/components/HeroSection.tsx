import Image from 'next/image'
import {HoverBorderGradientDemo} from "@/components/HoverBorderGradientDemo";
import {BackgroundBeams} from "@/components/ui/background-beams";

export const HeroSection = () => {
    return (
        <div>
            <div className='section-style relative'>
                <img className='glowy-bg w-72 h-72 xs:w-80 xs:h-80 sm:w-96 sm:h-96 md:w-96 md:h-96 lg:w-96 lg:h-96'
 src={'/logo.png'} alt={'logo'} />
                <h1 className='text-5xl font-bold text-gradient text-shadow-slate-600 xs:text-7xl '>PhoenixRise</h1>
                <p className='text-sm xs:text-2xl text-slate-200 font-semibold'>FROM CONCEPT TO CONQUEST</p>
                <HoverBorderGradientDemo/>
            </div>
            <BackgroundBeams />
        </div>
    );
};