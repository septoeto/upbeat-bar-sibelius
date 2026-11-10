'use client';
import { useState } from 'react';

export default function InteractiveSection1() {
  const [selectedSong, setSelectedSong] = useState<string | null>(null);
  const [showPartitur, setShowPartitur] = useState(false);
  const [showLogicAnswer, setShowLogicAnswer] = useState(false);

  // Data lagu dengan path file audio di folder public/audio/
  const songs = [
    { id: 'satu-nusa', title: 'Lagu 1', audioSrc: '/audio/satu-nusa.mp3' },
    { id: 'dari-sabang', title: 'Lagu 2', audioSrc: '/audio/dari-sabang.mp3' }
  ];

  return (
    <section className="bg-white rounded-xl shadow-md p-6 border border-slate-200 transition-all duration-300 hover:shadow-xl">
      <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3 border-b pb-3">
        <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm shadow">1</span>
        Pertanyaan Pemantik & Contoh Lagu
      </h2>
      <p className="text-slate-600 mt-3 text-sm">
        Klik lagu di bawah untuk memutar cuplikan audio dan menganalisis ketukan awalnya:
      </p>

      {/* Pilihan Lagu (Cukup 1 Grid Loop yang Rapi) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {songs.map((song) => (
          <div 
            key={song.id}
            onClick={() => setSelectedSong(song.id)}
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedSong === song.id ? 'border-purple-600 bg-purple-50/50 shadow-inner' : 'border-slate-200 hover:border-purple-300'}`}
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-800">{song.title}</span>
              <span className="bg-purple-600 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1 shadow">
                {selectedSong === song.id ? '🔊 Memutar...' : '▶ Play Audio'}
              </span>
            </div>

            {/* Elemen Audio HTML5 dengan tambahan onEnded & onPause agar tombol reset otomatis */}
            {selectedSong === song.id && (
              <audio 
                controls 
                autoPlay 
                className="mt-3 w-full h-8"
                onEnded={() => setSelectedSong(null)}
                onPause={() => setSelectedSong(null)}
              >
                <source src={song.audioSrc} type="audio/mp3" />
                Browser Anda tidak mendukung elemen audio.
              </audio>
            )}
          </div>
        ))}
      </div>

      {/* Tombol Tampilkan Partitur Komparasi */}
      <div className="mt-6 text-center">
        <button 
          onClick={() => setShowPartitur(!showPartitur)}
          className="bg-slate-800 hover:bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow hover:shadow-lg"
        >
          {showPartitur ? 'Sembunyikan Perbandingan Partitur' : '🔍 Bandingkan Partitur'}
        </button>
      </div>

      {/* Tampilan Partitur Interaktif dengan Animasi */}
      {showPartitur && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
          <div className="p-4 border border-purple-200 bg-purple-50/30 rounded-xl">
            <h4 className="font-bold text-purple-900 text-sm mb-2">Partitur: Dari Sabang Sampai Merauke</h4>
            <img src='images/modul-1/dari-sabang.png'></img>
            <p className="text-xs text-slate-600 mt-2">Perhatikan birama pertama tidak penuh (hanya berisi sebagian ketukan).</p>
          </div>
          <div className="p-4 border border-slate-200 bg-slate-50 rounded-xl">
            <h4 className="font-bold text-slate-800 text-sm mb-2">Partitur: Satu Nusa Satu Bangsa</h4>
            <img src='images/modul-1/satu-nusa.png'></img>
            <p className="text-xs text-slate-600 mt-2">Perhatikan birama pertama langsung penuh sesuai tanda birama (4/4).</p>
          </div>
        </div>
      )}

      {/* Pertanyaan Logika Matematika */}
      <div className="mt-8 bg-amber-50 border border-amber-200 p-5 rounded-xl">
        <h3 className="font-bold text-amber-900 text-base">🧠 Tantangan Logika Matematika Musik:</h3>
        <p className="text-slate-700 text-sm mt-1">
          Jika birama lagu berukuran <strong className="text-amber-900">4/4</strong>, dan awal lagu (upbeat) dimulai pada ketukan ke-4 (hanya bernilai <strong className="text-amber-900">1 ketukan</strong> di awal), maka berapakah nilai ketukan pada birama akhir lagu agar ketukan keseluruhan lagu tetap pas?
        </p>

        <button 
          onClick={() => setShowLogicAnswer(!showLogicAnswer)}
          className="mt-3 bg-amber-600 hover:bg-amber-700 text-white text-xs px-4 py-2 rounded-lg font-semibold transition"
        >
          {showLogicAnswer ? 'Tutup Jawaban' : '💡 Lihat Logika Matematika'}
        </button>

        {showLogicAnswer && (
          <div className="mt-3 text-xs text-amber-950 bg-amber-100/70 p-3 rounded-lg border border-amber-300 animate-fadeIn">
            <strong>Jawaban Logis:</strong> Birama akhir harus dibuat tidak penuh atau <span className="underline">Irregular Bar</span> senilai sisa ketukan (yaitu 3 ketukan), atau ditambahkan fitur penyesuaian di Sibelius agar struktur birama lagu valid secara ketukan tempo!
          </div>
        )}
      </div>
    </section>
  );
}