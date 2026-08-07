import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Logo & Description */}
          <div className="footer-logo-col">
            <Link href="/" className="logo-link" style={{ marginBottom: "1rem", display: "inline-flex", alignItems: "center" }}>
              <Image 
                src="/images/LOGO DECIDIDO.jpeg" 
                alt="Ingrasas Logo" 
                width={220} 
                height={67} 
                style={{ objectFit: "contain", filter: "brightness(0.95)" }}
              />
            </Link>
            <p className="footer-logo-desc">
              Suministramos materias primas de origen animal para diferentes aplicaciones industriales y desarrollamos soluciones especializadas para la gestión y valorización de materiales grasos.
            </p>
            
            {/* Social Icons */}
            <div className="social-links">
              <a href="https://instagram.com/ingrasas_co" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <span style={{ fontSize: "0.85rem", alignSelf: "center", color: "#a0aec0" }}>@ingrasas_co</span>
            </div>
          </div>

          {/* Column 1: Industrias */}
          <div>
            <h4 className="footer-title">Industrias</h4>
            <ul className="footer-links-list">
              <li>
                <Link href="/alimento-concentrado-animal" className="footer-link">Nutrición Animal</Link>
              </li>
              <li>
                <Link href="/biocombustibles" className="footer-link">Biocombustibles</Link>
              </li>
              <li>
                <Link href="/oleoquimica" className="footer-link">Industria Oleoquímica</Link>
              </li>
              <li>
                <Link href="/jaboneria" className="footer-link">Jabonería</Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Servicios */}
          <div>
            <h4 className="footer-title">Servicios</h4>
            <ul className="footer-links-list">
              <li>
                <Link href="/soluciones" className="footer-link">Soluciones</Link>
              </li>
              <li>
                <Link href="/nosotros" className="footer-link">Nuestra Empresa</Link>
              </li>
              <li>
                <Link href="/contacto" className="footer-link">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacto */}
          <div>
            <h4 className="footer-title">Contacto</h4>
            <ul className="footer-links-list" style={{ color: "#a0aec0", fontSize: "0.85rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Ubicación:</strong><br />
                Bogotá D.C., Colombia
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Teléfono:</strong><br />
                +57 313 510 0495
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Correo electrónico:</strong><br />
                info@ingrasas.com
              </li>
              <li>
                <strong>Horario de atención:</strong><br />
                Lunes a sábado<br />
                7:00 a.m. – 5:00 p.m.
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} INGRASAS S.A.S. Todos los derechos reservados.</p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/contacto" className="footer-link">Políticas de Privacidad</Link>
            <Link href="/contacto" className="footer-link">Términos de Servicio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
