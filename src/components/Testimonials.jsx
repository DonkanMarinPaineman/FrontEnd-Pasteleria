export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'María González',
      rating: 5,
      text: 'El pastel de cumpleaños de mi hija fue increíble. La torta de Peppa quedó hermosa y el sabor espectacular. ¡Todos los niños la adoraron!',
      date: 'Hace 1 semana'
    },
    {
      id: 2,
      name: 'Carlos Ramírez',
      rating: 5,
      text: 'Pedimos una torta personalizada para nuestro aniversario y superó todas nuestras expectativas. Muy profesionales y el resultado fue perfecto.',
      date: 'Hace 2 semanas'
    },
    {
      id: 3,
      name: 'Ana Martínez',
      rating: 5,
      text: 'La mejor pastelería de la zona. Los sabores son únicos y la atención al cliente es excelente. Siempre vuelvo por más.',
      date: 'Hace 1 mes'
    },
  ]

  return (
    <section id="testimonios" className="section-testimonials">
      <div className="container-testimonials">
        <h2 className="section-title">Lo Que Dicen Nuestros Clientes</h2>
        <div className="testimonials-grid">
          {testimonials.map(test => (
            <div key={test.id} className="testimonial-card">
              <div className="testimonial-rating">
                {'⭐'.repeat(test.rating)}
              </div>
              <p className="testimonial-text">"{test.text}"</p>
              <div className="testimonial-author">
                <p className="author-name">{test.name}</p>
                <p className="author-date">{test.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
