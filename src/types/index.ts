// Tipe untuk GET /village [cite: 52-65]
export interface VillageInfo {
  id: number;
  name: string;
  motto: string;
  location: string;
  headman: string;
  welcome_message: string;
  logo_url: string;
  banner_images: string[];
}

// Tipe untuk GET /village/profile [cite: 67-100]
export interface VillageProfile {
  history: string;
  vision: string;
  mission: string[];
  government_structure: { position: string; name: string }[];
  administrative_area: {
    dusun_count: number;
    rw_count: number;
    rt_count: number;
    population: number;
    area_size: string;
    borders: { north: string; south: string; east: string; west: string };
  };
  demographics: {
    age_distribution: Record<string, number>;
    religion: Record<string, number>;
    occupation: Record<string, number>;
    education: Record<string, number>;
  };
}

// Tipe untuk GET /news (list) [cite: 102-119]
export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  image_url: string;
  category: string;
  created_at: string;
}