import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181818] to-[#3a2c1a] flex flex-col items-center justify-between py-8 px-4 sm:px-0 font-[family-name:var(--font-geist-sans)]">
      {/* HEADER */}
      <header className="flex flex-col items-center gap-2 mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-yellow-400 tracking-wide drop-shadow-lg text-center">
          ARENA GLAMOUR FUTSAL
        </h1>
        <p className="text-lg italic text-yellow-200 mb-2 text-center">
          "Where Champions Play"
        </p>
        <p className="text-sm text-gray-200 text-center">
          Jl. Sport Raya No.88, Jakarta
          <br />
          Telp: <a href="tel:02188887777" className="underline"> (021) 8888-7777</a>
        </p>
      </header>

      {/* LOGO */}
      <div className="flex justify-center mb-8">
        <Image
          src="/futsal-logo-gold.svg"
          alt="Logo Arena Glamour Futsal"
          width={120}
          height={120}
          className="drop-shadow-xl"
          priority
        />
      </div>

      {/* HARGA SEWA LAPANGAN */}
      <section className="w-full max-w-md bg-[#232323]/80 rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-center text-lg font-bold text-yellow-300 mb-4 tracking-widest">
          HARGA SEWA LAPANGAN
        </h2>
        <div className="border-t border-yellow-700 mb-4" />
        {/* Paket Member */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl">⚽</span>
            <span className="font-semibold text-yellow-200">PAKET MEMBER</span>
          </div>
          <div className="text-2xl font-bold text-yellow-400 mb-1">Rp 95.000<span className="text-base font-medium text-yellow-200">/jam</span></div>
          <ul className="list-disc list-inside text-sm text-gray-100 pl-2 space-y-1">
            <li>Prioritas booking</li>
            <li>Free konsultasi pelatih</li>
            <li>Diskon merchandise</li>
            <li>Poin reward</li>
          </ul>
        </div>
        <div className="border-t border-yellow-700 mb-4" />
        {/* Paket Reguler */}
        <div className="mb-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl">⚽</span>
            <span className="font-semibold text-yellow-200">PAKET REGULER</span>
          </div>
          <div className="text-2xl font-bold text-yellow-400 mb-1">Rp 110.000<span className="text-base font-medium text-yellow-200">/jam</span></div>
          <ul className="list-disc list-inside text-sm text-gray-100 pl-2 space-y-1">
            <li>Booking 24 jam</li>
            <li>Lapangan sintetis premium</li>
            <li>Pencahayaan profesional</li>
          </ul>
        </div>
      </section>

      {/* FASILITAS UNGGULAN */}
      <section className="w-full max-w-md bg-[#232323]/80 rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-center text-lg font-bold text-yellow-300 mb-4 tracking-widest">
          FASILITAS UNGGULAN
        </h2>
        <ul className="text-gray-100 text-sm space-y-2 pl-2">
          <li>✓ 2 lapangan standar internasional</li>
          <li>✓ Ruang ganti premium</li>
          <li>✓ Lounge ber-AC</li>
          <li>✓ Tempat parkir luas</li>
          <li>✓ Cafe dengan menu sehat</li>
        </ul>
      </section>

      {/* PROMO KHUSUS */}
      <section className="w-full max-w-md bg-gradient-to-r from-yellow-700/80 to-yellow-400/80 rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-center text-lg font-bold text-white mb-4 tracking-widest">
          PROMO KHUSUS
        </h2>
        <ul className="text-white text-sm space-y-2 pl-2">
          <li>» Daftar member hari ini - <span className="font-semibold text-yellow-900">Gratis 1 jam main!</span></li>
          <li>» Weekend package: <span className="font-semibold">2 jam = Rp 170.000</span> <span className="text-yellow-900">(member)</span></li>
        </ul>
      </section>

      {/* FOOTER */}
      <footer className="w-full max-w-md flex flex-col items-center gap-2 text-gray-200 text-sm py-4 border-t border-yellow-700">
        <div className="flex gap-4 items-center">
          <span>📱 Instagram: <a href="https://instagram.com/arenaglamour_futsal" target="_blank" rel="noopener noreferrer" className="underline">@arenaglamour_futsal</a></span>
        </div>
        <div className="flex gap-4 items-center">
          <span>📞 WA Booking: <a href="https://wa.me/628112222333" target="_blank" rel="noopener noreferrer" className="underline">0811-2222-333</a></span>
        </div>
        <div className="flex gap-4 items-center">
          <span>🕒 Operasional: 08.00-23.00 WIB</span>
        </div>
      </footer>
    </div>
  );
}
