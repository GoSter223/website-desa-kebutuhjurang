import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import NewsPage from "./pages/NewsPage";
import TourismPage from "./pages/TourismPage";
import PotentialPage from "./pages/PotentialPage";
import StatisticsPage from "./pages/StatisticsPage";
import GalleryPage from "./pages/GalleryPage";
import { useVillageStore } from "./store/useVillageStore";
import { useEffect } from "react";

function App() {
  // Ambil fungsi fetch dari store Zustand
  const fetchVillageData = useVillageStore((state) => state.fetchVillageData);

  // Panggil data global sekali saat aplikasi dimuat
  useEffect(() => {
    fetchVillageData();
  }, [fetchVillageData]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Gunakan MainLayout sebagai "pembungkus" halaman */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="profil" element={<ProfilePage />} />
          <Route path="berita" element={<NewsPage />} />
          <Route path="wisata" element={<TourismPage />} />
          <Route path="potensi" element={<PotentialPage />} />
          <Route path="statistik" element={<StatisticsPage />} />
          <Route path="galeri" element={<GalleryPage />} />
          {/* Tambahkan rute lain (berita, potensi) di sini nanti */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
