// pages/terms-of-use.js
import React from "react";
import Image from "next/image";
import { NextPrevButton } from "@/components/NextPrevButton";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Metadata } from "next";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col gap-3 container">
      <h1 className="text-4xl font-bold mb-4 text-center">Privacy Policy</h1>
      <p>
        This Privacy Policy describes how [Agency Name] ("we" or "us") collects,
        uses, stores, and discloses information obtained from users of our
        website and services. By accessing our website and utilizing our
        services, you agree to the collection and use of information in
        accordance with this Privacy Policy.
      </p>
      <h2 className="text-xl font-semibold mt-4">
        1. Information Collection and Use
      </h2>
      <p>
        We may collect personal information such as name, email address, contact
        information, and payment details when you engage with our services. This
        information is used to provide and improve our services and to
        communicate with you. We may also collect non-personal information such
        as browser type, operating system, and IP address for analytical
        purposes.
      </p>
      <h2 className="text-xl font-semibold mt-4">
        2. Data Storage and Security
      </h2>
      <p>
        We are committed to ensuring the security of your personal information.
        We implement appropriate data collection, storage, and processing
        practices and security measures to protect against unauthorized access,
        alteration, disclosure, or destruction of your personal information,
        username, password, transaction information, and data stored on our
        site.
      </p>
      <h2 className="text-xl font-semibold mt-4">3. Information Disclosure</h2>
      <p>
        We do not sell, trade, or rent users' personal identification
        information to others. We may share generic aggregated demographic
        information not linked to any personal identification information
        regarding visitors and users with our business partners, trusted
        affiliates, and advertisers for the purposes outlined above.
      </p>
      <h2 className="text-xl font-semibold mt-4">4. User Rights</h2>
      <p>
        You have the right to access, correct, amend, or delete any personal
        information we hold about you. You also have the right to withdraw
        consent for the processing of your personal data. To exercise these
        rights, please contact us using the information provided in the "Contact
        Information" section below.
      </p>
      <h2 className="text-xl font-semibold mt-4">5. Cookie Usage</h2>
      <p>
        Our website may use "cookies" to enhance user experience. Users may
        choose to set their web browser to refuse cookies or to alert them when
        cookies are being sent. If they do so, note that some parts of the site
        may not function properly.
      </p>
      <h2 className="text-xl font-semibold mt-4">6. Legal Requirements</h2>
      <p>
        We will disclose your personal information where required to do so by
        law or subpoena or if we believe that such action is necessary to comply
        with the law and the reasonable requests of law enforcement or to
        protect the security or integrity of our site.
      </p>
      <h2 className="text-xl font-semibold mt-4">
        7. Changes to This Privacy Policy
      </h2>
      <p>
        We reserve the right to update this Privacy Policy at any time. We
        encourage users to frequently check this page for any changes to stay
        informed about how we are helping to protect the personal information we
        collect. You acknowledge and agree that it is your responsibility to
        review this privacy policy periodically and become aware of
        modifications.
      </p>
      <h2 className="text-xl font-semibold mt-4">8. Contact Information</h2>
      <p>
        For any queries or concerns regarding the terms of use or our services,
        please contact us at:
      </p>
    </div>
  );
};

export default PrivacyPolicy;
