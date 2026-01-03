const services = [
  {
    title: "Ansiedade e estresse",
    description:
      "Acompanhamento psicológico para controle da ansiedade, estresse e sintomas físicos e emocionais."
  },
  {
    title: "Depressão",
    description:
      "Apoio psicológico para enfrentamento da depressão, fortalecimento emocional e qualidade de vida."
  },
  {
    title: "Autoconhecimento",
    description:
      "Processo terapêutico voltado ao desenvolvimento pessoal, autoestima e inteligência emocional."
  },
  {
    title: "Conflitos familiares",
    description:
      "Mediação terapêutica para fortalecimento dos vínculos familiares e melhoria da comunicação."
  },
  {
    title: "Relacionamentos",
    description:
      "Apoio para lidar com desafios em relacionamentos afetivos e sociais."
  },
  {
    title: "Atendimento social",
    description:
      "Acompanhamento com foco em contextos sociais e políticas públicas."
  }
];

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
            Como posso te ajudar
          </h2>
          <p className="text-muted">
            Atendimento psicológico humanizado para diferentes fases da vida.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
              <p className="text-muted text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
