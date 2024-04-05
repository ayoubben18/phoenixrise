import {PricingCard} from "@/components/PricingCard";

export default function page() {
    return(
        <div className='section-style'>
            <h1>Pricing</h1>
            <div className='flex gap-4'>
                <PricingCard
                title={'On-Demand'}
                description={'Get started on-demand with our on-demand plans where you get to choose what service suits you ar your business.'}
                notifications={ondemand}/>
            </div>
        </div>
    )
}

const ondemand=[
    {
        title: "Comfortable for low budget or low demand",
        description: "If you need a single service or you're interested in one field",
    },
    {
        title: "Fast delivery",
        description: "Our team prioritize small tasks first",
    },
    {
        title: "High Price",
        description: "this plan is not someone who needs multiple services or projects",
    },
]