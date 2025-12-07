import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Doughnut, Pie, Bar } from "react-chartjs-2";

// Registrasi Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

// Warna Tema (Konsisten dengan Tailwind v4)
const themeColors = {
  primary: "#2E7D32",
  secondary: "#81C784",
  accent: "#FFC107",
  dark: "#1B5E20",
  light: "#C8E6C9",
  gray: "#e5e7eb",
};

export default function StatisticsPage() {
  // Data Chart Pekerjaan (Doughnut)
  const pekerjaanData = {
    labels: ["Petani", "Wiraswasta", "Karyawan", "PNS/TNI", "Lainnya"],
    datasets: [
      {
        data: [45, 23, 15, 6, 11],
        backgroundColor: [
          themeColors.primary,
          themeColors.secondary,
          themeColors.accent,
          themeColors.dark,
          themeColors.gray,
        ],
        borderWidth: 0,
      },
    ],
  };

  // Data Chart Pendidikan (Pie)
  const pendidikanData = {
    labels: ["SD", "SMP", "SMA", "Diploma/Sarjana", "Tidak Sekolah"],
    datasets: [
      {
        data: [30, 25, 30, 10, 5],
        backgroundColor: [
          "#4CAF50", // Hijau standard
          "#8BC34A", // Light Green
          "#FFEB3B", // Yellow
          "#FFC107", // Amber (Accent)
          "#FF9800", // Orange
        ],
        borderWidth: 0,
      },
    ],
  };

  // Data Chart Usia (Bar)
  const usiaData = {
    labels: [
      "Balita (0-5)",
      "Anak (6-12)",
      "Remaja (13-25)",
      "Dewasa (26-50)",
      "Lansia (>50)",
    ],
    datasets: [
      {
        label: "Jumlah Penduduk",
        data: [150, 300, 450, 700, 290],
        backgroundColor: themeColors.secondary,
        hoverBackgroundColor: themeColors.accent,
        borderRadius: 5,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right" as const,
      },
    },
  };

  const barChartOptions = {
    ...chartOptions,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="font-sans bg-desa-bg text-desa-text min-h-screen">
      {/* Header Halaman Statistik */}
      <header className="bg-desa-primary py-12 text-center text-white relative overflow-hidden">
        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/diagmonds-light.png')",
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Statistik Kependudukan</h1>
          <p className="text-desa-secondary text-sm font-medium">
            Data Demografi Terbaru Tahun 2025
          </p>
        </div>
      </header>

      {/* Konten Utama */}
      <section className="container mx-auto px-4 py-12 -mt-16 relative z-20">
        {/* Ringkasan Angka (Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Card 1: Total Penduduk */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-b-4 border-desa-accent flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">
                Total Penduduk
              </p>
              <h3 className="text-3xl font-bold text-desa-primary">1.890</h3>
              <p className="text-xs text-green-600 mt-1 font-semibold">
                ↑ 2.5% dari 2024
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-full text-desa-primary">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </div>

          {/* Card 2: Kepala Keluarga */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-b-4 border-desa-primary flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">
                Kepala Keluarga
              </p>
              <h3 className="text-3xl font-bold text-gray-800">436</h3>
              <p className="text-xs text-gray-400 mt-1">Total KK</p>
            </div>
            <div className="bg-green-50 p-3 rounded-full text-desa-primary">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
          </div>

          {/* Card 3: Laki-Laki */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-b-4 border-blue-500 flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Laki-Laki</p>
              <h3 className="text-3xl font-bold text-gray-800">930</h3>
              <p className="text-xs text-gray-400 mt-1">49.2%</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full text-blue-600">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </div>

          {/* Card 4: Perempuan */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-b-4 border-pink-500 flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Perempuan</p>
              <h3 className="text-3xl font-bold text-gray-800">960</h3>
              <p className="text-xs text-gray-400 mt-1">50.8%</p>
            </div>
            <div className="bg-pink-100 p-3 rounded-full text-pink-500">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Charts: Pekerjaan & Pendidikan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-lg font-bold text-desa-primary mb-4 border-l-4 border-desa-accent pl-2">
              Mata Pencaharian
            </h3>
            <div className="relative h-64 w-full">
              <Doughnut data={pekerjaanData} options={chartOptions} />
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Mayoritas penduduk bekerja di sektor Pertanian & Perkebunan.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-lg font-bold text-desa-primary mb-4 border-l-4 border-desa-accent pl-2">
              Tingkat Pendidikan
            </h3>
            <div className="relative h-64 w-full">
              <Pie data={pendidikanData} options={chartOptions} />
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Data berdasarkan ijazah terakhir yang dimiliki.
            </p>
          </div>
        </div>

        {/* Chart: Kelompok Usia */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-10 border border-gray-100">
          <h3 className="text-lg font-bold text-desa-primary mb-4 border-l-4 border-desa-accent pl-2">
            Kelompok Usia
          </h3>
          <div className="relative h-72 w-full">
            <Bar data={usiaData} options={barChartOptions} />
          </div>
        </div>

        {/* Tabel Rincian Data Pekerjaan */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div className="p-6 bg-desa-primary text-white">
            <h3 className="text-lg font-bold">Rincian Data Pekerjaan</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th className="px-6 py-3 border-b border-gray-200">
                    Jenis Pekerjaan
                  </th>
                  <th className="px-6 py-3 text-center border-b border-gray-200">
                    Jumlah (Jiwa)
                  </th>
                  <th className="px-6 py-3 text-center border-b border-gray-200">
                    Persentase
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Petani / Pekebun", count: 850, percent: "45%" },
                  {
                    label: "Wiraswasta / Pedagang",
                    count: 450,
                    percent: "23.8%",
                  },
                  { label: "Pegawai Swasta", count: 300, percent: "15.8%" },
                  { label: "PNS / TNI / POLRI", count: 120, percent: "6.3%" },
                  {
                    label: "Belum / Tidak Bekerja",
                    count: 170,
                    percent: "9%",
                  },
                ].map((row, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {row.label}
                    </td>
                    <td className="px-6 py-4 text-center">{row.count}</td>
                    <td className="px-6 py-4 text-center">{row.percent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
