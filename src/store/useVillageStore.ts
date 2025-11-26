// import {create} from 'zustand';
// import axios from 'axios';
// import type { VillageInfo, VillageProfile } from '@/types'; // Import tipe data

// // Tentukan 'base URL' API Anda. Ganti dengan URL API Anda yang sebenarnya.
// const API_BASE_URL = 'https://api.desa-sukamaju.go.id'; // Ganti ini

// // Definisikan tipe untuk state kita
// interface VillageState {
//   info: VillageInfo | null;
//   profile: VillageProfile | null;
//   isLoading: boolean;
//   error: string | null;
//   fetchVillageData: () => Promise<void>; // Fungsi untuk mengambil data
// }

// export const useVillageStore = create<VillageState>((set) => ({
//   // Nilai awal
//   info: null,
//   profile: null,
//   isLoading: false,
//   error: null,

//   // Action untuk mengambil data
//   fetchVillageData: async () => {
//     set({ isLoading: true, error: null }); // Mulai loading [cite: 46]
//     try {
//       // Panggil 2 API sekaligus
//       const [infoResponse, profileResponse] = await Promise.all([
//         axios.get(`${API_BASE_URL}/village`),
//         axios.get(`${API_BASE_URL}/village/profile`)
//       ]);

//       // Simpan data ke state
//       set({
//         info: infoResponse.data,
//         profile: profileResponse.data,
//         isLoading: false
//       });
      
//     } catch (err) {
//       console.error("Gagal mengambil data desa:", err);
//       // Simpan state error [cite: 47]
//       set({ isLoading: false, error: 'Gagal memuat data desa.' });
//     }
//   },
// }));

// Ganti dengan path yang benar ke file API Anda
import { fetchVillageInfo, fetchVillageProfile } from '../api'; 
import { create } from 'zustand';
import type { VillageInfo, VillageProfile } from '@/types'; 

// Hapus import axios, karena kita tidak akan menggunakannya untuk mock data.

// Tipe untuk state kita
interface VillageState {
  info: VillageInfo | null;
  profile: VillageProfile | null;
  isLoading: boolean;
  error: string | null;
  fetchVillageData: () => Promise<void>; 
}

export const useVillageStore = create<VillageState>((set) => ({
  // Nilai awal
  info: null,
  profile: null,
  isLoading: false,
  error: null,

  // Action untuk mengambil data
  fetchVillageData: async () => {
    set({ isLoading: true, error: null }); 
    try {
      // GANTI: Menggunakan fungsi MOCK API dari '../api'
      // Fungsi mock API ini akan mengembalikan data dummy setelah jeda waktu (simulasi loading)
      const [infoData, profileData] = await Promise.all([
        fetchVillageInfo(),      // Panggil fungsi mock
        fetchVillageProfile()    // Panggil fungsi mock
      ]);

      // Simpan data ke state
      set({
        info: infoData,      // Langsung gunakan data yang dikembalikan oleh promise
        profile: profileData, // Langsung gunakan data yang dikembalikan oleh promise
        isLoading: false
      });
      
    } catch (err) {
      // Catch ini akan menangkap error hanya jika mock API gagal (jarang terjadi)
      console.error("Gagal mengambil data desa (Mock):", err);
      set({ isLoading: false, error: 'Gagal memuat data desa (Mock Error).' });
    }
  },
}));

// CATATAN PENTING: Jika API sungguhan sudah siap, Anda tinggal mengganti
// 'fetchVillageInfo()' dengan 'axios.get(`${API_BASE_URL}/village`).then(res => res.data)'