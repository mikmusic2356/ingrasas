"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("comprar");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form submission handler for Section 12
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      nombre: formData.get("nombre") as string,
      empresa: formData.get("empresa") as string,
      email: formData.get("email") as string,
      telefono: formData.get("telefono") as string,
      ciudad: formData.get("ciudad") as string,
      interes: formData.get("interes") as string,
      cantidad: formData.get("volumen") as string,
      mensaje: `[Pestaña: ${selectedTab.toUpperCase()}] ${formData.get("mensaje") as string}`,
    };

    try {
      const res = await fetch("/api/cotizaciones", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      const result = await res.json();
      if (res.ok) {
        alert("¡Solicitud enviada con éxito! Un asesor se pondrá en contacto pronto.");
        (e.target as HTMLFormElement).reset();
      } else {
        alert(`Hubo un error al enviar la solicitud: ${result.error || "Error en el servidor"}`);
      }
    } catch (err: any) {
      alert(`Error de conexión: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main style={{ marginTop: "var(--header-height)" }}>
      {/* =========================================================================
          01 HERO
          ========================================================================= */}
      <section className="home-hero-banner">
        <Image 
          src="/images/hero/portada_hero.jpeg" 
          alt="Ingrasas Planta Industrial Sostenible" 
          fill
          priority
          className="home-hero-image"
        />
        <div className="hero-overlay-main"></div>
        <div className="hero-content-container container">
          <div className="hero-content-main">
            <h1 className="hero-title-main">
              MATERIAS PRIMAS DE ORIGEN ANIMAL Y SOLUCIONES PARA LA INDUSTRIA
            </h1>
            <p className="hero-subtitle-main">
              Suministramos materias primas de origen animal para diferentes aplicaciones industriales y desarrollamos soluciones especializadas para la gestión y valorización de materiales grasos.
            </p>
            <div className="hero-actions-row">
              <a 
                href="#nuestro-modelo" 
                className="btn-hero-outline"
              >
                CONOCER NUESTRO MODELO
              </a>
              <button 
                onClick={() => window.dispatchEvent(new Event("open-contact-modal"))}
                className="btn-hero-solid"
              >
                SOLICITAR COTIZACIÓN
              </button>
            </div>
          </div>
        </div>

        {/* Hero Bottom Features Row */}
        <div className="hero-bottom-features">
          <div className="container">
            <div className="hero-features-grid">
              <div className="hero-feature-item">
                <div className="hero-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                    <path d="M21 3v5h-5" />
                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                    <path d="M3 21v-5h5" />
                  </svg>
                </div>
                <div className="hero-feature-text">
                  <h3>Recuperamos</h3>
                  <p>materiales con potencial</p>
                </div>
              </div>
              <div className="hero-feature-item">
                <div className="hero-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                    <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 6z" />
                    <path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z" />
                  </svg>
                </div>
                <div className="hero-feature-text">
                  <h3>Valorizamos</h3>
                  <p>con procesos especializados</p>
                </div>
              </div>
              <div className="hero-feature-item">
                <div className="hero-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
                <div className="hero-feature-text">
                  <h3>Suministramos</h3>
                  <p>materias primas de calidad</p>
                </div>
              </div>
              <div className="hero-feature-item">
                <div className="hero-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </div>
                <div className="hero-feature-text">
                  <h3>Conectamos</h3>
                  <p>con múltiples industrias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 QUÉ HACEMOS
          ========================================================================= */}
      <section className="section-que-hacemos">
        <div className="container">
          <div className="section-header-centered">
            <span className="badge-pill">Nuestra Misión</span>
            <h2 className="title-large">QUÉ HACEMOS</h2>
          </div>

          <div className="que-hacemos-grid">
            {/* Card 1 */}
            <div className="hacemos-card">
              <div className="hacemos-card-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1-.2-1.4-.6L7 8" />
                  <path d="M7 21h10" />
                  <circle cx="12" cy="5" r="3" />
                </svg>
                <h3>Recuperamos</h3>
              </div>
              <div className="hacemos-card-image-wrapper">
                <Image 
                  src="/images/recuperamos.jfif" 
                  alt="Recuperación de grasa animal"
                  fill
                  className="hacemos-img"
                />
              </div>
              <div className="hacemos-card-body">
                <p>Recuperamos materiales grasos generados dentro de diferentes operaciones.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="hacemos-card">
              <div className="hacemos-card-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
                <h3>Valorizamos</h3>
              </div>
              <div className="hacemos-card-image-wrapper">
                <Image 
                  src="/images/valorizamos.jfif" 
                  alt="Economía circular valorización"
                  fill
                  className="hacemos-img"
                />
              </div>
              <div className="hacemos-card-body">
                <p>Transformamos materiales con potencial de aprovechamiento en materias primas con valor para la industria.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="hacemos-card">
              <div className="hacemos-card-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z" />
                </svg>
                <h3>Suministramos</h3>
              </div>
              <div className="hacemos-card-image-wrapper">
                <Image 
                  src="/images/suministramos.jfif" 
                  alt="Suministro de aceites industriales"
                  fill
                  className="hacemos-img"
                />
              </div>
              <div className="hacemos-card-body">
                <p>Proveemos materias primas de origen animal para diferentes aplicaciones industriales.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          03 DEL ORIGEN A LA INDUSTRIA
          ========================================================================= */}
      <section className="section-origen-industria">
        <div className="container">
          <div className="section-header-centered">
            <span className="badge-pill">Proceso</span>
            <h2 className="title-large">DEL ORIGEN A LA INDUSTRIA</h2>
          </div>

          <div className="flow-process-container">
            {/* Step 1 */}
            <div className="flow-step">
              <div className="flow-step-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
                </svg>
              </div>
              <span className="flow-step-num">01</span>
              <h4>ORIGEN</h4>
              <p>Materiales grasos de origen animal</p>
            </div>
            
            <div className="flow-arrow">&rarr;</div>

            {/* Step 2 */}
            <div className="flow-step">
              <div className="flow-step-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <span className="flow-step-num">02</span>
              <h4>RECUPERACIÓN</h4>
              <p>Recolectamos and recuperamos</p>
            </div>

            <div className="flow-arrow">&rarr;</div>

            {/* Step 3 */}
            <div className="flow-step">
              <div className="flow-step-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
              <span className="flow-step-num">03</span>
              <h4>GESTIÓN</h4>
              <p>Gestionamos de forma segura y responsable</p>
            </div>

            <div className="flow-arrow">&rarr;</div>

            {/* Step 4 */}
            <div className="flow-step">
              <div className="flow-step-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z" />
                </svg>
              </div>
              <span className="flow-step-num">04</span>
              <h4>VALORIZACIÓN</h4>
              <p>Transformamos con procesos especializados</p>
            </div>

            <div className="flow-arrow">&rarr;</div>

            {/* Step 5 */}
            <div className="flow-step">
              <div className="flow-step-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <span className="flow-step-num">05</span>
              <h4>MATERIA PRIMA</h4>
              <p>Materias primas con calidad y trazabilidad</p>
            </div>

            <div className="flow-arrow">&rarr;</div>

            {/* Step 6 */}
            <div className="flow-step">
              <div className="flow-step-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                  <line x1="6" y1="10" x2="6" y2="14" />
                  <line x1="18" y1="10" x2="18" y2="14" />
                </svg>
              </div>
              <span className="flow-step-num">06</span>
              <h4>INDUSTRIA</h4>
              <p>Aplicaciones en diferentes sectores industriales</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          04 NUESTRO MODELO
          ========================================================================= */}
      <section id="nuestro-modelo" className="section-nuestro-modelo">
        <div className="container">
          <div className="section-header-centered">
            <span className="badge-pill">Metodología</span>
            <h2 className="title-large">NUESTROS VALORES Y MODELO</h2>
            <p className="section-subtitle-centered">Un modelo diseñado para generar valor en cada etapa del proceso.</p>
          </div>

          <div className="modelo-grid-circles">
            {/* Step 1 */}
            <div className="modelo-circle-card">
              <div className="circle-num-badge">01</div>
              <h4>GENERACIÓN</h4>
              <p>Se generan materiales grasos en diferentes operaciones.</p>
            </div>

            {/* Step 2 */}
            <div className="modelo-circle-card">
              <div className="circle-num-badge">02</div>
              <h4>RECUPERACIÓN</h4>
              <p>Los recuperamos con procesos seguros y eficientes.</p>
            </div>

            {/* Step 3 */}
            <div className="modelo-circle-card">
              <div className="circle-num-badge">03</div>
              <h4>GESTIÓN</h4>
              <p>Implementamos una gestión responsable y organizada.</p>
            </div>

            {/* Step 4 */}
            <div className="modelo-circle-card">
              <div className="circle-num-badge">04</div>
              <h4>VALORIZACIÓN</h4>
              <p>Los transformamos en materias primas con valor industrial.</p>
            </div>

            {/* Step 5 */}
            <div className="modelo-circle-card">
              <div className="circle-num-badge">05</div>
              <h4>COMERCIALIZACIÓN</h4>
              <p>Disponemos las materias primas para su aprovechamiento.</p>
            </div>

            {/* Step 6 */}
            <div className="modelo-circle-card">
              <div className="circle-num-badge">06</div>
              <h4>APLICACIÓN</h4>
              <p>Conectamos con diferentes cadenas productivas e industrias.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          05 MATERIAS PRIMAS - PRODUCTO DESTACADO (Fiel al Aceite de Pollo)
          ========================================================================= */}
      <section className="section-materias-primas">
        <div className="container">
          <div className="section-header-centered">
            <span className="badge-pill">Materias Primas</span>
            <h2 className="title-large">MATERIAS PRIMAS - PRODUCTO DESTACADO</h2>
          </div>

          <div className="product-destacado-container">
            <div className="product-destacado-image">
              <Image 
                src="/images/Golden_chicken_oil_in_beaker_202608032308.jpeg" 
                alt="Aceite de pollo de alta calidad"
                fill
                className="hacemos-img"
              />
            </div>
            
            <div className="product-destacado-details">
              <span className="details-eyebrow">PRODUCTO DESTACADO</span>
              <h3 className="details-title">ACEITE DE POLLO</h3>
              <p className="details-subtitle">Materia prima de origen avícola</p>
              
              <div className="details-spec-grid">
                <div className="spec-item">
                  <strong>ORIGEN</strong>
                  <span>Avícola</span>
                </div>
                <div className="spec-item">
                  <strong>ESTADO</strong>
                  <span>Líquido</span>
                </div>
                <div className="spec-item">
                  <strong>APLICACIONES</strong>
                  <span>Nutrición animal / Biocombustibles / Oleoquímica / Jabonería</span>
                </div>
                <div className="spec-item">
                  <strong>PRESENTACIONES</strong>
                  <span>Granel / Flexitank / IBC / Tambor</span>
                </div>
                <div className="spec-item">
                  <strong>ESPECIFICACIONES</strong>
                  <span>Disponibles bajo requerimiento comercial</span>
                </div>
              </div>

              <div className="details-actions">
                <a href="/docs/Politica-integral-INGRASAS-2026.pdf" download className="btn-spec-outline">
                  Solicitar ficha técnica
                </a>
                <button 
                  onClick={() => window.dispatchEvent(new Event("open-contact-modal"))}
                  className="btn-spec-solid"
                >
                  Solicitar cotización
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          06 APLICACIONES INDUSTRIALES
          ========================================================================= */}
      <section className="section-aplicaciones-industriales">
        <div className="container">
          <div className="section-header-centered">
            <span className="badge-pill">Mercados</span>
            <h2 className="title-large">APLICACIONES INDUSTRIALES</h2>
          </div>

          <div className="aplicaciones-industriales-grid-new" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
            {/* Card 1: Alimentación Animal */}
            <Link href="/alimento-concentrado-animal" className="home-industry-card" style={{ height: "450px", textDecoration: "none" }}>
              <Image 
                src="/images/Farm_animals_representing_nutrition_202608032308.jpeg" 
                alt="Alimentación Animal" 
                fill
                className="card-bg-image"
              />
              <div className="card-overlay"></div>
              <div className="card-content">
                <h2 className="card-title">ALIMENTACIÓN ANIMAL</h2>
                <p className="card-desc">Materias primas para nutrición y producción de concentrados.</p>
                <div className="card-link">
                  MÁS SOBRE ALIMENTACIÓN ANIMAL &rarr;
                </div>
              </div>
            </Link>

            {/* Card 2: Biocombustibles */}
            <Link href="/biocombustibles" className="home-industry-card" style={{ height: "450px", textDecoration: "none" }}>
              <Image 
                src="/images/bioetanol-biocombustiblesjpg.webp" 
                alt="Biocombustibles" 
                fill
                className="card-bg-image"
              />
              <div className="card-overlay"></div>
              <div className="card-content">
                <h2 className="card-title">BIOCOMBUSTIBLES</h2>
                <p className="card-desc">Materias primas para producción de energía sostenible.</p>
                <div className="card-link">
                  MÁS SOBRE BIOCOMBUSTIBLES &rarr;
                </div>
              </div>
            </Link>

            {/* Card 3: Oleoquímica */}
            <Link href="/oleoquimica" className="home-industry-card" style={{ height: "450px", textDecoration: "none" }}>
              <Image 
                src="/images/processes-liquids-oleochemicals-hero.webp" 
                alt="Oleoquímica" 
                fill
                className="card-bg-image"
              />
              <div className="card-overlay"></div>
              <div className="card-content">
                <h2 className="card-title">OLEOQUÍMICA</h2>
                <p className="card-desc">Insumos grasos para procesos químicos e industriales.</p>
                <div className="card-link">
                  MÁS SOBRE OLEOQUÍMICA &rarr;
                </div>
              </div>
            </Link>

            {/* Card 4: Jabonería */}
            <Link href="/jaboneria" className="home-industry-card" style={{ height: "450px", textDecoration: "none" }}>
              <Image 
                src="/images/jaboneria.jpg" 
                alt="Jabonería" 
                fill
                className="card-bg-image"
              />
              <div className="card-overlay"></div>
              <div className="card-content">
                <h2 className="card-title">JABONERÍA</h2>
                <p className="card-desc">Componentes para la fabricación de jabones y detergentes.</p>
                <div className="card-link">
                  MÁS SOBRE JABONERÍA &rarr;
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          07 SOLUCIONES PARA LA INDUSTRIA AVÍCOLA
          ========================================================================= */}
      <section className="section-soluciones-avicolas-mock">
        <div className="container">
          <div className="soluciones-mock-grid">
            {/* Left Block */}
            <div className="soluciones-left-blue-card">
              <span className="blue-card-badge">Soluciones</span>
              <h2>Soluciones para recuperar y valorizar materiales grasos.</h2>
              <p>Desarrollamos soluciones a la medida de cada operación, generando valor operativo, económico y ambiental.</p>
              <button 
                onClick={() => window.dispatchEvent(new Event("open-contact-modal"))}
                className="blue-card-btn"
              >
                Hablemos de su operación
              </button>
            </div>

            {/* Right Grid */}
            <div className="soluciones-right-cards-grid">
              <div className="solucion-item-card">
                <div className="solucion-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                  </svg>
                </div>
                <h4>RECUPERACIÓN</h4>
                <p>Recuperación eficiente de materiales grasos generados en su operación.</p>
              </div>

              <div className="solucion-item-card">
                <div className="solucion-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4" />
                  </svg>
                </div>
                <h4>GESTIÓN</h4>
                <p>Gestión organizada y segura de acuerdo con sus necesidades y normativas.</p>
              </div>

              <div className="solucion-item-card">
                <div className="solucion-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h4>VALORIZACIÓN</h4>
                <p>Transformación de materiales con potencial en materias primas aprovechables.</p>
              </div>

              <div className="solucion-item-card">
                <div className="solucion-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z" />
                  </svg>
                </div>
                <h4>GESTIÓN AMBIENTAL</h4>
                <p>Cumplimiento normativo y manejo responsable para minimizar impactos.</p>
              </div>

              <div className="solucion-item-card" style={{ gridColumn: "span 2" }}>
                <div className="solucion-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                </div>
                <h4>ACOMPAÑAMIENTO</h4>
                <p>Asesoría técnica y comercial para optimizar su proceso y generar valor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          08 VALOR QUE GENERAMOS
          ========================================================================= */}
      <section className="section-valor-generado">
        <div className="container">
          <div className="section-header-centered">
            <span className="badge-pill">Impacto</span>
            <h2 className="title-large">VALOR QUE GENERAMOS</h2>
          </div>

          <div className="valor-generado-grid">
            <div className="valor-generado-card">
              <div className="valor-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
              <h4>OPERATIVO</h4>
              <p>Optimizamos el manejo de materiales y procesos, mejorando la eficiencia de su operation.</p>
            </div>

            <div className="valor-generado-card">
              <div className="valor-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h4>ECONÓMICO</h4>
              <p>Valorizamos materiales que representan un costo, convirtiéndolos en una fuente de ingresos.</p>
            </div>

            <div className="valor-generado-card">
              <div className="valor-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z" />
                </svg>
              </div>
              <h4>AMBIENTAL</h4>
              <p>Promovemos el aprovechamiento responsable y la reducción del impacto ambiental.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          09 CALIDAD Y TRAZABILIDAD
          ========================================================================= */}
      <section className="section-calidad-trazabilidad">
        <div className="container">
          <div className="calidad-grid-container">
            {/* Left Card */}
            <div className="calidad-left-banner">
              <Image 
                src="/images/cientifico-analiza-muestra-bioquimica-laboratorio-cientifico-avanzado-profesional-medico-verifica-mezcla-quimica-desarrollo-microbiologico-investigacion-biotecnologia-viral-laboratorio-ciencia-cosmetica_112699-2846.avif" 
                alt="Laboratorio Calidad Ingrasas"
                fill
                className="hacemos-img"
              />
              <div className="calidad-banner-overlay"></div>
              <div className="calidad-banner-text">
                <h3>Garantizamos materias primas con calidad, trazabilidad y cumplimiento.</h3>
              </div>
            </div>

            {/* Right Checklist */}
            <div className="calidad-right-checklist">
              <div className="calidad-header-block">
                <span className="badge-pill">Garantía</span>
                <h2>CALIDAD Y TRAZABILIDAD</h2>
              </div>
              
              <div className="checklist-grid">
                <div className="checklist-item">
                  <span className="check-icon">✓</span>
                  <div className="check-text">
                    <strong>Especificaciones de calidad</strong>
                  </div>
                </div>

                <div className="checklist-item">
                  <span className="check-icon">✓</span>
                  <div className="check-text">
                    <strong>Trazabilidad completa</strong>
                  </div>
                </div>

                <div className="checklist-item">
                  <span className="check-icon">✓</span>
                  <div className="check-text">
                    <strong>Control en cada etapa del proceso</strong>
                  </div>
                </div>

                <div className="checklist-item">
                  <span className="check-icon">✓</span>
                  <div className="check-text">
                    <strong>Documentación y soporte</strong>
                  </div>
                </div>

                <div className="checklist-item">
                  <span className="check-icon">✓</span>
                  <div className="check-text">
                    <strong>Cumplimiento normativo</strong>
                  </div>
                </div>

                <div className="checklist-item">
                  <span className="check-icon">✓</span>
                  <div className="check-text">
                    <strong>Acompañamiento técnico</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10 LOGÍSTICA Y SUMINISTRO
          ========================================================================= */}
      <section className="section-logistica-suministro">
        <div className="container">
          <div className="section-header-centered">
            <span className="badge-pill">Logística</span>
            <h2 className="title-large">LOGÍSTICA Y SUMINISTRO</h2>
            <p className="section-subtitle-centered">Contamos con diferentes modalidades de suministro para adaptarnos a sus necesidades logísticas.</p>
          </div>

          <div className="logistica-items-grid">
            {/* Mode 1 */}
            <div className="logistica-mode-card">
              <div className="logistica-img-container">
                <Image 
                  src="/images/granel_carrotanque.jpg" 
                  alt="Granel Carrotanque"
                  fill
                  className="logistica-img"
                />
              </div>
              <h4>Granel / Carrotanque</h4>
            </div>

            {/* Mode 2 */}
            <div className="logistica-mode-card">
              <div className="logistica-img-container">
                <Image 
                  src="/images/flexitank.jpg" 
                  alt="Flexitank Contenedor"
                  fill
                  className="logistica-img"
                />
              </div>
              <h4>Flexitank</h4>
            </div>

            {/* Mode 3 */}
            <div className="logistica-mode-card">
              <div className="logistica-img-container">
                <Image 
                  src="/images/ibc_tote.jpg" 
                  alt="IBC Contenedor"
                  fill
                  className="logistica-img"
                />
              </div>
              <h4>IBC</h4>
            </div>

            {/* Mode 4 */}
            <div className="logistica-mode-card">
              <div className="logistica-img-container">
                <Image 
                  src="/images/tambor.jpg" 
                  alt="Tambor"
                  fill
                  className="logistica-img"
                />
              </div>
              <h4>Tambor</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="section-nosotros-mock" style={{ padding: "0 0 7rem 0" }}>
        {/* Banner a lo ancho y responsivo */}
        <div className="nosotros-banner-wide">
          <Image 
            src="/images/hero/quienes somos.jpeg" 
            alt="Trabajadores Industriales Ingrasas" 
            fill
            priority
            className="nosotros-banner-img"
          />
          <div className="nosotros-banner-overlay"></div>
          <div className="nosotros-banner-content-title">
            <h1>QUIÉNES SOMOS</h1>
          </div>
        </div>
        <div className="container" style={{ marginTop: "4rem" }}>
          <div className="nosotros-mock-grid">
            <div className="nosotros-mock-content">
              <span className="badge-pill">Quiénes somos</span>
              <h2>Conectamos experiencia, proceso y compromiso.</h2>
              <p className="nosotros-p-desc">
                Somos una empresa colombiana especializada en la recuperación, gestión y valorización de materiales grasos de origen animal, ofreciendo materias primas de calidad para diferentes industrias y promoviendo la sostenibilidad en toda nuestra cadena productiva.
              </p>
              
              <Link href="/nosotros" className="btn-nosotros-more">
                Conozca más sobre nosotros
              </Link>
            </div>
            
            <div className="nosotros-mock-right">
              <div className="nosotros-image-box">
                <Image 
                  src="/images/logo_decidido.jpeg" 
                  alt="Logo Ingrasas"
                  fill
                  className="hacemos-img"
                />
              </div>
            </div>
          </div>

          {/* 5 Icons Row */}
          <div className="nosotros-icons-row">
            <div className="nosotros-pilar-item">
              <span className="pilar-icon">✓</span>
              <span>Experiencia industrial</span>
            </div>
            <div className="nosotros-pilar-item">
              <span className="pilar-icon">✓</span>
              <span>Procesos especializados</span>
            </div>
            <div className="nosotros-pilar-item">
              <span className="pilar-icon">✓</span>
              <span>Enfoque en calidad</span>
            </div>
            <div className="nosotros-pilar-item">
              <span className="pilar-icon">✓</span>
              <span>Compromiso con la sostenibilidad</span>
            </div>
            <div className="nosotros-pilar-item">
              <span className="pilar-icon">✓</span>
              <span>Equipo especializado</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          12 CONTACTO - FORMULARIO INTELIGENTE
          ========================================================================= */}
      <section id="contacto" className="section-contacto-form">
        <div className="container">
          <div className="section-header-centered">
            <span className="badge-pill">Contacto</span>
            <h2 className="title-large">CONTACTO - FORMULARIO INTELIGENTE</h2>
          </div>

          <div className="contacto-form-container">
            {/* Tabs selector */}
            <div className="form-tabs-selector">
              <button 
                type="button" 
                className={`tab-btn ${selectedTab === "comprar" ? "active" : ""}`}
                onClick={() => setSelectedTab("comprar")}
              >
                Comprar materia prima
              </button>
              <button 
                type="button" 
                className={`tab-btn ${selectedTab === "comercializar" ? "active" : ""}`}
                onClick={() => setSelectedTab("comercializar")}
              >
                Comercializar materia prima
              </button>
              <button 
                type="button" 
                className={`tab-btn ${selectedTab === "gestionar" ? "active" : ""}`}
                onClick={() => setSelectedTab("gestionar")}
              >
                Gestionar materiales grasos
              </button>
              <button 
                type="button" 
                className={`tab-btn ${selectedTab === "implementar" ? "active" : ""}`}
                onClick={() => setSelectedTab("implementar")}
              >
                Implementar solución
              </button>
              <button 
                type="button" 
                className={`tab-btn ${selectedTab === "ficha" ? "active" : ""}`}
                onClick={() => setSelectedTab("ficha")}
              >
                Solicitar ficha técnica
              </button>
              <button 
                type="button" 
                className={`tab-btn ${selectedTab === "otro" ? "active" : ""}`}
                onClick={() => setSelectedTab("otro")}
              >
                Otro
              </button>
            </div>

            {/* Smart Form */}
            <form onSubmit={handleFormSubmit} className="contacto-smart-form">
              <div className="form-fields-grid">
                <div className="form-group-custom">
                  <label>Empresa *</label>
                  <input type="text" name="empresa" required placeholder="Nombre de su organización" disabled={isSubmitting} />
                </div>
                
                <div className="form-group-custom">
                  <label>Nombre completo *</label>
                  <input type="text" name="nombre" required placeholder="Escriba su nombre y apellido" disabled={isSubmitting} />
                </div>

                <div className="form-group-custom">
                  <label>Teléfono *</label>
                  <input type="tel" name="telefono" required placeholder="+57 300 000 0000" disabled={isSubmitting} />
                </div>

                <div className="form-group-custom">
                  <label>Correo electrónico *</label>
                  <input type="email" name="email" required placeholder="ejemplo@correo.com" disabled={isSubmitting} />
                </div>

                <div className="form-group-custom">
                  <label>Ciudad / País *</label>
                  <input type="text" name="ciudad" required placeholder="Bogotá, Colombia" disabled={isSubmitting} />
                </div>

                <div className="form-group-custom">
                  <label>Materia prima o solución de interés *</label>
                  <select name="interes" required disabled={isSubmitting}>
                    <option value="">Seleccione una opción</option>
                    <option value="aceite-pollo">Aceite de Pollo</option>
                    <option value="soluciones-avicolas">Soluciones para la Industria Avícola</option>
                    <option value="otro">Otro requerimiento</option>
                  </select>
                </div>

                <div className="form-group-custom" style={{ gridColumn: "span 2" }}>
                  <label>Volumen aproximado</label>
                  <input type="text" name="volumen" placeholder="Ej. 10 Toneladas mensuales" disabled={isSubmitting} />
                </div>

                <div className="form-group-custom" style={{ gridColumn: "span 2" }}>
                  <label>Mensaje</label>
                  <textarea name="mensaje" rows={4} placeholder="Detalle su requerimiento o consulta específica aquí..." disabled={isSubmitting}></textarea>
                </div>
              </div>

              <div className="form-submit-row">
                <button 
                  type="submit" 
                  className="btn-submit-smart"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Solicitar asesoría"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
