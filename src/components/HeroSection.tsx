import Image from 'next/image'
import {HoverBorderGradientDemo} from "@/components/HoverBorderGradientDemo";

export const HeroSection = () => {
    return (
        <div className='section-style'>
            <Image className='drop-shadow-[0_35px_35px_rgba(156,163,175,0.25)]' src={'/logo.png'} alt={'logo'} width={300} height={300}/>
            <h1 className='text-7xl font-bold text-gradient text-shadow-slate-600 '>PhoenixRise</h1>
            <p className='text-2xl text-slate-200 font-semibold'>FROM CONCEPT TO CONQUEST</p>
            <HoverBorderGradientDemo />

        </div>
    );
};