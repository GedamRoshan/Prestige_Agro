import React, { useEffect, useRef, useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Banner from './components/Banner'
import WhyChoose from './components/WhyChoose'
import Contact from './components/Contact'
import MapSection from './components/MapSection'
import Footer from './components/Footer'
import ProductModal from './components/ProductModal'
import Toast from './components/Toast'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  const [modalData, setModalData] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [toastVisible, setToastVisible] = useState(false)

  // control body overflow for modal/drawer open
  useEffect(() => {
    if (modalData || drawerOpen) document.body.classList.add('overflow-hidden')
    else document.body.classList.remove('overflow-hidden')
  }, [modalData, drawerOpen])

  // Scroll reveal using IntersectionObserver
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })
    revealElements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <Navbar onOpenDrawer={() => setDrawerOpen(true)} onOpenModal={(id) => setModalData(id)} />
      <Hero />
      <main>
        <About onOpenModal={(id) => setModalData(id)} />
        <Products onOpenModal={(id) => setModalData(id)} />
        <Banner />
        <WhyChoose />
        <Contact showToast={() => { setToastVisible(true); setTimeout(()=>setToastVisible(false),5000) }} />
        <MapSection />
      </main>
      <Footer />

      <ProductModal productId={modalData} onClose={() => setModalData(null)} />
      <Toast visible={toastVisible} />
      <WhatsAppFloat />

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-50 ${drawerOpen ? '' : 'pointer-events-none'}`}>
        <div className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity ${drawerOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setDrawerOpen(false)} />
        <div className={`fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-white p-6 shadow-2xl mobile-menu-drawer ${drawerOpen ? 'active' : ''}`}>
          <div className="flex items-center justify-between mb-8">
            <span className="text-lg font-bold text-brand-850 font-heading">Navigation</span>
            <button onClick={() => setDrawerOpen(false)} className="p-2 text-slate-400 hover:text-brand-600">Close</button>
          </div>
          <nav className="flex flex-col gap-5 font-semibold text-slate-600 text-lg">
            <a href="#about" onClick={() => setDrawerOpen(false)}>About Us</a>
            <a href="#products" onClick={() => setDrawerOpen(false)}>Our Products</a>
            <a href="#why-choose-us" onClick={() => setDrawerOpen(false)}>Why Choose Us</a>
            <a href="#contact" onClick={() => setDrawerOpen(false)}>Contact Us</a>
          </nav>
          <div className="mt-8 border-t border-slate-100 pt-6">
            <a href="#contact" className="w-full bg-brand-600 hover:bg-brand-700 text-white text-center font-bold py-3.5 rounded-xl shadow-md">Request Quote</a>
            <p className="text-center text-xs text-slate-400 mt-4">info@prestigeagroglobal.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
