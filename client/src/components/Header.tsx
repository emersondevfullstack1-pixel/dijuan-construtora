import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MessageCircle as Whatsapp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "inicio", label: "Início" },
    { id: "sobre", label: "Nossa Empresa" },
    { id: "empreendimentos", label: "Empreendimentos" },
    { id: "contato", label: "Fale Conosco" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("inicio")}
              className="flex items-center space-x-2 group"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <img src="./public/favicon.ico" alt="" className="w-6 h-6" />
              </div>
              <div className="hidden md:block">
                <h1
                  className={`font-bold text-xl transition-colors ${
                    isScrolled ? "text-primary" : "text-white"
                  }`}
                >
                  DIJUAN
                </h1>
                <p
                  className={`text-xs transition-colors ${
                    isScrolled ? "text-muted-foreground" : "text-white/90"
                  }`}
                >
                  Construtora
                </p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors hover:text-white ${
                  isScrolled ? "text-foreground" : "text-white"
                } ${item.id === "contato" && isScrolled ? "text-black" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Info & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden xl:flex items-center space-x-4">
              <a
                href="tel:+558398103-3696"
                className={`flex items-center space-x-2 text-sm transition-colors hover:text-primary ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                <Whatsapp
                  className={`w-4 h-4 ${isScrolled ? "text-black" : "text-white"}`}
                />
                <span className={`${isScrolled ? "text-black" : "text-white"}`}>
                  (83) 98103-3696
                </span>
              </a>
            </div>

            <Button
              variant="default"
              size="sm"
              className={`hidden md:flex ${isScrolled ? "text-black" : "text-white"}`}
              onClick={() => scrollToSection("contato")}
            >
              Fale Conosco
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white rounded-bl-lg shadow-lg">
            <nav className="flex flex-col space-y-4">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-2 py-2 text-left font-bold text-foreground hover:bg-red-700 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 py-2 border-t border-border">
                <a
                  href="tel:+558398103-3696"
                  className="flex items-center space-x-2 text-sm text-foreground hover:text-primary"
                >
                  <Whatsapp className="w-4 h-4" />
                  <span>(83) 98103-3696</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
