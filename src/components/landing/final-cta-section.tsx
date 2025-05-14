"use client";

import Link from 'next/link';
import { cn } from '@/src/lib/utils';

const EMOJI_CIRCLES = [
  { emoji: '😊', size: 'h-32 w-32', color: 'bg-pink-500/80', position: '-left-6 bottom-8', blur: 'blur-sm' },
  { emoji: '😃', size: 'h-20 w-20', color: 'bg-green-400/80', position: 'left-32 bottom-4', blur: 'blur-xs' },
  { emoji: '😄', size: 'h-36 w-36', color: 'bg-blue-500/80', position: 'left-52 -bottom-10', blur: 'blur' },
  { emoji: '😁', size: 'h-28 w-28', color: 'bg-yellow-400/80', position: 'left-96 bottom-14', blur: 'blur-sm' },
  { emoji: '🙂', size: 'h-24 w-24', color: 'bg-orange-500/80', position: 'left-[28rem] bottom-2', blur: 'blur-xs' },
  { emoji: '😎', size: 'h-32 w-32', color: 'bg-purple-500/80', position: 'right-16 bottom-10', blur: 'blur' },
];

export const FinalCtaSection = () => {
  return (
    <section 
      id="book-call" 
      className="section-spacing bg-slate-900 dark:bg-black relative overflow-hidden text-primary-foreground"
    >
      {/* Colorful circle decorations - made more subtle and performant */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-0 w-full h-60 md:h-72 overflow-hidden pointer-events-none -z-0 opacity-70 group-hover:opacity-100 transition-opacity duration-500"
      >
        <div className="relative h-full w-full">
          {EMOJI_CIRCLES.map((circle, idx) => (
            <div 
              key={idx} 
              className={cn(
                'absolute rounded-full flex items-center justify-center opacity-60 group-hover:opacity-80 transition-opacity duration-700',
                circle.size, circle.color, circle.position, circle.blur
              )}
              style={{ animation: `float 6s ease-in-out infinite ${idx * 0.5}s` }}
            >
              <div className="text-3xl md:text-4xl opacity-80 group-hover:opacity-100 transition-opacity">{circle.emoji}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              See if MarketFlow is <br className="hidden md:block" /> the right fit for you
            </h2>
            <p className="text-xl md:text-2xl italic font-light text-slate-300/80 dark:text-slate-400/80">
              (it totally is)
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2 text-slate-100 dark:text-slate-200">
              <p className="text-xl mb-6 leading-relaxed">
                Schedule a quick, 15 minute guided tour through MarketFlow.
              </p>
              
              <div className="bg-[color:var(--accent)] text-[color:var(--accent-foreground)] p-6 rounded-xl mb-8 shadow-lg">
                <p className="font-medium leading-relaxed">
                  MarketFlow is experiencing a high volume of bookings, so slots are limited. For faster service, email 
                  <Link href="mailto:hello@marketflow.vip" className="font-semibold underline hover:text-white/80 transition-colors ml-1">
                    hello@marketflow.vip
                  </Link> for a same-day response.
                </p>
              </div>
              
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-300/70 dark:text-slate-400/70">
                <span>Headquartered in Phoenix, Arizona</span>
                <span className="h-1 w-1 rounded-full bg-slate-500/50"></span>
                <Link href="/terms" className="hover:text-slate-100 dark:hover:text-white transition-colors">Terms of service</Link>
                <span className="h-1 w-1 rounded-full bg-slate-500/50"></span>
                <Link href="/privacy" className="hover:text-slate-100 dark:hover:text-white transition-colors">Privacy Policy</Link>
              </div>
            </div>
            
            <div className="md:col-span-3 bg-slate-800/70 dark:bg-black/50 p-6 rounded-xl shadow-2xl backdrop-blur-sm border border-slate-700/50">
              <div className="bg-slate-900/80 dark:bg-black/70 rounded-lg p-6 min-h-[450px] md:min-h-[500px] flex flex-col items-center justify-center text-center">
                <div className="mb-4">
                  <div className="text-slate-100 dark:text-white font-semibold text-2xl mb-3">May 2024</div> {/* Updated Year */}
                  <p className="text-slate-300/80 dark:text-slate-400/80 mb-8 text-lg">
                    Calendar booking widget coming soon!
                  </p>
                  {/* Placeholder for future calendar controls */}
                  {/* <div className="grid grid-cols-7 gap-2 mb-4 text-xs text-slate-400/70">
                    <div>SUN</div> <div>MON</div> <div>TUE</div> <div>WED</div> <div>THU</div> <div>FRI</div> <div>SAT</div>
                  </div> */}
                  <div className="flex justify-center items-center h-48 w-full border-2 border-dashed border-slate-700/60 rounded-md bg-slate-800/50 dark:bg-black/40">
                    <p className="text-slate-400/90 dark:text-slate-500/90 italic">Booking Calendar Area</p>
                  </div>
                  <div className="flex justify-center gap-4 mt-8">
                    <button className="px-6 py-2.5 bg-[color:var(--accent)] text-[color:var(--accent-foreground)] font-semibold rounded-md hover:bg-[color:var(--accent-light)] transition-colors shadow-md">
                      15 min Call
                    </button>
                    <button className="px-6 py-2.5 bg-slate-700/80 dark:bg-slate-600/80 text-slate-100 dark:text-white font-semibold rounded-md hover:bg-slate-600/90 dark:hover:bg-slate-500/90 transition-colors shadow-md">
                      Explore Docs
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add a keyframe animation for floating effect */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
}; 