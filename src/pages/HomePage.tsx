import { useEffect, useState } from "react";
import axios from "axios";
import { useVillageStore } from "@/store/useVillageStore";
import type { NewsItem } from "@/types";
import { Link } from "react-router-dom";

// Import komponen ShadCN
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Ganti dengan URL API Anda
const API_BASE_URL = "https://api.desa-sukamaju.go.id";

export default function HomePage() {
  // 1. Ambil data global dari Zustand
  const {
    info,
    isLoading: isVillageLoading,
    error: villageError,
  } = useVillageStore();

  // 2. State lokal untuk data berita
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isNewsLoading, setIsNewsLoading] = useState(false);
  const [newsError, setNewsError] = useState<string | null>(null);

  // 3. Fetch data berita (lokal)
  useEffect(() => {
    const fetchNews = async () => {
      setIsNewsLoading(true); // [cite: 46]
      setNewsError(null);
      try {
        const response = await axios.get(`${API_BASE_URL}/news?limit=3`); // Ambil 3 berita terbaru
        setNews(response.data);
      } catch (err) {
        setNewsError("Gagal memuat berita."); // [cite: 47]
      } finally {
        setIsNewsLoading(false);
      }
    };
    fetchNews();
  }, []);

  // Tampilkan loading global
  if (isVillageLoading) {
    return <div className="container py-8">Memuat data desa...</div>;
  }

  // Tampilkan error global [cite: 47]
  if (villageError) {
    return <div className="container py-8 text-red-600">{villageError}</div>;
  }

  // Tampilkan jika data tidak ada
  if (!info) {
    return <div className="container py-8">Data desa tidak ditemukan.</div>;
  }

  return (
    <div>
      {/* Bagian 1: Banner/Slider [cite: 22] */}
      <section className="w-full">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {info.banner_images.map((url, index) => (
              <CarouselItem key={index}>
                <div className="h-[300px] md:h-[500px]">
                  <img
                    src={url}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-16" />
          <CarouselNext className="mr-16" />
        </Carousel>
      </section>

      {/* Bagian 2: Sambutan Kepala Desa [cite: 23] */}
      <section className="container py-12 md:py-20">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <img
              src={info.logo_url}
              alt="Logo Desa"
              className="w-48 h-48 mx-auto object-contain"
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-4">Sambutan Kepala Desa</h2>
            <p className="text-lg text-muted-foreground mb-4">
              "{info.welcome_message}"
            </p>
            <p className="font-semibold">{info.headman}</p>
            <p className="text-sm text-muted-foreground">Kepala {info.name}</p>
          </div>
        </div>
      </section>

      {/* Bagian 3: Sekilas Tentang Desa [cite: 24] */}
      <section className="bg-muted py-12 md:py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-2">
            Sekilas Tentang {info.name}
          </h2>
          <p className="text-xl text-muted-foreground mb-4">"{info.motto}"</p>
          <p className="max-w-2xl mx-auto mb-8">{info.location}</p>
          <Button asChild>
            <Link to="/profil">Lihat Profil Lengkap</Link>
          </Button>
        </div>
      </section>

      {/* Bagian 4: Highlight Berita Terbaru  */}
      <section className="container py-12 md:py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Berita Terbaru</h2>
        {isNewsLoading && <p>Memuat berita...</p>}
        {newsError && <p className="text-red-600">{newsError}</p>}
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <span className="text-sm text-muted-foreground">
                  {item.category}
                </span>
                <CardTitle className="text-lg font-semibold mt-2 mb-2 line-clamp-2">
                  {item.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {item.summary}
                </p>
                <Button variant="link" asChild className="p-0 mt-4">
                  {/* Nanti ini akan diarahkan ke /berita/{item.id} */}
                  <Link to="#">Baca Selengkapnya</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
