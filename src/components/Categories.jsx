export default function Categories() {
  const categories = [
    { id: 1, name: 'Cumpleaños', icon: '🎉', desc: 'Pasteles personalizados para celebrar otro año de vida' },
    { id: 2, name: 'Bodas', icon: '💒', desc: 'Tortas elegantes para tu día especial' },
    { id: 3, name: 'Infantiles', icon: '🧸', desc: 'Diseños divertidos con personajes favoritos' },
    { id: 4, name: 'Empresariales', icon: '🏢', desc: 'Pasteles corporativos para eventos y celebraciones' },
    { id: 5, name: 'Temáticos', icon: '🎭', desc: 'Cualquier tema que imagines, lo hacemos realidad' },
    { id: 6, name: 'Cupcakes', icon: '🧁', desc: 'Pequeñas delicias perfectas para compartir' },
  ]

  return (
    <section id="categorias" className="section-categories">
      <div className="container-categories">
        <h2 className="section-title">Nuestras Categorías</h2>
        <p className="section-subtitle">Encuentra el pastel perfecto para cada ocasión</p>
        <div className="categories-grid">
          {categories.map(cat => (
            <div key={cat.id} className="category-card">
              <span className="category-icon">{cat.icon}</span>
              <h3 className="category-name">{cat.name}</h3>
              <p className="category-desc">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
