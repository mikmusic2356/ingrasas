import Link from "next/link";
import Image from "next/image";

export default function Nosotros() {
  return (
    <main>
      <div className="page-header-spacer"></div>
      <section className="page-hero" style={{ position: "relative", overflow: "hidden", height: "420px", display: "flex", alignItems: "center" }}>
        <Image 
          src="/images/hero/quienes somos.jpeg" 
          alt="Trabajadores Industriales Ingrasas" 
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="nosotros-banner-overlay"></div>
        <div className="container" style={{ position: "relative", zIndex: 10, textAlign: "center", color: "#ffffff" }}>
          <h1 className="page-title" style={{ fontFamily: "var(--font-primary)", fontSize: "3.5rem", fontWeight: "800", color: "#ffffff", letterSpacing: "0.05em", textShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", margin: 0 }}>
            QUIÉNES SOMOS
          </h1>
          <p className="hero-desc" style={{ margin: "1rem auto 0 auto", textAlign: "center", color: "#cbd5e1", fontSize: "1.1rem" }}>
            Impulsamos la industria con materias primas de origen animal y soluciones sostenibles.
          </p>
        </div>
      </section>

      <section className="page-content-wrapper section-padding">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "4rem" }}>
          <div>
            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", textTransform: "uppercase", fontFamily: "var(--font-primary)" }}>
              INGRASAS S.A.S.
            </h2>
            <p style={{ color: "var(--color-gray-dark)", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "1.5rem" }}>
              INGRASAS S.A.S. es una empresa colombiana especializada en rendering animal, dedicada al suministro de materias primas de origen animal para diferentes aplicaciones industriales.
            </p>
            <p style={{ color: "var(--color-gray-dark)", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "1.5rem" }}>
              Atendemos sectores como nutrición animal, biocombustibles, oleoquímica y jabonería, ofreciendo productos confiables, calidad consistente y un suministro orientado a responder de manera eficiente a las necesidades de cada cliente.
            </p>
            <p style={{ color: "var(--color-gray-dark)", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "1.5rem" }}>
              Como parte de nuestro compromiso con la industria, desarrollamos soluciones especializadas para la recuperación, gestión y valorización de materiales grasos en plantas de beneficio avícola, contribuyendo a optimizar su manejo, fortalecer el desempeño ambiental de nuestros aliados y promover un modelo basado en los principios de la economía circular.
            </p>
            <p style={{ color: "var(--color-gray-dark)", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "2rem" }}>
              En INGRASAS trabajamos para construir relaciones comerciales de largo plazo, integrando calidad, innovación, sostenibilidad y un servicio cercano que nos permite convertirnos en un aliado estratégico para nuestros clientes.
            </p>
            <div className="mision-vision-grid">
              <div className="nosotros-mv-card">
                <div className="nosotros-mv-card-header">
                  <div className="nosotros-mv-card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </div>
                  <h3>Nuestra Misión</h3>
                </div>
                <p>
                  Desarrollar y suministrar materias primas de origen animal para diferentes aplicaciones industriales, así como ofrecer soluciones especializadas para la gestión y valorización de materiales grasos, contribuyendo al crecimiento sostenible de nuestros clientes mediante procesos responsables, eficientes e innovadores.
                </p>
              </div>
              
              <div className="nosotros-mv-card">
                <div className="nosotros-mv-card-header">
                  <div className="nosotros-mv-card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <h3>Nuestra Visión</h3>
                </div>
                <p>
                  Ser una empresa referente en Colombia y Latinoamérica en el suministro de materias primas de origen animal y en el desarrollo de soluciones de rendering animal, reconocida por la calidad, la innovación, la sostenibilidad y la confianza de nuestros clientes.
                </p>
              </div>
            </div>

            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", textTransform: "uppercase", fontFamily: "var(--font-primary)", borderBottom: "2px solid var(--color-orange-primary)", paddingBottom: "0.5rem" }}>
              Nuestros Valores
            </h3>
            
            <div className="valores-grid-custom">
              {/* Valor 1 */}
              <div className="valor-card-custom">
                <div className="valor-card-icon-custom">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h4>Compromiso</h4>
                <p>Cumplimos con responsabilidad nuestros acuerdos y procesos, construyendo relaciones de confianza con clientes y aliados.</p>
              </div>

              {/* Valor 2 */}
              <div className="valor-card-custom">
                <div className="valor-card-icon-custom">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>
                <h4>Calidad</h4>
                <p>Trabajamos para ofrecer materias primas y soluciones que respondan a los más altos estándares de desempeño y confiabilidad.</p>
              </div>

              {/* Valor 3 */}
              <div className="valor-card-custom">
                <div className="valor-card-icon-custom">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="3" x2="12" y2="21" />
                    <line x1="2" y1="7" x2="22" y2="7" />
                    <path d="M5 7 3 13h4Z" />
                    <path d="M19 7l-2 6h4Z" />
                    <path d="M3 13c0 2.2 1.8 4 4 4" />
                    <path d="M17 13c0 2.2 1.8 4 4 4" />
                  </svg>
                </div>
                <h4>Integridad</h4>
                <p>Actuamos con ética, transparencia y respeto en cada una de nuestras relaciones comerciales.</p>
              </div>

              {/* Valor 4 */}
              <div className="valor-card-custom">
                <div className="valor-card-icon-custom">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </svg>
                </div>
                <h4>Innovación</h4>
                <p>Buscamos mejorar continuamente nuestros procesos y desarrollar soluciones que generen mayor valor para la industria.</p>
              </div>

              {/* Valor 5 */}
              <div className="valor-card-custom">
                <div className="valor-card-icon-custom">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0a2.17 2.17 0 0 0 3.08 0L15 8" />
                  </svg>
                </div>
                <h4>Servicio</h4>
                <p>Brindamos atención cercana, oportuna y personalizada, orientada a comprender y atender las necesidades de cada cliente.</p>
              </div>

              {/* Valor 6 */}
              <div className="valor-card-custom">
                <div className="valor-card-icon-custom">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.58 1 9.5a7 7 0 0 1-9 8.5z" />
                    <path d="M19 2 11 10" />
                  </svg>
                </div>
                <h4>Sostenibilidad</h4>
                <p>Promovemos el aprovechamiento responsable de los recursos, impulsando prácticas que contribuyen al desarrollo de una industria más eficiente.</p>
              </div>
            </div>

             <Link href="/contacto" className="cta-button" style={{ display: "inline-block", marginTop: "1rem" }}>
              Hablar con un Asesor
            </Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ position: "relative", width: "100%", borderRadius: "8px", overflow: "hidden", border: "1px solid var(--color-divider)", backgroundColor: "#f7fafc" }}>
              <Image 
                src="/images/quienes_somos_imagen.jpeg" 
                alt="Procesamiento industrial Ingrasas" 
                width={600}
                height={600}
                style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
              />
            </div>
            <div style={{ backgroundColor: "var(--color-light-bg)", padding: "2.5rem 2rem", borderRadius: "8px", border: "1px solid var(--color-divider)" }}>
              <h4 style={{ fontFamily: "var(--font-primary)", textTransform: "uppercase", marginBottom: "0.75rem", fontSize: "1.15rem", color: "var(--color-blue-dark)" }}>
                Rendering Animal
              </h4>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "var(--color-text-medium)" }}>
                Procesamos subproductos de origen animal transformándolos en grasas y proteínas útiles de alta calidad, promoviendo la circularidad industrial y reduciendo los residuos agropecuarios.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
