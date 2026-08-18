"use client";

import Link from "next/link";
import Image from "next/image";

export default function Biocombustibles() {
  return (
    <main style={{ marginTop: "var(--header-height)" }}>
      {/* 1. Hero Banner */}
      <section className="industry-hero">
        <Image 
          src="/images/hero/hero bioetanol.jpeg" 
          alt="Producción de biocombustibles" 
          fill
          priority
          style={{ objectFit: "cover" }}
          className="industry-hero-image"
        />
        <div className="industry-hero-overlay"></div>
      </section>

      {/* 2. Intro Section */}
      <section className="industry-intro-section">
        <div className="container intro-container">
          <h1 className="intro-title">
            MATERIAS PRIMAS SUSTENTABLES PARA LA PRODUCCIÓN DE BIOCOMBUSTIBLES
          </h1>
          <div className="intro-right-col">
            <p className="intro-desc">
              Suministramos aceites y grasas de origen animal con las especificaciones técnicas idóneas para la fabricación de biodiésel (FAME) y combustibles renovables de segunda generación, impulsando la transición energética nacional y reduciendo la huella de carbono de los combustibles tradicionales.
            </p>
            <Link 
              href="/contacto" 
              className="btn-talk-advisor"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event("open-contact-modal"));
              }}
            >
              HABLA CON UN ASESOR &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Products Section */}
      <section className="products-section">
        <div className="container">
          <h2 className="products-section-title">MATERIAS PRIMAS</h2>
          
          <div className="products-list-grid">
            {/* Product 1: Aceite de Pollo para Biodiésel */}
            <div className="product-card-horizontal">
              <div className="product-card-image-col">
                <Image 
                  src="/images/aceite de poll.jpeg" 
                  alt="Aceite de pollo" 
                  fill
                />
              </div>
              <div className="product-card-content-col">
                <h3 className="product-title-sub">ACEITE DE POLLO</h3>
                
                <div className="product-detail-item">
                  <h4>Descripción</h4>
                  <p>Aceite de pollo obtenido mediante el procesamiento técnico de subproductos avícolas frescos, diseñado específicamente con parámetros de acidez y fósforo controlados para facilitar los procesos de transesterificación industrial.</p>
                </div>

                <div className="product-detail-item">
                  <h4>Fabricación</h4>
                  <p>Acondicionado y refinado térmicamente mediante sistemas avanzados de filtración fina, deshumidificación al vacío y decantación centrífuga para asegurar bajos niveles de humedad e insolubles.</p>
                </div>

                <div className="product-detail-item">
                  <h4>Aplicación</h4>
                  <p>Materia prima principal para la fabricación de Biodiésel (FAME) y combustibles renovables de aviación (SAF) e hidrotratados (HVO).</p>
                </div>

                <div className="product-detail-item">
                  <h4>Especificaciones</h4>
                  <p>De acuerdo a la negociación.</p>
                </div>
              </div>
            </div>

            {/* Product 2: Sebo Industrial */}
            <div className="product-card-horizontal">
              <div className="product-card-image-col">
                <Image 
                  src="/images/cebo de res 2.jpeg" 
                  alt="Sebo industrial" 
                  fill
                />
              </div>
              <div className="product-card-content-col">
                <h3 className="product-title-sub">SEBO INDUSTRIAL</h3>
                
                <div className="product-detail-item">
                  <h4>Descripción</h4>
                  <p>Grasa de origen animal tratada térmicamente y clasificada, con un perfil lipídico rico en ácidos grasos saturados que le otorgan estabilidad y alto valor energético.</p>
                </div>

                <div className="product-detail-item">
                  <h4>Fabricación</h4>
                  <p>Extracción y clarificación mecánica continua por centrifugación de subproductos bovinos y mixtos, garantizando parámetros óptimos de pureza.</p>
                </div>

                <div className="product-detail-item">
                  <h4>Aplicación</h4>
                  <p>Utilizado como insumo estratégico en la producción de biocombustibles mixtos, grasas industriales lubricantes y aplicaciones de combustión térmica.</p>
                </div>

                <div className="product-detail-item">
                  <h4>Especificaciones</h4>
                  <p>De acuerdo a la negociación.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Parallax Banner Sostenibilidad */}
      <section className="industry-sustainability-banner" style={{ backgroundImage: "linear-gradient(rgba(0, 34, 68, 0.5), rgba(0, 34, 68, 0.5)), url('/images/hero/aceite_hero.jpeg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
        <div className="sustainability-banner-content">
          <h2>SOSTENIBILIDAD</h2>
          <p>
            La mayoría de los productos que comercializamos son materiales residuales que no tienen otros usos. El aprovechamiento de estos subproductos permite reducir las emisiones de CO2, un aspecto medioambiental de gran importancia.
          </p>
          <Link href="/sostenibilidad" className="btn-white-solid">
            SABER MÁS &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
