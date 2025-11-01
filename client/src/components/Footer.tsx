import {
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  // Função de rolagem para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Função de rolagem para o fundo
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  // Lógica para mostrar/esconder o botão "Subir"
  useEffect(() => {
    const toggleVisibility = () => {
      // O botão "Subir" aparece se o scroll for maior que 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Botões Flutuantes de Rolagem */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2">
        {/* Botão Subir para o Topo */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="p-3 bg-primary hover:bg-accent text-white rounded-full shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Subir para o topo da página"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Botão Descer para o Fundo */}
        <button
          onClick={scrollToBottom}
          className="p-3 bg-primary hover:bg-accent text-white rounded-full shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Descer para o fundo da página"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>

      {/* Conteúdo Original do Footer */}
      <footer className="bg-linear-to-br from-primary via-primary to-accent text-white">
        <div className="container py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-xl"></span>
                </div>
                <div>
                  <h3 className="font-bold text-xl">DIJUAN</h3>
                  <p className="text-sm text-white/80">Construtora</p>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Construindo sonhos e transformando vidas há 16 anos. Parte do
                Grupo Dijuan, com 40 anos de tradição e excelência.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("inicio")}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("sobre")}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    Nossa Empresa
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("empreendimentos")}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    Empreendimentos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contato")}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    Fale Conosco
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contato</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:+558398103-3696"
                    className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(83) 98103-3696</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+558399972-0292"
                    className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(83) 99972-0292</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:dijuanconstrutora@gmail.com"
                    className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    <span>dijuanconstrutora@gmail.com</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start space-x-2 text-white/80 text-sm">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>Campina Grande, Paraíba</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-bold text-lg mb-4">Redes Sociais</h4>
              <p className="text-white/80 text-sm mb-4">
                Acompanhe nossas novidades e empreendimentos
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/dijuanconstrutora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/dijuanconstrutora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/5583981033696"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/80 text-sm text-center md:text-left">
                © {currentYear} Dijuan Construtora. Todos os direitos
                reservados.
              </p>
              <p className="text-white/80 text-sm text-center md:text-right">
                Uma empresa do{" "}
                <strong className="text-white">Grupo Dijuan</strong>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
