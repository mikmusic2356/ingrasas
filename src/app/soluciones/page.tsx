"use client";

import Link from "next/link";
import Image from "next/image";

export default function Soluciones() {
  return (
    <main>
      <div className="page-header-spacer"></div>
      <section className="page-hero">
        <Image 
          src="/images/soluciones tanque ingrasas.jpeg" 
          alt="Soluciones Banner" 
          fill
          priority
          className="hero-bg"
          style={{ opacity: 0.2 }}
        />
        <div className="hero-overlay"></div>
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <h1 className="page-title">Soluciones</h1>
          <p className="hero-desc" style={{ margin: "0 auto", textAlign: "center" }}>
            Soluciones Especializadas para la Industria Avícola.
          </p>
        </div>
      </section>

      <section className="page-content-wrapper section-padding" style={{ paddingBottom: "2rem" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "4rem" }}>
          <div>
            <h2 style={{ fontSize: "2.2rem", marginBottom: "1.5rem", textTransform: "uppercase", fontFamily: "var(--font-primary)" }}>
              Servicios Especializados en Rendering y Gestión de Grasas
            </h2>
            <p style={{ color: "var(--color-gray-dark)", fontSize: "1.15rem", lineHeight: "1.8", marginBottom: "2.5rem" }}>
              Ofrecemos soluciones especializadas para la industria avícola mediante un sistema integral para la recuperación, gestión y valorización de materiales grasos. Nuestro modelo de trabajo está diseñado para apoyar a plantas de beneficio y empresas del sector en la optimización del manejo de estos materiales, favoreciendo su aprovechamiento responsable y contribuyendo a una operación más eficiente y sostenible.
            </p>

            {/* Interactive Services Cards */}
            <div className="soluciones-servicios-list">
              <div className="soluciones-servicio-card">
                <h3>Recuperación, Gestión y Valorización</h3>
                <p>
                  Implementamos un sistema especializado para la recuperación, gestión y valorización de materiales grasos de origen avícola, permitiendo su incorporación como materias primas para diferentes aplicaciones industriales. Nuestro servicio busca optimizar el manejo de estos materiales desde su generación hasta su aprovechamiento, aportando valor tanto para nuestros clientes como para la cadena productiva.
                </p>
              </div>

              <div className="soluciones-servicio-card">
                <h3>Gestión Ambiental</h3>
                <p>
                  Nuestro modelo contribuye a reducir la carga contaminante generada por los materiales grasos sobre los sistemas de tratamiento de aguas residuales (PTAR), favoreciendo una operación más eficiente y apoyando los objetivos ambientales de nuestros aliados.
                </p>
              </div>

              <div className="soluciones-servicio-card">
                <h3>Acompañamiento Especializado</h3>
                <p>
                  Brindamos acompañamiento técnico y comercial durante todo el proceso de implementación de nuestras soluciones, trabajando de la mano con cada cliente para adaptar nuestro modelo a las necesidades operativas de su empresa y garantizar una gestión eficiente de los materiales grasos.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Decorative Process Image */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "450px", borderRadius: "12px", overflow: "hidden", border: "1px solid var(--color-divider)", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
              <Image 
                src="/images/soluciones.jpeg" 
                alt="Soluciones Ingrasas" 
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dark Benefits and CTA Banner Section */}
      <section style={{ padding: "0 0 4rem 0" }}>
        <div className="container">
          <div className="section-soluciones-beneficios-cta">
            <span className="beneficios-eyebrow">Ventajas Competitivas</span>
            <h2 className="beneficios-title">Beneficios</h2>

            {/* 7 Interactive Pills Grid */}
            <div className="beneficios-grid-custom">
              <div className="beneficio-pill-card">
                <div className="beneficio-check-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 8 8 12 12 16" />
                    <line x1="16" y1="12" x2="8" y2="12" />
                  </svg>
                </div>
                <span>Implementación de un sistema especializado para la recuperación y gestión de materiales grasos.</span>
              </div>

              <div className="beneficio-pill-card">
                <div className="beneficio-check-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 8 8 12 12 16" />
                    <line x1="16" y1="12" x2="8" y2="12" />
                  </svg>
                </div>
                <span>Aprovechamiento responsable y valorización de materiales de origen animal.</span>
              </div>

              <div className="beneficio-pill-card">
                <div className="beneficio-check-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 8 8 12 12 16" />
                    <line x1="16" y1="12" x2="8" y2="12" />
                  </svg>
                </div>
                <span>Reducción de la carga contaminante sobre los sistemas PTAR.</span>
              </div>

              <div className="beneficio-pill-card">
                <div className="beneficio-check-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 8 8 12 12 16" />
                    <line x1="16" y1="12" x2="8" y2="12" />
                  </svg>
                </div>
                <span>Fortalecimiento del desempeño ambiental de la operación.</span>
              </div>

              <div className="beneficio-pill-card">
                <div className="beneficio-check-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 8 8 12 12 16" />
                    <line x1="16" y1="12" x2="8" y2="12" />
                  </svg>
                </div>
                <span>Contribución a modelos de economía circular.</span>
              </div>

              <div className="beneficio-pill-card">
                <div className="beneficio-check-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 8 8 12 12 16" />
                    <line x1="16" y1="12" x2="8" y2="12" />
                  </svg>
                </div>
                <span>Acompañamiento técnico y comercial durante todo el proceso.</span>
              </div>

              <div className="beneficio-pill-card">
                <div className="beneficio-check-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 8 8 12 12 16" />
                    <line x1="16" y1="12" x2="8" y2="12" />
                  </svg>
                </div>
                <span>Soluciones adaptadas a las necesidades de cada empresa.</span>
              </div>
            </div>

            <hr className="beneficios-divider" />

            {/* Bottom CTA Block */}
            <div className="soluciones-cta-row">
              <div className="soluciones-cta-text">
                <h3>¿Desea implementar una solución para su empresa?</h3>
                <p>
                  Nuestro equipo está preparado para evaluar las necesidades de su operación y desarrollar una solución adaptada a sus procesos, garantizando un servicio confiable, eficiente y orientado a generar valor para su organización.
                </p>
              </div>

              <div className="soluciones-cta-buttons">
                <button 
                  onClick={() => window.dispatchEvent(new Event("open-contact-modal"))}
                  className="btn-cta-gold"
                >
                  <span style={{ display: "inline-block", width: "8px", height: "8px", backgroundColor: "#25d366", borderRadius: "50%" }}></span>
                  Solicitar Información &rarr;
                </button>
                <button 
                  onClick={() => window.dispatchEvent(new Event("open-contact-modal"))}
                  className="btn-cta-teal"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "0.25rem" }}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Hablar con un Asesor
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
