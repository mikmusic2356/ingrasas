import Image from "next/image";

export default function Contacto() {
  return (
    <main>
      <div className="page-header-spacer"></div>
      <section className="page-hero">
        <Image 
          src="/images/hero-bg.jpg" 
          alt="Contacto Banner" 
          fill
          priority
          className="hero-bg"
          style={{ opacity: 0.2 }}
        />
        <div className="hero-overlay"></div>
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <h1 className="page-title">Contacto</h1>
          <p className="hero-desc" style={{ margin: "0 auto", textAlign: "center" }}>
            Estamos listos para ser su aliado estratégico.
          </p>
        </div>
      </section>

      <section className="page-content-wrapper section-padding">
        <div className="container">
          <div style={{ maxWidth: "900px", margin: "0 auto 4rem auto", textAlign: "center" }}>
            <p style={{ color: "var(--color-gray-dark)", fontSize: "1.15rem", lineHeight: "1.8" }}>
              En INGRASAS S.A.S. trabajamos para ofrecer soluciones adaptadas a las necesidades de cada cliente. Si desea conocer más sobre nuestras materias primas, implementar nuestras soluciones para la industria avícola o solicitar una cotización, nuestro equipo estará disponible para atender su requerimiento.
            </p>
          </div>

          <div className="contact-grid" style={{ marginBottom: "5rem" }}>
            {/* Form */}
            <div>
              <h2 style={{ fontSize: "1.75rem", marginBottom: "0.5rem", textTransform: "uppercase", fontFamily: "var(--font-primary)" }}>
                Solicite una Cotización
              </h2>
              <p style={{ color: "var(--color-text-medium)", fontSize: "0.95rem", marginBottom: "2rem", lineHeight: "1.5" }}>
                Complete el formulario y uno de nuestros asesores se pondrá en contacto con usted a la mayor brevedad para brindarle información técnica y comercial.
              </p>

              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre completo</label>
                  <input type="text" id="nombre" name="nombre" required placeholder="Escriba su nombre y apellido" />
                </div>

                <div className="form-group">
                  <label htmlFor="empresa">Empresa</label>
                  <input type="text" id="empresa" name="empresa" required placeholder="Nombre de su organización" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Correo electrónico</label>
                  <input type="email" id="email" name="email" required placeholder="ejemplo@correo.com" />
                </div>

                <div className="form-group">
                  <label htmlFor="telefono">Teléfono</label>
                  <input type="tel" id="telefono" name="telefono" required placeholder="+57 300 000 0000" />
                </div>

                <div className="form-group">
                  <label htmlFor="ciudad">Ciudad / País</label>
                  <input type="text" id="ciudad" name="ciudad" required placeholder="Bogotá, Colombia" />
                </div>

                <div className="form-group">
                  <label htmlFor="interes">Materia prima o solución de interés</label>
                  <select id="interes" name="interes" required>
                    <option value="">Seleccione una opción</option>
                    <option value="aceite-pollo">Aceite de Pollo</option>
                    <option value="soluciones-avicolas">Soluciones para la Industria Avícola</option>
                    <option value="otro">Otro requerimiento</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="cantidad">Cantidad requerida</label>
                  <input type="text" id="cantidad" name="cantidad" placeholder="Ej. 10 Toneladas mensuales" />
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea id="mensaje" name="mensaje" rows={5} placeholder="Detalle su solicitud aquí..."></textarea>
                </div>

                <button type="submit" className="submit-btn" style={{ cursor: "pointer" }}>
                  🟢 Enviar Solicitud
                </button>
              </form>
            </div>

            {/* Information Sidebar */}
            <div className="contact-info-cards">
              <h2 style={{ fontSize: "1.75rem", marginBottom: "1.5rem", textTransform: "uppercase", fontFamily: "var(--font-primary)" }}>
                Información de Contacto
              </h2>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-card-details">
                  <h3>Ubicación</h3>
                  <p>Bogotá D.C., Colombia</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-card-details">
                  <h3>Teléfono</h3>
                  <p>+57 313 510 0495</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div className="contact-card-details">
                  <h3>Correo electrónico</h3>
                  <p>info@ingrasas.com</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="contact-card-details">
                  <h3>Horario de atención</h3>
                  <p>Lunes a sábado<br />7:00 a.m. – 5:00 p.m.</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"></path>
                  </svg>
                </div>
                <div className="contact-card-details">
                  <h3>Redes sociales</h3>
                  <p>Instagram: @ingrasas_co</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: "var(--color-light-bg)", padding: "3rem", borderRadius: "12px", border: "1px solid var(--color-divider)", textAlign: "center" }}>
            <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.05rem", lineHeight: "1.7", color: "var(--color-text-dark)", fontWeight: 500 }}>
              Nuestro equipo está preparado para brindarle asesoría personalizada, resolver sus inquietudes y ofrecer soluciones confiables para el suministro de materias primas de origen animal y la implementación de soluciones especializadas para la industria avícola. Esperamos la oportunidad de trabajar junto a su empresa y construir una relación comercial basada en la confianza, la calidad y el compromiso.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
