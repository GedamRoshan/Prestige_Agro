import React from 'react'

export default function MapSection(){
  return (
    <section className="relative bg-white py-16 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 flex flex-col gap-3 reveal">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">Find Us On The Map</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-heading">Our Location</h2>
          <p className="text-slate-600 text-base">Visit us at Hingna MIDC, Nagpur — the heart of Maharashtra's industrial belt.</p>
        </div>

        <div className="reveal delay-100 rounded-3xl overflow-hidden shadow-xl border border-slate-100 relative">
          <iframe id="office-map" title="Office" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.6843836914!2d78.9716!3d21.1141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c5e12345abcd%3A0x0!2sHingna+MIDC%2C+Nagpur%2C+Maharashtra+440016!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" width="100%" height="460" style={{border:0, display:'block'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  )
}
