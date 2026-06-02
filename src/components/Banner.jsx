import React from 'react'

export default function Banner(){
  return (
    <section className="relative py-32 px-6 md:px-16 overflow-hidden">
      <div id="banner-bg" className="absolute inset-0 bg-cover bg-center will-change-transform" style={{backgroundImage: `url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1600&auto=format&fit=crop')`, transform: 'scale(1.12)'}} />
      <div className="absolute inset-0 bg-brand-950/85" />
      <div className="relative z-10 max-w-5xl mx-auto text-center text-white flex flex-col gap-6">
        <span className="reveal text-brand-300 font-bold uppercase tracking-wider text-sm">Global Scale Supply Network</span>
        <h2 className="reveal delay-100 text-4xl md:text-6xl font-extrabold leading-tight font-heading">Exporting India's Finest Agro Products Worldwide</h2>
        <p className="reveal delay-200 text-lg md:text-2xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">We handle agricultural processing, customs clearing operations, packaging, and marine container transport to deliver fresh ingredients directly to your storage docks.</p>
        <div className="reveal delay-300 pt-4"><a href="#contact" className="bg-brand-500 hover:bg-brand-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg">Establish Trade Partnership</a></div>
      </div>
    </section>
  )
}
