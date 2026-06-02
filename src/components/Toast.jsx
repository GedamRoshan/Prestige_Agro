import React from 'react'

export default function Toast({ visible }){
  return (
    <div id="toast" className={`fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-6 py-4 rounded-2xl flex items-center gap-4 transition-all duration-300 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'}`}>
      <div className="bg-brand-500 text-white p-1.5 rounded-lg">✔️</div>
      <div>
        <h4 className="font-bold text-sm text-white">Inquiry Received</h4>
        <p className="text-xs text-slate-400">Our export sales desk will email you shortly.</p>
      </div>
    </div>
  )
}
