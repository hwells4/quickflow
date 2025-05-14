"use client";

import React from 'react';
import { AnimatedTestimonials } from "./ui/animated-testimonials"

export function AnimatedTestimonialsBasic() {
  return (
    <AnimatedTestimonials
      className="bg-brand-lightGray"
      title="What Our Clients Say"
      subtitle="Our clients consistently achieve remarkable results through our AI marketing automation workflows."
      badgeText="Trusted by marketers"
      testimonials={[
        {
          id: 1,
          name: "Sarah T.",
          role: "Marketing Director",
          company: "Fintech Agency",
          content:
            "We tried building automations ourselves with Zapier and n8n but spent more time fixing broken workflows than doing actual marketing. MarketFlow.VIP handles everything—we just request what we need and it appears, working perfectly, usually within 48 hours.",
          rating: 5,
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
          id: 2,
          name: "Michael R.",
          role: "Agency Owner",
          company: "Digital Marketing Agency",
          content:
            "The ROI was evident within the first month. We're saving at least 20 hours per week across our team, allowing us to take on three new clients without hiring additional staff.",
          rating: 5,
          avatar: "https://randomuser.me/api/portraits/men/46.jpg",
        },
        {
          id: 3,
          name: "Jennifer K.",
          role: "Content Strategist",
          company: "SaaS Platform",
          content:
            "Our content production has tripled while maintaining our brand voice and quality standards. The custom AI workflows they built for us have transformed how we approach content marketing.",
          rating: 5,
          avatar: "https://randomuser.me/api/portraits/women/22.jpg",
        },
      ]}
      trustedCompanies={["Salesforce", "HubSpot", "Marketo", "Shopify", "Mailchimp"]}
      trustedCompaniesTitle="Trusted by marketing teams at leading companies"
    />
  );
} 