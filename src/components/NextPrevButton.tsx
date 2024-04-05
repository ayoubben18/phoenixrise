"use client"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {useRouter} from "next/navigation";

interface Props{
    direction:boolean
    name:string
    link:string
}

export function NextPrevButton({direction,name,link}:Props) {
    const router = useRouter()
    return (
        <Button variant="outline" size="icon"
                onClick={()=>router.push(link)}
                className={`text-lg flex  border-[1px] border-white gap-3 w-full px-2 ${direction && ' flex-row-reverse'}`}>
            {name}
            <ChevronRight className={`h-4 w-4 ${direction && 'rotate-180 flex-row-reverse'}`} />
        </Button>
    )
}