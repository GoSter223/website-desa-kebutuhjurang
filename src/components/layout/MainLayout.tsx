import { useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

export function MainLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Daftar menu agar kodenya lebih rapi dan mudah diatur
  const navItems = [
    { label: "Beranda", path: "/" },
    { label: "Profil", path: "/profil" },
    { label: "Berita", path: "/berita" },
    { label: "Wisata", path: "/wisata" },
    { label: "Potensi", path: "/potensi" },
    { label: "Statistik", path: "/statistik" },
    { label: "Galeri", path: "/galeri" },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Navbar */}
      <nav className="bg-desa-primary text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo & Judul */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-desa-primary font-bold text-xl group-hover:bg-desa-accent transition duration-300">
              D
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">DESA TAMANG</h1>
              <p className="text-xs text-desa-secondary text-opacity-80 group-hover:text-desa-accent transition duration-300">
                Kabupaten Sekadau
              </p>
            </div>
          </Link>

          {/* Menu Desktop */}
          <ul className="hidden md:flex space-x-6 font-medium text-sm items-center">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  // Logic styling: Jika aktif pakai warna accent & border bawah, jika tidak putih biasa
                  className={({ isActive }) =>
                    isActive
                      ? "text-desa-accent border-b-2 border-desa-accent pb-1 font-bold transition-all duration-300"
                      : "text-white hover:text-desa-accent hover:border-b-2 hover:border-desa-accent/50 pb-1 transition-all duration-300"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            {/* Tombol Masuk (Biasanya dipisah styling-nya agar lebih menonjol) */}
            <li>
              <Link
                to="/login"
                className="px-4 py-2 bg-desa-accent text-desa-primary font-bold rounded hover:bg-yellow-400 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Masuk
              </Link>
            </li>
          </ul>

          {/* Tombol Mobile Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none hover:text-desa-accent transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-desa-primary border-t border-desa-accent">
            <ul className="flex flex-col space-y-0">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-3 text-white font-bold border-l-4 border-desa-accent bg-opacity-10 bg-desa-accent"
                        : "block px-4 py-3 text-white hover:text-desa-accent hover:bg-opacity-10 hover:bg-desa-accent border-l-4 border-transparent transition"
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="border-t border-desa-accent">
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-desa-accent font-bold hover:bg-opacity-10 hover:bg-desa-accent transition"
                >
                  Masuk
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Konten Halaman */}
      <main className="flex-1 bg-desa-bg text-desa-text">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 border-t-4 border-desa-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Kolom 1: Identitas */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-desa-accent rounded-full flex items-center justify-center text-gray-800 font-bold">
                  D
                </div>
                <h3 className="text-xl font-bold">Desa Tamang</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Website resmi Desa Tamang, Kecamatan Nanga Mahap, Kabupaten
                Sekadau. Media informasi dan pelayanan publik digital untuk
                masyarakat.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-desa-accent">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-desa-accent">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Kolom 2: Kontak */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">Kontak Kami</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start">
                  <span className="mr-2 text-desa-accent">📍</span> Jl. Raya
                  Desa Tamang No. 1
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-desa-accent">📞</span>{" "}
                  0812-3456-7890
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-desa-accent">📧</span>{" "}
                  admin@desatamang.id
                </li>
              </ul>
            </div>

            {/* Kolom 3: Jam Layanan */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">
                Jam Pelayanan
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex justify-between">
                  <span>Senin - Kamis</span> <span>08.00 - 15.00</span>
                </li>
                <li className="flex justify-between">
                  <span>Jumat</span> <span>08.00 - 11.00</span>
                </li>
                <li className="flex justify-between text-desa-accent">
                  <span>Sabtu - Minggu</span> <span>Tutup</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Pemerintah Desa Tamang. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
