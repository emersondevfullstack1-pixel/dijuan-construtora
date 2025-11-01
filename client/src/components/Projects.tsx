import { MapPin, Calendar, CheckCircle2, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const featuredProject = {
  name: 'San Gardeno Residence',
  status: 'Em Construção',
  delivery: '2025',
  location: 'Campina Grande, PB',
  description: 'Para quem quer viver em um lugar moderno, conectado e que torna o dia a dia mais seguro e prático.',
  features: [
    'Área de lazer completa',
    'Segurança 24h',
    'Localização privilegiada',
    'Acabamento de alto padrão',
    'Vagas de garagem',
    'Elevadores modernos',
  ],
  image: '/images/projects/project1.jpg',
};

const completedProjects = [
  {
    name: 'Golden Palace',
    year: '2014',
    location: 'Santo Antônio',
    type: 'Residencial',
  },
  {
    name: 'Bougainville',
    year: '2019',
    location: 'Jardim Tavares',
    type: 'Residencial',
  },
  {
    name: 'Maria Luiza',
    year: '2012',
    location: 'Catolé',
    type: 'Residencial',
  },
  {
    name: 'Golden Center',
    year: '2020',
    location: 'Centro',
    type: 'Comercial',
  },
];

export default function Projects() {
  return (
    <section id="empreendimentos" className="section bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm tracking-wider uppercase">
            Nossos Empreendimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Projetos que Transformam Vidas
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça nossos empreendimentos de alto padrão, desenvolvidos com excelência e atenção aos detalhes.
          </p>
        </div>

        {/* Featured Project */}
        <Card className="mb-16 overflow-hidden border-none shadow-2xl">
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-64 lg:h-auto">
              <img
                src={featuredProject.image}
                alt={featuredProject.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                {featuredProject.status}
              </Badge>
            </div>

            {/* Content */}
            <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {featuredProject.name}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {featuredProject.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>Entrega: {featuredProject.delivery}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>{featuredProject.location}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {featuredProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <a
                    href="https://wa.me/5583981033696"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Saiba Mais
                  </a>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Completed Projects */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-2">
              Empreendimentos Concluídos
            </h3>
            <p className="text-muted-foreground">
              Projetos entregues com sucesso e satisfação garantida
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {completedProjects.map((project, index) => (
              <Card
                key={index}
                className="hover-lift overflow-hidden border-none shadow-lg group cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="relative h-48 bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                        <Building2 className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground px-4">
                        {project.name}
                      </h4>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Entrega:</span>
                      <span className="font-semibold text-foreground">{project.year}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Bairro:</span>
                      <span className="font-semibold text-foreground">{project.location}</span>
                    </div>
                    <Badge variant="secondary" className="w-full justify-center">
                      {project.type}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
