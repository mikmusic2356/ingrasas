import Link from "next/link";
import Image from "next/image";

export default function Industrias() {
  return (
    <main>
      <div className="page-header-spacer"></div>
      <section className="page-hero">
        <Image 
          src="/images/hero-bg.jpg" 
          alt="Industrias Banner" 
          fill
          priority
          className="hero-bg"
          style={{ opacity: 0.2 }}
        />
        <div className="hero-overlay"></div>
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <h1 className="page-title">Industrias</h1>
          <p className="hero-desc" style={{ margin: "0 auto", textAlign: "center" }}>
            Suministro estratégico de insumos grasos para diversos sectores industriales.
          </p>
        </div>
      </section>

      <section className="page-content-wrapper section-padding">
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto 4rem auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", textTransform: "uppercase", fontFamily: "var(--font-primary)" }}>
              Sectores que Atendemos
            </h2>
            <p style={{ color: "var(--color-gray-dark)", fontSize: "1.1rem", lineHeight: "1.8" }}>
              En INGRASAS S.A.S. suministramos materias primas de origen animal que contribuyen al desarrollo de diversos sectores industriales. Nuestro compromiso es ofrecer productos confiables, con calidad consistente y un suministro orientado a las necesidades de cada cliente.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", marginBottom: "5rem" }}>
            {/* 1. Nutrición Animal */}
            <div style={{ backgroundColor: "var(--color-light-bg)", padding: "2.5rem 2rem", borderRadius: "8px", border: "1px solid var(--color-divider)", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <h3 style={{ fontSize: "1.4rem", fontFamily: "var(--font-primary)", color: "var(--color-blue-dark)" }}>Nutrición Animal</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "var(--color-text-medium)", flexGrow: 1 }}>
                Suministramos materias primas utilizadas en la elaboración de alimentos balanceados, aportando soluciones que responden a los requerimientos de la industria de nutrición animal.
              </p>
            </div>

            {/* 2. Biocombustibles */}
            <div style={{ backgroundColor: "var(--color-light-bg)", padding: "2.5rem 2rem", borderRadius: "8px", border: "1px solid var(--color-divider)", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <h3 style={{ fontSize: "1.4rem", fontFamily: "var(--font-primary)", color: "var(--color-blue-dark)" }}>Biocombustibles</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "var(--color-text-medium)", flexGrow: 1 }}>
                Nuestras materias primas son empleadas en la producción de biocombustibles, contribuyendo al desarrollo de alternativas energéticas y procesos más sostenibles.
              </p>
            </div>

            {/* 3. Industria Oleoquímica */}
            <div style={{ backgroundColor: "var(--color-light-bg)", padding: "2.5rem 2rem", borderRadius: "8px", border: "1px solid var(--color-divider)", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <h3 style={{ fontSize: "1.4rem", fontFamily: "var(--font-primary)", color: "var(--color-blue-dark)" }}>Industria Oleoquímica</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "var(--color-text-medium)", flexGrow: 1 }}>
                Abastecemos a la industria oleoquímica con materias primas destinadas a la fabricación de ácidos grasos, derivados oleoquímicos y otros productos de aplicación industrial.
              </p>
            </div>

            {/* 4. Jabonería */}
            <div style={{ backgroundColor: "var(--color-light-bg)", padding: "2.5rem 2rem", borderRadius: "8px", border: "1px solid var(--color-divider)", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <h3 style={{ fontSize: "1.4rem", fontFamily: "var(--font-primary)", color: "var(--color-blue-dark)" }}>Jabonería</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "var(--color-text-medium)", flexGrow: 1 }}>
                Suministramos materias primas para la elaboración de jabones y productos de limpieza, adaptándonos a las necesidades de los diferentes procesos de fabricación.
              </p>
            </div>
          </div>

          <div style={{ backgroundColor: "var(--color-blue-dark)", color: "var(--color-white)", padding: "3rem", borderRadius: "12px", textAlign: "center" }}>
            <h3 style={{ fontSize: "1.8rem", color: "var(--color-orange-primary)", marginBottom: "1rem", fontFamily: "var(--font-primary)" }}>
              Un aliado para su industria
            </h3>
            <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.05rem", lineHeight: "1.7", color: "#cbd5e0" }}>
              Trabajamos para establecer relaciones comerciales de largo plazo, ofreciendo soluciones confiables, atención personalizada y un suministro eficiente que aporte valor a cada uno de nuestros clientes.
            </p>
            <Link href="/contacto" className="btn-white-solid" style={{ marginTop: "2rem" }}>
              Solicitar Asesoría Comercial
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
