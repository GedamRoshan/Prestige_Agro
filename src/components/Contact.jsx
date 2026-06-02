import React, { useState } from 'react'

export default function Contact({ showToast }){
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const keyInput = e.target.querySelector('#web3forms-key')
    if (keyInput.value === 'YOUR_ACCESS_KEY_HERE'){
      setTimeout(()=>{
        e.target.reset()
        setLoading(false)
        showToast()
        alert("Demo Mode: Form submission simulated. Replace YOUR_ACCESS_KEY_HERE with a key from web3forms.com to send real emails.")
      }, 1200)
      return
    }

    const formData = new FormData(e.target)
    fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData })
      .then(r => r.json())
      .then(json => {
        if (json.success) {
          e.target.reset()
          showToast()
        } else alert(json.message || 'Submission failed')
      })
      .catch(()=> alert('Submission failed'))
      .finally(()=> setLoading(false))
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-16 bg-slate-50 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3 reveal">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">Global Trading Portal</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-heading">Contact & Inquiries</h2>
          <p className="text-slate-600 text-lg">Reach out to our export department for fast quotes, shipping timetables, and pricing.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 flex flex-col gap-6 reveal delay-100">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex gap-5">
              <div className="bg-brand-50 p-3 rounded-2xl text-brand-600 h-fit">📍</div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-heading mb-1">Office Address</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Hingna MIDC, Nagpur,<br/>Maharashtra 440016, India</p>
              </div>
            </div>

            <a href="mailto:info@prestigeagroglobal.com" className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex gap-5 hover:border-brand-600 transition-all group">
              <div className="bg-brand-50 p-3 rounded-2xl text-brand-600 h-fit">✉️</div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-heading mb-1">Email Inquiry</h3>
                <p className="text-slate-600 text-sm">info@prestigeagroglobal.com</p>
                <span className="text-brand-600 text-xs font-semibold uppercase mt-1 inline-block">Send Email →</span>
              </div>
            </a>

            <a href="tel:+919022803916" className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex gap-5 hover:border-brand-600 transition-all group">
              <div className="bg-brand-50 p-3 rounded-2xl text-brand-600 h-fit">📞</div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-heading mb-1">Phone Helpline</h3>
                <p className="text-slate-600 text-sm">+91 9022803916</p>
                <span className="text-brand-600 text-xs font-semibold uppercase mt-1 inline-block">Call Sales →</span>
              </div>
            </a>

            <a href="https://wa.me/919022803916?text=Hello%20Prestige%20Agro%20Global%2C%20I%20am%20interested%20in%20your%20agricultural%20products" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex gap-5 hover:border-green-500 transition-all group">
              <div className="bg-green-50 p-3 rounded-2xl text-green-600 h-fit">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.947 1.347l-.355.201-.368-.056c-1.264-.188-2.489-.543-3.637-1.069l-.672-.36-.678.464c-.909.626-1.612 1.523-1.747 2.614-.077.704.107 1.42.542 2.05.452.639 1.17 1.158 2.025 1.383l.542.139-.086.591c-.379 2.645 1.462 5.01 3.900 5.548l.584.105-.195.625c-.579 1.85.086 3.47 1.913 4.402 1.126.661 2.513.475 3.635-.315l.555-.368.687.232c1.439.433 2.626.435 3.169.086.88-.555 1.666-1.956 1.93-3.387.132-.792.1-2.046-.188-2.824-.431-1.168-1.065-2.133-1.800-2.814-.595-.537-1.282-.896-2.025-1.04-.595-.11-1.21-.157-1.812-.148z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-heading mb-1">WhatsApp Chat</h3>
                <p className="text-slate-600 text-sm">+91 9022803916</p>
                <span className="text-green-600 text-xs font-semibold uppercase mt-1 inline-block">Message Us →</span>
              </div>
            </a>
          </div>

          <div className="lg:col-span-3 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 reveal delay-200">
            <h3 className="text-2xl font-bold text-slate-900 font-heading mb-6">Send an Inquiry</h3>
            <form id="contact-form" className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" id="web3forms-key" value="YOUR_ACCESS_KEY_HERE" />
              <input type="hidden" name="subject" value="New Bulk Quote Inquiry - Prestige Agro Global" />
              <input type="checkbox" name="botcheck" className="hidden" style={{display:'none'}} />

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Your Name *</label>
                  <input type="text" name="name" required placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Corporate Email *</label>
                  <input type="email" name="email" required placeholder="john@corporation.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Inquiry Subject *</label>
                <select name="subject" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm">
                  <option value="" disabled selected>Select an option</option>
                  <option value="bulk-quote">Bulk Raw Export Quote</option>
                  <option value="custom-packaging">Custom Packaging Order</option>
                  <option value="logistics">Logistics & Customs Inquiries</option>
                  <option value="other">General Partnership</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Message / Product Specs *</label>
                <textarea name="message" required rows="5" placeholder="Detail the product volumes, desired port of delivery, and custom grading specs..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm resize-none" />
              </div>

              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-3">
                <span>{loading ? 'Processing...' : 'Submit Inquiry'}</span>
                <svg className={`animate-spin -ml-1 mr-3 h-5 w-5 text-white ${loading ? '' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
