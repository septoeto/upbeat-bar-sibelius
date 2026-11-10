'use client';
import { useState } from 'react';

export default function InteractiveSection4() {
  const [activeImage, setActiveImage] = useState<{ src: string; title: string } | null>(null);

  // Data langkah-langkah untuk mempermudah perulangan kode
  const pickupSteps = [
    { id: '1.1', text: 'Pilih (blok) bar pertama', img: '/images/modul-4/start-with-bar 1.png' },
    { id: '1.2', text: 'Klik tab Notation - pilih menu Time Signature - More Option.', img: '/images/modul-4/start-with-bar 2.png' },
    { id: '1.2.3', text: 'Centang "Start with bar of length" - pilih jumlah ketukannya - klik OK', img: '/images/modul-4/start-with-bar 3.png' },
  ];

  const irregularSteps = [
    { id: '2.1', text: 'Pilih (blok) bar terakhir', img: '/images/modul-4/irregular-bars 1.png' },
    { id: '2.2', text: 'Klik tab Home - pilih menu Add Multiple or Irregular Bars', img: '/images/modul-4/irregular-bars 2.png' },
    { id: '2.3', text: 'Pilih Irregular - pilih jumlah ketukannya - klik OK', img: '/images/modul-4/irregular-bars 3.png' },
  ];

  return (
    <div className="space-y-8 text-slate-800">
      <div>
        <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Modul 04 • Panduan Software</span>
        <h3 className="text-xl font-extrabold text-slate-900 mt-1">Konfigurasi Istilah di Sibelius Ultimate</h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
          Panduan langkah demi langkah untuk pengaturan <strong className="text-purple-700">Pickup Bar</strong> dan <strong className="text-purple-700">Irregular Bars</strong> pada aplikasi Sibelius. Lihat pratinjau kotak kecil atau klik tombol <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded font-bold text-xs">Gambar</span> untuk memperbesar.
        </p>
      </div>

      {/* Bagian 1: Setup Pickup Bar */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-5 sm:p-6 shadow-sm space-y-4">
        <h4 className="text-xs font-extrabold uppercase tracking-widest text-purple-700">
          1. Alur Langkah Setup Pickup Bar
        </h4>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
          <strong className="text-purple-700">Pickup Bar</strong> digunakan untuk bar pertama (awal)
        </p>

        <div className="space-y-3">
          {pickupSteps.map((step) => (
            <div key={step.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-xs text-slate-700 pr-2">
                <strong className="text-slate-900 font-bold">Gambar {step.id}:</strong> {step.text}
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {/* Tombol Gambar */}
                <button
                  onClick={() => setActiveImage({ src: step.img, title: `Gambar ${step.id}: ${step.text}` })}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1.5 rounded-xl text-xs font-bold shadow transition transform active:scale-95"
                >
                  Gambar {step.id}
                </button>
                {/* Kotak Kecil Preview Review Gambar */}
                <div 
                  onClick={() => setActiveImage({ src: step.img, title: `Gambar ${step.id}: ${step.text}` })}
                  className="w-12 h-9 bg-slate-100 border border-slate-300 rounded-lg overflow-hidden cursor-pointer hover:border-purple-500 transition shadow-inner relative group"
                  title="Klik untuk memperbesar pratinjau"
                >
                  <img src={step.img} alt={`Preview ${step.id}`} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bagian 2: Setup Irregular Bars */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-5 sm:p-6 shadow-sm space-y-4">
        <h4 className="text-xs font-extrabold uppercase tracking-widest text-purple-700">
          2. Alur Langkah Setup Irregular Bars
        </h4>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
          Sedangkan <strong className="text-purple-700">Irregular Bars</strong> digunakan pada akhir lagu / bar terakhir
        </p>

        <div className="space-y-3">
          {irregularSteps.map((step) => (
            <div key={step.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-xs text-slate-700 pr-2">
                <strong className="text-slate-900 font-bold">Gambar {step.id}:</strong> {step.text}
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {/* Tombol Gambar */}
                <button
                  onClick={() => setActiveImage({ src: step.img, title: `Gambar ${step.id}: ${step.text}` })}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1.5 rounded-xl text-xs font-bold shadow transition transform active:scale-95"
                >
                  Gambar {step.id}
                </button>
                {/* Kotak Kecil Preview Review Gambar */}
                <div 
                  onClick={() => setActiveImage({ src: step.img, title: `Gambar ${step.id}: ${step.text}` })}
                  className="w-12 h-9 bg-slate-100 border border-slate-300 rounded-lg overflow-hidden cursor-pointer hover:border-purple-500 transition shadow-inner relative group"
                  title="Klik untuk memperbesar pratinjau"
                >
                  <img src={step.img} alt={`Preview ${step.id}`} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP MODAL GAMBAR PENUH */}
      {activeImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-slate-900 text-slate-100 rounded-3xl max-w-3xl w-full p-6 shadow-2xl border-2 border-purple-500/50 space-y-4 animate-scaleUp">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="font-bold text-sm sm:text-base text-purple-400">
                {activeImage.title}
              </h3>
              <button 
                onClick={() => setActiveImage(null)}
                className="text-slate-400 hover:text-white text-sm font-bold bg-slate-800 w-8 h-8 rounded-full flex items-center justify-center transition"
              >
                ✕
              </button>
            </div>
            
            {/* Wadah Gambar Ukuran Penuh */}
            <div className="bg-slate-950 rounded-2xl overflow-hidden p-2 flex items-center justify-center border border-slate-800 max-h-[70vh]">
              <img 
                src={activeImage.src} 
                alt={activeImage.title} 
                className="max-w-full max-h-[65vh] object-contain rounded-xl shadow-lg"
              />
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setActiveImage(null)}
                className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold px-5 py-2 rounded-xl transition shadow-lg"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}