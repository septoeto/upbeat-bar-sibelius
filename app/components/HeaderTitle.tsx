export default function HeaderTitle() {
  return (
    <header className="bg-slate-900 border-b-4 border-purple-600 text-white p-6 shadow-2xl rounded-xl mb-8 text-center relative overflow-hidden">
      {/* Sentuhan Desain Khas Ribbon/Toolbar Sibelius */}
      <div className="absolute top-0 left-0 right-0 bg-slate-800 text-xs py-1 px-4 text-slate-400 flex justify-between items-center border-b border-slate-700">
        <span>Sibelius Ultimate - Interactive Teaching Media</span>
        <span className="text-purple-400 font-semibold">Score Setup: Upbeat & Irregular Bars</span>
      </div>
      
      <div className="mt-6">
        <span className="bg-purple-600/30 text-purple-300 text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full border border-purple-500/50">
          Media Pembelajaran Musik Kelas XI SMK
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold mt-3 tracking-tight bg-gradient-to-r from-purple-400 via-pink-300 to-white bg-clip-text text-transparent">
          Membuat atau Menambahkan Birama Gantung <br/>(Upbeat Bar / Irregular Bar) pada Aplikasi Sibelius
        </h1>
        <p className="text-slate-400 mt-2 text-sm md:text-base">
          Panduan interaktif masterclass notasi musik untuk pengajar dan siswa.
        </p>
      </div>
    </header>
  );
}