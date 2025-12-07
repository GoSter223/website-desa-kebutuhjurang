import { Link } from "react-router-dom";

export default function NewsPage() {
  return (
    <div className="font-sans bg-desa-bg text-desa-text min-h-screen">
      {/* Header Halaman Berita */}
      <header className="bg-desa-primary py-12 text-center text-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl font-bold mb-6">Arsip Berita & Informasi</h1>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto flex bg-white rounded-full overflow-hidden shadow-lg p-1">
            <input
              type="text"
              placeholder="Cari berita..."
              className="flex-grow px-6 py-2 text-gray-700 focus:outline-none rounded-l-full placeholder:text-gray-400"
            />
            <button className="bg-desa-accent text-desa-primary font-bold px-6 py-2 rounded-full hover:bg-yellow-400 transition transform hover:scale-105">
              Cari
            </button>
          </div>
        </div>
      </header>

      {/* Konten Berita */}
      <section className="container mx-auto px-4 py-12">
        {/* Filter Kategori */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          <button className="px-4 py-2 bg-desa-primary text-white rounded-full text-sm font-bold shadow-md hover:bg-green-700 transition">
            Semua
          </button>
          {["Pembangunan", "Ekonomi", "Kesehatan", "Pengumuman"].map(
            (category) => (
              <button
                key={category}
                className="px-4 py-2 bg-white text-gray-600 border border-gray-200 rounded-full text-sm hover:border-desa-primary hover:text-desa-primary transition hover:shadow-sm"
              >
                {category}
              </button>
            )
          )}
        </div>

        {/* Grid Berita */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Artikel 1 */}
          <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full border border-gray-100 group">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576670158605-9795d68882a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Berita Pembangunan"
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
              />
              <span className="absolute top-4 right-4 bg-desa-accent text-desa-primary text-xs font-bold px-3 py-1 rounded-full shadow">
                Pembangunan
              </span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center text-xs text-gray-400 mb-3 space-x-2">
                <span>📅 24 Okt 2025</span>
                <span>•</span>
                <span>👤 Admin Desa</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-desa-primary transition">
                <Link to="/berita/1">
                  Perbaikan Jalan Dusun A Selesai Tepat Waktu
                </Link>
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                Warga kini dapat menikmati akses jalan yang lebih baik setelah
                proses pengaspalan selesai dilaksanakan minggu lalu sesuai
                target RAPBDes.
              </p>
              <Link
                to="/berita/1"
                className="inline-block text-desa-primary font-bold text-sm hover:underline mt-auto"
              >
                Baca Selengkapnya →
              </Link>
            </div>
          </article>

          {/* Artikel 2 */}
          <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full border border-gray-100 group">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5fa5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Berita Kesehatan"
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
              />
              <span className="absolute top-4 right-4 bg-desa-accent text-desa-primary text-xs font-bold px-3 py-1 rounded-full shadow">
                Kesehatan
              </span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center text-xs text-gray-400 mb-3 space-x-2">
                <span>📅 22 Okt 2025</span>
                <span>•</span>
                <span>👤 Bidan Desa</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-desa-primary transition">
                <Link to="/berita/2">
                  Jadwal Posyandu Balita & Lansia Bulan Ini
                </Link>
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                Pemerintah desa menghimbau ibu-ibu untuk membawa balitanya ke
                Posyandu. Tersedia juga cek kesehatan gratis untuk lansia.
              </p>
              <Link
                to="/berita/2"
                className="inline-block text-desa-primary font-bold text-sm hover:underline mt-auto"
              >
                Baca Selengkapnya →
              </Link>
            </div>
          </article>

          {/* Artikel 3 */}
          <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full border border-gray-100 group">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Berita Ekonomi"
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
              />
              <span className="absolute top-4 right-4 bg-desa-accent text-desa-primary text-xs font-bold px-3 py-1 rounded-full shadow">
                Ekonomi
              </span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center text-xs text-gray-400 mb-3 space-x-2">
                <span>📅 15 Okt 2025</span>
                <span>•</span>
                <span>👤 PKK Desa</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-desa-primary transition">
                <Link to="/berita/3">Pelatihan UMKM Kerajinan Bambu</Link>
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                Dalam upaya meningkatkan ekonomi warga, PKK desa mengadakan
                pelatihan pembuatan kerajinan tangan dari bahan bambu lokal.
              </p>
              <Link
                to="/berita/3"
                className="inline-block text-desa-primary font-bold text-sm hover:underline mt-auto"
              >
                Baca Selengkapnya →
              </Link>
            </div>
          </article>

          {/* Artikel 4 */}
          <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full border border-gray-100 group">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Berita Pengumuman"
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
              />
              <span className="absolute top-4 right-4 bg-gray-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                Pengumuman
              </span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center text-xs text-gray-400 mb-3 space-x-2">
                <span>📅 10 Okt 2025</span>
                <span>•</span>
                <span>👤 Sekdes</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-desa-primary transition">
                <Link to="/berita/4">Undangan Musyawarah Desa (Musdes)</Link>
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                Diharapkan kehadiran seluruh Kepala Dusun dan perwakilan RT/RW
                untuk menghadiri Musyawarah Desa Perencanaan Pembangunan.
              </p>
              <Link
                to="/berita/4"
                className="inline-block text-desa-primary font-bold text-sm hover:underline mt-auto"
              >
                Baca Selengkapnya →
              </Link>
            </div>
          </article>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 space-x-2">
          <button className="px-4 py-2 border rounded-md text-gray-500 hover:bg-gray-100 disabled:opacity-50 transition">
            ← Prev
          </button>
          <button className="px-4 py-2 bg-desa-primary text-white font-bold rounded-md shadow-md hover:bg-green-700 transition">
            1
          </button>
          <button className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100 hover:text-desa-primary transition">
            2
          </button>
          <button className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100 hover:text-desa-primary transition">
            3
          </button>
          <span className="px-4 py-2 text-gray-500">...</span>
          <button className="px-4 py-2 border rounded-md text-gray-500 hover:bg-gray-100 hover:text-desa-primary transition">
            Next →
          </button>
        </div>
      </section>
    </div>
  );
}
