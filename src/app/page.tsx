"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main style={{ marginTop: "var(--header-height)" }}>
      {/* 1. Tall Hero Banner (Fiel a la captura subida) */}
      <section className="home-hero-banner">
        <Image 
          src="/images/hero-bg.jpg" 
          alt="Ingrasas Planta Industrial Sostenible" 
          fill
          priority
          className="home-hero-image"
        />
        <div className="hero-overlay-main"></div>
        <div className="hero-content-main">
          <h1 className="hero-title-main">
            MATERIAS PRIMAS DE ORIGEN ANIMAL Y SOLUCIONES PARA LA<br />INDUSTRIA
          </h1>
          <p className="hero-subtitle-main">
            Suministramos materias primas de origen animal para diferentes aplicaciones industriales y desarrollamos soluciones especializadas para la gestión y valorización de materiales grasos.
          </p>
          <Link href="/industrias" className="hero-btn-main">
            EXPLORAR INDUSTRIAS
          </Link>
        </div>
      </section>

      {/* 2. Overlapping Industry Cards (Fiel a la captura) */}
      <section id="industrias-home" className="container" style={{ position: "relative", zIndex: 10 }}>
        <div className="home-industries-grid">
          {/* Card 1: Nutrición Animal */}
          <div className="home-industry-card">
            <Image 
              src="/images/Farm_animals_representing_nutrition_202608032308.jpeg" 
              alt="Nutrición Animal" 
              fill
              className="card-bg-image"
            />
            <div className="card-overlay"></div>
            <div className="card-content">
              <h2 className="card-title">NUTRICIÓN ANIMAL</h2>
              <p className="card-desc">Suministramos materias primas utilizadas en la elaboración de alimentos balanceados.</p>
              <Link href="/alimento-concentrado-animal" className="card-link">
                MÁS SOBRE NUTRICIÓN ANIMAL &rarr;
              </Link>
            </div>
          </div>

          {/* Card 2: Biocombustibles */}
          <div className="home-industry-card">
            <Image 
              src="/images/bioetanol-biocombustiblesjpg.webp" 
              alt="Biocombustibles" 
              fill
              className="card-bg-image"
            />
            <div className="card-overlay"></div>
            <div className="card-content">
              <h2 className="card-title">BIOCOMBUSTIBLES</h2>
              <p className="card-desc">Materias primas empleadas en la producción de biocombustibles sostenibles.</p>
              <Link href="/biocombustibles" className="card-link">
                MÁS SOBRE BIOCOMBUSTIBLES &rarr;
              </Link>
            </div>
          </div>

          {/* Card 3: Industria Oleoquímica */}
          <div className="home-industry-card">
            <Image 
              src="/images/processes-liquids-oleochemicals-hero.webp" 
              alt="Industria Oleoquímica" 
              fill
              className="card-bg-image"
            />
            <div className="card-overlay"></div>
            <div className="card-content">
              <h2 className="card-title">OLEOQUÍMICA</h2>
              <p className="card-desc">Abastecemos con materias primas destinadas a la fabricación de ácidos grasos.</p>
              <Link href="/oleoquimica" className="card-link">
                MÁS SOBRE OLEOQUÍMICA &rarr;
              </Link>
            </div>
          </div>

          {/* Card 4: Jabonería */}
          <div className="home-industry-card">
            <Image 
              src="/images/jaboneria.jpg" 
              alt="Jabonería" 
              fill
              className="card-bg-image"
            />
            <div className="card-overlay"></div>
            <div className="card-content">
              <h2 className="card-title">JABONERÍA</h2>
              <p className="card-desc">Suministramos materias primas para la elaboración de jabones y limpieza.</p>
              <Link href="/jaboneria" className="card-link">
                MÁS SOBRE JABONERÍA &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Nuestros Valores */}
      <section className="section-valores">
        <div className="container">
          <div className="valores-header">
            <h2 className="valores-title">NUESTROS VALORES</h2>
            <p className="valores-subtitle">
              Principios fundamentales que guían nuestras operaciones y relaciones comerciales.
            </p>
          </div>

          <div className="valores-grid">
            {/* Valor 1: Compromiso */}
            <div className="valor-card">
              <div className="valor-card-decor"></div>
              <div className="valor-icon-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m11.5 12.5 1.5 1.5M10.5 11.5l-3-3a3.53 3.53 0 0 1 5-5l3 3M13.5 14.5l3 3a3.53 3.53 0 0 0 5-5l-3-3" />
                  <path d="m16.5 7.5-3-3a3.55 3.55 0 0 0-5 5l3 3M7.5 16.5l3 3a3.55 3.55 0 0 0 5-5l-3-3" />
                </svg>
              </div>
              <h3 className="valor-card-title">COMPROMISO</h3>
              <p className="valor-card-desc">
                Cumplimos con responsabilidad nuestros acuerdos y procesos, construyendo relaciones de confianza con clientes y aliados.
              </p>
            </div>

            {/* Valor 2: Calidad */}
            <div className="valor-card">
              <div className="valor-card-decor"></div>
              <div className="valor-icon-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 11 2 2 4-4" />
                </svg>
              </div>
              <h3 className="valor-card-title">CALIDAD</h3>
              <p className="valor-card-desc">
                Trabajamos para ofrecer materias primas y soluciones que respondan a los más altos estándares de desempeño y confiabilidad.
              </p>
            </div>

            {/* Valor 3: Integridad */}
            <div className="valor-card">
              <div className="valor-card-decor"></div>
              <div className="valor-icon-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
              </div>
              <h3 className="valor-card-title">INTEGRIDAD</h3>
              <p className="valor-card-desc">
                Actuamos con ética, transparencia y respeto en cada una de nuestras relaciones comerciales.
              </p>
            </div>

            {/* Valor 4: Innovación */}
            <div className="valor-card">
              <div className="valor-card-decor"></div>
              <div className="valor-icon-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3 className="valor-card-title">INNOVACIÓN</h3>
              <p className="valor-card-desc">
                Buscamos mejorar continuamente nuestros procesos y desarrollar soluciones que generen mayor valor para la industria.
              </p>
            </div>

            {/* Valor 5: Servicio */}
            <div className="valor-card">
              <div className="valor-card-decor"></div>
              <div className="valor-icon-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="valor-card-title">SERVICIO</h3>
              <p className="valor-card-desc">
                Brindamos atención cercana, oportuna y personalizada, orientada a comprender y atender las necesidades de cada cliente.
              </p>
            </div>

            {/* Valor 6: Sostenibilidad */}
            <div className="valor-card">
              <div className="valor-card-decor"></div>
              <div className="valor-icon-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                </svg>
              </div>
              <h3 className="valor-card-title">SOSTENIBILIDAD</h3>
              <p className="valor-card-desc">
                Promovemos el aprovechamiento responsable de los recursos, impulsando prácticas que contribuyen al desarrollo de una industria más eficiente y comprometida con el medio ambiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Suministro de Materias Primas */}
      <section className="section-materias-primas">
        <div className="container">
          <div className="materias-header">
            <span className="materias-badge">Materias Primas</span>
            <h2 className="materias-title">SUMINISTRO DE MATERIAS PRIMAS</h2>
            <p className="materias-desc">
              Suministramos materias primas de origen animal para diferentes aplicaciones industriales,
              ofreciendo productos confiables que responden a las necesidades técnicas, logísticas y
              comerciales de nuestros clientes.
            </p>
            <p className="materias-highlight">
              Nuestro compromiso es garantizar un suministro eficiente, calidad consistente y acompañamiento
              personalizado para cada proyecto.
            </p>
          </div>

          {/* Product Detail Card: Aceite de Pollo */}
          <div className="product-detail-card">
            <div className="product-card-header">
              <div className="product-header-info">
                <span className="product-eyebrow">Producto Destacado</span>
                <h3 className="product-title">ACEITE DE POLLO</h3>
                <span className="product-subtitle">Rendering Avícola de Alto Desempeño & Calidad Consistente</span>
              </div>
              <div className="product-header-actions">
                <a href="/docs/Politica-integral-INGRASAS-2026.pdf" download className="product-action-btn product-action-btn--primary">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "0.25rem" }}>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Solicitar Ficha Técnica
                </a>
                <button 
                  onClick={() => window.dispatchEvent(new Event("open-contact-modal"))}
                  className="product-action-btn product-action-btn--secondary"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: "0.25rem" }}>
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.167 1.455 4.743 1.456 5.485 0 9.948-4.614 9.951-10.28.002-2.744-1.058-5.324-2.986-7.255C16.428 1.143 13.856.082 11.123.082c-5.486 0-9.949 4.614-9.952 10.281-.001 1.785.466 3.529 1.353 5.068L1.442 21.65l6.205-1.63c1.513.826 3.013 1.256 4.6 1.256v-.004z"></path>
                  </svg>
                  Solicitar Cotización
                </button>
              </div>
            </div>

            <div className="product-card-body">
              <div className="product-body-left">
                {/* Descripcion */}
                <div>
                  <h4 className="product-section-title">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-orange-primary)" }}>
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    Descripción
                  </h4>
                  <div className="product-desc-text">
                    <p>
                      El aceite de pollo es una grasa de origen animal obtenida mediante procesos de rendering,
                      utilizada como materia prima en diferentes aplicaciones industriales.
                    </p>
                    <p>
                      Se caracteriza por su versatilidad, estabilidad y propiedades físico-químicas, lo que lo
                      convierte en un insumo ampliamente utilizado por industrias que requieren materias primas
                      confiables y de calidad consistente.
                    </p>
                  </div>
                </div>

                {/* Presentacion */}
                <div>
                  <h4 className="product-section-title">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-orange-primary)" }}>
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    Presentación
                  </h4>
                  <div className="product-box-presentation">
                    El producto puede suministrarse en diferentes presentaciones y volúmenes, de acuerdo con los
                    requerimientos logísticos y comerciales de cada cliente (Granel en carrotanque, contenedores
                    Flexitank, tambores de 200L, IBC tote).
                  </div>
                </div>
              </div>

              {/* Aplicaciones */}
              <div className="product-body-right">
                <h4 className="product-right-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-orange-primary)" }}>
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  Aplicaciones
                </h4>
                <p className="product-right-desc">
                  El aceite de pollo tiene un amplio campo de aplicación en diferentes sectores industriales, entre ellos:
                </p>
                <ul className="product-apps-list">
                  <li className="product-app-item">
                    <span className="product-app-check">✓</span>
                    Nutrición animal
                  </li>
                  <li className="product-app-item">
                    <span className="product-app-check">✓</span>
                    Biocombustibles
                  </li>
                  <li className="product-app-item">
                    <span className="product-app-check">✓</span>
                    Industria oleoquímica
                  </li>
                  <li className="product-app-item">
                    <span className="product-app-check">✓</span>
                    Jabonería
                  </li>
                  <li className="product-app-item">
                    <span className="product-app-check">✓</span>
                    Industria química
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    </section>

      {/* 4.5 Soluciones Especializadas para la Industria Avícola */}
      <section className="section-soluciones-avicolas">
        <div className="container">
          <div className="soluciones-header">
            <span className="soluciones-badge">Soluciones</span>
            <h2 className="soluciones-title">SOLUCIONES ESPECIALIZADAS PARA LA LA INDUSTRIA AVÍCOLA</h2>
            <p className="soluciones-desc">
              Ofrecemos soluciones especializadas para la industria avícola mediante un sistema integral para
              la recuperación, gestión y valorización de materiales grasos.
            </p>
            <p className="soluciones-highlight">
              Nuestro modelo de trabajo está diseñado para apoyar a plantas de beneficio y empresas del
              sector en la optimización del manejo de estos materiales, favoreciendo su aprovechamiento
              responsable y contribuyendo a una operación más eficiente y sostenible.
            </p>
          </div>

          <div className="soluciones-grid">
            {/* Solución 1 */}
            <div className="solucion-card">
              <div className="solucion-icon-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <h3 className="solucion-card-title">RECUPERACIÓN, GESTIÓN Y VALORIZACIÓN</h3>
              <p className="solucion-card-desc">
                Implementamos un sistema especializado para la recuperación, gestión y valorización de materiales
                grasos de origen avícola, permitiendo su incorporación como materias primas para diferentes
                aplicaciones industriales. Nuestro servicio busca optimizar el manejo de estos materiales
                desde su generación hasta su aprovechamiento, aportando valor tanto para nuestros clientes
                como para la cadena productiva.
              </p>
            </div>

            {/* Solución 2 */}
            <div className="solucion-card">
              <div className="solucion-icon-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z" />
                </svg>
              </div>
              <h3 className="solucion-card-title">GESTIÓN AMBIENTAL</h3>
              <p className="solucion-card-desc">
                Nuestro modelo contribuye a reducir la carga contaminante generada por los materiales grasos
                sobre los sistemas de tratamiento de aguas residuales (PTAR), favoreciendo una operación más
                eficiente y apoyando los objetivos ambientales de nuestros aliados.
              </p>
            </div>

            {/* Solución 3 */}
            <div className="solucion-card">
              <div className="solucion-icon-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="solucion-card-title">ACOMPAÑAMIENTO ESPECIALIZADO</h3>
              <p className="solucion-card-desc">
                Brindamos acompañamiento técnico y comercial durante todo el proceso de implementación de
                nuestras soluciones, trabajando de la mano con cada cliente para adaptar nuestro modelo a las
                necesidades operativas de su empresa y garantizar una gestión eficiente de los materiales grasos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4.8 Ventajas Competitivas */}
      <section className="section-ventajas">
        <div className="container ventajas-container">
          <div className="ventajas-header">
            <span className="ventajas-badge">Ventajas Competitivas</span>
            <h2 className="ventajas-title">BENEFICIOS</h2>
          </div>

          <div className="ventajas-grid">
            <div className="ventaja-item">
              <span className="ventaja-check">✓</span>
              <span className="ventaja-text">Implementación de un sistema especializado para la recuperación y gestión de materiales grasos.</span>
            </div>
            <div className="ventaja-item">
              <span className="ventaja-check">✓</span>
              <span className="ventaja-text">Aprovechamiento responsable y valorización de materiales de origen animal.</span>
            </div>
            <div className="ventaja-item">
              <span className="ventaja-check">✓</span>
              <span className="ventaja-text">Reducción de la carga contaminante sobre los sistemas PTAR.</span>
            </div>
            <div className="ventaja-item">
              <span className="ventaja-check">✓</span>
              <span className="ventaja-text">Fortalecimiento del desempeño ambiental de la operación.</span>
            </div>
            <div className="ventaja-item">
              <span className="ventaja-check">✓</span>
              <span className="ventaja-text">Contribución a modelos de economía circular.</span>
            </div>
            <div className="ventaja-item">
              <span className="ventaja-check">✓</span>
              <span className="ventaja-text">Acompañamiento técnico y comercial durante todo el proceso.</span>
            </div>
            <div className="ventaja-item" style={{ gridColumn: "span 2" }}>
              <span className="ventaja-check">✓</span>
              <span className="ventaja-text">Soluciones adaptadas a las necesidades de cada empresa.</span>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="ventajas-cta-banner">
            <div className="ventajas-cta-left">
              <h3 className="ventajas-cta-title">¿DESEA IMPLEMENTAR UNA SOLUCIÓN PARA SU EMPRESA?</h3>
              <p className="ventajas-cta-desc">
                Nuestro equipo está preparado para evaluar las necesidades de su operación y desarrollar
                una solución adaptada a sus procesos, garantizando un servicio confiable, eficiente y
                orientado a generar valor para su organización.
              </p>
            </div>
            <div className="ventajas-cta-actions">
              <button 
                onClick={() => window.dispatchEvent(new Event("open-contact-modal"))}
                className="ventajas-action-btn ventajas-action-btn--primary"
              >
                Solicitar Información →
              </button>
              <a href="https://wa.me/573135100495" target="_blank" rel="noopener noreferrer" className="ventajas-action-btn ventajas-action-btn--secondary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: "0.25rem" }}>
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.167 1.455 4.743 1.456 5.485 0 9.948-4.614 9.951-10.28.002-2.744-1.058-5.324-2.986-7.255C16.428 1.143 13.856.082 11.123.082c-5.486 0-9.949 4.614-9.952 10.281-.001 1.785.466 3.529 1.353 5.068L1.442 21.65l6.205-1.63c1.513.826 3.013 1.256 4.6 1.256v-.004z" />
                </svg>
                Hablar con un asesor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Infraestructura y Capacidad (Fiel a la captura) */}
      <section className="section-infrastructure">
        <div className="container">
          <div className="infra-header">
            <span className="infra-badge">Línea Industrial</span>
            <h2 className="infra-title">INFRAESTRUCTURA Y CAPACIDAD INDUSTRIAL</h2>
            <p className="infra-desc">
              Contamos con infraestructura y procesos especializados que nos permiten gestionar, transformar y suministrar materias primas de origen animal de forma eficiente, segura y sostenible.
            </p>
          </div>

          <div className="infra-stats-grid">
            {/* Stat Box 1 */}
            <div className="infra-stat-box">
              <div className="infra-number">+100.000</div>
              <div className="infra-unit">Kilos</div>
              <div className="infra-divider"></div>
              <div className="infra-label">Comercializados</div>
            </div>

            {/* Stat Box 2 */}
            <div className="infra-stat-box">
              <div className="infra-number">+1.400</div>
              <div className="infra-unit">Toneladas</div>
              <div className="infra-divider"></div>
              <div className="infra-label">Capacidad de Almacenamiento</div>
            </div>

            {/* Stat Box 3 */}
            <div className="infra-stat-box">
              <div className="infra-number">+2.400</div>
              <div className="infra-unit">Toneladas</div>
              <div className="infra-divider"></div>
              <div className="infra-label">Capacidad de Procesamiento</div>
            </div>

            {/* Stat Box 4 */}
            <div className="infra-stat-box">
              <div className="infra-number">+12.000</div>
              <div className="infra-unit">Toneladas</div>
              <div className="infra-divider"></div>
              <div className="infra-label">Exportadas</div>
            </div>
          </div>
        </div>

        {/* Large industrial banner at the bottom of the stats section */}
        <div className="infra-banner-image-wrapper">
          <Image 
            src="/images/hero-bg.jpg" 
            alt="Infraestructura Industrial Tanques" 
            fill
            className="card-bg-image"
          />
        </div>
      </section>
    </main>
  );
}
