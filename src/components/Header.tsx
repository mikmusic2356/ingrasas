"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="header-wrapper">
      <div className="header-container">
        {/* 1. Logo (Extremo izquierdo) */}
        <div className="logo-container">
          <Link href="/" className="logo-link" onClick={closeMenu} style={{ display: "flex", alignItems: "center" }}>
            <Image 
              src="/images/LOGO DECIDIDO.jpeg" 
              alt="Ingrasas Logo" 
              width={220} 
              height={67} 
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>
        </div>

        {/* Hamburger Menu Toggle (Mobile) */}
        <button 
          className={`menu-toggle ${isMenuOpen ? "open" : ""}`} 
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* 2. Navigation Links (Centrado en desktop) */}
        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link href="/" className={`nav-link ${isActive("/") ? "active" : ""}`} onClick={closeMenu}>
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/nosotros" className={`nav-link ${isActive("/nosotros") ? "active" : ""}`} onClick={closeMenu}>
                Nuestra Empresa
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/materias-primas" className={`nav-link ${isActive("/materias-primas") ? "active" : ""}`} onClick={closeMenu}>
                Materias Primas
              </Link>
            </li>

            <li className="nav-item">
              <span className={`nav-link ${isActive("/alimento-concentrado-animal") || isActive("/biocombustibles") || isActive("/oleoquimica") || isActive("/jaboneria") || isActive("/industrias") ? "active" : ""}`}>
                Industrias
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "0.2rem" }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
              <ul className="nav-dropdown">
                <li>
                  <Link href="/alimento-concentrado-animal" className="dropdown-link" onClick={closeMenu}>
                    Nutrición Animal
                  </Link>
                </li>
                <li>
                  <Link href="/biocombustibles" className="dropdown-link" onClick={closeMenu}>
                    Biocombustibles
                  </Link>
                </li>
                <li>
                  <Link href="/oleoquimica" className="dropdown-link" onClick={closeMenu}>
                    Oleoquímica
                  </Link>
                </li>
                <li>
                  <Link href="/jaboneria" className="dropdown-link" onClick={closeMenu}>
                    Jabonería
                  </Link>
                </li>
                <li>
                  <Link href="/industrias" className="dropdown-link" onClick={closeMenu} style={{ borderTop: "1px solid var(--color-divider)", paddingTop: "0.5rem", marginTop: "0.25rem" }}>
                    Ver Todas
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link href="/soluciones" className={`nav-link ${isActive("/soluciones") ? "active" : ""}`} onClick={closeMenu}>
                Soluciones
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/contacto" className={`nav-link ${isActive("/contacto") ? "active" : ""}`} onClick={closeMenu}>
                Contacto
              </Link>
            </li>
          </ul>

          {/* Botón de Cotización integrado en el menú móvil únicamente */}
          <Link 
            href="/contacto" 
            className="mobile-menu-cta"
            onClick={(e) => {
              e.preventDefault();
              closeMenu();
              window.dispatchEvent(new Event("open-contact-modal"));
            }}
          >
            SOLICITAR COTIZACIÓN
          </Link>
        </nav>

        {/* 3. Botón de Cotización (Extremo derecho, visible en desktop) */}
        <div className="cta-container">
          <Link 
            href="/contacto" 
            className="header-cta-block"
            onClick={(e) => {
              e.preventDefault();
              closeMenu();
              window.dispatchEvent(new Event("open-contact-modal"));
            }}
          >
            SOLICITAR COTIZACIÓN
          </Link>
        </div>
      </div>
    </header>
  );
}
