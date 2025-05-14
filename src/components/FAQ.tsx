"use client";

import React, { useState } from 'react';
import { Button } from './Button';
import { cn } from '../lib/utils';

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
          <h2 className="text-h2-mobile md:text-h2-desktop mb-element">{title}</h2>
          <p className="text-body-mobile md:text-body-desktop text-brand-black/80 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* FAQ Items Container */}
          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq) => (
              <div 
                key={faq.id}
                className="border border-brand-lightGray rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
              >
                <button
                  className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-[var(--color-soft-blue)] transition-colors duration-200"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={openItemId === faq.id}
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 text-[var(--color-primary-accent)] transition-transform duration-200 ${
                      openItemId === faq.id ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openItemId === faq.id && (
                  <div className="px-6 py-4 bg-white border-t border-brand-lightGray">
                    <p className="text-body-mobile text-brand-black/80">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Card - Desktop: Side, Mobile: Below */}
          <div className="lg:col-span-1 lg:row-span-1 lg:sticky lg:top-24 h-fit order-last lg:order-none">
            <div className={`${ctaBackgroundClass} rounded-xl p-8 text-white shadow-lg animate-fade-in`}>
              <h3 className="text-white text-2xl font-semibold mb-4">{ctaTitle}</h3>
              <p className="text-white/90 mb-6">{ctaDescription}</p>
              <Button 
                variant="default" 
                size="default"
                className="w-full bg-white text-[var(--color-primary-accent)] hover:bg-white/90 transition-all"
                onClick={() => window.location.href = ctaButtonLink}
              >
                {ctaButtonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 