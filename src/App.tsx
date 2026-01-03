import { Header } from "./sections/Header/Header";
import { Hero } from "./sections/Hero/Hero";
import { About } from "./sections/About/About";
import { Services } from "./sections/Services/Services";
import { Method } from "./sections/Method/Method";
import { Testimonials } from "./sections/Testimonials/Testimonials";
import { FAQ } from "./sections/FAQ/FAQ";
import { CTA } from "./sections/CTA/CTA";
import { Footer } from "./sections/Footer/Footer";

export function App() {
  return (
    <div className="bg-purple-400">
      <Header />
      <Hero />
      <About />
      <Services />
      <Method />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
