import { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefones",
    details: ["(83) 98103-3696", "(83) 99972-0292"],
    link: "tel:+558398103-3696",
  },
  {
    icon: Mail,
    title: "E-mail",
    details: ["dijuanconstrutora@gmail.com"],
    link: "mailto:dijuanconstrutora@gmail.com",
  },
  {
    icon: MapPin,
    title: "Localização",
    details: ["Campina Grande", "Paraíba, Brasil"],
    link: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.%0A%0AEmail: ${formData.email}%0ATelefone: ${formData.phone || "Não informado"}%0A%0AMensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5583981033696?text=${whatsappMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    toast.success("Redirecionando para o WhatsApp...");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" className="section bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm tracking-wider uppercase">
            Entre em Contato
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Tem Dúvidas? <span className="text-primary">Fale Conosco</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Nossa equipe está pronta para atender você e esclarecer todas as
            suas dúvidas sobre nossos empreendimentos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className="hover-lift border-none shadow-lg">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">
                        {info.link && idx === 0 ? (
                          <a
                            href={info.link}
                            className="hover:text-primary transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="border-none shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Envie sua Mensagem
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nome Completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(83) 9 9999-9999"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Como podemos ajudar você?"
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* WhatsApp CTA */}
          <div className="space-y-6">
            <Card className="border-none shadow-xl bg-linear-to-br from-primary to-accent text-white overflow-hidden">
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
                <div className="relative space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
                    <MessageCircle className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-3">
                      Atendimento Rápido via WhatsApp
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      Prefere falar diretamente conosco? Entre em contato pelo
                      WhatsApp e receba atendimento personalizado em tempo real.
                    </p>
                  </div>

                  <a
                    href="https://wa.me/5583981033696"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors w-full"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Falar via WhatsApp
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Horário de Atendimento
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Segunda a Sexta:</span>
                    <span className="font-semibold text-foreground">
                      8h às 18h
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span className="font-semibold text-foreground">
                      8h às 12h
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span className="font-semibold text-foreground">
                      Fechado
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
