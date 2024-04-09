/**
 * v0 by Vercel.
 * @see https://v0.dev/t/rmsvo0AzufT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Component() {
  return (
    <section className="w-full py-20">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="space-y-2 text-center">
            <h2 className="text-4xl xs:text-5xl font-bold sm:text-4xl">FAQ</h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Got a question? We've got answers. If you can't find what you're
              looking for, feel free to get in touch.
            </p>
          </div>
          <div className="space-y-2 text-lg sm:text-xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Do we offer single services ?
                </AccordionTrigger>
                <AccordionContent>
                  Yes we do, you can ask for any service from the list above,
                  however we do offer special discounts to clients who demand a
                  pack of services. you can take a look at our{" "}
                  <span className="badge badge-neutral">/pricing</span> page.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can you use my stack?</AccordionTrigger>
                <AccordionContent>
                  Yes. our team is very flexible with using multiple tools and
                  technologies and even we have a team of freelancers that help
                  us when we need them.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Is there an all-in-one digital services pack ?
                </AccordionTrigger>
                <AccordionContent>
                  Yes indeed ! In PhoenixRise we mainly target small businesses
                  and startups who want to leave their footprint out there, and
                  we do understand the hardship that comes with this mission so
                  we offer a package of all our services with a DISCOUNT !
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Another question ?</AccordionTrigger>
                <AccordionContent>
                  You can contact us through:
                  <br />- Email address:
                  <a
                    target="_blank"
                    href="mailto:phoenixriseteam@gmail"
                    className="link text-slate-300 ml-1"
                  >
                    phoenixriseteam@gmail.com
                  </a>
                  <br />
                  - Phone number: +212613506807
                  <br />- Linkedin:{" "}
                  <a
                    className="text-slate-300 ml-1"
                    target="_blank"
                    href="https://www.instagram.com/phoenixrise.team/"
                  >
                    phoenixriseteam
                  </a>
                  <br />- Or fill out the form above.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
