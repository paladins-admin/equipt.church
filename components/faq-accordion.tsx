'use client';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { faqs } from '@/lib/site';
export function FAQAccordion({ limit = faqs.length }: { limit?: number }) {
  return (
    <Accordion className="faq-list">
      {faqs.slice(0, limit).map(({ q, a }) => (
        <AccordionItem key={q} value={q}>
          <AccordionTrigger className="faq-trigger">{q}</AccordionTrigger>
          <AccordionContent className="faq-answer">
            <p>{a}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
