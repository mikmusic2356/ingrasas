import Image from "next/image";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}

const posts: Post[] = [
  {
    id: "1",
    title: "Trazabilidad y certificación: pilares de una gestión responsable",
    category: "Certificaciones",
    date: "Junio 1, 2026",
    image: "/images/hero-bg.jpg",
    excerpt: "En la gestión de residuos y materias primas industriales, la trazabilidad es un factor fundamental para garantizar transparencia, control y calidad.",
    content: "Las certificaciones internacionales no son solo sellos en un papel; son la garantía de que cada proceso físico y logístico cumple con criterios estrictos de reducción de gases de efecto invernadero y de comercio justo. En Biotrade Colombia implementamos balances de masa y sistemas de trazabilidad que aseguran que el aceite de cocina usado recolectado es el mismo que se exporta y transforma en biodiésel."
  },
  {
    id: "2",
    title: "Materias primas sostenibles: el futuro de la industria global",
    category: "Materias Primas",
    date: "Junio 1, 2026",
    image: "/images/circular-economy.jpg",
    excerpt: "La industria moderna enfrenta el desafío de producir más utilizando menos recursos. Las materias primas sostenibles y regenerativas son el camino a seguir.",
    content: "La transición desde la petroquímica hacia la oleoquímica renovable representa un cambio de paradigma. Los ácidos grasos vegetales y los ésteres metílicos reciclados ofrecen la misma eficiencia técnica que sus contrapartes fósiles, pero con una fracción de su huella ambiental. Biotrade Colombia suministra estos insumos estratégicos para apoyar la descarbonización industrial."
  },
  {
    id: "3",
    title: "¿Por qué es importante gestionar correctamente el aceite de cocina usado?",
    category: "ACU",
    date: "Junio 1, 2026",
    image: "/images/waste-oil.jpg",
    excerpt: "El aceite de cocina usado es uno de los residuos contaminantes más comunes. Te contamos las claves para recolectarlo y procesarlo adecuadamente.",
    content: "El vertido de aceite por el fregadero daña la red de alcantarillado público, tapona tuberías y eleva exponencialmente los costos de tratamiento de aguas residuales. Cuando el aceite llega a los ríos, forma una película superficial que bloquea el oxígeno, destruyendo la fauna acuática. La gestión adecuada y recolección programada a través de empresas autorizadas como Biotrade Colombia es la única solución ambiental efectiva."
  },
  {
    id: "4",
    title: "Cómo la recolección de aceite usado impulsa la economía circular",
    category: "Sostenibilidad",
    date: "Junio 1, 2026",
    image: "/images/circular-economy.jpg",
    excerpt: "Cada día, miles de litros de aceite de cocina usado son generados. Te mostramos cómo este residuo se convierte en el combustible limpio del futuro.",
    content: "El concepto de residuo desaparece cuando implementamos una verdadera cadena circular. El aceite vegetal usado pasa por etapas de filtrado, decantación y centrifugado en nuestra planta de Mosquera, convirtiéndose en un insumo oleoso apto para la producción de biodiésel o HVO (aceite vegetal hidrotratado), cerrando el ciclo del recurso de forma sostenible."
  }
];

export default function Noticias() {
  return (
    <main>
      <div className="page-header-spacer"></div>
      <section className="page-hero">
        <Image 
          src="/images/hero-bg.jpg" 
          alt="Noticias Banner" 
          fill
          priority
          className="hero-bg"
          style={{ opacity: 0.15 }}
        />
        <div className="hero-overlay"></div>
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <h1 className="page-title">Noticias</h1>
          <p className="hero-desc" style={{ margin: "0 auto", textAlign: "center" }}>
            Actualidad, avances técnicos y artículos sobre economía circular y descarbonización industrial.
          </p>
        </div>
      </section>

      <section className="page-content-wrapper section-padding">
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          {posts.map((post) => (
            <article 
              key={post.id} 
              style={{ 
                display: "grid", 
                gridTemplateColumns: "0.8fr 1.2fr", 
                gap: "3rem", 
                backgroundColor: "var(--color-light-bg)", 
                borderRadius: "24px", 
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.03)",
                boxShadow: "0 10px 20px rgba(0,0,0,0.02)"
              }}
            >
              <div style={{ position: "relative", minHeight: "280px" }}>
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill
                  className="news-img"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "3rem 2.5rem 3rem 0", display: "flex", flexDirection: "column", justifyContent: "center", gap: "1rem" }}>
                <div className="news-meta">
                  <span className="news-tag">{post.category}</span>
                  <time>{post.date}</time>
                </div>
                <h2 style={{ fontSize: "1.75rem", fontWeight: "800", color: "var(--color-text-dark)", lineHeight: "1.3" }}>
                  {post.title}
                </h2>
                <p style={{ color: "var(--color-gray-medium)", fontSize: "1.05rem", lineHeight: "1.7" }}>
                  {post.excerpt}
                </p>
                <div style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "var(--color-gray-dark)", marginTop: "0.5rem", borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: "1rem" }}>
                  {post.content}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
