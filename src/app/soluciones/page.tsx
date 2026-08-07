"use client";

import Link from "next/link";
import Image from "next/image";

export default function Soluciones() {
  return (
    <main>
      <div className="page-header-spacer"></div>
      <section className="page-hero">
        <Image 
          src="/images/hero-bg.jpg" 
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

      <section className="page-content-wrapper section-padding">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "4rem" }}>
          <div>
            <h2 style={{ fontSize: "2.2rem", marginBottom: "1.5rem", textTransform: "uppercase", fontFamily: "var(--font-primary)" }}>
              Servicios Especializados en Rendering y Gestión de Grasas
            </h2>
            <p style={{ color: "var(--color-gray-dark)", fontSize: "1.15rem", lineHeight: "1.8", marginBottom: "2rem" }}>
              Ofrecemos soluciones especializadas para la industria avícola mediante un sistema integral para la recuperación, gestión y valorización de materiales grasos. Nuestro modelo de trabajo está diseñado para apoyar a plantas de beneficio y empresas del sector en la optimización del manejo de estos materiales, favoreciendo su aprovechamiento responsable y contribuyendo a una operación más eficiente y sostenible.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "3.5rem" }}>
              <div style={{ paddingBottom: "1.5rem", borderBottom: "1px solid var(--color-divider)" }}>
                <h3 style={{ fontSize: "1.4rem", fontFamily: "var(--font-primary)", color: "var(--color-blue-dark)", marginBottom: "0.5rem" }}>
                  Recuperación, Gestión y Valorización
                </h3>
                <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "var(--color-text-medium)" }}>
                  Implementamos un sistema especializado para la recuperación, gestión y valorización de materiales grasos de origen avícola, permitiendo su incorporación como materias primas para diferentes aplicaciones industriales. Nuestro servicio busca optimizar el manejo de estos materiales desde su generación hasta su aprovechamiento, aportando valor tanto para nuestros clientes como para la cadena productiva.
                </p>
              </div>

              <div style={{ paddingBottom: "1.5rem", borderBottom: "1px solid var(--color-divider)" }}>
                <h3 style={{ fontSize: "1.4rem", fontFamily: "var(--font-primary)", color: "var(--color-blue-dark)", marginBottom: "0.5rem" }}>
                  Gestión Ambiental
                </h3>
                <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "var(--color-text-medium)" }}>
                  Nuestro modelo contribuye a reducir la carga contaminante generada por los materiales grasos sobre los sistemas de tratamiento de aguas residuales (PTAR), favoreciendo una operación más eficiente y apoyando los objetivos ambientales de nuestros aliados.
                </p>
              </div>

              <div style={{ paddingBottom: "1.5rem" }}>
                <h3 style={{ fontSize: "1.4rem", fontFamily: "var(--font-primary)", color: "var(--color-blue-dark)", marginBottom: "0.5rem" }}>
                  Acompañamiento Especializado
                </h3>
                <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "var(--color-text-medium)" }}>
                  Brindamos acompañamiento técnico y comercial durante todo el proceso de implementación de nuestras soluciones, trabajando de la mano con cada cliente para adaptar nuestro modelo a las necesidades operativas de su empresa y garantizar una gestión eficiente de los materiales grasos.
                </p>
              </div>
            </div>

            <h3 style={{ fontSize: "1.6rem", textTransform: "uppercase", fontFamily: "var(--font-primary)", borderBottom: "2px solid var(--color-orange-primary)", paddingBottom: "0.5rem", marginBottom: "1.5rem" }}>
              Beneficios Clave
            </h3>
            <ul style={{ paddingLeft: "1.5rem", fontSize: "1rem", color: "var(--color-text-dark)", lineHeight: "1.8", display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "3rem" }}>
              <li>Implementación de un sistema especializado para la recuperación y gestión de materiales grasos.</li>
              <li>Aprovechamiento responsable y valorización de materiales de origen animal.</li>
              <li>Reducción de la carga contaminante sobre los sistemas PTAR.</li>
              <li>Fortalecimiento del desempeño ambiental de la operación.</li>
              <li>Contribución a modelos de economía circular.</li>
              <li>Acompañamiento técnico y comercial durante todo el proceso.</li>
              <li>Soluciones adaptadas a las necesidades de cada empresa.</li>
            </ul>
          </div>

          <div>
            <div style={{ backgroundColor: "var(--color-light-bg)", padding: "2.5rem 2rem", borderRadius: "12px", border: "1px solid var(--color-divider)", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <h4 style={{ fontFamily: "var(--font-primary)", textTransform: "uppercase", fontSize: "1.25rem", color: "var(--color-blue-dark)", borderBottom: "1px solid var(--color-divider)", paddingBottom: "0.5rem" }}>
                ¿Desea implementar una solución para su empresa?
              </h4>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "var(--color-text-medium)" }}>
                Nuestro equipo está preparado para evaluar las necesidades de su operación y desarrollar una solución adaptada a sus procesos, garantizando un servicio confiable, eficiente y orientado a generar valor para su organización.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
                <Link 
                  href="/contacto" 
                  className="btn-orange-solid" 
                  style={{ backgroundColor: "#25d366", color: "#ffffff", boxShadow: "0 4px 10px rgba(37, 211, 102, 0.25)", textTransform: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new Event("open-contact-modal"));
                  }}
                >
                  🟢 Solicitar Información
                </Link>
                <Link 
                  href="/contacto" 
                  className="btn-white-solid" 
                  style={{ border: "1px solid var(--color-divider)", width: "100%", textAlign: "center", textTransform: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new Event("open-contact-modal"));
                  }}
                >
                  📞 Hablar con un Asesor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
