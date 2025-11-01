import { useEffect, useState, useRef } from 'react';
import { Award, Users, Building2, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  {
    icon: Award,
    value: 16,
    label: 'Anos de Experiência',
    suffix: '+',
  },
  {
    icon: Building2,
    value: 40,
    label: 'Anos do Grupo Dijuan',
    suffix: '+',
  },
  {
    icon: Users,
    value: 500,
    label: 'Famílias Satisfeitas',
    suffix: '+',
  },
  {
    icon: TrendingUp,
    value: 100,
    label: 'Qualidade Garantida',
    suffix: '%',
  },
];

function Counter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      {count}{suffix}
    </div>
  );
}

export default function About() {
  return (
    <section id="sobre" className="section bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-secondary font-semibold text-sm tracking-wider uppercase">
                Sobre Nós
              </span>
              <div className="h-1 w-20 bg-primary mt-2" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Construindo Sonhos há{' '}
              <span className="text-primary">16 Anos</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-foreground">Dijuan Construtora</strong> é uma empresa com 16 anos de experiência 
                em empreendimentos de assinatura única na cidade de Campina Grande. Fazemos parte do 
                <strong className="text-foreground"> Grupo Dijuan</strong>, que atua há 40 anos no mercado.
              </p>
              
              <p>
                Somos responsáveis por projetos que são referência em <strong className="text-foreground">satisfação 
                e qualidade</strong>, sempre buscando superar as expectativas de nossos clientes e entregar 
                empreendimentos que transformam vidas.
              </p>
              
              <p>
                Nossa missão é construir não apenas edifícios, mas lares onde famílias criam memórias 
                e realizam seus sonhos. Cada projeto é desenvolvido com atenção aos mínimos detalhes, 
                utilizando materiais de primeira qualidade e as melhores práticas de construção.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-medium">Qualidade Garantida</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-medium">Entrega no Prazo</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-medium">Atendimento Personalizado</span>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="hover-lift border-none shadow-lg">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <Counter end={stat.value} suffix={stat.suffix} />
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
