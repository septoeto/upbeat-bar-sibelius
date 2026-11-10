'use client';
import { useState } from 'react';

export default function InteractiveSection3() {
  const [activeSongModal, setActiveSongModal] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const songs = [
    { 
      id: 'indonesia-raya', 
      title: 'Indonesia Raya (WR. Supratman)', 
      desc: 'Dimulai dengan ketukan upbeat sebelum masuk ke frasa utama.',
      placeholderText: 'Cuplikan Partitur: Indonesia Raya' 
    },
    { 
      id: 'tanah-air', 
      title: 'Tanah Airku (Ibu Soed)', 
      desc: 'Contoh klasik lagu nasional dengan awalan birama gantung.',
      placeholderText: 'Cuplikan Partitur: Tanah Airku' 
    },
    { 
      id: 'indonesia-pusaka', 
      title: 'Indonesia Pusaka (Ismail Marzuki)', 
      desc: 'Memiliki struktur melodi awal yang melayang sebelum jatuh ke ketukan kuat.',
      placeholderText: 'Cuplikan Partitur: Indonesia Pusaka' 
    },
    { 
      id: 'hari-merdeka', 
      title: 'Hari Merdeka (H. Mutahar)', 
      desc: 'Tempo cepat dengan pola upbeat yang energik.',
      placeholderText: 'Cuplikan Partitur: Hari Merdeka' 
    }
  ];

  const currentSong = songs.find(s => s.id === activeSongModal);

  return (
    <section className="bg-white rounded-xl shadow-md p-6 border border-slate-200 transition-all duration-300 hover:shadow-xl">
      <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3 border-b pb-3">
        <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm shadow">3</span>
        Contoh Lagu Nasional & Partitur Interaktif
      </h2>
      <p className="text-slate-600 mt-3 text-sm">
        Klik judul lagu di bawah ini untuk melihat potongan partitur dan analisis birama gantungnya:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {songs.map((song) => (
          <div 
            key={song.id}
            onClick={() => { setActiveSongModal(song.id); setIsZoomed(false); }}
            className="p-4 rounded-xl border border-slate-200 hover:border-purple-500 hover:bg-purple-50/30 cursor-pointer transition shadow-sm"
          >
            <h4 className="font-semibold text-slate-800 text-sm flex items-center justify-between">
              {song.title}
              <span className="text-purple-600 text-xs font-medium">Lihat Partitur ↗</span>
            </h4>
            <p className="text-xs text-slate-500 mt-1">{song.desc}</p>
          </div>
        ))}
      </div>

      {/* Modal / Preview Partitur Interaktif dengan Tombol Zoom */}
      {activeSongModal && currentSong && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`bg-white rounded-2xl w-full p-6 shadow-2xl border border-purple-200 transition-all duration-300 ${isZoomed ? 'max-w-[95vw] h-[95vh] flex flex-col' : 'max-w-lg'}`}>
            
            {/* Header Modal (Judul, Tombol Zoom, dan Tombol Tutup) */}
            <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-3">
              <h3 className="font-bold text-lg text-slate-800 truncate pr-2">
                {currentSong.title}
              </h3>

              <div className="flex items-center gap-2 shrink-0">
                {/* TOMBOL ZOOM DI SEBELAH KIRI TOMBOL TUTUP */}
                <button 
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="text-slate-700 hover:text-slate-900 text-xs font-semibold bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition shadow-sm"
                  title={isZoomed ? "Perkecil Tampilan" : "Perbesar Full Halaman"}
                >
                  {isZoomed ? 'Perkecil' : 'Zoom'}
                </button>

                {/* TOMBOL TUTUP (✕) */}
                <button 
                  onClick={() => { setActiveSongModal(null); setIsZoomed(false); }}
                  className="text-slate-400 hover:text-red-600 text-sm font-bold bg-slate-100 hover:bg-red-50 w-8 h-8 rounded-full flex items-center justify-center transition"
                  title="Tutup"
                >
                  ✕
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-600 mb-4">
              Visualisasi cuplikan partitur menunjukkan bagaimana software penulisan nada memperlakukan bar awal (Upbeat).
            </p>
            
            {/* Area Visual Placeholder / Gambar yang Ikut Menyesuaikan saat Zoom */}
            <div className={`bg-slate-950 rounded-xl overflow-hidden flex items-center justify-center ${isZoomed ? 'flex-1 w-full' : 'h-48'}`}>
              <img 
                src={`/images/modul-3/${currentSong.id}.png`} 
                alt={currentSong.title} 
                className="w-full h-full object-contain"
              />
            </div>

            <div className="mt-5 text-right">
              <button 
                onClick={() => { setActiveSongModal(null); setIsZoomed(false); }}
                className="bg-purple-600 hover:bg-purple-700 text-white text-xs px-4 py-2 rounded-lg font-medium shadow transition"
              >
                Tutup Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}