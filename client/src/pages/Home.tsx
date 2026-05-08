import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Hammer, Zap, Droplet, Wrench, Paintbrush, Building2, ShoppingCart, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

/**
 * Home Page - Salazar Obras Integrales
 * Diseño: Minimalismo Corporativo Moderno
 * Estructura: Hero, Nosotros, Servicios, Obras, Contacto
 */

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const services = [
    {
      icon: Hammer,
      title: 'Obras desde Cero',
      description: 'Ejecutamos tu proyecto completo con seguimiento técnico constante.',
    },
    {
      icon: Building2,
      title: 'Albañilería en General',
      description: 'Cimientos, levantamiento de muros, techos y terminaciones.',
    },
    {
      icon: Wrench,
      title: 'Construcción en Seco',
      description: 'Rapidez y limpieza con sistemas de Durlock y Steel Framing.',
    },
    {
      icon: Zap,
      title: 'Electricidad y Plomería',
      description: 'Instalaciones seguras bajo normas vigentes para hogares y locales.',
    },
    {
      icon: Droplet,
      title: 'Herrería y Soldadura',
      description: 'Estructuras metálicas, rejas de seguridad y trabajos a medida.',
    },
    {
      icon: Paintbrush,
      title: 'Pintura Profesional',
      description: 'Acabados interiores y exteriores con materiales de primera línea.',
    },
  ];

  const projects = [
    {
      title: 'Construcción Residencial Integral',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663480594965/CFnRhrqXzdX6oExBTcRREy/hero-construccion-KjCx6MnWVEZUBsnqqAQSqr.webp',
      description: 'Proyecto de construcción moderna con acabados de precisión',
    },
    {
      title: 'Servicios Integrales de Obra',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663480594965/CFnRhrqXzdX6oExBTcRREy/servicios-integrales-6ep3jKUYMTjSbozkwkL4dS.webp',
      description: 'Electricidad, plomería, pintura y acabados en un solo equipo',
    },
    {
      title: 'Refacción de Local Comercial',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663480594965/CFnRhrqXzdX6oExBTcRREy/local-comercial-9YJvYujmn4GQBCpLnbVdr.webp',
      description: 'Local llave en mano con diseño moderno y funcional',
    },
    {
      title: 'Acabados de Precisión',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663480594965/CFnRhrqXzdX6oExBTcRREy/acabados-precision-FY7FsFsPFt9Dffz3DmXZBS.webp',
      description: 'Detalles perfectos en cada terminación',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section id="inicio" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Tu proyecto, de principio a fin, en manos profesionales.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                En Salazar Obras Integrales transformamos ideas en realidades. Desde el desarrollo de planos hasta la última mano de pintura, nos encargamos de que tu obra sea sólida, segura y eficiente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-orange-500 text-white font-semibold"
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Pedir Presupuesto Sin Cargo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-foreground text-foreground hover:bg-secondary"
                  onClick={() => document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Conocer Más
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663480594965/CFnRhrqXzdX6oExBTcRREy/hero-construccion-KjCx6MnWVEZUBsnqqAQSqr.webp"
                alt="Construcción profesional"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nosotros Section */}
      <section id="nosotros" className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Experiencia y compromiso en cada detalle.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos un equipo especializado en construcción integral con base en Salta. Nos apasiona la ejecución técnica y la calidad constructiva. Entendemos que una obra no es solo ladrillos y cemento, sino una inversión de vida. Por eso, combinamos albañilería tradicional, construcción en seco y herrería de precisión para entregar resultados que superan expectativas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: '500+', label: 'Proyectos Completados' },
              { number: '15+', label: 'Años de Experiencia' },
              { number: '100%', label: 'Clientes Satisfechos' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <p className="text-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluciones integrales en obra civil, locales comerciales y refacciones. Desde el pozo hasta la pintura.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="relative bg-white border border-secondary rounded-lg p-8 hover:shadow-lg hover:border-accent transition-all duration-300"
                >
                  <div className="absolute -left-1 top-0 w-1 h-12 bg-accent rounded-r-lg"></div>
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>

          {/* Soluciones Comerciales */}
          <div className="mt-16 bg-foreground text-white rounded-lg p-12">
            <div className="flex items-start gap-6">
              <ShoppingCart className="w-12 h-12 text-accent shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-3">Soluciones Comerciales</h3>
                <p className="text-gray-300 mb-4">
                  Refacción de Locales: Maximizamos los tiempos de obra para que tu negocio abra lo antes posible, cuidando la estética y funcionalidad comercial. Llave en mano: nos encargamos de todo, desde la soldadura hasta el último toque de pintura.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Diseño', 'Ejecución', 'Supervisión', 'Entrega'].map((item, idx) => (
                    <span key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-accent" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Obras Section */}
      <section id="obras" className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Obras que hablan por nosotros</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No solo lo decimos, lo hacemos. Te invitamos a recorrer algunos de nuestros proyectos terminados donde la precisión y el detalle son los protagonistas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group overflow-hidden rounded-lg">
                <div className="relative overflow-hidden bg-gray-200 rounded-lg h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-end">
                    <div className="p-6 text-white w-full">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-200">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                ¿Hablamos de tu próxima obra?
              </h2>
              <p className="text-lg text-muted-foreground">
                Estamos listos para asesorarte y brindarte una solución integral a la medida de tu presupuesto.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-secondary p-8 rounded-lg">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Nombre</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Teléfono</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="+54 (387) 612-3456"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Cuéntanos sobre tu proyecto</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Describe tu proyecto..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-orange-500 text-white font-semibold"
              >
                Enviar Solicitud
              </Button>

              {submitted && (
                <div className="p-4 bg-green-100 border border-green-300 rounded-lg text-green-800">
                  ¡Gracias! Nos pondremos en contacto pronto.
                </div>
              )}
            </form>

            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="font-medium text-foreground">Ubicación</p>
                <p className="text-muted-foreground text-sm">Salta, Argentina</p>
              </div>
              <div>
                <Phone className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="font-medium text-foreground">Teléfono/WhatsApp</p>
                <a href="tel:+5493876123456" className="text-accent hover:underline text-sm">
                  +54 (387) 612-3456
                </a>
              </div>
              <div>
                <svg className="w-8 h-8 text-accent mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.347l-.366.214-3.71-.973.992 3.63-.235.374a9.86 9.86 0 .001 15.413l.823.176.039.460c.151 1.897 1.694 3.540 3.592 3.56 1.69 0 3.155-.677 4.236-1.948.572-.676 1.16-1.656 1.581-2.694.423-1.033.747-2.099.972-3.055.469-1.92.545-3.291.545-3.291 0-1.042-.215-2.053-.645-3.015-.45-.993-1.122-1.888-1.999-2.614-.878-.726-1.9-1.317-3.043-1.68-1.143-.364-2.381-.453-3.583-.266z"/>
                </svg>
                <p className="font-medium text-foreground">WhatsApp</p>
                <a href="https://wa.me/5493876123456" className="text-accent hover:underline text-sm">
                  Contactar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-foreground text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Salazar Obras Integrales: Solidez que se construye.</h2>
          <p className="text-gray-300 mb-8">Transformamos tus ideas en proyectos sólidos, seguros y eficientes.</p>
          <Button
            size="lg"
            className="bg-accent hover:bg-orange-500 text-foreground font-semibold"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Solicitar Presupuesto
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
