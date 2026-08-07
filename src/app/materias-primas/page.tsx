"use client";

import Link from "next/link";
import Image from "next/image";

export default function MateriasPrimas() {
  return (
    <main>
      <div className="page-header-spacer"></div>
      <section className="page-hero">
        <Image 
          src="/images/hero/hero oleoquimica.jpeg" 
          alt="Materias Primas Banner" 
          fill
          priority
          className="hero-bg"
          style={{ objectFit: "cover", objectPosition: "center", opacity: 0.45 }}
        />
        <div className="hero-overlay"></div>
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <h1 className="page-title">Materias Primas</h1>
          <p className="hero-desc" style={{ margin: "0 auto", textAlign: "center" }}>
            Suministro confiable de materias primas de origen animal para diversas aplicaciones industriales.
          </p>
        </div>
      </section>

      <section className="page-content-wrapper section-padding">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "4rem" }}>
          <div>
            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", textTransform: "uppercase", fontFamily: "var(--font-primary)" }}>
              Suministro de Materias Primas
            </h2>
            <p style={{ color: "var(--color-gray-dark)", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "1.5rem" }}>
              Suministramos materias primas de origen animal para diferentes aplicaciones industriales, ofreciendo productos confiables que responden a las necesidades técnicas, logísticas y comerciales de nuestros clientes.
            </p>
            <p style={{ color: "var(--color-gray-dark)", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "2.5rem" }}>
              Nuestro compromiso es garantizar un suministro eficiente, calidad consistente y acompañamiento personalizado para cada proyecto.
            </p>

            {/* Product detail */}
            <div style={{ backgroundColor: "var(--color-light-bg)", padding: "2.5rem", borderRadius: "12px", border: "1px solid var(--color-divider)", marginBottom: "3rem" }}>
              <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem", fontFamily: "var(--font-primary)", color: "var(--color-blue-dark)" }}>
                Aceite de Pollo
              </h3>
              
              <h4 style={{ fontSize: "1.05rem", textTransform: "uppercase", fontWeight: "700", marginBottom: "0.5rem", color: "var(--color-text-dark)", fontFamily: "var(--font-secondary)" }}>
                Descripción
              </h4>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "var(--color-text-medium)", marginBottom: "1.5rem" }}>
                El aceite de pollo es una grasa de origen animal obtenida mediante procesos de rendering, utilizada como materia prima en diferentes aplicaciones industriales. Se caracteriza por su versatilidad, estabilidad y propiedades físico-químicas, lo que lo convierte en un insumo ampliamente utilizado por industrias que requieren materias primas confiables y de calidad consistente.
              </p>

              <h4 style={{ fontSize: "1.05rem", textTransform: "uppercase", fontWeight: "700", marginBottom: "0.5rem", color: "var(--color-text-dark)", fontFamily: "var(--font-secondary)" }}>
                Aplicaciones
              </h4>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "var(--color-text-medium)", marginBottom: "1.5rem" }}>
                El aceite de pollo tiene un amplio campo de aplicación en diferentes sectores industriales, entre ellos:
              </p>
              <ul style={{ paddingLeft: "1.5rem", fontSize: "0.95rem", color: "var(--color-text-medium)", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                <li>Nutrición animal.</li>
                <li>Biocombustibles.</li>
                <li>Industria oleoquímica.</li>
                <li>Jabonería.</li>
                <li>Industria química.</li>
              </ul>

              <h4 style={{ fontSize: "1.05rem", textTransform: "uppercase", fontWeight: "700", marginBottom: "0.5rem", color: "var(--color-text-dark)", fontFamily: "var(--font-secondary)" }}>
                Presentación
              </h4>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "var(--color-text-medium)", marginBottom: "1.5rem" }}>
                El producto puede suministrarse en diferentes presentaciones y volúmenes, de acuerdo con los requerimientos logísticos y comerciales de cada cliente.
              </p>

              <h4 style={{ fontSize: "1.05rem", textTransform: "uppercase", fontWeight: "700", marginBottom: "0.5rem", color: "var(--color-text-dark)", fontFamily: "var(--font-secondary)" }}>
                Especificaciones
              </h4>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "var(--color-text-medium)" }}>
                Las especificaciones técnicas se establecen de acuerdo con las necesidades de cada aplicación y las condiciones comerciales acordadas con el cliente. La ficha técnica y la documentación correspondiente se suministran bajo solicitud.
              </p>
            </div>
            
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link 
                href="/contacto" 
                className="btn-orange-solid" 
                style={{ textTransform: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new Event("open-contact-modal"));
                }}
              >
                📄 Solicitar Ficha Técnica
              </Link>
              <Link 
                href="/contacto" 
                className="btn-orange-solid" 
                style={{ backgroundColor: "#25d366", color: "#ffffff", boxShadow: "0 4px 10px rgba(37, 211, 102, 0.25)", textTransform: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new Event("open-contact-modal"));
                }}
              >
                🟢 Solicitar Cotización
              </Link>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ position: "relative", width: "100%", height: "260px", borderRadius: "8px", overflow: "hidden", border: "1px solid var(--color-divider)" }}>
              <Image 
                src="/images/Golden_chicken_oil_in_beaker_202608032308.jpeg" 
                alt="Aceite de pollo Ingrasas" 
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ backgroundColor: "var(--color-blue-dark)", color: "var(--color-white)", padding: "2.5rem 2rem", borderRadius: "8px", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <h4 style={{ fontFamily: "var(--font-primary)", textTransform: "uppercase", fontSize: "1.25rem", color: "var(--color-orange-primary)", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.5rem" }}>
                ¿Necesita más información?
              </h4>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#cbd5e0" }}>
                Nuestro equipo está disponible para brindar información técnica y comercial sobre este producto, así como asesorarlo en la solución que mejor se adapte a las necesidades de su empresa.
              </p>
              <Link 
                href="/contacto" 
                className="btn-white-solid" 
                style={{ alignSelf: "flex-start", marginTop: "1rem", width: "100%", textAlign: "center" }}
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new Event("open-contact-modal"));
                }}
              >
                Contactar Ventas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
