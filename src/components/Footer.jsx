import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 px-6 border-t border-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="bg-brand-600 p-2 rounded-lg text-white"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z"></path></svg></div>
          <span className="text-lg font-bold tracking-tight text-white font-heading">Prestige Agro <span className="text-brand-500">Global</span></span>
        </div>
        <p className="text-sm">&copy; 2026 Prestige Agro Global. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
