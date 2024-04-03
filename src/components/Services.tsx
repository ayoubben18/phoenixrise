import {CardHoverEffectDemo} from "@/components/CardHoverEffectDemo";
import { MdMiscellaneousServices } from "react-icons/md";
export const Services = () => {
    return (
        <div className='section-style' id='services'>
            <h1 className='title-section'>Services <MdMiscellaneousServices /></h1>
            <CardHoverEffectDemo/>
        </div>
    );
};