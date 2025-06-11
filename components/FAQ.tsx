"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does AI postcard generation work?",
    answer:
      "Our advanced AI analyzes your description and chosen style to create unique artwork. The AI has been trained on millions of images to understand artistic styles, composition, and visual elements, ensuring each postcard is both beautiful and personalized.",
  },
  {
    question: "What paper quality do you use?",
    answer:
      "We use premium 350gsm cardstock with a smooth finish that enhances color vibrancy. Our paper is sourced from sustainable forests and provides excellent durability for your special messages.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "We guarantee delivery within 5 business days across the Netherlands. Most orders arrive within 3-4 days. You'll receive a tracking number once your postcard is printed and shipped.",
  },
  {
    question: "Can I preview my postcard before printing?",
    answer:
      "Yes! After our AI generates your design, you'll see a preview and can choose from multiple variations. You can also request modifications to ensure you're completely happy with the result.",
  },
  {
    question: "What if I'm not satisfied with my postcard?",
    answer:
      "We offer a 100% satisfaction guarantee. If you're not happy with your postcard, we'll create a new one free of charge or provide a full refund within 30 days of delivery.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Currently, we only ship within the Netherlands to ensure the fastest delivery times and best service. We're planning to expand to other EU countries soon!",
  },
  {
    question: "How do tokens work?",
    answer:
      "Each token allows you to create one postcard. Tokens don't expire and can be used whenever you want. Buying in bundles saves you money compared to individual postcards.",
  },
  {
    question: "Can I use my own images?",
    answer:
      "Currently, our AI creates original artwork based on your text descriptions. This ensures each postcard is unique and avoids any copyright issues. We're working on features to incorporate your photos in future updates.",
  },
]

export default function FAQ() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about creating AI postcards
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg border-0 shadow-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 dark:text-white hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300 pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
