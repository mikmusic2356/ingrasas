"use client";

import Link from "next/link";
import Image from "next/image";

export default function Oleoquimica() {
  return (
    <main style={{ marginTop: "var(--header-height)" }}>
      {/* 1. Hero Banner */}
      <section className="industry-hero">
        <Image 
          src="/images/hero/hero oleoquimica.jpeg" 
          alt="Operador control industrial" 
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
            ACEITES Y GRASAS PARA APLICACIONES OLEOQUIMICAS Y TECNICAS.
          </h1>
          <div className="intro-right-col">
            <p className="intro-desc">
              Ofrecemos distintos tipos de aceites vegetales y grasas animales para aplicaciones oleoquímicas y técnicas. La importancia de los aceites vegetales aumentará en el futuro, especialmente en el sector de los lubricantes, ya que la legislación prohíbe cada vez más el uso de productos derivados del aceite mineral en aplicaciones en zonas ecológicamente sensibles (por ejemplo, en el agua o en los bosques).
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
            {/* Product 1: Glicerina Cruda */}
            <div className="product-card-horizontal">
              <div className="product-card-image-col">
                <Image 
                  src="/images/hero-bg.jpg" 
                  alt="Operario industrial" 
                  fill
                />
              </div>
              <div className="product-card-content-col">
                <h3 className="product-title-sub">GLICERINA CRUDA</h3>
                
                <div className="product-detail-item">
                  <h4>Descripción</h4>
                  <p>La glicerina cruda seca es un subproducto de origen industrial obtenido principalmente en la producción de biodiésel. Se presenta como un líquido viscoso de color marrón oscuro, con alto contenido de glicerol y baja humedad, acompañado de impurezas como sales, materia orgánica y trazas de catalizadores.</p>
                </div>

                <div className="product-detail-item">
                  <h4>Fabricación</h4>
                  <p>Se obtiene como subproducto en la reacción de transesterificación de aceites y grasas para la producción de biodiésel. Posteriormente, la glicerina cruda es sometida a procesos de decantación, neutralización y secado para reducir su contenido de agua y mejorar su concentración de glicerol, facilitando su almacenamiento y uso industrial.</p>
                </div>

                <div className="product-detail-item">
                  <h4>Aplicación</h4>
                  <p>Se utiliza como materia prima en la industria oleoquímica para la producción de glicerina refinada, así como en la fabricación de resinas, anticongelantes, productos químicos y como insumo energético en procesos industriales.</p>
                </div>

                <div className="product-detail-item">
                  <h4>Especificaciones</h4>
                  <p>De acuerdo a la negociación.</p>
                </div>
              </div>
            </div>

            {/* Product 2: Glicerina Técnica */}
            <div className="product-card-horizontal">
              <div className="product-card-image-col">
                <Image 
                  src="/images/circular-economy.jpg" 
                  alt="Purificación de Glicerina" 
                  fill
                />
              </div>
              <div className="product-card-content-col">
                <h3 className="product-title-sub">GLICERINA TECNICA</h3>
                
                <div className="product-detail-item">
                  <h4>Descripción</h4>
                  <p>La glicerina técnica es una sustancia química líquida, incolora, viscosa y altamente higroscópica, cuyo nombre químico es glicerol o 1,2,3-propanotriol (C3H8O3). Se caracteriza por su capacidad para atraer y retener agua, su bajo punto de volatilidad y su estabilidad química, lo que la convierte en un intermediario y materia prima versátil en procesos industriales donde no se requiere la pureza de grado farmacéutico o alimentario.</p>
                </div>

                <div className="product-detail-item">
                  <h4>Fabricación</h4>
                  <p>Se obtiene a partir de la purificación de glicerina cruda, generalmente proveniente de la producción de biodiésel o de procesos de saponificación, mediante etapas de neutralización, filtración, destilación y ajuste de pureza para cumplir con especificaciones técnicas.</p>
                </div>

                <div className="product-detail-item">
                  <h4>Aplicación</h4>
                  <p>Biocombustibles de segunda generación, jabonería y aplicación industrial.</p>
                </div>

                <div className="product-detail-item">
                  <h4>Especificaciones</h4>
                  <p>De acuerdo a la negociación.</p>
                </div>
              </div>
            </div>

            {/* Product 3: Ácido Graso Destilado de Palma (PFAD) */}
            <div className="product-card-horizontal">
              <div className="product-card-image-col">
                <Image 
                  src="/images/circular-leaf-bg.jpg" 
                  alt="Palma de aceite" 
                  fill
                />
              </div>
              <div className="product-card-content-col">
                <h3 className="product-title-sub">ACIDOS GRASO DESTILADO DE PALMA (PFAD)</h3>
                
                <div className="product-detail-item">
                  <h4>Descripción</h4>
                  <p>El Ácido Graso Destilado de Palma es conocido industrialmente como PFAD, por sus siglas en inglés, es un subproducto resultante del proceso de refinación física del aceite de palma crudo. Se presenta como un sólido o semisólido de color marrón claro o amarillento a temperatura ambiente. Este compuesto es rico en ácidos grasos libres, entre ellos y principalmente ácido palmítico y oleico es de gran utilidad como materia prima diferentes industrias debido a su versatilidad.</p>
                </div>

                <div className="product-detail-item">
                  <h4>Fabricación</h4>
                  <p>Se obtiene durante la etapa de desodorización en la refinación física del aceite de palma, donde, mediante altas temperaturas y vacío, se volatilizan y separan los ácidos grasos libres del aceite, los cuales son posteriormente condensados para formar el PFAD.</p>
                </div>

                <div className="product-detail-item">
                  <h4>Aplicación</h4>
                  <p>Materia prima para resinas alquídicas, lubricantes e Industria oleoquímica, pinturas, fabricación de jabones industriales, detergentes, barnices, cosméticos también es soluble en cetonas, ésteres, alcoholes y aromáticos e insoluble en el agua.</p>
                </div>

                <div className="product-detail-item">
                  <h4>Especificaciones</h4>
                  <p>De acuerdo a la negociación.</p>
                </div>
              </div>
            </div>

            {/* Product 4: Ácido Graso Destilado de Soya (SFAD) */}
            <div className="product-card-horizontal">
              <div className="product-card-image-col">
                <Image 
                  src="/images/waste-oil.jpg" 
                  alt="Granos de soya" 
                  fill
                />
              </div>
              <div className="product-card-content-col">
                <h3 className="product-title-sub">ACIDOS GRASO DESTILADO DE SOYA (SFAD)</h3>
                
                <div className="product-detail-item">
                  <h4>Descripción</h4>
                  <p>El ácido graso destilado de soya es un subproducto rico en ácidos grasos libres que se obtiene durante el proceso de refinación y desodorización del aceite de soya, donde se eliminan compuestos volátiles y ácidos grasos libres del aceite, en su composición está formado por una mezcla de ácidos grasos saturados (palmítico, esteárico) e insaturados (oleico, linoleico y linolénico), tiene gran estabilidad en el color y al aire tiene gran propiedad de secado, en su apariencia física es un líquido viscoso amarillento a temperatura ambiente.</p>
                </div>

                <div className="product-detail-item">
                  <h4>Fabricación</h4>
                  <p>Se obtiene durante la etapa de desodorización en la refinación del aceite de soya, donde los ácidos grasos libres son separados mediante destilación a alta temperatura y vacío, siendo posteriormente condensados para formar el SFAD.</p>
                </div>

                <div className="product-detail-item">
                  <h4>Aplicación</h4>
                  <p>Materia prima para resinas alquídicas, lubricantes e Industria oleoquímica, pinturas, fabricación de jabones industriales, detergentes, barnices, cosméticos también es soluble en cetonas, ésteres, alcoholes y aromáticos e insoluble en el agua.</p>
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
