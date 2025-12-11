// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import { useVillageStore } from "@/store/useVillageStore";
// import type { NewsItem } from "@/types";
// import { Link } from "react-router-dom"; // Jika Anda menggunakan Link, uncomment ini

// Import komponen ShadCN (Pastikan path ini benar sesuai struktur project Anda)
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// Ganti dengan URL API Anda
// const API_BASE_URL = "https://api.desa-sukamaju.go.id";

export default function HomePage() {
  // 1. Ambil data global dari Zustand
  const {
    info,
    isLoading: isVillageLoading,
    error: villageError,
  } = useVillageStore();

  // 2. State lokal untuk data berita
  // const [news, setNews] = useState<NewsItem[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [isNewsLoading, setIsNewsLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [newsError, setNewsError] = useState<string | null>(null);

  // 3. Fetch data berita (lokal)
  // useEffect(() => {
  //   const fetchNews = async () => {
  //     setIsNewsLoading(true);
  //     setNewsError(null);
  //     try {
  //       // const response = await axios.get(`${API_BASE_URL}/news?limit=3`); // Ambil 3 berita terbaru
  //       // setNews(response.data);
  //     } catch (err) {
  //       console.error(err);
  //       setNewsError("Gagal memuat berita.");
  //     } finally {
  //       setIsNewsLoading(false);
  //     }
  //   };
  //   fetchNews();
  // }, []);

  // Tampilkan loading global
  if (isVillageLoading) {
    return (
      <div className="container py-8 text-desa-text">Memuat data desa...</div>
    );
  }

  // Tampilkan error global
  if (villageError) {
    return <div className="container py-8 text-red-600">{villageError}</div>;
  }

  // Tampilkan jika data tidak ada
  if (!info) {
    return (
      <div className="container py-8 text-desa-text">
        Data desa tidak ditemukan.
      </div>
    );
  }

  // Data Card disesuaikan dengan navItems yang Anda berikan
  const cards = [
    {
      title: "Profil Desa",
      path: "/profil",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      ),
      borderColor: "border-desa-primary",
      iconBg: "bg-green-100",
      iconColor: "text-desa-primary",
    },
    {
      title: "Destinasi Wisata",
      path: "/wisata",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 21v-8a2 2 0 012-2h14a2 2 0 012 2v8M3 21h18M5 10V7a4 4 0 014-4h6a4 4 0 014 4v3"
        />
      ),
      borderColor: "border-desa-accent",
      iconBg: "bg-yellow-100",
      iconColor: "text-desa-accent",
    },
    {
      title: "Potensi Desa",
      path: "/potensi",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      ),
      borderColor: "border-desa-primary",
      iconBg: "bg-green-100",
      iconColor: "text-desa-primary",
    },
    {
      title: "Data Statistik",
      path: "/statistik",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      ),
      borderColor: "border-desa-accent",
      iconBg: "bg-yellow-100",
      iconColor: "text-desa-accent",
    },
  ];

  return (
    // PERBAIKAN 1: Background & Text Global
    <div className="font-sans bg-desa-bg text-desa-text">
      {/* Hero Section */}
      <header className="relative h-[500px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Desa Kebutuhjurang"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(rgba(46, 125, 50, 0.4), rgba(46, 125, 50, 0.8))",
            }}
          ></div>
        </div>

        <div className="relative z-10 px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">
            DESA KEBUTUHJURANG
          </h2>
          <p className="text-xl md:text-2xl font-light mb-8 text-gray-100">
            Menuju Desa Digital yang Mandiri dan Sejahtera
          </p>
          <a
            href="#jelajahi"
            className="px-8 py-3 bg-desa-accent text-desa-primary font-bold rounded-full shadow-lg hover:bg-yellow-400 transition transform hover:-translate-y-1 inline-block"
          >
            Jelajahi Desa
          </a>
        </div>
      </header>

      {/* Menu Cepat / Jelajahi */}
      <section
        id="jelajahi"
        className="py-12 -mt-16 relative z-20 container mx-auto px-4"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cards.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer border-b-4 ${item.borderColor}`}
            >
              <div
                className={`w-12 h-12 mx-auto ${item.iconBg} ${item.iconColor} rounded-full flex items-center justify-center mb-3`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {item.icon}
                </svg>
              </div>
              <h3 className="font-bold text-gray-700">{item.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Sambutan Kades */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative">
                {/* PERBAIKAN 3: Border primary */}
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-desa-primary shadow-2xl p-1">
                  <img
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Kepala Desa"
                    className="w-full h-full object-cover rounded-full hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-desa-accent text-desa-primary px-4 py-1 rounded-full text-sm font-bold shadow">
                  Kepala Desa
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl font-bold text-desa-primary mb-2">
                Sambutan Kepala Desa Kebutuhjurang
              </h2>
              <p className="text-gray-500 mb-6 italic">
                "Membangun Desa dengan Hati, Melayani dengan Integritas"
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Selamat datang di website resmi Desa Kebutuhjurang. Website ini
                kami hadirkan sebagai media transparansi dan informasi bagi
                seluruh masyarakat desa. Kami berkomitmen untuk terus berinovasi
                dalam memberikan pelayanan terbaik. Mari bersama-sama kita
                wujudkan Desa Kebutuhjurang yang maju, mandiri, dan berbudaya.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                <div className="text-center">
                  <h4 className="font-bold text-xl text-desa-primary">
                    Bapak Nama Kades
                  </h4>
                  <span className="text-sm text-gray-500">
                    Kepala Desa Periode 2020-2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perangkat Desa */}
      {/* PERBAIKAN 4: bg-desa-bg */}
      <section className="py-16 bg-desa-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-desa-primary uppercase tracking-wide">
              Perangkat Desa
            </h2>
            <div className="w-20 h-1 bg-desa-accent mx-auto mt-2 rounded"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Perangkat 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Sekdes"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              {/* PERBAIKAN 5: bg-desa-primary & text-desa-secondary */}
              <div className="p-4 bg-desa-primary text-center">
                <h4 className="text-lg font-bold text-white">Budi Santoso</h4>
                <p className="text-sm text-desa-secondary">Sekretaris Desa</p>
              </div>
            </div>
            {/* Perangkat 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Kaur"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              {/* PERBAIKAN 6: hover effects & border */}
              <div className="p-4 bg-white border-t border-desa-primary text-center group-hover:bg-desa-primary transition duration-300">
                <h4 className="text-lg font-bold text-gray-800 group-hover:text-white">
                  Ahmad Yani
                </h4>
                <p className="text-sm text-gray-500 group-hover:text-desa-secondary">
                  Kaur Keuangan
                </p>
              </div>
            </div>
            {/* Perangkat 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Kasi"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-4 bg-white border-t border-desa-primary text-center group-hover:bg-desa-primary transition duration-300">
                <h4 className="text-lg font-bold text-gray-800 group-hover:text-white">
                  Siti Aminah
                </h4>
                <p className="text-sm text-gray-500 group-hover:text-desa-secondary">
                  Kasi Pelayanan
                </p>
              </div>
            </div>
            {/* Perangkat 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Kadus"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-4 bg-white border-t border-desa-primary text-center group-hover:bg-desa-primary transition duration-300">
                <h4 className="text-lg font-bold text-gray-800 group-hover:text-white">
                  Joko Widodo
                </h4>
                <p className="text-sm text-gray-500 group-hover:text-desa-secondary">
                  Kepala Dusun
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Kependudukan */}
      {/* PERBAIKAN 7: Gradient menggunakan from-desa-primary */}
      <section className="py-16 bg-gradient-to-r from-desa-primary to-green-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Data Kependudukan
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Kartu 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center border border-desa-secondary">
              <h3 className="text-4xl font-bold text-desa-accent mb-2">
                1.890
              </h3>
              <p className="uppercase text-sm tracking-wider font-semibold">
                Penduduk
              </p>
            </div>

            {/* Kartu 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center border border-desa-secondary">
              <h3 className="text-4xl font-bold text-desa-accent mb-2">436</h3>
              <p className="uppercase text-sm tracking-wider font-semibold">
                Kepala Keluarga
              </p>
            </div>

            {/* Kartu 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center border border-desa-secondary">
              <h3 className="text-4xl font-bold text-desa-accent mb-2">930</h3>
              <p className="uppercase text-sm tracking-wider font-semibold">
                Laki-Laki
              </p>
            </div>

            {/* Kartu 4 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center border border-desa-secondary">
              <h3 className="text-4xl font-bold text-desa-accent mb-2">960</h3>
              <p className="uppercase text-sm tracking-wider font-semibold">
                Perempuan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kabar Desa */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-desa-primary">
                Kabar Desa
              </h2>
              <p className="text-gray-500 mt-2">
                Update informasi terbaru seputar kegiatan desa.
              </p>
            </div>
            <a
              href="#"
              className="hidden md:inline-block text-desa-primary font-bold hover:text-desa-accent"
            >
              Lihat Semua Berita &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Berita 1 */}
            <div className="bg-desa-bg rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img
                src="https://images.unsplash.com/photo-1576670158605-9795d68882a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="News"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-bold text-desa-accent uppercase mb-2 block">
                  Pembangunan
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-desa-primary cursor-pointer">
                  Perbaikan Jalan Dusun A Selesai
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  Warga kini dapat menikmati akses jalan yang lebih baik setelah
                  proses pengaspalan selesai dilaksanakan minggu lalu...
                </p>
                <a
                  href="#"
                  className="inline-block px-4 py-2 bg-desa-primary text-white text-sm font-bold rounded hover:bg-green-700 transition"
                >
                  Baca Selengkapnya
                </a>
              </div>
            </div>
            {/* Berita 2 */}
            <div className="bg-desa-bg rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5fa5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="News"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-bold text-desa-accent uppercase mb-2 block">
                  Kesehatan
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-desa-primary cursor-pointer">
                  Jadwal Posyandu Balita Bulan Ini
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  Pemerintah desa menghimbau ibu-ibu untuk membawa balitanya ke
                  Posyandu untuk penimbangan dan imunisasi rutin...
                </p>
                <a
                  href="#"
                  className="inline-block px-4 py-2 bg-desa-primary text-white text-sm font-bold rounded hover:bg-green-700 transition"
                >
                  Baca Selengkapnya
                </a>
              </div>
            </div>
            {/* Berita 3 */}
            <div className="bg-desa-bg rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="News"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-bold text-desa-accent uppercase mb-2 block">
                  Ekonomi
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-desa-primary cursor-pointer">
                  Pelatihan UMKM Kerajinan Tangan
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  Dalam upaya meningkatkan ekonomi warga, PKK desa mengadakan
                  pelatihan pembuatan kerajinan tangan dari bahan daur ulang...
                </p>
                <a
                  href="#"
                  className="inline-block px-4 py-2 bg-desa-primary text-white text-sm font-bold rounded hover:bg-green-700 transition"
                >
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-6 md:hidden">
            <a
              href="#"
              className="text-desa-primary font-bold hover:text-desa-accent"
            >
              Lihat Semua Berita &rarr;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
