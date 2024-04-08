import { SignupFormDemo } from "@/components/SignupFormDemo";
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaInstagram, FaPhone } from "react-icons/fa";

export const ContactUs = () => {
  return (
    <div className="flex pb-10 flex-col py-20 lg:flex-row gap-10 items-center justify-center min-h-2/3 tracking-widest">
      <div className="flex-1">
        <SignupFormDemo />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 text-center">
        <div className="flex flex-col gap-3 items-center">
          <SiGmail size={60} />
          <h1>Gmail</h1>
          <h2 className="truncate">phoenixriseteam@gmail.com</h2>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <FaLinkedin size={60} />
          <h1>Linkedin</h1>
          <h2>PhoenixRise</h2>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <FaInstagram size={60} />
          <h1>Instagram</h1>
          <h2>PhoenixRise</h2>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <FaPhone size={60} />
          <h1>Phone</h1>
          <h2>+212613506807</h2>
        </div>
      </div>
    </div>
  );
};
