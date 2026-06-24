export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-kabut-50">
      <h1 className="font-serif text-display text-danau-500 mb-4">
        Folklor Kawah Putih
      </h1>
      <p className="text-body-lg text-arang-900 max-w-2xl text-center leading-body">
        Website ini sedang dalam pengembangan. Silakan kunjungi kembali nanti.
      </p>
      <div className="mt-8 flex gap-4">
        <span className="inline-block w-4 h-4 rounded-full bg-kabut-50 border border-kabut-abu"></span>
        <span className="inline-block w-4 h-4 rounded-full bg-danau-500"></span>
        <span className="inline-block w-4 h-4 rounded-full bg-belerang-400"></span>
        <span className="inline-block w-4 h-4 rounded-full bg-arang-900"></span>
      </div>
    </main>
  );
}
