import { useState } from "react";

// Tipe data untuk item galeri
type GalleryItem = {
  id: number;
  image: string;
  title: string;
  category: "kegiatan" | "alam" | "pembangunan";
};

// Data Galeri Dummy
const galleryData: GalleryItem[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5fa5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Musyawarah Desa",
    category: "kegiatan",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Hamparan Sawah",
    category: "alam",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1595843475765-7206fa10c953?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Pengerjaan Jembatan",
    category: "pembangunan",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Gotong Royong",
    category: "kegiatan",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Curug Kembar",
    category: "alam",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1465565568582-7e742517865f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Gedung Posyandu Baru",
    category: "pembangunan",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Panen Raya",
    category: "kegiatan",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Bukit Senja",
    category: "alam",
  },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Filter logika
  const filteredItems =
    filter === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === filter);

  // Fungsi styling tombol filter
  const getFilterBtnClass = (category: string) => {
    return filter === category
      ? "px-6 py-2 rounded-full text-sm font-bold shadow-md transition transform scale-105 bg-desa-primary text-white ring-2 ring-desa-primary"
      : "px-6 py-2 rounded-full text-sm font-bold shadow-md transition transform hover:scale-105 bg-white text-gray-600 hover:text-desa-primary";
  };

  return (
    <div className="font-sans bg-desa-bg text-desa-text min-h-screen">
      {/* Header Galeri */}
      <header className="bg-desa-primary py-12 text-center text-white relative overflow-hidden">
        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/cubes.png')",
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Galeri Desa</h1>
          <p className="text-desa-secondary text-sm">
            Dokumentasi kegiatan, potensi alam, dan pembangunan desa.
          </p>
        </div>
      </header>

      {/* Konten Utama */}
      <section className="container mx-auto px-4 py-12">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            onClick={() => setFilter("all")}
            className={getFilterBtnClass("all")}
          >
            Semua
          </button>
          <button
            onClick={() => setFilter("kegiatan")}
            className={getFilterBtnClass("kegiatan")}
          >
            Kegiatan Warga
          </button>
          <button
            onClick={() => setFilter("alam")}
            className={getFilterBtnClass("alam")}
          >
            Wisata & Alam
          </button>
          <button
            onClick={() => setFilter("pembangunan")}
            className={getFilterBtnClass("pembangunan")}
          >
            Pembangunan
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer h-64 animate-fadeIn"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 text-white text-center p-2 transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-xs text-desa-accent capitalize">
                    {item.category === "alam"
                      ? "Wisata & Alam"
                      : item.category === "kegiatan"
                      ? "Kegiatan Warga"
                      : "Pembangunan"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-desa-primary mb-8 border-l-4 border-desa-accent pl-4">
            Video Profil Desa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe
                  className="w-full h-64 rounded-lg"
                  src="https://www.youtube.com/embed/ScMzIvxBSi4"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="font-bold text-lg">Profil Desa Tamang 2025</h3>
              <p className="text-sm text-gray-500">
                Video selayang pandang potensi dan keindahan Desa Tamang.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe
                  className="w-full h-64 rounded-lg"
                  src="https://www.youtube.com/embed/LXb3EKWsInQ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="font-bold text-lg">Dokumentasi HUT RI Ke-80</h3>
              <p className="text-sm text-gray-500">
                Keseruan lomba dan pawai budaya masyarakat desa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal (Lightbox) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-4xl hover:text-desa-accent focus:outline-none"
          >
            &times;
          </button>

          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside content
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl border-2 border-white"
            />
            <h3 className="text-white text-center text-xl font-bold mt-4">
              {selectedImage.title}
            </h3>
            <p className="text-desa-accent text-center text-sm uppercase tracking-wide">
              {selectedImage.category}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
