export default function About() {
  return (
    <section id="sobre-nosotros" className="section-about">
      <div className="container-about">
        <h2 className="section-title">Sobre Nosotros</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              En <strong>Pastelería Mil Sabores</strong>, llevamos más de 15 años endulzando los momentos especiales de nuestros clientes. 
              Cada pastel es elaborado con ingredientes frescos y de primera calidad, combinando recetas tradicionales con diseños creativos 
              que hacen de cada celebración algo único.
            </p>
            <p>
              Nuestro equipo de reposteros expertos trabaja con pasión para crear pasteles personalizados que no solo se ven increíbles, 
              sino que saben aún mejor. Desde cumpleaños infantiles hasta bodas elegantes, tenemos el pastel perfecto para cada ocasión.
            </p>
          </div>
          <div className="about-features">
            <div className="feature-item">
              <span className="feature-icon">🎂</span>
              <h3>Ingredientes Frescos</h3>
              <p>Seleccionamos los mejores ingredientes cada día</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎨</span>
              <h3>Diseños Personalizados</h3>
              <p>Creamos el pastel exacto que imaginas</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">⭐</span>
              <h3>15+ Años de Experiencia</h3>
              <p>Miles de clientes satisfechos nos respaldan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
