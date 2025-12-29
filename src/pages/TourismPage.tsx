import { Link } from "react-router-dom";

export default function TourismPage() {
  return (
    <div className="font-sans bg-desa-bg text-desa-text min-h-screen">
      {/* Hero Section */}
      <header className="relative h-[400px] flex items-center justify-center text-center text-white">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1596395818956-621e285d18d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Pemandangan Desa Kebutuhjurang"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Surga Tersembunyi
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto drop-shadow-md">
            Jelajahi keindahan alam, budaya, dan kearifan lokal Desa
            Kebutuhjurang yang memukau.
          </p>
          <a
            href="#daftar-wisata"
            className="px-8 py-3 bg-desa-accent text-desa-primary font-bold rounded-full shadow-lg hover:bg-yellow-400 transition animate-bounce inline-block"
          >
            Mulai Petualangan
          </a>
        </div>
      </header>

      {/* Daftar Destinasi */}
      <section id="daftar-wisata" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-desa-primary">
            Destinasi Unggulan
          </h2>
          <div className="w-24 h-1 bg-desa-accent mx-auto mt-2 rounded"></div>
          <p className="text-gray-500 mt-4">
            Pilihan objek wisata favorit wisatawan saat berkunjung ke Desa
            Kebutuhjurang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Bukit Bongku */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition duration-300 border border-gray-100">
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Bukit Bongku"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                Wisata Alam
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-desa-primary transition">
                Bukit Bongku
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                Nikmati pemandangan matahari terbit di atas awan dari puncak
                tertinggi di Desa Kebutuhjurang. Tempat camping terbaik.
              </p>
              <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                <span className="text-desa-primary font-bold">
                  Rp 10.000
                  <span className="text-xs text-gray-400 font-normal ml-1">
                    /org
                  </span>
                </span>
                <Link
                  to="/wisata/bukit-bongku"
                  className="text-sm font-bold text-desa-accent hover:text-yellow-600 transition"
                >
                  Lihat Detail →
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Curug Kembar */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition duration-300 border border-gray-100">
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Curug Kembar"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                Wisata Air
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-desa-primary transition">
                Air Terjun Curug Kembar
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                Air terjun alami dengan kolam jernih yang menyegarkan. Cocok
                untuk berenang dan piknik keluarga.
              </p>
              <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                <span className="text-desa-primary font-bold">
                  Rp 15.000
                  <span className="text-xs text-gray-400 font-normal ml-1">
                    /org
                  </span>
                </span>
                <Link
                  to="/wisata/curug-kembar"
                  className="text-sm font-bold text-desa-accent hover:text-yellow-600 transition"
                >
                  Lihat Detail →
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Kampung Tenun */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition duration-300 border border-gray-100">
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1590053272970-e5dc79d46924?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Kampung Tenun"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute top-4 right-4 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                Budaya & Edukasi
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-desa-primary transition">
                Kampung Tenun
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                Belajar menenun kain tradisional khas Desa Kebutuhjurang
                langsung dari pengrajin lokal. Bawa pulang oleh-oleh kain
                cantik.
              </p>
              <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                <span className="text-desa-primary font-bold">
                  Gratis
                  <span className="text-xs text-gray-400 font-normal ml-1">
                    (Donasi)
                  </span>
                </span>
                <Link
                  to="/wisata/kampung-tenun"
                  className="text-sm font-bold text-desa-accent hover:text-yellow-600 transition"
                >
                  Lihat Detail →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Homestay (CTA) */}
      <section className="bg-desa-primary text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">Ingin Menginap?</h2>
            <p className="text-green-100 text-lg">
              Desa Kebutuhjurang memiliki Homestay yang nyaman dengan suasana
              pedesaan.
            </p>
          </div>
          <Link
            to="/homestay"
            className="px-8 py-3 bg-white text-desa-primary font-bold rounded shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1"
          >
            Cari Homestay
          </Link>
        </div>
      </section>
    </div>
  );
}
