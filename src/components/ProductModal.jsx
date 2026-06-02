import React from 'react'

const productsData = {
  'turmeric': { title: 'Premium Turmeric', image: './premium_turmeric.png', description: 'Sourced from organic clusters...', specs: { 'Origin':'Erode, Tamil Nadu, India','Curcumin Value':'3.5% to 5.0% Min' } },
  'red-chilli': { title: 'Red Chilli', image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?q=80&w=1200&auto=format&fit=crop', description: 'Premium red chillies derived from Guntur fields.', specs: { 'Origin':'Guntur, Andhra Pradesh, India','Pungency Range':'20,000 to 45,000 SHU' } },
  'sharbati-wheat': { title: 'Sharbati Wheat', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1200&auto=format&fit=crop', description: 'The golden grain of India.', specs: { 'Origin':'Sehore, Madhya Pradesh, India','Protein Value':'12.5% to 14.5%' } },
  'basmati-rice': { title: 'Basmati Rice', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1200&auto=format&fit=crop', description: 'Naturally aged culinary rice.', specs: { 'Origin':'Haryana / Punjab, India','Average Length':'8.35mm Pre-cooked' } },
  'coriander': { title: 'Premium Coriander', image: './premium_coriander.png', description: 'Finest quality Indian coriander seeds.', specs: { 'Origin':'Rajasthan / Gujarat, India','Purity Standard':'99% Minimum' } },
  'dehydrated-garlic-onion': { title: 'Dehydrated Garlic & Onion', image: './dehydrated_garlic_onion.png', description: 'Premium dehydrated garlic and onion.', specs: { 'Origin':'Gujarat / Maharashtra, India','Moisture Content':'6% Maximum' } }
}

export default function ProductModal({ productId, onClose }){
  if (!productId) return null
  const data = productsData[productId]
  if (!data) return null

  return (
    <div id="product-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 modal-backdrop opacity-100">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl modal-content flex flex-col md:flex-row border border-slate-100 max-h-[90vh]">
        <div className="md:w-5/12 h-48 md:h-auto relative">
          <img id="modal-image" src={data.image} alt={data.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-8 md:w-7/12 flex flex-col justify-between overflow-y-auto max-h-[60vh] md:max-h-none">
          <div>
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 id="modal-title" className="text-2xl font-extrabold text-slate-900 font-heading leading-tight">{data.title}</h3>
              <button id="close-modal-btn" onClick={onClose} className="text-slate-400 hover:text-brand-600 transition-colors p-1">Close</button>
            </div>
            <p id="modal-description" className="text-slate-550 text-sm leading-relaxed mb-6">{data.description}</p>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Specification Sheet</h4>
            <div id="modal-specs-list" className="flex flex-col gap-2.5 border-t border-slate-100 pt-3">
              {Object.entries(data.specs).map(([k,v])=> (
                <div key={k} className="flex items-center justify-between text-sm py-1.5 border-b border-slate-100 last:border-0">
                  <span className="text-slate-400 font-medium">{k}</span>
                  <span className="text-slate-900 font-semibold text-right">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-100 flex gap-3">
            <button onClick={onClose} className="flex-1 bg-slate-150 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl transition-all text-sm">Back</button>
            <a href="#contact" onClick={onClose} className="flex-1 bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-xl shadow-md transition-all text-sm text-center">Request Quote</a>
          </div>
        </div>
      </div>
    </div>
  )
}
