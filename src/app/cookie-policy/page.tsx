// pages/cookie-policy.js
import React from 'react';
import Image from "next/image";
import {NextPrevButton} from "@/components/NextPrevButton";

const page = () => {
    return (
        <div className="py-36 flex flex-col gap-3 container px-10 sm:px-36">
            <div className='flex left-0 mb-10 gap-3 sm:gap-10'>
                <NextPrevButton link={'/'} direction={true} name={'Back to Home Page'}/>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-center">Cookie Policy</h1>
            <p>This Cookie Policy explains how we use cookies and similar technologies on our website. By using our
                website, you consent to the use of cookies in accordance with this Cookie Policy.</p>
            <h2 className="text-xl font-semibold mt-4">1. What Are Cookies?</h2>
            <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website.
                They are widely used to make websites work more efficiently and to provide information to the website
                owners.</p>
            <h2 className="text-xl font-semibold mt-4">2. Types of Cookies Used</h2>
            <p>We use the following types of cookies for the following purposes:</p>
            <ul className="list-disc ml-8">
                <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function
                    properly. They enable you to navigate our website and use its features.
                </li>
                <li><strong>Analytical/Performance Cookies:</strong> These cookies allow us to recognize and count the
                    number of visitors and to see how visitors move around our website when they are using it. This
                    helps us to improve the way our website works, for example, by ensuring that users are finding what
                    they are looking for easily.
                </li>
                <li><strong>Functionality Cookies:</strong> These cookies are used to recognize you when you return to
                    our website. This enables us to personalize our content for you, greet you by name, and remember
                    your preferences (for example, your choice of language or region).
                </li>
                <li><strong>Targeting Cookies:</strong> These cookies record your visit to our website, the pages you
                    have visited, and the links you have followed. We will use this information to make our website and
                    the advertising displayed on it more relevant to your interests.
                </li>
            </ul>
            <h2 className="text-xl font-semibold mt-4">3. How We Use Cookies</h2>
            <p>We use cookies to improve your experience on our website, including providing personalized content and
                ads, and to improve the functionality of our website. We do not use cookies to collect personal
                information.</p>
            <h2 className="text-xl font-semibold mt-4">4. Managing Your Cookie Preferences</h2>
            <p>Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies
                or delete certain cookies. Please note that if you choose to block cookies, you may not be able to use
                all the features on our website.</p>
            <h2 className="text-xl font-semibold mt-4">5. Changes to This Cookie Policy</h2>
            <p>We reserve the right to update this Cookie Policy at any time. Any changes we may make to our Cookie
                Policy in the future will be posted on this page. Please check back frequently to see any updates or
                changes to our Cookie Policy.</p>
            <h2 className="text-xl font-semibold mt-4">6. Contact Information</h2>
            <p>For any queries or concerns regarding the terms of use or our services, please contact us at:</p>
            <div className='flex flex-col text-lg sm:text-xl font-medium pt-7'>
                <Image src='/logo.png' alt='logo' width={70} height={70}/>
                <h1>PhoenixRise</h1>
                <a href="https://phoenixrise.agency/"
                   target='_blank'
                   className="text-blue-600 visited:text-purple-600">
                    https://phoenixrise.agency/
                </a>

                <p>Phone: +212613506807
                </p>
                <div className='flex gap-2'>Email:
                    <a href="mailto:phoenixriseteam@gmail.com"
                       className="text-blue-600 visited:text-purple-600">
                        phoenixriseteam@gmail.com
                    </a></div>
            </div>
            <div className='flex mt-14 gap-3 sm:gap-10'>
                <NextPrevButton link={'/privacy-policy'} direction={true} name={'Privacy Policy'}/>
            </div>
        </div>
    );
}

export default page;
