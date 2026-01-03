export function CTA() {
  return (
    <section id="contato" className="py-24 bg-primary text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-3xl text-white md:text-4xl mb-6">
          Pronta para cuidar da sua saúde emocional?
        </h2>
        <p className="opacity-90 mb-10 ">
          Fale comigo no WhatsApp e agende sua primeira sessão.
        </p>

        <a 
            href="https://wa.me/qr/GVJTH2Z3EEKEJ1"
            target="_blank"
            className="inline-block bg-purple-400 px-8 py-4 rounded-full font-medium hover:opacity-90 bg-purple-500 transition"
        >
            Agendar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
