import {create} from 'zustand';
import axios from 'axios';
import type { VillageInfo, VillageProfile } from '@/types'; // Import tipe data

// Tentukan 'base URL' API Anda. Ganti dengan URL API Anda yang sebenarnya.
const API_BASE_URL = 'https://api.desa-sukamaju.go.id'; // Ganti ini

// Definisikan tipe untuk state kita
interface VillageState {
  info: VillageInfo | null;
  profile: VillageProfile | null;
  isLoading: boolean;
  error: string | null;
  fetchVillageData: () => Promise<void>; // Fungsi untuk mengambil data
}

export const useVillageStore = create<VillageState>((set) => ({
  // Nilai awal
  info: null,
  profile: null,
  isLoading: false,
  error: null,

  // Action untuk mengambil data
  fetchVillageData: async () => {
    set({ isLoading: true, error: null }); // Mulai loading [cite: 46]
    try {
      // Panggil 2 API sekaligus
      const [infoResponse, profileResponse] = await Promise.all([
        axios.get(`${API_BASE_URL}/village`),
        axios.get(`${API_BASE_URL}/village/profile`)
      ]);

      // Simpan data ke state
      set({
        info: infoResponse.data,
        profile: profileResponse.data,
        isLoading: false
      });
      
    } catch (err) {
      console.error("Gagal mengambil data desa:", err);
      // Simpan state error [cite: 47]
      set({ isLoading: false, error: 'Gagal memuat data desa.' });
    }
  },
}));