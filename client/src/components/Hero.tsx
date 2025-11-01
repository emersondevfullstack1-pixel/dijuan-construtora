import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "/images/hero/hero1.jpg",
    title: "San Gardeno Residence",
    subtitle: "Entrega em 2025",
    description: "Viva em um lugar moderno, conectado e seguro",
  },
  {
    image: "/images/hero/hero2.jpg",
    title: "Qualidade e Excelência",
    subtitle: "16 anos de experiência",
    description: "Empreendimentos de assinatura única em Campina Grande",
  },
  {
    image: "/images/hero/hero3.webp",
    title: "Morar Bem Faz Diferença",
    subtitle: "Grupo Dijuan",
    description: "Referência em satisfação e qualidade há 40 anos",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToNext = () => {
    const element = document.getElementById("sobre");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent" />

          <div className="relative h-full container flex items-center">
            <div className="max-w-2xl text-white space-y-6 animate-fade-in-up">
              <p className="text-secondary font-semibold text-lg tracking-wider uppercase">
                {slide.subtitle}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-light">
                {slide.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
                  onClick={() => {
                    const element = document.getElementById("empreendimentos");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Conheça Nossos Empreendimentos
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg"
                  onClick={() => {
                    const element = document.getElementById("contato");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Fale Conosco
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-12"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 right-8 z-10 animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </button>
    </section>
  );
}
