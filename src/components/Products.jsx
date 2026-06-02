import React from 'react'

const products = [
  { id: 'turmeric', title: 'Premium Turmeric', img: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1200&auto=format&fit=crop', badge: 'Top Export' },
  { id: 'red-chilli', title: 'Red Chilli', img: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?q=80&w=1200&auto=format&fit=crop', badge: 'Spicy' },
  { id: 'sharbati-wheat', title: 'Sharbati Wheat', img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1200&auto=format&fit=crop' },
  { id: 'basmati-rice', title: 'Basmati Rice', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1200&auto=format&fit=crop', badge: 'Aromatic' },
  { id: 'coriander', title: 'Premium Coriander', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop' },
  { id: 'dehydrated-garlic-onion', title: 'Dehydrated Garlic & Onion', img: '/oinienImage.png' }
]

export default function Products({ onOpenModal }) {
  return (
    <section id="products" className="py-24 px-6 md:px-16 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col gap-3 reveal">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">Our Premium Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-heading">Export Specialties</h2>
          <p className="text-slate-600 text-lg">Select agricultural yields checked against international safety, size, and purity guidelines.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((p, idx) => (
            <div key={p.id} className="reveal delay-100 bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-slate-100/60 group">
              <div className="relative overflow-hidden h-64">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><rect width='100%' height='100%' fill='%23f8fafc'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%236b7280' font-family='Arial, Helvetica, sans-serif' font-size='28'>Image+unavailable</text></svg>";
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {p.badge && <span className="absolute top-4 right-4 bg-amber-500 text-white font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wider">{p.badge}</span>}
              </div>
              <div className="p-8 flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-slate-900 font-heading">{p.title}</h3>
                <p className="text-slate-550 leading-relaxed text-sm">Short description for {p.title}.</p>
                <button onClick={() => onOpenModal(p.id)} className="w-full border border-slate-200 hover:border-brand-600 hover:bg-brand-50 text-brand-700 font-semibold py-3 px-4 rounded-xl transition-all text-sm mt-2 flex items-center justify-center gap-2">
                  <span>View Specifications</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
