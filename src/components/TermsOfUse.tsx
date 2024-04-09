// pages/terms-of-use.js
import React from "react";
import Image from "next/image";
import { NextPrevButton } from "@/components/NextPrevButton";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Metadata } from "next";

const TermsOfUse = () => {
  return (
    <div className="flex flex-col gap-3 container">
      <h1 className="text-4xl font-bold mb-4 text-center">Terms of Use</h1>
      <p>
        The following terms and conditions govern the use of the digital
        services offered by our agency. By accessing and using our website, you
        agree to comply with and be bound by these terms and conditions. If you
        disagree with any part of these terms and conditions, you must not use
        our website.
      </p>
      <h2 className="text-xl font-semibold mt-4">1. Description of Services</h2>
      <p>Our digital services agency offers a range of services including:</p>
      <ul className="list-disc ml-8">
        <li>Landing page conception</li>
        <li>Social media content creation</li>
        <li>Logo design</li>
        <li>E-commerce store development</li>
        <li>Promotional video creation</li>
      </ul>
      <h2 className="text-xl font-semibold mt-4">2. Client Responsibilities</h2>
      <p>
        As a client availing our services, you are responsible for providing
        accurate and timely information required for the successful execution of
        the agreed services. The client must also comply with all legal and
        regulatory requirements related to the services availed.
      </p>
      <h2 className="text-xl font-semibold mt-4">
        3. Commencement and Termination of Services
      </h2>
      <p>
        The term for the services shall commence on the start date indicated in
        the agreement and shall continue for the term of the contracted
        services. Either party may terminate the agreement by providing written
        notice as per the terms outlined in the agreement.
      </p>
      <h2 className="text-xl font-semibold mt-4">4. Intellectual Property</h2>
      <p>
        All intellectual property rights in the services provided, including but
        not limited to the design, content, and any proprietary technology,
        shall remain the property of the agency unless otherwise agreed upon in
        writing.
      </p>
      <h2 className="text-xl font-semibold mt-4">5. Limitation of Liability</h2>
      <p>
        Our agency shall not be liable for any indirect, consequential,
        incidental, special, or punitive damages, or any loss of profits or
        revenues, whether incurred directly or indirectly, or any loss of data,
        use, goodwill, or other intangible losses, resulting from the use of our
        services.
      </p>
      <h2 className="text-xl font-semibold mt-4">6. Privacy Policy</h2>
      <p>
        The use of our services is also governed by our Privacy Policy, which
        outlines how we collect, use, and disclose information. By using our
        services, you agree to our use of your information in accordance with
        our Privacy Policy.
      </p>
      <h2 className="text-xl font-semibold mt-4">7. Contact Information</h2>
      <p>
        For any queries or concerns regarding the terms of use or our services,
        please contact us at:
      </p>
    </div>
  );
};

export default TermsOfUse;
