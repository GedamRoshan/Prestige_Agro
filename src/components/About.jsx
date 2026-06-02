import React from 'react'

export default function About({ onOpenModal }) {
  return (
    <section id="about" className="py-24 px-6 md:px-16 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group reveal">
          <div className="absolute inset-0 bg-brand-600 rounded-3xl translate-x-4 translate-y-4 -z-10 opacity-15 transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
          <img src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=1200&auto=format&fit=crop" alt="Modern Agricultural Harvest" className="rounded-3xl shadow-xl w-full h-[460px] object-cover transition-transform duration-300 group-hover:scale-[1.01]" />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 reveal delay-100">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">About Our Enterprise</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight font-heading">Sourcing Excellence, Exporting Trust</h2>
          </div>

          <p className="reveal delay-200 text-lg text-slate-600 leading-relaxed">Prestige Agro Global is a leading exporter and distributor of authentic, high-quality agricultural commodities sourced directly from fertile cultivation belts in India. We operate on a foundation of operational transparency, global compliance, and robust cold chain integration.</p>
          <p className="reveal delay-300 text-lg text-slate-600 leading-relaxed">Through strategic farm partnerships and strict control over grading and processing, we ensure our global product runs retain their optimal nutritional parameters, spice heat, and natural aroma profile from cultivation to delivery port.</p>

          <div className="reveal delay-400 grid grid-cols-3 gap-4 border-t border-slate-100 pt-6 mt-2">
            <div>
              <span className="block text-3xl font-extrabold text-brand-600 font-heading">100%</span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Quality Verified</span>
            </div>
            <div>
              <span className="block text-3xl font-extrabold text-brand-600 font-heading">12+</span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Global Ports</span>
            </div>
            <div>
              <span className="block text-3xl font-extrabold text-brand-600 font-heading">24/7</span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Client Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
