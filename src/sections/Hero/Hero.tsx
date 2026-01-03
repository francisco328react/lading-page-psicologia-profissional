export function Hero() {
  return (
    <section className="min-h-screen pt-32 bg-secondary flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            Psicoterapia humanizada para você cuidar da sua saúde emocional
          </h1>

          <p className="text-muted mb-8">
            Atendimento com acolhimento, escuta ativa e ética profissional.
            Psicóloga Clínica e Social.
          </p>

          <a
            href="https://wa.me/qr/GVJTH2Z3EEKEJ1"
            target="_blank"
            className="inline-block bg-purple-400 px-8 py-4 rounded-full font-medium hover:opacity-90 bg-purple-500 transition"
          >
            Falar com a psicóloga
          </a>
        </div>

        <div className="hidden md:block">
          <div className="w-full h-[420px] rounded-3xl bg-white shadow-xl" />
        </div>

      </div>
    </section>
  );
}
