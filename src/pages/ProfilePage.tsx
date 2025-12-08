import { useVillageStore } from "@/store/useVillageStore";
import { Link } from "react-router-dom";
// import {
//   Bar,
//   BarChart,
//   ResponsiveContainer,
//   XAxis,
//   YAxis,
//   Tooltip,
// } from "recharts"; // Untuk grafik [cite: 32]

// Import komponen ShadCN
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfilePage() {
  // Ambil data profile dari Zustand
  const { profile, isLoading, error } = useVillageStore();

  if (isLoading) {
    return <div className="container py-8">Memuat profil desa...</div>;
  }

  if (error) {
    return <div className="container py-8 text-red-600">{error}</div>;
  }

  if (!profile) {
    return <div className="container py-8">Profil desa tidak ditemukan.</div>;
  }

  // Format data demografi untuk chart [cite: 32]
  // const demographyData = {
  //   age: Object.keys(profile.demographics.age_distribution).map((key) => ({
  //     name: key,
  //     total: profile.demographics.age_distribution[key],
  //   })),
  //   religion: Object.keys(profile.demographics.religion).map((key) => ({
  //     name: key,
  //     total: profile.demographics.religion[key],
  //   })),
  //   occupation: Object.keys(profile.demographics.occupation).map((key) => ({
  //     name: key,
  //     total: profile.demographics.occupation[key],
  //   })),
  // };

  return (
    <div className="font-sans bg-desa-bg text-desa-text min-h-screen">
      {/* Header Halaman Profil */}
      <header className="bg-desa-primary py-16 text-center text-white relative overflow-hidden">
        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/cubes.png')",
          }}
        ></div>

        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Profil Desa</h1>
          <div className="text-sm text-desa-secondary flex justify-center space-x-2">
            <Link to="/" className="hover:text-white transition">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-desa-accent">Profil Desa</span>
          </div>
        </div>
      </header>

      {/* Konten Utama */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar */}
          <aside className="w-full md:w-1/4 space-y-8 h-fit sticky top-24">
            {/* Menu Navigasi Sidebar */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-desa-primary">
              <h3 className="font-bold text-lg mb-4 text-desa-primary">
                Menu Profil
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#sejarah"
                    className="block text-gray-600 hover:text-desa-primary hover:font-bold transition"
                  >
                    Sejarah Desa
                  </a>
                </li>
                <li>
                  <a
                    href="#visi-misi"
                    className="block text-gray-600 hover:text-desa-primary hover:font-bold transition"
                  >
                    Visi & Misi
                  </a>
                </li>
                <li>
                  <a
                    href="#geografis"
                    className="block text-gray-600 hover:text-desa-primary hover:font-bold transition"
                  >
                    Letak Geografis
                  </a>
                </li>
                <li>
                  <a
                    href="#demografi" // Note: Section demografi belum ada di HTML asli, tapi linknya ada
                    className="block text-gray-600 hover:text-desa-primary hover:font-bold transition"
                  >
                    Demografi
                  </a>
                </li>
              </ul>
            </div>

            {/* Kotak Info Layanan */}
            {/* <div className="bg-desa-primary text-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-4 text-desa-accent">
                Butuh Layanan?
              </h3>
              <p className="text-sm mb-4 text-green-100">
                Hubungi perangkat desa atau datang langsung ke kantor desa pada
                jam kerja.
              </p>
              <Link
                to="/layanan" // Asumsi mengarah ke halaman layanan
                className="block text-center bg-desa-accent text-desa-primary font-bold py-2 rounded hover:bg-yellow-400 transition"
              >
                Hubungi Kami
              </Link>
            </div> */}
          </aside>

          {/* Area Konten */}
          <main className="w-full md:w-3/4">
            {/* Bagian Sejarah */}
            <div
              id="sejarah"
              className="bg-white p-8 rounded-lg shadow-sm mb-8 scroll-mt-24"
            >
              <h2 className="text-2xl font-bold text-desa-primary mb-6 border-b border-gray-200 pb-2">
                Sejarah Desa Tamang
              </h2>
              <img
                src="https://images.unsplash.com/photo-1598194917637-33eb97c83c34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Sejarah Desa"
                className="w-full h-64 object-cover rounded-lg mb-6 shadow-md"
              />
              <div className="text-gray-600 leading-relaxed space-y-4 text-justify">
                <p>
                  Desa Tamang merupakan salah satu desa tua di Kecamatan Nanga
                  Mahap yang telah berdiri sejak tahun 1950. Nama "Tamang"
                  diambil dari bahasa lokal yang berarti "Pertemuan", merujuk
                  pada letak desa yang berada di pertemuan dua sungai besar yang
                  menjadi sumber kehidupan masyarakat pada masa lampau.
                </p>
                <p>
                  Pada awalnya, Desa Tamang hanya berupa perkampungan kecil yang
                  dihuni oleh beberapa kepala keluarga. Seiring berjalannya
                  waktu, berkat semangat gotong royong dan kepemimpinan para
                  tetua adat, desa ini berkembang menjadi pusat pertanian dan
                  perdagangan lokal. Transformasi menjadi Desa Digital dimulai
                  pada tahun 2023 sebagai upaya untuk mengadaptasi teknologi
                  dalam pelayanan publik.
                </p>
              </div>
            </div>

            {/* Bagian Visi & Misi */}
            <div
              id="visi-misi"
              className="bg-white p-8 rounded-lg shadow-sm mb-8 scroll-mt-24"
            >
              <h2 className="text-2xl font-bold text-desa-primary mb-6 border-b border-gray-200 pb-2">
                Visi & Misi
              </h2>

              <div className="bg-green-50 border-l-4 border-desa-primary p-6 mb-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-desa-primary mb-2">
                  Visi
                </h3>
                <p className="text-gray-700 italic font-medium text-lg">
                  "Terwujudnya Desa Tamang yang Mandiri, Sejahtera, dan Berbasis
                  Teknologi Digital dengan Menjunjung Tinggi Nilai Budaya."
                </p>
              </div>

              <h3 className="text-xl font-bold text-desa-primary mb-4">Misi</h3>
              {/* List Misi Custom Styling menggunakan Tailwind */}
              <ul className="space-y-3 text-gray-700 leading-relaxed">
                {[
                  "Mewujudkan tata kelola pemerintahan desa yang jujur, transparan, dan akuntabel.",
                  "Meningkatkan kualitas sumber daya manusia melalui pendidikan dan pelatihan teknologi.",
                  "Mengembangkan potensi ekonomi lokal berbasis pertanian dan UMKM.",
                  "Meningkatkan pembangunan infrastruktur desa yang merata dan berkelanjutan.",
                  "Melestarikan seni dan budaya lokal sebagai identitas desa.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-desa-accent font-bold mr-3 mt-1">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bagian Geografis */}
            <div
              id="geografis"
              className="bg-white p-8 rounded-lg shadow-sm mb-8 scroll-mt-24"
            >
              <h2 className="text-2xl font-bold text-desa-primary mb-6 border-b border-gray-200 pb-2">
                Letak Geografis
              </h2>
              <p className="text-gray-600 mb-6">
                Desa Tamang terletak di wilayah dataran tinggi dengan ketinggian
                kurang lebih 300 mdpl. Kondisi ini membuat Desa Tamang memiliki
                udara yang sejuk dan tanah yang subur, sangat cocok untuk
                pertanian padi dan perkebunan karet.
              </p>

              <h3 className="font-bold text-gray-800 mb-3">Batas Wilayah</h3>
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full text-sm text-left text-gray-600">
                  <thead className="bg-gray-100 text-gray-800 uppercase">
                    <tr>
                      <th className="px-6 py-3 border-b border-gray-200">
                        Arah Mata Angin
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200">
                        Berbatasan Dengan
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { arah: "Sebelah Utara", batas: "Desa Lembah Hijau" },
                      {
                        arah: "Sebelah Selatan",
                        batas: "Kecamatan Sekadau Hilir",
                      },
                      { arah: "Sebelah Timur", batas: "Desa Sungai Deras" },
                      {
                        arah: "Sebelah Barat",
                        batas: "Hutan Lindung Bukit Bongku",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-gray-100 hover:bg-gray-50 last:border-0"
                      >
                        <td className="px-6 py-4 font-medium text-desa-primary">
                          {row.arah}
                        </td>
                        <td className="px-6 py-4">{row.batas}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bagian Peta */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-desa-primary mb-6 border-b border-gray-200 pb-2">
                Peta Wilayah
              </h2>
              <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Peta Desa"
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition duration-500"
                />
                <div className="relative z-10 text-center">
                  <p className="text-gray-800 font-bold text-xl drop-shadow-md">
                    Peta Google Maps
                  </p>
                  <button className="mt-2 px-4 py-2 bg-desa-accent text-desa-primary text-sm font-bold rounded shadow-lg hover:bg-yellow-400 transition transform hover:-translate-y-1">
                    Buka Peta Digital
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
