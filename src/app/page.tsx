import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  FileCheck, 
  Zap, 
  Send, 
  BarChart, 
  LineChart, 
  Users, 
  Shield,
  Repeat,
  Code,
  RefreshCw,
  BotIcon,
  Layers,
  Bell,
  UserCheck,
  Search,
  Server,
  DollarSign,
  BarChart3,
  Ban,
  Wallet
} from 'lucide-react';
import { Button } from '../components/Button';
import PricingSection from '../components/PricingSection';
import AutomationTemplates from '../components/AutomationTemplates';
import { AnimatedTestimonialsBasic } from "../components/animated-testimonials-demo";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Navigation */}
      <nav className="py-6 border-b border-brand-lightGray">
        <div className="container-custom flex justify-between items-center">
          <div className="text-subheading font-semibold">MarketFlow.VIP</div>
          <div className="flex gap-4">
            <Button variant="outline" asChild>
              <Link href="#book-call" className="flex items-center gap-2">
                <span>Book a Call</span>
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-spacing relative overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-element animate-slide-up">
              <h1 className="text-h1-mobile md:text-h1-desktop max-w-3xl">
              Unlimited Custom AI Marketing Automation. Zero Technical Burden. <span className="italic-highlight">One Flat Fee.</span>
              </h1>
              <p className="text-body-mobile md:text-body-desktop text-brand-black opacity-90 max-w-2xl">
              Stop "babysitting servers" and wrestling with code. We build, host, and manage all your AI marketing workflows. Your single, all-inclusive subscription covers 100% of development, hosting, AI costs, executions, and all necessary software. Finally, one subscription to supercharge and modernize your business – no hidden fees, ever.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-element">
                <Button variant="default" size="lg" asChild>
                  <Link href="#pricing" className="flex items-center justify-center gap-2 text-white">
                    START TODAY <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-2 relative animate-slide-in-right">
              <div className="card p-card-padding bg-brand-white rounded-md shadow-lg relative rotate-2 transform hover:rotate-0 transition-all duration-500">
                <div className="absolute -top-3 -left-3">
                  <div className="badge flex items-center gap-2 animate-subtle-pulse text-white">
                    <Zap className="h-4 w-4 text-white" />
                    <span>Start today</span>
                  </div>
                </div>
                <h3 className="text-subheading font-semibold mb-element">Join MarketFlow</h3>
                <p className="text-body-mobile md:text-body-desktop text-brand-black opacity-75 mb-element">
                  One subscription to rule them all.
                </p>
                <Button variant="default" className="w-full" asChild>
                  <Link href="#pricing" className="flex items-center justify-center text-white">
                    See pricing
                  </Link>
                </Button>
                <div className="mt-element p-element bg-brand-lightGray rounded-md flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-brand-black" />
                    </div>
                    <div>
                      <div className="font-medium">Book a 15-min intro call</div>
                      <div className="text-sm text-[var(--color-primary-accent)] font-medium">Schedule now</div>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-brand-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* One Subscription To Replace Them All Section */}
      <section className="section-spacing bg-gradient-to-b from-brand-lightGray/30 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-[calc(var(--spacing-element)_*_2)]">
            <h2 className="text-h2-mobile md:text-h2-desktop mb-element">
              One Subscription To Replace Them All
            </h2>
            <p className="text-body-mobile md:text-body-desktop text-brand-black opacity-90">
              MarketFlow is the last AI marketing subscription you'll ever need:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-element">
            {[
              {
                icon: <Repeat className="h-10 w-10 text-[var(--color-primary-accent)]" />,
                title: 'Unlimited custom workflows',
                description: 'Built specifically for your business'
              },
              {
                icon: <RefreshCw className="h-10 w-10 text-[var(--color-primary-accent)]" />,
                title: 'Unlimited executions',
                description: 'Run your automations as often as needed'
              },
              {
                icon: <BotIcon className="h-10 w-10 text-[var(--color-primary-accent)]" />,
                title: 'Unlimited AI usage',
                description: 'All credits included in your subscription'
              },
              {
                icon: <Layers className="h-10 w-10 text-[var(--color-primary-accent)]" />,
                title: 'Unlimited integrations',
                description: 'With your existing marketing stack'
              },
              {
                icon: <Bell className="h-10 w-10 text-[var(--color-primary-accent)]" />,
                title: '24/7 monitoring and maintenance',
                description: 'For complete peace of mind'
              }
            ].map((feature, index) => (
              <div key={index} className="feature-card bg-brand-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-brand-lightGray flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-subheading font-medium mb-2">{feature.title}</h3>
                  <p className="text-body-mobile text-brand-black opacity-75">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-[calc(var(--spacing-element)_*_1.5)] animate-fade-in">
            <p className="text-body-desktop font-medium text-brand-black">
              No hidden fees. No usage limits. No technical expertise required.
            </p>
          </div>
        </div>
      </section>

      {/* Ready-To-Use Marketing Automation Library */}
      <section className="section-spacing relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-[calc(var(--spacing-element)_*_2)]">
            <h2 className="text-h2-mobile md:text-h2-desktop mb-element">
              Ready-To-Use Marketing <span className="italic-highlight">Automation Library</span>
            </h2>
            <p className="text-body-mobile md:text-body-desktop text-brand-black opacity-90">
              These templates show exactly what we can build for your business. Each solves a specific challenge our clients face daily.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 text-white" />,
                color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
                title: 'Brand Voice Trainer',
                description: 'Transform generic AI content into your exact brand voice. Upload examples of your best content and get perfectly matched outputs every time.'
              },
              {
                icon: <BarChart className="h-8 w-8 text-white" />,
                color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
                title: 'Client Reporting Automator',
                description: 'Connect your analytics accounts and automatically generate client-ready reports with insights and recommendations, saving 8+ hours per month.'
              },
              {
                icon: <Layers className="h-8 w-8 text-white" />,
                color: 'bg-gradient-to-br from-emerald-500 to-teal-600',
                title: 'Multi-Platform Content Generator',
                description: 'Create 1 piece of content and automatically adapt it for 5 different channels (blog, LinkedIn, Twitter, email, and Instagram).'
              },
              {
                icon: <Bell className="h-8 w-8 text-white" />,
                color: 'bg-gradient-to-br from-amber-500 to-orange-600',
                title: 'Workflow Health Monitor',
                description: 'Get 24/7 monitoring of all your marketing automations with instant alerts when something breaks or performs below expectations.'
              },
              {
                icon: <UserCheck className="h-8 w-8 text-white" />,
                color: 'bg-gradient-to-br from-pink-500 to-rose-600',
                title: 'Lead Qualification & Routing',
                description: 'Automatically score, tag, and route leads to the right team member based on custom qualification criteria.'
              },
              {
                icon: <Search className="h-8 w-8 text-white" />,
                color: 'bg-gradient-to-br from-green-500 to-lime-600',
                title: 'SEO Content Optimizer',
                description: 'Transform basic content into fully optimized blog posts with proper keyword density, internal links, headers, and meta descriptions.'
              }
            ].map((template, index) => (
              <div key={index} className="relative rounded-xl overflow-hidden group shadow-md animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                <div className={`absolute inset-0 ${template.color} opacity-90`} />
                <div className="relative p-8 h-full flex flex-col">
                  <div className="p-3 rounded-full bg-white/20 w-fit mb-4">
                    {template.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{template.title}</h3>
                  <p className="text-white/90 flex-grow mb-4">{template.description}</p>
                  <Button variant="default" size="sm" asChild className="transition-all duration-300 mt-auto bg-white hover:bg-white/90 text-brand-black">
                    <Link href="#" className="flex items-center justify-center gap-2 font-medium">
                      Try it now <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* How It Works Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-[calc(var(--spacing-element)_*_2)]">
            <h2 className="text-h2-mobile md:text-h2-desktop">How It Works</h2>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-24 left-[calc(25%_-_1px)] right-[calc(25%_-_1px)] h-0.5 bg-gradient-to-r from-transparent via-brand-yellow to-transparent"></div>
            
            <div className="grid md:grid-cols-4 gap-element">
              {[
                {
                  icon: <Send className="h-8 w-8 text-white" />,
                  bgColor: 'bg-gradient-to-br from-blue-500 to-indigo-600',
                  step: '01',
                  title: 'Request',
                  description: 'Submit any marketing workflow you need through our simple dashboard.'
                },
                {
                  icon: <FileCheck className="h-8 w-8 text-white" />,
                  bgColor: 'bg-gradient-to-br from-indigo-500 to-purple-600',
                  step: '02',
                  title: 'Approve',
                  description: "We'll share an implementation plan within 24 hours for your review."
                },
                {
                  icon: <Zap className="h-8 w-8 text-white" />,
                  bgColor: 'bg-gradient-to-br from-purple-500 to-pink-600',
                  step: '03',
                  title: 'Receive',
                  description: 'Your custom workflow is delivered, tested and ready to use within 72 hours.'
                },
                {
                  icon: <LineChart className="h-8 w-8 text-white" />,
                  bgColor: 'bg-gradient-to-br from-pink-500 to-red-600',
                  step: '04',
                  title: 'Run',
                  description: 'Execute your workflows as often as needed with zero technical management.'
                }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                  <div className={`mb-6 p-5 ${step.bgColor} rounded-full shadow-lg relative`}>
                    <div className="absolute -top-2 -right-2 h-6 w-6 text-xs rounded-full bg-brand-yellow flex items-center justify-center font-bold text-white">
                      {step.step}
                    </div>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-body-mobile md:text-body-desktop text-brand-black opacity-90">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Request Section */}
      <section className="section-spacing bg-brand-lightGray/30">
        <div className="container-custom">
          <div className="text-center mb-[calc(var(--spacing-element)_*_2)]">
            <h2 className="text-h2-mobile md:text-h2-desktop">What You Can Request</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-element">
            {[
              {
                title: 'Content Creation',
                items: [
                  'SEO-optimized blog generators with human quality',
                  'Social media content engines that match your brand voice',
                  'Email nurture sequence generators',
                  'Landing page copy optimizers'
                ]
              },
              {
                title: 'Research & Insights',
                items: [
                  'Reddit and Quora market research scraper',
                  'Customer feedback analysis engines',
                  'Competitive monitoring systems',
                  'Trend detection and content opportunity finders'
                ]
              },
              {
                title: 'Campaign Optimization',
                items: [
                  'Automated Google Analytics insights',
                  'Internal linking optimization for SEO',
                  'Ad performance analyzers',
                  'A/B testing automation'
                ]
              },
              {
                title: 'Lead Generation',
                items: [
                  'Lead qualification and routing systems',
                  'Multi-channel campaign orchestration',
                  'Personalized outreach sequencers',
                  'Prospect research automations'
                ]
              }
            ].map((category, index) => (
              <div key={index} className="feature-card bg-brand-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                <h3 className="text-subheading font-medium mb-element">{category.title}</h3>
                <ul className="space-y-paragraph">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-brand-yellow shrink-0 mt-0.5" />
                      <span className="text-body-mobile md:text-body-desktop">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-element">
            <p className="text-body-mobile md:text-body-desktop italic text-brand-black opacity-75">...and anything else you can imagine</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-[calc(var(--spacing-element)_*_2)]">
            <h2 className="text-h2-mobile md:text-h2-desktop">Why Marketing Teams Choose MarketFlow.VIP</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-element">
            {[
              {
                icon: <Shield className="h-8 w-8 text-white" />,
                bgColor: 'bg-gradient-to-br from-blue-500 to-cyan-600',
                title: '"We Handle It All" Technical Implementation',
                description: 'No technical expertise required. No coding. No integration challenges. We build every automation in your specific tech stack, so everything works seamlessly with your existing tools.'
              },
              {
                icon: <Users className="h-8 w-8 text-white" />,
                bgColor: 'bg-gradient-to-br from-emerald-500 to-teal-600',
                title: 'Human Quality Assurance',
                description: 'AI tools often produce generic content that lacks your brand voice. Our built-in quality control ensures all automated outputs maintain your standards and brand identity.'
              },
              {
                icon: <BarChart className="h-8 w-8 text-white" />,
                bgColor: 'bg-gradient-to-br from-amber-500 to-orange-600',
                title: 'Real ROI Through Time Reclamation',
                description: 'Our average client saves 15+ hours per week on repetitive tasks. What could your team accomplish with that time back?'
              },
              {
                icon: <Zap className="h-8 w-8 text-white" />,
                bgColor: 'bg-gradient-to-br from-purple-500 to-indigo-600',
                title: 'Reliability Guaranteed',
                description: 'While DIY solutions often break without warning, our monitoring systems ensure 99.9% uptime with proactive maintenance.'
              }
            ].map((benefit, index) => (
              <div key={index} className="feature-card bg-brand-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                <div className="flex items-start gap-element">
                  <div className={`p-4 ${benefit.bgColor} rounded-tl-xl rounded-bl-xl`}>
                    {benefit.icon}
                  </div>
                  <div className="py-4 pr-4">
                    <h3 className="text-subheading font-medium mb-paragraph">{benefit.title}</h3>
                    <p className="text-body-mobile md:text-body-desktop text-brand-black opacity-90">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Examples Section */}
      <section className="section-spacing bg-brand-lightGray/30">
        <div className="container-custom">
          <div className="text-center mb-[calc(var(--spacing-element)_*_2)]">
            <h2 className="text-h2-mobile md:text-h2-desktop">Workflow Examples</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-element">
            {[
              {
                title: 'Blog Content Automation',
                before: '6 hours per post for research, writing, and optimization',
                after: "30 minutes to review and approve AI-generated content that's on-brand and SEO-optimized"
              },
              {
                title: 'Social Media Management',
                before: '2 hours daily scheduling content across platforms',
                after: 'Fully automated content creation, scheduling, and performance analysis'
              },
              {
                title: 'Analytics Reporting',
                before: '8 hours weekly pulling data and creating reports',
                after: 'Automated daily insights delivered directly to your inbox'
              }
            ].map((example, index) => (
              <div key={index} className="feature-card bg-brand-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                <div className="border-b border-brand-lightGray">
                  <h3 className="text-subheading font-medium p-6">{example.title}</h3>
                </div>
                <div className="p-6">
                  <div className="mb-6 bg-brand-lightGray/50 p-4 rounded-lg group-hover:opacity-50 transition-opacity duration-300">
                    <div className="text-xs uppercase tracking-wider text-brand-black opacity-60 mb-1">Before</div>
                    <p className="text-body-mobile md:text-body-desktop text-brand-black opacity-90">{example.before}</p>
                  </div>
                  <div className="bg-gradient-to-r from-brand-yellow/20 to-brand-yellow/10 p-4 rounded-lg">
                    <div className="text-xs uppercase tracking-wider text-brand-yellow mb-1">After</div>
                    <p className="text-body-mobile md:text-body-desktop font-medium text-brand-black">{example.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Testimonials Section */}
      <AnimatedTestimonialsBasic />

      {/* FAQ Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-[calc(var(--spacing-element)_*_2)]">
            <h2 className="text-h2-mobile md:text-h2-desktop">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-element">
            {[
              {
                question: 'What does "unlimited workflows" really mean?',
                answer: "You can request as many custom automation workflows as you need. We build them one at a time, with typical delivery in 72 hours. There's no limit to how many you can request."
              },
              {
                question: "Is there a limit to how often workflows can run?",
                answer: "No. Your monthly subscription includes all hosting costs and AI processing fees. Run your workflows as frequently as needed with no additional charges."
              },
              {
                question: "Do I need technical knowledge to use these workflows?",
                answer: "Not at all. We build simple interfaces that anyone can use to run and manage the workflows. No coding or technical expertise required."
              },
              {
                question: "What if I need changes to a workflow?",
                answer: "Submit a revision request and we'll update it for you, usually within 48 hours."
              },
              {
                question: "How do you ensure quality with AI-generated content?",
                answer: "Every workflow includes human quality assurance checks. We implement your brand voice guidelines and ensure all output meets your standards before it goes live."
              },
              {
                question: "What if I don't like a workflow?",
                answer: "We'll revise it until you're happy. If we can't meet your requirements, we'll let you know upfront."
              },
              {
                question: "What happens if a workflow breaks?",
                answer: "Our 24/7 monitoring catches most issues before you notice them. If you spot a problem, our technical support team is available around the clock to resolve it immediately."
              },
              {
                question: "What types of tools do you integrate with?",
                answer: "We integrate with all major marketing platforms including HubSpot, Salesforce, Google Analytics, social media platforms, WordPress, Webflow, email services, and hundreds more."
              },
              {
                question: "How quickly can you implement an urgent workflow?",
                answer: "While our standard delivery is 72 hours, we offer rush implementation for urgent needs, typically within 24-48 hours depending on complexity."
              }
            ].map((faq, index) => (
              <div key={index} className="py-element border-b border-brand-lightGray animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <h3 className="text-subheading font-medium mb-paragraph">{faq.question}</h3>
                <p className="text-body-mobile md:text-body-desktop text-brand-black opacity-90">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="book-call" className="section-spacing bg-gradient-to-b from-brand-lightGray/30 to-brand-lightGray/60">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-h2-mobile md:text-h2-desktop mb-element">
              Get a 30-minute walkthrough of how MarketFlow.VIP can automate your specific marketing processes.
            </h2>
            <Button variant="accent" size="lg" className="mx-auto max-w-xs relative overflow-hidden group" asChild>
              <Link href="#" className="flex items-center justify-center gap-2">
                <span className="relative z-10 flex items-center gap-2">
                  BOOK A CALL <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
            </Button>
            <div className="mt-element text-body-desktop">
              Email us: <a href="mailto:hello@marketflow.vip" className="text-brand-yellow hover:underline">hello@marketflow.vip</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-element border-t border-brand-lightGray">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-paragraph md:mb-0">
              <div className="text-subheading font-semibold">MarketFlow.VIP</div>
            </div>
            <div className="text-xs text-brand-black opacity-60">
              © {new Date().getFullYear()} MarketFlow.VIP. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
} 