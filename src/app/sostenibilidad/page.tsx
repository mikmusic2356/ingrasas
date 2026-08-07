import Link from "next/link";
import Image from "next/image";

export default function Sostenibilidad() {
  return (
    <main>
      <div className="page-header-spacer"></div>
      <section className="page-hero">
        <Image 
          src="/images/circular-leaf-bg.jpg" 
          alt="Sostenibilidad Banner" 
          fill
          priority
          className="hero-bg"
          style={{ opacity: 0.25 }}
        />
        <div className="hero-overlay"></div>
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <h1 className="page-title">Sostenibilidad</h1>
          <p className="hero-desc" style={{ margin: "0 auto", textAlign: "center" }}>
            Menos impacto ambiental. Más valor para la industria.
          </p>
        </div>
      </section>

      <section className="page-content-wrapper section-padding">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "4rem" }}>
          <div>
            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", textTransform: "uppercase", fontFamily: "var(--font-primary)" }}>
              Compromiso con el Crecimiento Sostenible
            </h2>
            <p style={{ color: "var(--color-gray-dark)", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "1.5rem" }}>
              En INGRASAS desarrollamos soluciones que ayudan a la industria avícola a gestionar de forma más eficiente los materiales grasos generados en sus procesos.
            </p>
            <p style={{ color: "var(--color-gray-dark)", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "3rem" }}>
              Contribuimos a reducir la carga contaminante sobre los sistemas de tratamiento de aguas residuales, promoviendo una operación más limpia y sostenible, mientras impulsamos la transformación de estos materiales en materias primas de alto valor para diferentes aplicaciones industriales.
            </p>

            <h3 style={{ fontSize: "1.6rem", textTransform: "uppercase", fontFamily: "var(--font-primary)", borderBottom: "2px solid var(--color-orange-primary)", paddingBottom: "0.5rem", marginBottom: "2rem" }}>
              ¿Cómo contribuimos?
            </h3>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "3.5rem" }}>
              {/* 1. Aprovechamiento responsable */}
              <div style={{ backgroundColor: "var(--color-light-bg)", padding: "1.75rem", borderRadius: "8px", border: "1px solid var(--color-divider)" }}>
                <h4 style={{ fontSize: "1.15rem", color: "var(--color-blue-dark)", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span>♻️</span> Aprovechamiento responsable
                </h4>
                <p style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "var(--color-text-medium)" }}>
                  Impulsamos la valorización de materiales grasos de origen animal, convirtiéndolos en materias primas para diferentes aplicaciones industriales.
                </p>
              </div>

              {/* 2. Menor carga contaminante */}
              <div style={{ backgroundColor: "var(--color-light-bg)", padding: "1.75rem", borderRadius: "8px", border: "1px solid var(--color-divider)" }}>
                <h4 style={{ fontSize: "1.15rem", color: "var(--color-blue-dark)", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span>💧</span> Menor carga contaminante
                </h4>
                <p style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "var(--color-text-medium)" }}>
                  Contribuimos a disminuir la cantidad de grasas que ingresan a los sistemas de tratamiento de aguas residuales (PTAR), favoreciendo una operación más eficiente.
                </p>
              </div>

              {/* 3. Economía circular */}
              <div style={{ backgroundColor: "var(--color-light-bg)", padding: "1.75rem", borderRadius: "8px", border: "1px solid var(--color-divider)" }}>
                <h4 style={{ fontSize: "1.15rem", color: "var(--color-blue-dark)", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span>🌱</span> Economía circular
                </h4>
                <p style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "var(--color-text-medium)" }}>
                  Promovemos un modelo donde los materiales de origen animal adquieren un nuevo valor dentro de la cadena productiva.
                </p>
              </div>

              {/* 4. Aliado estratégico */}
              <div style={{ backgroundColor: "var(--color-light-bg)", padding: "1.75rem", borderRadius: "8px", border: "1px solid var(--color-divider)" }}>
                <h4 style={{ fontSize: "1.15rem", color: "var(--color-blue-dark)", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span>🤝</span> Aliado estratégico
                </h4>
                <p style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "var(--color-text-medium)" }}>
                  Acompañamos a nuestros clientes con soluciones que fortalecen su desempeño ambiental y apoyan sus objetivos de sostenibilidad.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div style={{ backgroundColor: "var(--color-blue-dark)", color: "var(--color-white)", padding: "3rem 2rem", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <h4 style={{ fontFamily: "var(--font-primary)", textTransform: "uppercase", fontSize: "1.3rem", color: "var(--color-orange-primary)", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.5rem" }}>
                Construyendo una industria más sostenible
              </h4>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.7", color: "#cbd5e0" }}>
                Creemos que el crecimiento industrial y la sostenibilidad pueden avanzar de la mano. Por ello, trabajamos para desarrollar soluciones que integran la gestión responsable de materiales grasos con el suministro de materias primas de origen animal, generando valor para nuestros clientes y contribuyendo a una industria más eficiente, competitiva y comprometida con el medio ambiente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
