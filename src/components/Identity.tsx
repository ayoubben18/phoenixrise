import React from "react";
import { ChevronRight, PenTool, WalletCards } from "lucide-react";

const Identity = () => {
  return (
    <div className="min-h-[70vh] flex flex-col gap-10 justify-center text-slate-900 py-20 px-10">
      <div className="flex flex-col items-start justify-start gap-3">
        <h1 className="text-6xl font-bold">What we do.</h1>
        <p className="text-lg">In PhoenixRise, We Digitalize Ideas via: </p>
      </div>
      <div className="flex flex-wrap items-start gap-10 w-full text-start">
        <div className="flex flex-col items-start gap-3 max-w-[300px]">
          <PenTool size={50} className=" text-slate-500" />
          <p className="text-2xl font-bold">Design</p>
          <p className="text-lg">We design social media content and videos</p>
        </div>
        <div className="flex flex-col items-start gap-3 max-w-[300px]">
          <ChevronRight size={50} className=" text-slate-500" />
          <p className="text-2xl font-bold">Websites</p>
          <p className="text-lg">We build websites and e-commerce stores</p>
        </div>
        <div className="flex flex-col items-start gap-3 max-w-[300px]">
          <WalletCards size={50} className=" text-slate-500" />
          <p className="text-2xl font-bold">Consulting</p>
          <p className="text-lg">
            We offer consulting services in the digital realm
          </p>
        </div>
      </div>
    </div>
  );
};

export default Identity;
