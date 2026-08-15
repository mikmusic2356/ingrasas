import Link from "next/link";
import Image from "next/image";

export default function Nosotros() {
  return (
    <main>
      <div className="page-header-spacer"></div>
      <section className="page-hero" style={{ position: "relative", overflow: "hidden", height: "420px", display: "flex", alignItems: "center" }}>
        <Image 
          src="/images/hero/Industrial_workers_banner_cover_202608151541.jpeg" 
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

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "3rem" }}>
              <div style={{ backgroundColor: "var(--color-light-bg)", padding: "2rem", borderRadius: "8px", border: "1px solid var(--color-divider)" }}>
                <h3 style={{ fontSize: "1.4rem", marginBottom: "0.75rem", fontFamily: "var(--font-primary)", color: "var(--color-blue-dark)" }}>Nuestra Misión</h3>
                <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "var(--color-text-medium)" }}>
                  Desarrollar y suministrar materias primas de origen animal para diferentes aplicaciones industriales, así como ofrecer soluciones especializadas para la gestión y valorización de materiales grasos, contribuyendo al crecimiento sostenible de nuestros clientes mediante procesos responsables, eficientes e innovadores.
                </p>
              </div>
              
              <div style={{ backgroundColor: "var(--color-light-bg)", padding: "2rem", borderRadius: "8px", border: "1px solid var(--color-divider)" }}>
                <h3 style={{ fontSize: "1.4rem", marginBottom: "0.75rem", fontFamily: "var(--font-primary)", color: "var(--color-blue-dark)" }}>Nuestra Visión</h3>
                <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "var(--color-text-medium)" }}>
                  Ser una empresa referente en Colombia y Latinoamérica en el suministro de materias primas de origen animal y en el desarrollo de soluciones de rendering animal, reconocida por la calidad, la innovación, la sostenibilidad y la confianza de nuestros clientes.
                </p>
              </div>
            </div>

            <h3 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", textTransform: "uppercase", fontFamily: "var(--font-primary)", borderBottom: "2px solid var(--color-orange-primary)", paddingBottom: "0.5rem" }}>
              Nuestros Valores
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", fontSize: "1rem", color: "var(--color-gray-dark)", lineHeight: "1.6" }}>
              <div>
                <p style={{ marginBottom: "1rem" }}><strong>Compromiso:</strong> Cumplimos con responsabilidad nuestros acuerdos y procesos, construyendo relaciones de confianza con clientes and aliados.</p>
                <p style={{ marginBottom: "1rem" }}><strong>Calidad:</strong> Trabajamos para ofrecer materias primas and soluciones que respondan a los más altos estándares de desempeño y confiabilidad.</p>
                <p style={{ marginBottom: "1rem" }}><strong>Integridad:</strong> Actuamos con ética, transparencia y respeto en cada una de nuestras relaciones comerciales.</p>
              </div>
              <div>
                <p style={{ marginBottom: "1rem" }}><strong>Innovación:</strong> Buscamos mejorar continuamente nuestros procesos y desarrollar soluciones que generen mayor valor para la industria.</p>
                <p style={{ marginBottom: "1rem" }}><strong>Servicio:</strong> Brindamos atención cercana, oportuna y personalizada, orientada a comprender y atender las necesidades de cada cliente.</p>
                <p style={{ marginBottom: "1rem" }}><strong>Sostenibilidad:</strong> Promovemos el aprovechamiento responsable de los recursos, impulsando prácticas que contribuyen al desarrollo de una industria más eficiente y comprometida con el medio ambiente.</p>
              </div>
            </div>
            
            <Link href="/contacto" className="cta-button" style={{ display: "inline-block", marginTop: "2rem" }}>
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
