import Image from 'next/image'
import {HoverBorderGradientDemo} from "@/components/HoverBorderGradientDemo";
import {BackgroundBeams} from "@/components/ui/background-beams";

export const HeroSection = () => {
    return (
        <div>
            <div className='section-style relative'>
                <Image className='glowy-bg
' src={'/logo.png'} alt={'logo'} width={300} height={300} priority={true}/>
                <h1 className='text-6xl font-bold text-gradient text-shadow-slate-600 xs:text-7xl '>PhoenixRise</h1>
                <p className='text-xl xs:text-2xl text-slate-200 font-semibold'>FROM CONCEPT TO CONQUEST</p>
                <HoverBorderGradientDemo/>
            </div>
            <BackgroundBeams />
        </div>
    );
};