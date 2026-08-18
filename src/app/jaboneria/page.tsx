"use client";

import Link from "next/link";
import Image from "next/image";

export default function Jaboneria() {
  return (
    <main style={{ marginTop: "var(--header-height)" }}>
      {/* 1. Hero Banner */}
      <section className="industry-hero">
        <Image 
          src="/images/hero/hero jaboneria.jpeg" 
          alt="Línea de jabonería industrial" 
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
            INSUMOS GRASOS PARA LA INDUSTRIA DE JABONERÍA Y CUIDADO PERSONAL
          </h1>
          <div className="intro-right-col">
            <p className="intro-desc">
              Suministramos ácidos grasos e insumos saponificables de alta estabilidad para la fabricación de jabones de barra, detergentes y productos de limpieza industrial. Nuestros materiales garantizan una excelente consistencia y capacidad de espumado para el producto final.
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
            {/* Product 1: Sebo Saponificable */}
            <div className="product-card-horizontal">
              <div className="product-card-image-col">
                <Image 
                  src="/images/cebo de res 2.jpeg" 
                  alt="Sebo saponificable" 
                  fill
                />
              </div>
              <div className="product-card-content-col">
                <h3 className="product-title-sub">SEBO INDUSTRIAL SAPONIFICABLE</h3>
                
                <div className="product-detail-item">
                  <h4>Descripción</h4>
                  <p>Lípidos saponificables de origen animal ricos en ácidos esteárico y palmítico, que proporcionan la dureza, consistencia y estructura de espuma adecuadas en los productos de jabonería sólidos.</p>
                </div>

                <div className="product-detail-item">
                  <h4>Fabricación</h4>
                  <p>Obtenido mediante procesos regulados de rendering térmico de grasas animales, seguidos de etapas de refinación física, blanqueo y desodorización parcial para eliminar impurezas.</p>
                </div>

                <div className="product-detail-item">
                  <h4>Aplicación</h4>
                  <p>Insumo principal en procesos de saponificación tradicionales para jabones de tocador, jabones de lavar y bases de detergentes en barra.</p>
                </div>

                <div className="product-detail-item">
                  <h4>Especificaciones</h4>
                  <p>De acuerdo a la negociación.</p>
                </div>
              </div>
            </div>

            {/* Product 2: Glicerina Refinada */}
            <div className="product-card-horizontal">
              <div className="product-card-image-col">
                <Image 
                  src="/images/glicerina.jpeg" 
                  alt="Glicerina pura" 
                  fill
                />
              </div>
              <div className="product-card-content-col">
                <h3 className="product-title-sub">GLICERINA REFINADA</h3>
                
                <div className="product-detail-item">
                  <h4>Descripción</h4>
                  <p>Compuesto líquido humectante y soluble en agua, incoloro y altamente higroscópico, que aporta suavidad y retiene la humedad en la formulación de productos de aseo.</p>
                </div>

                <div className="product-detail-item">
                  <h4>Fabricación</h4>
                  <p>Derivado de la saponificación industrial de grasas y aceites, sometido a un riguroso proceso de destilación al vacío y filtración para alcanzar grados técnicos y cosméticos.</p>
                </div>

                <div className="product-detail-item">
                  <h4>Aplicación</h4>
                  <p>Agente humectante, suavizante y acondicionador en jabones de tocador transparentes, cremas corporales y productos de higiene cosmética.</p>
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
