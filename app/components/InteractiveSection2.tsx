'use client';
import { useState } from 'react';

export default function InteractiveSection2() {
  const [activeCard, setActiveCard] = useState<{ title: string; subtitle: string; content: string[] } | null>(null);

  // Data materi Modul 02
  const cardMaterials = [
    {
      id: 'pengertian',
      title: 'Pengertian',
      subtitle: 'Definisi Dasar Pickup Bar & Irregular Bars',
      summary: 'Mengenal konsep dasar birama gantung dan penyesuaian birama dalam penulisan partitur digital.',
      content: [
        'Pickup Bar (Upbeat / Anacrusis) adalah birama tidak penuh yang terletak di awal sebuah karya musik sebelum birama penuh pertama dimulai.',
        'Birama ini biasanya berisi ketukan sisa dari birama penutup lagu.',
        'Irregular Bars adalah birama yang memiliki jumlah ketukan tidak biasa atau berbeda dari tanda birama (time signature) utama lagu, sering ditemui di bagian akhir lagu (kadens).'
      ]
    },
    {
      id: 'mengapa',
      title: 'Mengapa Menggunakannya',
      subtitle: 'Fungsi Penting dalam Penulisan Partitur',
      summary: 'Alasan teknis dan estetika mengapa fitur ini wajib dikuasai saat menyusun partitur.',
      content: [
        'Kesesuaian Ritmis: Banyak lagu nasional atau populer tidak dimulai tepat pada ketukan pertama (downbeat), melainkan mendahuluinya.',
        'Standar Industri Musik: Software seperti Sibelius Ultimate memerlukan pengaturan ini agar pemutaran suara (playback) dan perhitungan birama otomatis tetap akurat.',
        'Kerapian Partitur: Membantu musisi atau siswa membaca partitur sesuai dengan kaidah penulisan musik standar internasional.'
      ]
    },
    {
      id: 'ciri',
      title: 'Ciri-ciri Utama',
      subtitle: 'Karakteristik Fisik pada Lembar Kerja',
      summary: 'Ciri khas yang menandakan sebuah partitur menggunakan birama gantung atau irregular.',
      content: [
        'Jumlah ketukan pada bar pertama lebih sedikit daripada nilai ketukan standar pada Time Signature lagu (misalnya lagu 4/4 tapi bar pertama hanya berisi 1 ketukan).',
        'Garis bar (barline) pertama terkadang digambar dengan penyesuaian khusus.',
        'Pada bar terakhir lagu, seringkali dijumpai kekurangan atau kelebihan ketukan yang harus diatasi dengan Irregular Bar.'
      ]
    }
  ];

  return (
    <section className="bg-white rounded-xl shadow-md p-6 border border-slate-200 transition-all duration-700 hover:shadow-xl space-y-4">
      <div className="border-b pb-3">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
          <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm shadow">2</span>
          Konsep Dasar & Teori Materi
        </h2>
        <p className="text-slate-600 mt-2 text-sm">
          Klik pada masing-masing kartu materi di bawah ini untuk melihat penjabaran lengkap secara penuh (Zoom Full Halaman):
        </p>
      </div>

      {/* Grid Kartu Materi */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {cardMaterials.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveCard(item)}
            className="bg-slate-50 border border-slate-200 hover:border-purple-500 hover:bg-purple-50/20 rounded-2xl p-5 cursor-pointer transition-all duration-700 shadow-sm hover:shadow-md flex flex-col justify-between group"
          >
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-600 bg-purple-100 px-2.5 py-1 rounded-full">
                Materi Modul
              </span>
              <h3 className="text-lg font-bold text-slate-800 mt-3 group-hover:text-purple-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {item.summary}
              </p>
            </div>
            
            <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-purple-600">
              <span>Buka Materi Penuh</span>
              <span className="transform group-hover:translate-x-1 transition-transform">↗</span>
            </div>
          </div>
        ))}
      </div>

      {/* POPUP MODAL FULL HALAMAN DENGAN TOMBOL KEMBALI */}
      {activeCard && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div className="bg-white rounded-3xl w-full max-w-4xl h-[92vh] p-6 sm:p-8 shadow-2xl border border-purple-200 flex flex-col justify-between animate-scaleUp">
            
            {/* Header Modal dengan Tombol Kembali */}
            <div className="flex justify-between items-center border-b border-slate-200 pb-4">
              <div className="flex items-center gap-3">
                {/* TOMBOL KEMBALI */}
                <button
                  onClick={() => setActiveCard(null)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 transition shadow-sm"
                >
                  ← Kembali
                </button>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-600">Detail Materi</span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">{activeCard.title}</h3>
                </div>
              </div>

              {/* Tombol Silang (Tutup) */}
              <button
                onClick={() => setActiveCard(null)}
                className="text-slate-400 hover:text-red-600 text-sm font-bold bg-slate-100 hover:bg-red-50 w-9 h-9 rounded-full flex items-center justify-center transition"
                title="Tutup"
              >
                ✕
              </button>
            </div>

            {/* Isi Konten Full Halaman */}
            <div className="flex-1 overflow-y-auto py-6 space-y-6 px-2">
              <div className="bg-purple-50/60 border border-purple-100 rounded-2xl p-4 sm:p-5">
                <h4 className="text-sm font-bold text-purple-900 uppercase tracking-wide">Ringkasan Konsep</h4>
                <p className="text-sm text-slate-700 mt-1 leading-relaxed">{activeCard.subtitle}</p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Penjelasan Mendalam:</h4>
                <ul className="space-y-3">
                  {activeCard.content.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 bg-slate-50 border border-slate-200/80 p-4 rounded-2xl text-xs sm:text-sm text-slate-700 leading-relaxed shadow-sm">
                      <span className="bg-purple-600 text-white font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs mt-0.5">
                        {index + 1}
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Modal dengan Tombol Kembali */}
            <div className="border-t border-slate-200 pt-4 flex justify-between items-center">
              <span className="text-xs text-slate-400">Materi Pembelajaran Komputer Musik • Sibelius Ultimate</span>
              <button
                onClick={() => setActiveCard(null)}
                className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold px-6 py-2.5 rounded-xl transition shadow-md"
              >
                Kembali ke Modul
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}