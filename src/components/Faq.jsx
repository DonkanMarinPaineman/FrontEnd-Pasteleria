import { useState } from 'react'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      id: 1,
      question: '¿Con cuánta anticipación debo hacer mi pedido?',
      answer: 'Recomendamos hacer pedidos con al menos 3-5 días de anticipación para pasteles personalizados. Para diseños más complejos o eventos grandes, sugerimos 1-2 semanas.'
    },
    {
      id: 2,
      question: '¿Hacen envíos a domicilio?',
      answer: 'Sí, realizamos entregas a domicilio en toda la ciudad. El costo de envío varía según la distancia. También puedes retirar tu pedido en nuestra tienda sin costo adicional.'
    },
    {
      id: 3,
      question: '¿Puedo personalizar los sabores?',
      answer: 'Por supuesto. Ofrecemos una amplia variedad de sabores: vainilla, chocolate, lúcuma, pistacho, red velvet, zanahoria, y más. También podemos combinar sabores diferentes por piso.'
    },
    {
      id: 4,
      question: '¿Tienen opciones sin gluten o veganas?',
      answer: 'Sí, ofrecemos pasteles sin gluten, veganos y sin azúcar. Por favor menciona tus requerimientos dietéticos al hacer el pedido para asegurar la disponibilidad de ingredientes.'
    },
    {
      id: 5,
      question: '¿Cómo puedo hacer un pedido?',
      answer: 'Puedes hacer tu pedido a través de nuestro WhatsApp, llamando directamente a la tienda, o visitándonos en persona. Te ayudaremos a diseñar el pastel perfecto para tu evento.'
    },
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="preguntas-frecuentes" className="section-faq">
      <div className="container-faq">
        <h2 className="section-title">Preguntas Frecuentes</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={faq.id} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
              <button 
                className="faq-question" 
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
