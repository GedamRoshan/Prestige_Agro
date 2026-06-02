import React from 'react'

export default function Navbar({ onOpenDrawer }) {
  return (
    <nav id="main-nav" className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300 py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="bg-brand-600 p-2 rounded-xl text-white shadow-md shadow-brand-600/25 transition-transform group-hover:scale-105">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M21.57 6.85c-1.72.88-4.26 2.66-6.49 4.9-2.24 2.24-4.03 4.78-4.9 6.49-.54 1.06-.86 2.23-.95 3.4-.02.26.18.5.44.5.04 0 .09 0 .13-.01 1.15-.12 2.3-.45 3.34-.99 1.72-.88 4.26-2.66 6.49-4.9 2.24-2.24 4.03-4.78 4.9-6.49.54-1.06.86-2.23.95-3.4.02-.26-.18-.5-.44-.5-.04 0-.09 0-.13.01-1.15.12-2.3.45-3.34.99z" stroke="#14532d" strokeWidth="0.6" fill="#16a34a" />
              <path d="M7.5 6.5c1.38 0 5 1.5 8 4.5" stroke="#ffffff" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.95" />
            </svg>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-brand-800 font-heading">Prestige Agro <span className="text-brand-500">Global</span></span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          <a href="#about" className="hover:text-brand-600 transition-colors py-2">About</a>
          <a href="#products" className="hover:text-brand-600 transition-colors py-2">Products</a>
          <a href="#why-choose-us" className="hover:text-brand-600 transition-colors py-2">Why Us</a>
          <a href="#contact" className="hover:text-brand-600 transition-colors py-2">Contact</a>
          <a href="#contact" className="bg-white/90 text-brand-700 hover:bg-white border border-slate-100 font-semibold px-5 py-2.5 rounded-xl shadow-sm">Get a Quote</a>
        </div>

        <button id="mobile-menu-btn" onClick={onOpenDrawer} className="md:hidden p-2 text-slate-600 hover:text-brand-600 focus:outline-none" aria-label="Toggle Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </nav>
  )
}
