import React from 'react'

export default function WhyChoose(){
  return (
    <section id="why-choose-us" className="bg-slate-50 py-24 px-6 md:px-16 text-slate-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="flex flex-col gap-3 mb-16 reveal">
          <span className="text-slate-500 font-bold uppercase tracking-wider text-sm">Value Proposition</span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading">Why Partner With Us</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          <div className="reveal delay-100 bg-white rounded-3xl p-8 border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col gap-5">
            <h3 className="text-2xl font-bold text-slate-900 font-heading">Premium Quality</h3>
            <p className="text-slate-600 leading-relaxed text-sm">We ensure strict grading inspections and source raw products from farms using sustainable farming practices.</p>
          </div>
          <div className="reveal delay-200 bg-white rounded-3xl p-8 border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col gap-5">
            <h3 className="text-2xl font-bold text-slate-900 font-heading">Global Export</h3>
            <p className="text-slate-600 leading-relaxed text-sm">Customized logistics solutions, containerized cargo sealing, and timely deliveries directly to international seaports.</p>
          </div>
          <div className="reveal delay-300 bg-white rounded-3xl p-8 border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col gap-5">
            <h3 className="text-2xl font-bold text-slate-900 font-heading">Trusted Service</h3>
            <p className="text-slate-600 leading-relaxed text-sm">Dedicated multi-lingual communications channels, custom sizing orders, and long-term contract arrangements.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
