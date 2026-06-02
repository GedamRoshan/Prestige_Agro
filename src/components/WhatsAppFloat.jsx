import React from 'react'

export default function WhatsAppFloat() {
  return (
    <>
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
          50% { box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
        }
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes scale-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .whatsapp-float {
          animation: pulse-glow 2s infinite, bounce-gentle 2s infinite;
        }
        .whatsapp-float:hover {
          animation: scale-pulse 0.6s ease-in-out;
        }
      `}</style>
      <a
        href="https://wa.me/919022803916?text=Hello%20Prestige%20Agro%20Global%2C%20I%20am%20interested%20in%20your%20agricultural%20products"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group whatsapp-float"
        title="Chat with us on WhatsApp"
      >
        <img src="/pngtree-whatsapp-icon-png-image_3584844-removebg-preview.png" alt="WhatsApp" className="w-6 h-6" />
        <span className="absolute right-16 bg-green-500 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">Message us</span>
      </a>
    </>
  )
}
