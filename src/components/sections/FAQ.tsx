import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is ADmyBRAND and how does it work?',
      answer: 'ADmyBRAND is an AI-powered brand management suite that helps businesses streamline their marketing operations, maintain brand consistency, and optimize campaigns. Our platform uses advanced machine learning algorithms to analyze your brand performance, predict trends, and automate repetitive tasks.',
    },
    {
      question: 'How quickly can I see results with ADmyBRAND?',
      answer: 'Most customers see improvements in their brand metrics within the first 30 days. However, significant results typically become apparent within 60-90 days as our AI algorithms learn your brand patterns and optimize campaigns. The timeline depends on your current setup and how actively you use the platform.',
    },
    {
      question: 'Is my data secure with ADmyBRAND?',
      answer: 'Absolutely. We employ enterprise-grade security measures including end-to-end encryption, SOC 2 compliance, and regular security audits. Your data is stored in secure, geographically distributed data centers and we never share your information with third parties.',
    },
    {
      question: 'Can I integrate ADmyBRAND with my existing tools?',
      answer: 'Yes! ADmyBRAND offers seamless integrations with over 100+ popular marketing tools including Google Analytics, Facebook Ads, Slack, Salesforce, HubSpot, and more. Our API also allows for custom integrations to fit your specific workflow.',
    },
    {
      question: 'Do you offer support and training?',
      answer: 'We provide comprehensive support including 24/7 chat support, dedicated account managers for Enterprise customers, extensive documentation, video tutorials, and live training sessions. Our customer success team is always ready to help you maximize your ROI.',
    },
    {
      question: 'What happens if I want to cancel my subscription?',
      answer: 'You can cancel your subscription at any time from your account dashboard. There are no cancellation fees, and you\'ll continue to have access until the end of your billing period. We also offer data export tools to help you transition smoothly.',
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 14-day free trial for all our plans. No credit card required to start. During the trial, you\'ll have access to all features and can experience the full power of our AI-driven platform.',
    },
    {
      question: 'How does the AI learn about my brand?',
      answer: 'Our AI analyzes your existing brand assets, marketing materials, audience engagement patterns, and campaign performance data. It continuously learns from your interactions and feedback to provide increasingly personalized recommendations and automation.',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Everything you need to know about ADmyBRAND. Can't find the answer you're looking for? Feel free to contact our support team.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 py-2 hover:border-primary/20 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-card-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-muted/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help. Reach out to us anytime for personalized assistance.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors">
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;