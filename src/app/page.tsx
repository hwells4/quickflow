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
  Shield
} from 'lucide-react';

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Navigation */}
      <nav className="py-6 border-b border-gray-100">
        <div className="container-custom flex justify-between items-center">
          <div className="text-2xl font-semibold">MarketFlow.VIP</div>
          <div className="flex gap-4">
            <Link href="#book-call" className="btn-secondary flex items-center gap-2">
              <span>Book a Call</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-spacing relative overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-6 animate-slide-up">
              <h1 className="max-w-3xl">
                Unlimited Custom AI Marketing Automation. <span className="italic-highlight">Zero Technical Headache.</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                We build, host, and manage all your AI marketing workflows for one flat monthly fee.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="#pricing" className="btn-primary flex items-center justify-center gap-2">
                  START TODAY <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2 relative animate-slide-in-right">
              <div className="rounded-lg bg-white p-8 shadow-lg border border-gray-100 relative rotate-2 transform hover:rotate-0 transition-all duration-500">
                <div className="absolute -top-3 -left-3">
                  <div className="badge flex items-center gap-2 animate-pulse">
                    <Zap className="h-4 w-4" />
                    <span>Start today</span>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Join MarketFlow</h3>
                <p className="text-gray-600 mb-6">One subscription to rule them all.</p>
                <Link href="#pricing" className="btn-primary w-full flex items-center justify-center">
                  See pricing
                </Link>
                <div className="mt-6 p-4 bg-gray-50 rounded-md flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-gray-700" />
                    </div>
                    <div>
                      <div className="font-medium">Book a 15-min intro call</div>
                      <div className="text-sm text-[color:var(--accent)]">Schedule now</div>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Gap Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-8">The Implementation Gap</h2>
            <p className="text-xl mb-12">
              You know AI could transform your marketing operations. But who's going to build it?
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="feature-card">
                <div className="text-xl font-semibold mb-3">Your team lacks technical expertise</div>
              </div>
              <div className="feature-card">
                <div className="text-xl font-semibold mb-3">Developers cost $200K+ per year</div>
              </div>
              <div className="feature-card">
                <div className="text-xl font-semibold mb-3">DIY tools require constant maintenance</div>
              </div>
              <div className="feature-card">
                <div className="text-xl font-semibold mb-3">Quality control demands ongoing attention</div>
              </div>
            </div>
            
            <div className="mt-12 text-xl font-medium">
              We handle 100% of the technical implementation so you can focus on strategy.
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">One Premium Subscription. <span className="italic-highlight">Unlimited Possibilities.</span></h2>
          </div>
          
          <div className="max-w-xl mx-auto">
            <div className="card relative overflow-hidden">
              <div className="absolute -top-3 -right-3">
                <div className="badge flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  <span>Most Popular</span>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-4">All-inclusive plan</div>
                <div className="flex items-center justify-center">
                  <span className="text-5xl font-semibold">$3,999</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                {[
                  'Unlimited custom workflow requests',
                  '72-hour delivery on standard workflows',
                  'Complete hosting with all AI costs included',
                  'Full maintenance and monitoring',
                  '24/7 technical support',
                  'Pause or cancel anytime'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[color:var(--accent)]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link href="#book-call" className="btn-primary w-full flex items-center justify-center">
                JOIN NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2>How It Works</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Send className="h-8 w-8 text-[color:var(--accent)]" />,
                title: 'Request',
                description: 'Submit any marketing workflow you need through our simple dashboard.'
              },
              {
                icon: <FileCheck className="h-8 w-8 text-[color:var(--accent)]" />,
                title: 'Approve',
                description: "We'll share an implementation plan within 24 hours for your review."
              },
              {
                icon: <Zap className="h-8 w-8 text-[color:var(--accent)]" />,
                title: 'Receive',
                description: 'Your custom workflow is delivered, tested and ready to use within 72 hours.'
              },
              {
                icon: <LineChart className="h-8 w-8 text-[color:var(--accent)]" />,
                title: 'Run',
                description: 'Execute your workflows as often as needed with zero technical management.'
              }
            ].map((step, index) => (
              <div key={index} className="feature-card grid-card">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-4 bg-white rounded-full shadow-sm">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Can Request Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2>What You Can Request</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
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
              <div key={index} className="feature-card">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[color:var(--accent)] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg italic">...and anything else you can imagine</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2>Why Marketing Teams Choose MarketFlow.VIP</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-[color:var(--accent)]" />,
                title: '"We Handle It All" Technical Implementation',
                description: 'No technical expertise required. No coding. No integration challenges. We build every automation in your specific tech stack, so everything works seamlessly with your existing tools.'
              },
              {
                icon: <Users className="h-8 w-8 text-[color:var(--accent)]" />,
                title: 'Human Quality Assurance',
                description: 'AI tools often produce generic content that lacks your brand voice. Our built-in quality control ensures all automated outputs maintain your standards and brand identity.'
              },
              {
                icon: <BarChart className="h-8 w-8 text-[color:var(--accent)]" />,
                title: 'Real ROI Through Time Reclamation',
                description: 'Our average client saves 15+ hours per week on repetitive tasks. What could your team accomplish with that time back?'
              },
              {
                icon: <Zap className="h-8 w-8 text-[color:var(--accent)]" />,
                title: 'Reliability Guaranteed',
                description: 'While DIY solutions often break without warning, our monitoring systems ensure 99.9% uptime with proactive maintenance.'
              }
            ].map((benefit, index) => (
              <div key={index} className="feature-card">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-full shadow-sm">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Examples Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2>Workflow Examples</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
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
              <div key={index} className="feature-card">
                <h3 className="text-xl font-semibold mb-4">{example.title}</h3>
                <div className="mb-4">
                  <div className="text-sm uppercase tracking-wider text-gray-500 mb-1">Before</div>
                  <p className="text-gray-700">{example.before}</p>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wider text-[color:var(--accent)] mb-1">After</div>
                  <p className="font-medium">{example.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2>What Our Clients Say</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "We tried building automations ourselves with Zapier and n8n but spent more time fixing broken workflows than doing actual marketing. MarketFlow.VIP handles everything—we just request what we need and it appears, working perfectly, usually within 48 hours.",
                name: "Sarah T.",
                title: "Marketing Director, Fintech Agency"
              },
              {
                quote: "The ROI was evident within the first month. We're saving at least 20 hours per week across our team, allowing us to take on three new clients without hiring additional staff.",
                name: "Michael R.",
                title: "Agency Owner"
              }
            ].map((testimonial, index) => (
              <div key={index} className="card grid-card">
                <div className="flex flex-col h-full">
                  <div className="mb-6 flex-grow">
                    <p className="text-lg italic">"{testimonial.quote}"</p>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2>Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
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
              <div key={index} className="faq-item">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="book-call" className="section-spacing bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-6">
              Get a 30-minute walkthrough of how MarketFlow.VIP can automate your specific marketing processes.
            </h2>
            <Link href="#" className="btn-primary flex items-center justify-center gap-2 mx-auto max-w-xs">
              BOOK A CALL <ArrowRight className="h-5 w-5" />
            </Link>
            <div className="mt-8 text-lg">
              Email us: <a href="mailto:hello@marketflow.vip" className="text-[color:var(--accent)]">hello@marketflow.vip</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-xl font-semibold">MarketFlow.VIP</div>
            </div>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} MarketFlow.VIP. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
} 