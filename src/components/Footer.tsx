import Image from "next/image"
import {SiGmail} from "react-icons/si";
import {FaInstagram, FaLinkedin} from "react-icons/fa";
export const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Web Development</a>
                    <a className="link link-hover">Graphic Design</a>
                    <a className="link link-hover">Video Editing</a>
                    <a className="link link-hover">Software Creation</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover" href={'/terms-of-use'}>Terms of use</a>
                    <a className="link link-hover" href={'/privacy-policy'}>Privacy policy</a>
                    <a className="link link-hover" href={'/cookie-policy'}>Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <aside className="items-center grid-flow-col">
                    <Image src="/logo.png" width={50} height={50} alt="logo" className="rounded-2xl" />
                    <p>PhoenixRise. <br/>Providing digital services</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a target='_blank' href='https://www.linkedin.com/company/phoenixriseteam/'>
                            <FaLinkedin size={30}/>
                        </a>
                        <a>
                            <FaInstagram size={30}/>
                        </a>

                    </div>
                </nav>
            </footer>
        </div>
)
    ;
};