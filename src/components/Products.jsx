import { useCart } from '../context/CartContext.jsx'
import peppa from '../../imagenes/peppa.jpg'
import miki from '../../imagenes/miki.jpg'
import minion from '../../imagenes/minion.jpg'
import shuek from '../../imagenes/shuek.jpg'
import rayo from '../../imagenes/rayo.JPG'
import dientes from '../../imagenes/dientes.jpg'

const fmt = (n) => n.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })

const products = [
  { id: 'prod-peppa', name: 'Torta de Peppa Pig', desc: 'Torta de vainilla con forma de peppa', price: 14990, img: peppa, alt: 'peppa' },
  { id: 'prod-miki', name: 'Torta de miki maus', desc: 'Torta de lucuma con forma de miki maus', price: 12990, img: miki, alt: 'miki' },
  { id: 'prod-minion', name: 'Torta de Minion', desc: 'Torta de chocolate con forma de minion', price: 10990, img: minion, alt: 'minion' },
  { id: 'prod-shuek', name: 'Torta de shuek', desc: 'Torta de pistacho con forma de shuek', price: 11990, img: shuek, alt: 'shuek' },
  { id: 'prod-rayo', name: 'Torta de Rayo macuin', desc: 'Torta de chocolate con forma de Rayo Macuin', price: 12990, img: rayo, alt: 'rayo' },
  { id: 'prod-dientes', name: 'Torta con Cara', desc: 'Torta de vainilla con cara', price: 10990, img: dientes, alt: 'dientes' },
]

export default function Products() {
  const { addItem } = useCart()

  return (
    <section className="catalogo" aria-label="Catálogo de pasteles">
      {products.map(p => (
        <article className="producto" id={p.id} key={p.id}>
          <figure className="producto-media">
            <img src={p.img} alt={p.alt} className="producto-img" />
          </figure>
          <div className="producto-info">
            <h3 className="producto-nombre">{p.name}</h3>
            <p className="producto-desc">{p.desc}</p>
            <p className="producto-precio"><data value={p.price}>{fmt(p.price)}</data></p>
            <button className="btn-add" type="button" onClick={() => addItem(p.price)}>Agregar al carrito</button>
          </div>
        </article>
      ))}
    </section>
  )
}
