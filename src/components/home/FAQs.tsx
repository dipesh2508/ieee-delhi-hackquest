import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faqs } from "@/constants/faqs";
import { MotionDiv } from "../animation/motionDiv";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const FAQs = () => {
  return (
    <section id="faqs" className="flex w-full flex-col font-secondary">
      <div className="p-5">
        <h2 className=" text-center font-primary text-5xl font-semibold text-headings">
          FAQs
        </h2>
      </div>
      <MotionDiv
        variants={variants}
        initial="hidden"
        transition={{
          delay: 0.3,
          ease: "easeInOut",
          duration: 0.4,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="px-12 py-8 text-secondary sm:px-20"
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, index) => (
            <AccordionItem value={item.qnumber} key={index}>
              <AccordionTrigger className="font-primary text-xl">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg text-white ">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </MotionDiv>
    </section>
  );
};

export default FAQs;
