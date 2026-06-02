import React from 'react'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div id="hero-bg" className="absolute inset-0 bg-cover bg-center will-change-transform" style={{backgroundImage: `url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop')`, transform: 'scale(1.12)'}} />
      <div className="absolute inset-0 bg-slate-950/65 backdrop-brightness-[0.85]" />
      <div className="relative z-10 max-w-4xl px-6 text-white flex flex-col items-center">
        <span className="reveal bg-brand-500/20 text-brand-300 font-semibold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider mb-6 border border-brand-500/35">Trusted Agricultural Exporters</span>
        <h1 className="reveal delay-100 text-4xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight font-heading">Prestige Agro <span className="text-brand-400">Global</span></h1>
        <p className="reveal delay-200 text-lg md:text-2xl mb-10 text-slate-200 max-w-2xl font-light">Delivering high-quality Indian agricultural goods to worldwide commercial hubs with integrity and supply certainty.</p>
        <div className="reveal delay-300 flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
          <a href="#products" className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg">Explore Catalog</a>
          <a href="#contact" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/25 font-semibold px-8 py-4 rounded-xl">Inquire Now</a>
        </div>
      </div>
    </section>
  )
}
