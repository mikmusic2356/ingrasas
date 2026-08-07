"use client";

import Link from "next/link";
import Image from "next/image";

export default function AlimentoConcentradoAnimal() {
  return (
    <main style={{ marginTop: "var(--header-height)" }}>
      {/* 1. Hero Banner */}
      <section className="industry-hero">
        <Image 
          src="/images/hero/hero nutricion animal.jpeg" 
          alt="Alimento concentrado animal" 
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
            FUENTES DE ENERGÍA Y PROTEÍNA PARA LA NUTRICIÓN ANIMAL
          </h1>
          <div className="intro-right-col">
            <p className="intro-desc">
              Proveemos grasas y harinas de origen animal con alto valor biológico y excelente digestibilidad para la formulación de alimentos balanceados de mascotas, avicultura, porcicultura y acuicultura. Nuestros procesos de rendering garantizan un aporte nutricional consistente y seguro.
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
            {/* Product 1: Aceite de Pollo Premium */}
            <div className="product-card-horizontal">
              <div className="product-card-image-col">
                <Image 
                  src="/images/nutricion-animal-card.jpg" 
                  alt="Aceite de pollo" 
                  fill
                />
              </div>
              <div className="product-card-content-col">
                <h3 className="product-title-sub">ACEITE DE POLLO PREMIUM</h3>
                
                <div className="product-detail-item">
                  <h4>Descripción</h4>
                  <p>Grasa de origen avícola líquida a temperatura cálida, con alto contenido de energía metabolizable y ácidos grasos insaturados esenciales, ideal para mejorar el balance calórico de las dietas.</p>
                </div>

                <div className="product-detail-item">
                  <h4>Fabricación</h4>
                  <p>Obtenido mediante procesos térmicos continuos (rendering) de tejidos grasos y vísceras de pollo frescos de plantas de beneficio, centrifugado al vacío y estabilizado con antioxidantes grado feed.</p>
                </div>

                <div className="product-detail-item">
                  <h4>Aplicación</h4>
                  <p>Aporte energético de alta palatabilidad en la extrusión de alimentos para mascotas (pet food), balanceados avícolas, porcinos y concentrados de acuicultura.</p>
                </div>

                <div className="product-detail-item">
                  <h4>Especificaciones</h4>
                  <p>De acuerdo a la negociación.</p>
                </div>
              </div>
            </div>

            {/* Product 2: Harina de Vísceras de Pollo */}
            <div className="product-card-horizontal">
              <div className="product-card-image-col">
                <Image 
                  src="/images/waste-oil.jpg" 
                  alt="Harina avícola" 
                  fill
                />
              </div>
              <div className="product-card-content-col">
                <h3 className="product-title-sub">HARINA DE VÍSCERAS DE POLLO</h3>
                
                <div className="product-detail-item">
                  <h4>Descripción</h4>
                  <p>Ingrediente proteico seco concentrado con un perfil de aminoácidos balanceado, alta digestibilidad y excelentes niveles de calcio y fósforo orgánicos.</p>
                </div>

                <div className="product-detail-item">
                  <h4>Fabricación</h4>
                  <p>Cocción industrial controlada de vísceras y tejidos limpios de pollo, seguida de etapas de prensado mecánico para desengrasado y posterior molienda fina.</p>
                </div>

                <div className="product-detail-item">
                  <h4>Aplicación</h4>
                  <p>Fuente proteica de alto desempeño ampliamente incorporada en la elaboración de alimentos extruidos para mascotas, formulaciones acuícolas y concentrados especiales.</p>
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
      <section className="industry-sustainability-banner" style={{ backgroundImage: "linear-gradient(rgba(0, 34, 68, 0.5), rgba(0, 34, 68, 0.5)), url('/images/hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
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
