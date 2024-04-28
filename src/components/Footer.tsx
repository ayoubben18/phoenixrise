import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { DragCloseDrawerExample } from "./DragCloseDrawerExample ";
import TermsOfUse from "./TermsOfUse";
import PrivacyPolicy from "./PrivacyPolicy";
import CookiePolicy from "./CookiePolicy";
export const Footer = () => {
  return (
    <div className="z-40 absolute w-full">
      <footer className="footer z-50 p-10 bg-base-200 text-base-content">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Web Development</a>
          <a className="link link-hover">Graphic Design</a>
          <a className="link link-hover">Video Editing</a>
          <a className="link link-hover">Software Creation</a>
        </nav>

        <nav>
          <h6 className="footer-title">Legal</h6>
          <DragCloseDrawerExample name="Terms of use">
            <TermsOfUse />
          </DragCloseDrawerExample>
          <DragCloseDrawerExample name="Privacy Policy">
            <PrivacyPolicy />
          </DragCloseDrawerExample>
          <DragCloseDrawerExample name="Cookie Policy">
            <CookiePolicy />
          </DragCloseDrawerExample>
        </nav>
      </footer>
      <footer className="footer px-10 z-50 py-4 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
          <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="logo"
            className="rounded-2xl"
          />
          <p>
            PhoenixRise. <br />
            Providing digital services
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/phoenixriseteam/"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/phoenixrise_team_/"
            >
              <FaInstagram size={30} />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};
