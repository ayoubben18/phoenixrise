import { CodeXml } from "lucide-react";
import { FaReact } from "react-icons/fa";
import {
  TbBrandNextjs,
  TbSquareRoundedNumber3Filled,
  TbSquareRoundedNumber4Filled,
} from "react-icons/tb";
import { SiTailwindcss, SiTurso } from "react-icons/si";
import { SiPayloadcms } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbSquareRoundedNumber1Filled } from "react-icons/tb";
import { TbSquareRoundedNumber2Filled } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiSupabaseFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Developement",
};
export default function page() {
  return (
    <div className="section-style text-center px-4">
      <h1 className="text-3xl xs:text-4xl items-center font-bold flex gap-3 text-slate-300 ">
        Web Development <CodeXml size={45} />
      </h1>
      <p className="text-slate-200 text-lg opacity-70">
        Our web development service is very flexible and modern using the latest
        frameworks and technologies
      </p>
      <ul className="timeline timeline-snap-icon space-y-5 max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <TbSquareRoundedNumber1Filled size={40} />
          </div>
          <div className="timeline-start mt-2 px-4 md:text-end mb-10">
            <div className="text-2xl xs:text-3xl text-left sm:text-right font-black">
              Front-end Stack
            </div>
            <div className="flex gap-3 mt-3 items-center justify-center">
              <FaReact size={50} />
              <SiTailwindcss size={50} />
              <TbBrandNextjs size={50} />
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <TbSquareRoundedNumber2Filled size={40} />
          </div>
          <div className="timeline-end mt-2 px-4 mb-10">
            <div className="text-2xl xs:text-3xl text-left font-black">
              Back-end Stack
            </div>
            <div className="flex gap-3 mt-3 items-start justify-start">
              <SiPayloadcms size={50} />
              <SiDotnet size={50} />
              <TbBrandNextjs size={50} />
              <FaNodeJs size={50} />
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <TbSquareRoundedNumber3Filled size={40} />
          </div>
          <div className="timeline-start mt-2 px-4 md:text-end mb-10">
            <div className="text-2xl xs:text-3xl text-left sm:text-center font-black">
              Databases
            </div>
            <div className="flex gap-3 mt-3 items-center justify-center">
              <SiTurso size={50} />
              <RiSupabaseFill size={50} />
              <DiMongodb size={50} />
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <TbSquareRoundedNumber4Filled size={40} />
          </div>
          <div className="timeline-end px-4 mt-2 mb-10 max-w-[400px] text-left">
            <div className="text-2xl xs:text-3xl font-black">Other</div>
            Our team is very flexible in using various tools and frameworks to
            adapt with the customer needs,So this stack is basic we are flexible
            in introducing new technologies to it.
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
}
