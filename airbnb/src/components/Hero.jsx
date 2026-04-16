function Hero() {
  return (
    <div
      className="h-[80vh] bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511')",
      }}
    >
      {/* 🔥 DARK OVERLAY */}
      <div className="bg-black/40 absolute inset-0"></div>

      {/* 🔥 CONTENT (must be above overlay) */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-wide">
          Luxury Stays
        </h1>

        <h2 className="text-4xl md:text-6xl font-semibold mt-2 tracking-wide">
          Accommodation
        </h2>

        <p className="mt-4 text-lg text-gray-200">
          Relax and unwind with curated premium stays
        </p>

        <button className="mt-8 bg-[#c89b8a] px-8 py-3 tracking-wider hover:bg-[#b88978] transition">
          BOOK NOW
        </button>
      </div>
    </div>
  );
}

export default Hero;