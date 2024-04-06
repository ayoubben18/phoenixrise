import {BellRing, Check, CircleDollarSign, MoveRight} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const notification = [
    {
        title: "Your call has been confirmed.",
        description: "1 hour ago",
    },
    {
        title: "You have a new message!",
        description: "1 hour ago",
    },
    {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
    },
]

type CardProps = React.ComponentProps<typeof Card> & {
    notifications: string[]
    darker?: boolean
    title: string
    color:string
    description: string
}

export function PricingCard({ className,title,description,notifications,darker,color, ...props }: CardProps) {
    return (
        <Card className={cn(`w-[300px] xs:w-[380px] ${color==='bg-amber-300' && 'py-[14px]'}`, className)} {...props}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">

                <div>
                    {notifications.map((notification, index) => (
                        <div
                            key={index}
                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                        >
                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                <p className="text-sm font-medium leading-none">
                                    {notification}
                                </p>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter >
                <Button className={`w-full ${color}`}>
                    <MoveRight className="mr-2 h-4 w-4" /> Discover More
                </Button>
            </CardFooter>
        </Card>
    )
}
