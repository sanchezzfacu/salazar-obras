import { MapPin, Phone, Mail } from 'lucide-react';

/**
 * Footer Component - Minimalismo Corporativo Moderno
 * Información de contacto y enlaces útiles
 */
export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Empresa */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-sm">SO</span>
              </div>
              <h3 className="font-bold text-lg">Salazar Obras</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Construcción integral con base en Salta. Transformamos ideas en realidades sólidas, seguras y eficientes.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-gray-300">Salta, Argentina</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-accent mt-1 flex-shrink-0" />
                <a href="tel:+5493876123456" className="text-gray-300 hover:text-accent transition-colors">
                  +54 (387) 612-3456
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-accent mt-1 flex-shrink-0" />
                <a href="mailto:info@salazarobras.com" className="text-gray-300 hover:text-accent transition-colors">
                  info@salazarobras.com
                </a>
              </div>
            </div>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-accent transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-accent transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#obras" className="text-gray-300 hover:text-accent transition-colors">
                  Nuestras Obras
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-accent transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-sm text-gray-400">
            <p className="mb-2">Salazar Obras Integrales: Solidez que se construye.</p>
            <p>&copy; 2026 Salazar Obras Integrales. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
