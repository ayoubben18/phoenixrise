import {PricingCard} from "@/components/PricingCard";
import {PricesTable} from "@/components/PricesTable";
import {CircleDollarSign} from "lucide-react";

export default function page() {
    return(
        <div className='section-style '>
            <h1 className='font-bold items-center text-slate-300 flex gap-3 text-4xl'>Pricing <CircleDollarSign size={40}/></h1>
            <div className='flex md:flex-row flex-col items-center gap-4'>
                <PricingCard color='bg-slate-500' className='border-4 border-slate-500'
                    title={'Single Service Pricing Plan'}
                    description={'Our Single Service Plan offers expert solutions for individual digital services, including logo design, promotional videos, and social media content creation.'}
                    notifications={services1}/>
                <PricingCard darker={true} color={'bg-amber-300'} className='border-4 border-amber-300'
                             title={'Small Business Digital Footprint Package'}
                             description={'\n' +
                                 'Boost your small business with our Digital Footprint Package, covering logo creation, social media, website development, and more for a cohesive online presence, now with a discount.'}
                             notifications={services2}/>
            </div>

            <PricesTable/>
        </div>
    )
}

const services1 = [
    "Customized service for your specific requirement",
    "Expert consultation and guidance throughout the process",
    "High-quality deliverables tailored to your brand's needs",
    "Seamless communication and quick turnaround time",
    "Flexible and cost-effective solution for your immediate needs"
]

const services2 = [
    "Discounted package offering cost savings for multiple services",
    "Custom logo design to represent your brand identity",
    "Engaging social media content creation and management",
    "Professional website development and optimization.",

]