"use client";

import React, { useState } from 'react';
import { Button } from './Button';
import { cn } from '../lib/utils';
import { HelpCircle, MessageCircle, Sparkles, Send } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaButtonLink?: string;
  ctaBackgroundClass?: string;
}

export const FAQ = ({
  title = "Frequently asked questions",
  subtitle = "Everything you need to know about our service",
  faqs = [],
  ctaTitle = "Ready to get started?",
  ctaDescription = "Book a call with our team to learn more about how we can help you.",
  ctaButtonText = "Book a call",
  ctaButtonLink = "#",
  ctaBackgroundClass = "bg-gradient-to-br from-[var(--color-primary-accent)] to-[var(--color-secondary-accent)]"
}: FAQProps) => {
  const [openItemId, setOpenItemId] = useState<string | null>(faqs.length > 0 ? faqs[0].id : null);

  const toggleItem = (id: string) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        <div className="text-center mb-[calc(var(--spacing-element)_*_2)]">
          <h2 className="text-h2-mobile md:text-h2-desktop mb-element text-foreground">{title}</h2>
          <p className="text-body-mobile md:text-body-desktop text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* FAQ Items Container */}
          <div className="lg:col-span-2 space-y-6">
            {faqs.map((faq) => (
              <div 
                key={faq.id}
                className={cn(
                  "border border-brand-lightGray rounded-xl overflow-hidden bg-white",
                  "shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in",
                  openItemId === faq.id ? "ring-1 ring-[var(--color-primary)]" : ""
                )}
              >
                <button
                  className={cn(
                    "w-full text-left px-6 py-5 flex justify-between items-center",
                    "transition-colors duration-200",
                    openItemId === faq.id 
                      ? "bg-[var(--color-soft-blue)]" 
                      : "hover:bg-[var(--color-soft-blue)]"
                  )}
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={openItemId === faq.id}
                >
                  <span className={cn(
                    "font-medium text-lg",
                    openItemId === faq.id ? "text-[var(--color-primary)]" : "text-foreground"
                  )}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "flex items-center justify-center rounded-full w-8 h-8",
                    openItemId === faq.id 
                      ? "bg-[var(--color-primary)] text-white" 
                      : "bg-[var(--color-soft-blue)] text-[var(--color-primary)]"
                  )}>
                    {openItemId === faq.id ? (
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4"
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4"
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                </button>
                {openItemId === faq.id && (
                  <div className="px-6 py-6 bg-white border-t border-[var(--color-soft-blue)]">
                    <p className="text-body-mobile text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Card - Desktop: Side, Mobile: Below */}
          <div className="lg:col-span-1 lg:row-span-1 lg:sticky lg:top-24 h-fit order-last lg:order-none">
            <div className={`${ctaBackgroundClass} rounded-xl p-8 text-white shadow-xl animate-fade-in relative overflow-hidden`}>
              {/* Decorative background element */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-white/10 blur-md"></div>
                <div className="absolute right-0 top-0 w-32 h-32 rounded-full bg-white/5"></div>
              </div>
              
              {/* Icon */}
              <div className="mb-6 bg-white/20 w-12 h-12 rounded-full flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-white text-2xl font-semibold mb-4 relative">{ctaTitle}</h3>
              <p className="text-white/90 mb-6 relative">{ctaDescription}</p>
              <Button 
                variant="default" 
                size="default"
                className="w-full bg-white text-[var(--color-primary-accent)] hover:bg-white/90 transition-all relative group"
                onClick={() => window.location.href = ctaButtonLink}
                style={{ color: "var(--color-primary-accent)" }}
              >
                <span>{ctaButtonText}</span>
                <Send className="ml-2 h-4 w-4 inline-block transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 