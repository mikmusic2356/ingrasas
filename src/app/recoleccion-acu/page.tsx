import Link from "next/link";
import Image from "next/image";

export default function RecoleccionAcu() {
  return (
    <main>
      <div className="page-header-spacer"></div>
      <section className="page-hero">
        <Image 
          src="/images/waste-oil.jpg" 
          alt="Recolección ACU Banner" 
          fill
          priority
          className="hero-bg"
          style={{ opacity: 0.25 }}
        />
        <div className="hero-overlay"></div>
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <h1 className="page-title">Recolección de ACU</h1>
          <p className="hero-desc" style={{ margin: "0 auto", textAlign: "center" }}>
            Servicio profesional y certificado de recolección de Aceite de Cocina Usado para el sector HORECA e industrial.
          </p>
        </div>
      </section>

      <section className="page-content-wrapper section-padding">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", textTransform: "uppercase", fontFamily: "var(--font-primary)" }}>
              Evita sanciones y protege el planeta
            </h2>
            <p style={{ color: "var(--color-gray-dark)", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "1.5rem" }}>
              El vertido inadecuado de aceite por desagües tapona tuberías, atrae plagas y contamina miles de litros de agua. Biotrade Colombia ofrece un canal seguro, legal y completamente trazable para la recolección de tus residuos de cocina.
            </p>
            <p style={{ color: "var(--color-gray-dark)", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "2rem" }}>
              Entregamos a todos nuestros clientes comerciales (hoteles, restaurantes, casinos) los <strong>certificados de disposición final ambiental</strong> exigidos por las secretarías de salud y autoridades ambientales locales, garantizando que el residuo ha sido transformado en biocombustible sostenible.
            </p>
            
            <Link href="/contacto" className="cta-button" style={{ display: "inline-block" }}>
              Solicitar Contenedores y Recolección
            </Link>
          </div>
          
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image 
              src="/images/waste-oil.jpg" 
              alt="Contenedor de Aceite Usado" 
              width={500} 
              height={375} 
              style={{ borderRadius: "20px", boxShadow: "0 15px 30px rgba(0,0,0,0.08)", border: "4px solid var(--color-light-bg)" }}
            />
          </div>
        </div>
      </section>

      {/* How it works grid */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-light-bg)", borderTop: "1px solid var(--color-gray-light)" }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: "4rem" }}>
            <span className="section-subtitle">Paso a Paso</span>
            <h2 className="section-title">¿Cómo funciona nuestro servicio?</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem" }}>
            <div style={{ backgroundColor: "var(--color-white)", padding: "2.5rem 2rem", borderRadius: "16px", border: "1px solid rgba(0,0,0,0.03)" }}>
              <div style={{ display: "inline-flex", width: "40px", height: "40px", backgroundColor: "rgba(0, 208, 132, 0.08)", color: "var(--color-green-primary)", borderRadius: "50%", alignItems: "center", justifyContent: "center", fontWeight: "bold", marginBottom: "1.5rem" }}>
                1
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "0.5rem" }}>Solicitud</h3>
              <p style={{ color: "var(--color-gray-medium)", fontSize: "0.95rem", lineHeight: "1.5" }}>
                Te registras con nosotros y te suministramos contenedores herméticos específicos para ACU sin ningún costo adicional.
              </p>
            </div>

            <div style={{ backgroundColor: "var(--color-white)", padding: "2.5rem 2rem", borderRadius: "16px", border: "1px solid rgba(0,0,0,0.03)" }}>
              <div style={{ display: "inline-flex", width: "40px", height: "40px", backgroundColor: "rgba(0, 208, 132, 0.08)", color: "var(--color-green-primary)", borderRadius: "50%", alignItems: "center", justifyContent: "center", fontWeight: "bold", marginBottom: "1.5rem" }}>
                2
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "0.5rem" }}>Retiro</h3>
              <p style={{ color: "var(--color-gray-medium)", fontSize: "0.95rem", lineHeight: "1.5" }}>
                Nuestra flota logística autorizada retira los contenedores llenos y los reemplaza por limpios según la frecuencia acordada.
              </p>
            </div>

            <div style={{ backgroundColor: "var(--color-white)", padding: "2.5rem 2rem", borderRadius: "16px", border: "1px solid rgba(0,0,0,0.03)" }}>
              <div style={{ display: "inline-flex", width: "40px", height: "40px", backgroundColor: "rgba(0, 208, 132, 0.08)", color: "var(--color-green-primary)", borderRadius: "50%", alignItems: "center", justifyContent: "center", fontWeight: "bold", marginBottom: "1.5rem" }}>
                3
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "0.5rem" }}>Certificación</h3>
              <p style={{ color: "var(--color-gray-medium)", fontSize: "0.95rem", lineHeight: "1.5" }}>
                Emitimos los manifiestos de recolección y certificados ambientales de disposición final para tus registros y auditorías sanitarias.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
