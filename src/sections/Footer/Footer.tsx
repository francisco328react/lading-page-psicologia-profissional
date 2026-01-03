export function Footer() {
  return (
    <footer className="bg-white py-10 border-t">
      <div className="max-w-7xl mx-auto px-6 text-center text-sm text-muted space-y-2">
        <p className="font-medium text-xl">Beatriz Silveira — Psicóloga Clínica e Social</p>
        <p>CRP 20/11.925 • Servidora Pública — SEJUSC</p>
        <p>© {new Date().getFullYear()} Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
