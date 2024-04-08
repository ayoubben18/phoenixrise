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
                <AccordionTrigger>Is it For Individuals?</AccordionTrigger>
                <AccordionContent>
                  Yes. PhoenixRise Provide services for individuals you can take
                  a look at our{" "}
                  <span className="badge badge-neutral">/pricing</span> page or
                  contact us for more information.
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
                <AccordionTrigger>How to contact?</AccordionTrigger>
                <AccordionContent>
                  You can visit our linkedin instagram or email or even the
                  provided number in the contact us section.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
