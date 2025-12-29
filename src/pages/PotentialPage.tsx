import { Link } from "react-router-dom";

export default function PotentialPage() {
  return (
    <div className="font-sans bg-desa-bg text-desa-text min-h-screen">
      {/* Header Halaman Potensi */}
      <header className="relative h-[450px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1625246333195-5840507993eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Pertanian"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-desa-primary to-green-900 opacity-80"></div>
        </div>

        <div className="relative z-10 container px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kekayaan Alam & Ekonomi Kreatif
          </h1>
          <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto text-green-100">
            Menggali potensi bumi Desa Kebutuhjurang, mulai dari hasil tani
            berkualitas hingga kerajinan tangan bernilai tinggi.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#komoditas"
              className="px-6 py-3 bg-desa-accent text-desa-primary font-bold rounded shadow hover:bg-yellow-400 transition"
            >
              Lihat Komoditas
            </a>
            <a
              href="#umkm"
              className="px-6 py-3 border-2 border-white text-white font-bold rounded hover:bg-white hover:text-desa-primary transition"
            >
              Produk UMKM
            </a>
          </div>
        </div>
      </header>

      {/* Ringkasan Potensi */}
      <section className="container mx-auto px-4 py-16 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-desa-primary text-center hover:-translate-y-2 transition duration-300">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center text-desa-primary mb-4 text-3xl">
              🌾
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Pertanian</h3>
            <p className="text-gray-600 text-sm">
              Lumbung padi organik dengan sistem irigasi teknis yang menjamin
              panen 3 kali setahun.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-desa-accent text-center hover:-translate-y-2 transition duration-300">
            <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mb-4 text-3xl">
              ☕
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Perkebunan</h3>
            <p className="text-gray-600 text-sm">
              Penghasil biji kopi Robusta kualitas ekspor dan perkebunan karet
              rakyat yang luas.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-desa-primary text-center hover:-translate-y-2 transition duration-300">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center text-desa-primary mb-4 text-3xl">
              🛍️
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Ekonomi Kreatif
            </h3>
            <p className="text-gray-600 text-sm">
              Pengembangan UMKM kerajinan tangan dan olahan pangan lokal yang
              bernilai jual.
            </p>
          </div>
        </div>
      </section>

      {/* Komoditas Unggulan */}
      <section id="komoditas" className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-desa-primary">
            Komoditas Unggulan
          </h2>
          <div className="w-20 h-1 bg-desa-accent mx-auto mt-2 rounded"></div>
        </div>

        {/* Item 1: Kopi */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Kopi Kebutuhjurang"
              className="rounded-lg shadow-xl w-full h-80 object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex items-center mb-2">
              <span className="bg-green-100 text-desa-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                Perkebunan
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Kopi Robusta Kebutuhjurang
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Ditanam di ketinggian 400 mdpl dengan tanah vulkanik yang subur,
              Kopi Kebutuhjurang memiliki cita rasa unik dengan hint coklat dan
              kacang. Telah didistribusikan ke berbagai kedai kopi di kabupaten
              dan provinsi.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="border-l-4 border-desa-accent pl-4">
                <span className="block text-2xl font-bold text-desa-primary">
                  50 Ton
                </span>
                <span className="text-sm text-gray-500">
                  Produksi per Tahun
                </span>
              </div>
              <div className="border-l-4 border-desa-accent pl-4">
                <span className="block text-2xl font-bold text-desa-primary">
                  120 Ha
                </span>
                <span className="text-sm text-gray-500">Luas Lahan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Item 2: Beras */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-16">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1536617621572-1d5f1e6269a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Padi Organik"
              className="rounded-lg shadow-xl w-full h-80 object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:text-right">
            <div className="flex items-center justify-start md:justify-end mb-2">
              <span className="bg-green-100 text-desa-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                Pertanian
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Beras Organik "Dewi Sri"
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Beras sehat tanpa pestisida kimia yang dikembangkan oleh Kelompok
              Tani Mekar Sari. Memiliki tekstur pulen dan wangi pandan alami.
              Tersedia dalam varian beras putih, merah, dan hitam.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6 md:justify-items-end">
              <div className="border-l-4 md:border-l-0 md:border-r-4 border-desa-accent pl-4 md:pl-0 md:pr-4">
                <span className="block text-2xl font-bold text-desa-primary">
                  3 Kali
                </span>
                <span className="text-sm text-gray-500">Panen per Tahun</span>
              </div>
              <div className="border-l-4 md:border-l-0 md:border-r-4 border-desa-accent pl-4 md:pl-0 md:pr-4">
                <span className="block text-2xl font-bold text-desa-primary">
                  Premium
                </span>
                <span className="text-sm text-gray-500">Kualitas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Katalog UMKM */}
      <section id="umkm" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-desa-primary">
                Katalog Produk UMKM
              </h2>
              <p className="text-gray-500 mt-2">
                Dukung ekonomi warga dengan membeli produk asli desa.
              </p>
            </div>
            <Link
              to="/produk"
              className="hidden md:inline-block px-4 py-2 border border-desa-primary text-desa-primary font-bold rounded hover:bg-desa-primary hover:text-white transition"
            >
              Lihat Semua Produk
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Produk 1 */}
            <div className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                  alt="Anyaman"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4">
                <span className="text-xs text-gray-500">Kerajinan</span>
                <h4 className="font-bold text-gray-800 text-lg mb-2">
                  Tas Anyaman Bambu
                </h4>
                <div className="flex justify-between items-center">
                  <span className="text-desa-primary font-bold">Rp 75.000</span>
                  <button className="w-8 h-8 bg-desa-accent rounded-full text-white flex items-center justify-center hover:bg-yellow-400">
                    ➜
                  </button>
                </div>
              </div>
            </div>

            {/* Produk 2 */}
            <div className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1599639668356-b09e2586a51d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                  alt="Keripik"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4">
                <span className="text-xs text-gray-500">Kuliner</span>
                <h4 className="font-bold text-gray-800 text-lg mb-2">
                  Keripik Pisang Nangka
                </h4>
                <div className="flex justify-between items-center">
                  <span className="text-desa-primary font-bold">Rp 15.000</span>
                  <button className="w-8 h-8 bg-desa-accent rounded-full text-white flex items-center justify-center hover:bg-yellow-400">
                    ➜
                  </button>
                </div>
              </div>
            </div>

            {/* Produk 3 */}
            <div className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1597362925123-778f1d356945?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                  alt="Kopi Bubuk"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4">
                <span className="text-xs text-gray-500">Minuman</span>
                <h4 className="font-bold text-gray-800 text-lg mb-2">
                  Kopi Bubuk 250gr
                </h4>
                <div className="flex justify-between items-center">
                  <span className="text-desa-primary font-bold">Rp 35.000</span>
                  <button className="w-8 h-8 bg-desa-accent rounded-full text-white flex items-center justify-center hover:bg-yellow-400">
                    ➜
                  </button>
                </div>
              </div>
            </div>

            {/* Produk 4 */}
            <div className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                  alt="Madu"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4">
                <span className="text-xs text-gray-500">Kesehatan</span>
                <h4 className="font-bold text-gray-800 text-lg mb-2">
                  Madu Hutan Asli
                </h4>
                <div className="flex justify-between items-center">
                  <span className="text-desa-primary font-bold">
                    Rp 120.000
                  </span>
                  <button className="w-8 h-8 bg-desa-accent rounded-full text-white flex items-center justify-center hover:bg-yellow-400">
                    ➜
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link
              to="/produk"
              className="px-4 py-2 border border-desa-primary text-desa-primary font-bold rounded hover:bg-desa-primary hover:text-white transition"
            >
              Lihat Semua Produk
            </Link>
          </div>
        </div>
      </section>

      {/* Peluang Investasi */}
      <section className="bg-desa-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Peluang Investasi & Kerjasama
          </h2>
          <p className="text-lg text-green-100 max-w-2xl mx-auto mb-8">
            Desa Kebutuhjurang membuka peluang seluas-luasnya bagi investor atau
            mitra bisnis yang ingin bekerjasama dalam pengembangan pertanian
            organik dan pariwisata berkelanjutan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/bumdes"
              className="px-8 py-3 bg-desa-accent text-desa-primary font-bold rounded shadow-lg hover:bg-yellow-400 transition"
            >
              Hubungi BUMDes
            </Link>
            <Link
              to="/proposal"
              className="px-8 py-3 bg-transparent border border-white text-white font-bold rounded hover:bg-white hover:text-desa-primary transition"
            >
              Download Proposal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
