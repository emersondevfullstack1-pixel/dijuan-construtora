import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MessageCircle as Whatsapp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Item } from "@radix-ui/react-accordion";

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
        isScrolled || isMobileMenuOpen
          ? "bg-white shadow-lg py-3"
          : "bg-transparent py-5"
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
                <img src="./public/favicon.png" alt="" className="w-6 h-6" />
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
                className={`font-medium transition-colors ${
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
                isScrolled || isMobileMenuOpen ? "text-black" : "text-white"
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
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            {navItems.map(Item => (
              <button
                key={Item.id}
                onClick={() => scrollToSection(Item.id)}
                className="block w-full text-left text-foreground/80 hover:text-red-700 font-medium transition-colors py-2"
              >
                {Item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
