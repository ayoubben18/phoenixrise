import { VideoIcon } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen p-4 flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-300 flex items-center gap-3 mb-8">
        Video Editing <VideoIcon size={45} />
      </h1>
      <p className=" text-slate-500 mb-5">
        We specialize in motion graphic and after effect, also we have offers to
        edit videos according to your needs
      </p>
      <div className="flex flex-wrap justify-center gap-4 w-full">
        <video
          className="w-full sm:w-2/3 md:w-1/3 xl:w-1/4 p-1"
          src="/quark.mp4"
          autoPlay
          loop
          muted
        />
        <video
          className="w-full sm:w-2/3 md:w-1/3 xl:w-1/4 p-1"
          src="/ieee.mp4"
          autoPlay
          loop
          muted
        />
        <video
          className="w-full sm:w-2/3 md:w-1/3 xl:w-1/4 p-1"
          src="/infochain.mp4"
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
};

export default page;
