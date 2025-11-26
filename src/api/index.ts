// src/api/index.ts

import type { 
    VillageInfo, 
    VillageProfile, 
    NewsItem 
} from '../types'; // Mengimpor tipe dari folder types

// --- Data Dummy (Mock Data) ---

export const mockVillageInfo: VillageInfo = {
  id: 1,
  name: "Desa Makmur Jaya",
  motto: "Bersatu, Maju, Sejahtera",
  location: "Kecamatan Sehat, Kabupaten Damai, Jawa Barat",
  headman: "Bapak Budi Santoso",
  welcome_message: "Selamat datang di website resmi Desa Makmur Jaya.",
  logo_url: "/images/logo-desa.png",
  banner_images: [
    "/images/banner-1.jpg",
    "/images/banner-2.jpg",
  ],
};

export const mockVillageProfile: VillageProfile = {
  history: "Desa Makmur Jaya didirikan pada tahun 1950. ...",
  vision: "Menjadikan Desa Makmur Jaya sebagai desa percontohan...",
  mission: [
    "Meningkatkan kualitas SDM.",
    "Mengembangkan potensi pertanian.",
  ],
  government_structure: [
    { position: "Kepala Desa", name: "Bapak Budi Santoso" },
    { position: "Sekretaris Desa", name: "Ibu Siti Aisyah" },
  ],
  administrative_area: {
    dusun_count: 5,
    rw_count: 15,
    rt_count: 50,
    population: 8500,
    area_size: "12.5 km²",
    borders: {
      north: "Hutan Lindung",
      south: "Desa Sebelah",
      east: "Sungai Besar",
      west: "Jalan Provinsi",
    },
  },
  demographics: {
    age_distribution: { "0-14 tahun": 1800, "15-64 tahun": 5500, "65+ tahun": 1200 },
    religion: { Islam: 8000, Kristen: 400, Lainnya: 100 },
    occupation: { Petani: 3500, Pedagang: 1500, Pegawai_Swasta: 1000, Lainnya: 2500 },
    education: { SD: 2000, SMP: 1500, SMA: 2500, Sarjana: 1500 },
  },
};

export const mockNewsList: NewsItem[] = [
  {
    id: 101,
    title: "Panen Raya Padi Organik",
    summary: "Petani Desa Makmur Jaya berhasil memanen padi organik...",
    image_url: "/images/news-panen.jpg",
    category: "Pertanian",
    created_at: "2025-11-25T10:00:00Z",
  },
  {
    id: 102,
    title: "Sosialisasi Bantuan UMKM",
    summary: "Pemerintah Desa menyelenggarakan sosialisasi program bantuan...",
    image_url: "/images/news-umkm.jpg",
    category: "Pemerintahan",
    created_at: "2025-11-24T15:30:00Z",
  },
];


// --- Fungsi Asinkronus (Simulasi API) ---

const MOCK_DELAY = 800; // Jeda 800ms untuk simulasi loading

/**
 * Mensimulasikan GET /village
 * @returns Promise<VillageInfo>
 */
export const fetchVillageInfo = (): Promise<VillageInfo> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Mock API: Fetched Village Info");
            resolve(mockVillageInfo);
        }, MOCK_DELAY);
    });
};

/**
 * Mensimulasikan GET /village/profile
 * @returns Promise<VillageProfile>
 */
export const fetchVillageProfile = (): Promise<VillageProfile> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Mock API: Fetched Village Profile");
            resolve(mockVillageProfile);
        }, MOCK_DELAY);
    });
};

/**
 * Mensimulasikan GET /news (list)
 * @returns Promise<NewsItem[]>
 */
export const fetchNewsList = (): Promise<NewsItem[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Mock API: Fetched News List");
            resolve(mockNewsList);
        }, MOCK_DELAY);
    });
};