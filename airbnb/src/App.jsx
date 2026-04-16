import { useState } from "react";
import PropertyGrid from "./components/PropertyGrid";
import PropertyModal from "./components/PropertyModal";
import Hero from "./components/Hero";

function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <div>

      {/* Header */}
      <div className="border-b sticky top-0 bg-white z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl md:text-4xl font-bold tracking-wider">
            <span className="text-[#c89b8a]" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
              Casa
            </span>
            <span className="text-[#c89b8a]" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
              Velora
            </span>
          </h1>

          {/* Search */}
          <div className="hidden md:flex items-center border rounded-full px-5 py-2 shadow-sm hover:shadow-md transition cursor-pointer bg-white">
            <span className="text-sm text-gray-700">Find your stay</span>
            <span className="mx-3 text-gray-300">|</span>
            <span className="text-sm text-gray-500">Luxury • Comfort • Views</span>
            <div className="ml-4 bg-[#c89b8a] text-white p-2 rounded-full">🔍</div>
          </div>
          
        </div>
      </div>

      {/* Hero Section */}
        <Hero />

      {/* Title */}
      <div className="max-w-7xl mx-auto px-6 mt-10 mb-6 text-center">
        <h2 className="text-2xl md:text-5xl font-semibold tracking-tight text-[#c89b8a]">
          Explore stays
        </h2>

        <p className="text-sm md:text-base text-gray-500 mt-2" style={{ fontStyle: "italic" }}>
          Handpicked destinations for your perfect getaway
        </p>

        {/* line after the text */}
        <div className="mt-4 flex justify-center">
          <div className="w-16 h-[3px] bg-[#c89b8a]/40 rounded-full"></div>
        </div>

      </div>

      {/* Grid part*/}
      <div className="max-w-7xl mx-auto">
        <PropertyGrid onSelect={setSelectedProperty} />
      </div>

      {/* Modal part*/}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
      
      <footer className="mt-20 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">

          {/* Top section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Brand */}
            <div>
              <h1 className="text-4xl font-semibold text-[#c89b8a] tracking-wide"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                }}
                >Casa Velora
              </h1>

              <p className="text-sm text-gray-400 mt-4 leading-relaxed max-w-sm">
                A curated collection of luxury stays designed for comfort, beauty, and unforgettable journeys.
              </p>
            </div>

            {/* Explore */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">Explore</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="hover:text-[#c89b8a] transition cursor-pointer">Stays</li>
                <li className="hover:text-[#c89b8a] transition cursor-pointer">Experiences</li>
                <li className="hover:text-[#c89b8a] transition cursor-pointer">Beach Villas</li>
                <li className="hover:text-[#c89b8a] transition cursor-pointer">Mountain Retreats</li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">Support </h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="hover:text-[#c89b8a] transition cursor-pointer">Help Center</li>
                <li className="hover:text-[#c89b8a] transition cursor-pointer">Cancellation Policy</li>
                <li className="hover:text-[#c89b8a] transition cursor-pointer">Contact Us</li>
                <li className="hover:text-[#c89b8a] transition cursor-pointer">Privacy Policy</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center">

            <p className="text-xs text-gray-500 tracking-wide">
              © {new Date().getFullYear()} Casa Velora. All rights reserved.
            </p>

            <p className="text-xs text-gray-600 mt-4 md:mt-0">
              Crafted for luxury travel experiences ✨
            </p>

          </div>  
        </div>

      </footer>
    </div>
  );
}

export default App;