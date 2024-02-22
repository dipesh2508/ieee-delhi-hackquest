import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

import { faqs } from '@/constants/faqs';  


const FAQs = () => {
  return (
    <section id="faqs" className='w-full flex flex-col font-secondary'>
        <div className='p-5'>
            <h2 className=' text-5xl font-primary font-semibold text-center text-headings'>FAQs</h2>
        </div>
        <div className='text-secondary px-12 sm:px-20 py-8'>
            <Accordion type='single' collapsible className='w-full'>
                {faqs.map((item, index) => (
                    <AccordionItem value={item.qnumber} key={index}>
                        <AccordionTrigger className='font-primary text-xl'>{item.question}</AccordionTrigger>
                        <AccordionContent className='text-white text-lg '>{item.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    </section>
  )
}

export default FAQs