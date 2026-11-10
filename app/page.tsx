'use client';
import { useState } from 'react';
import HeaderTitle from './components/HeaderTitle';
import InteractiveSection1 from './components/InteractiveSection1';
import InteractiveSection2 from './components/InteractiveSection2';
import InteractiveSection3 from './components/InteractiveSection3';
import InteractiveSection4 from './components/InteractiveSection4';

export default function Home() {
  const [selectedSlide, setSelectedSlide] = useState<number | null>(null);
  const [themeMode, setThemeMode] = useState<'purple' | 'midnight' | 'emerald'>('purple');
  const [showModal, setShowModal] = useState<boolean>(false);
  const totalSlides = 4;

  const slidesData = [
    { id: 1, title: '1. Pertanyaan Pemantik', sub: 'Audio & Analisis Awal', desc: 'Analisis ketukan awal lagu dan logika matematika birama.' },
    { id: 2, title: '2. Konsep Birama Gantung', sub: 'Teori & Ciri-Ciri', desc: 'Pengertian Upbeat/Anacrusis dan alasan penggunaannya.' },
    { id: 3, title: '3. Contoh Lagu Nasional', sub: 'Partitur Interaktif', desc: 'Eksplorasi potongan partitur lagu nasional ber-upbeat.' },
    { id: 4, title: '4. Istilah di Sibelius', sub: 'Pickup & Irregular Bars', desc: 'Panduan konfigurasi menu aplikasi Sibelius Ultimate.' },
  ];

  const getThemeBackground = () => {
    if (themeMode === 'midnight') return 'bg-gradient-to-br from-slate-950 via-zinc-900 to-slate-900 text-slate-100';
    if (themeMode === 'emerald') return 'bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-900 text-emerald-50';
    return 'bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-slate-100';
  };

  return (
    <main className={`min-h-screen py-6 px-4 sm:px-6 flex flex-col justify-between transition-all duration-700 ${getThemeBackground()}`}>
      <div className="max-w-6xl mx-auto w-full space-y-6">

        {/* KONDISI 1: HALAMAN UTAMA */}
        {selectedSlide === null ? (
          <div className="space-y-6 transition-all duration-700 ease-out transform animate-[fadeIn_0.8s_ease-out]">
            
            {/* Bar Kontrol Atas */}
            <div className="flex flex-wrap justify-between items-center bg-slate-800/60 backdrop-blur-md px-4 py-3 rounded-2xl border border-slate-700/80 shadow-xl transition-all duration-500 hover:shadow-purple-500/10">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-slate-400">Pilih Tema Tampilan:</span>
                <button 
                  onClick={() => setThemeMode('purple')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all transform hover:scale-105 active:scale-95 ${themeMode === 'purple' ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/50' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}
                >
                  Ungu Sibelius
                </button>
                <button 
                  onClick={() => setThemeMode('midnight')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all transform hover:scale-105 active:scale-95 ${themeMode === 'midnight' ? 'bg-zinc-700 text-white shadow-lg border border-zinc-500' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}
                >
                  Midnight Dark
                </button>
                <button 
                  onClick={() => setThemeMode('emerald')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all transform hover:scale-105 active:scale-95 ${themeMode === 'emerald' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/50' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}
                >
                  Emerald Studio
                </button>
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-1.5 rounded-xl text-xs font-bold shadow-xl transition-all transform hover:scale-110 active:scale-95 flex items-center gap-1.5 animate-bounce"
              >
                <span>💡</span> Panduan Penggunaan
              </button>
            </div>

            {/* Header Khas Sibelius */}
            <HeaderTitle />

            {/* Grid Card Menu Utama */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
              {slidesData.map((slide) => (
                <div
                  key={slide.id}
                  onClick={() => setSelectedSlide(slide.id)}
                  className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/80 hover:border-purple-400 rounded-3xl p-6 shadow-2xl cursor-pointer transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-purple-500/30 group relative overflow-hidden"
                >
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl group-hover:bg-purple-400/40 transition-all duration-500 pointer-events-none" />
                  <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-b from-purple-500 to-indigo-600 group-hover:w-3 transition-all" />
                  
                  <div className="pl-3 relative z-10">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400">
                      Modul Pembelajaran 0{slide.id}
                    </span>
                    <h3 className="text-lg font-extrabold text-white mt-1 group-hover:text-purple-300 transition-colors">
                      {slide.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {slide.desc}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs font-bold text-purple-400 group-hover:text-amber-300 transition-colors">
                      <span>Buka Materi</span>
                      <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ) : (

          /* KONDISI 2: KETIKA SLIDE DIBUKA (FULLSCREEN) */
          <div className="bg-white text-slate-900 rounded-3xl shadow-2xl p-6 sm:p-8 border-4 border-purple-500/40 space-y-6 transition-all duration-700 transform animate-[scaleUp_0.5s_cubic-bezier(0.16,1,0.3,1)]">
            
            {/* Bar Navigasi Atas Fullscreen */}
            <div className="flex justify-between items-center border-b border-slate-200 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-purple-600">
                  ⚡ Mode Presentasi • Slide {selectedSlide} dari {totalSlides}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800 mt-0.5">
                  {slidesData[selectedSlide - 1].title}
                </h2>
              </div>

              {/* Tombol Kembali ke Menu Utama */}
              <button
                onClick={() => setSelectedSlide(null)}
                className="bg-slate-900 hover:bg-purple-700 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>←</span> Kembali ke Menu Utama
              </button>
            </div>

            {/* Konten Materi Slide Aktif */}
            <div className="transition-all duration-700 ease-out transform animate-[fadeIn_0.6s_ease-in-out]">
              {selectedSlide === 1 && <InteractiveSection1 />}
              {selectedSlide === 2 && <InteractiveSection2 />}
              {selectedSlide === 3 && <InteractiveSection3 />}
              {selectedSlide === 4 && <InteractiveSection4 />}
            </div>

          </div>
        )}

      </div>

      {/* POPUP MODAL PANDUAN GURU */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-all duration-500 animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-slate-900 text-slate-100 rounded-3xl max-w-md w-full p-6 shadow-2xl border-2 border-purple-500/50 space-y-4 transform transition-all animate-[scaleUp_0.4s_cubic-bezier(0.175,0.885,0.32,1.275)]">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="font-bold text-base text-purple-400 flex items-center gap-2">
                <span>📌</span> Panduan Animasi &amp; Fullscreen
              </h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-white text-sm font-bold bg-slate-800 w-8 h-8 rounded-full flex items-center justify-center transition transform hover:rotate-90 duration-300"
              >
                ✕
              </button>
            </div>
            
            <div className="text-xs text-slate-300 space-y-2 leading-relaxed">
              <p>1. Klik card materi di menu utama untuk masuk ke tampilan <strong className="text-amber-400">Fullscreen Zoom</strong> dengan animasi transisi yang mulus.</p>
              <p>2. Gunakan tombol <strong className="text-purple-300">Kembali ke Menu Utama</strong> di pojok kanan atas untuk memilih modul lainnya.</p>
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setShowModal(false)}
                className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold px-5 py-2 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-purple-900/50"
              >
                Mengerti, Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center text-xs text-slate-500 py-4 mt-8 border-t border-slate-800/80">
        Media Presentasi Interaktif Komputer Musik • SMK Kelas XI
      </footer>
    </main>
  );
}