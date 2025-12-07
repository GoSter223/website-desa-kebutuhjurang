import { useVillageStore } from "@/store/useVillageStore";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"; // Untuk grafik [cite: 32]

// Import komponen ShadCN
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  const demographyData = {
    age: Object.keys(profile.demographics.age_distribution).map((key) => ({
      name: key,
      total: profile.demographics.age_distribution[key],
    })),
    religion: Object.keys(profile.demographics.religion).map((key) => ({
      name: key,
      total: profile.demographics.religion[key],
    })),
    occupation: Object.keys(profile.demographics.occupation).map((key) => ({
      name: key,
      total: profile.demographics.occupation[key],
    })),
  };

  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Profil Desa</h1>

      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="w-full max-w-4xl mx-auto"
      >
        {/* Sejarah Desa [cite: 28] */}
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl font-semibold">
            Sejarah Desa
          </AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground py-4">
            {profile.history}
          </AccordionContent>
        </AccordionItem>

        {/* Visi dan Misi [cite: 29] */}
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-2xl font-semibold">
            Visi dan Misi
          </AccordionTrigger>
          <AccordionContent className="py-4">
            <h3 className="text-xl font-semibold mb-2">Visi</h3>
            <p className="text-base text-muted-foreground mb-4">
              "{profile.vision}"
            </p>

            <h3 className="text-xl font-semibold mb-2">Misi</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              {profile.mission.map((m, index) => (
                <li key={index}>{m}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Struktur Pemerintahan [cite: 30] */}
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-2xl font-semibold">
            Struktur Pemerintahan
          </AccordionTrigger>
          <AccordionContent className="py-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Jabatan</TableHead>
                  <TableHead>Nama Pejabat</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {profile.government_structure.map((item) => (
                  <TableRow key={item.position}>
                    <TableCell className="font-medium">
                      {item.position}
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>

        {/* Wilayah & Demografi [cite: 31, 32] */}
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-2xl font-semibold">
            Wilayah & Demografi
          </AccordionTrigger>
          <AccordionContent className="py-4 space-y-8">
            {/* Wilayah Administratif [cite: 31] */}
            <Card>
              <CardHeader>
                <CardTitle>Wilayah Administratif</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Jumlah Penduduk: {profile.administrative_area.population}{" "}
                    jiwa
                  </li>
                  <li>Luas Wilayah: {profile.administrative_area.area_size}</li>
                  <li>
                    Batas Wilayah:
                    <ul className="list-circle pl-5">
                      <li>
                        Utara: {profile.administrative_area.borders.north}
                      </li>
                      <li>
                        Selatan: {profile.administrative_area.borders.south}
                      </li>
                      <li>Timur: {profile.administrative_area.borders.east}</li>
                      <li>Barat: {profile.administrative_area.borders.west}</li>
                    </ul>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Demografi - Grafik [cite: 32] */}
            <Card>
              <CardHeader>
                <CardTitle>Demografi - Usia</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={demographyData.age}>
                    <XAxis dataKey="name" fontSize={12} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="total" fill="#8884d8" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Demografi - Pekerjaan</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={demographyData.occupation}>
                    <XAxis dataKey="name" fontSize={12} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="total" fill="#82ca9d" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
