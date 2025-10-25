import { useCart } from '../context/CartContext.jsx'

const fmt = (n) => n.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })

export default function CartBar() {
  const { count, total, clear } = useCart()
  return (
    <div className="cart-bar" role="status" aria-live="polite">
      🛒<span id="cart-count">{count}</span> ítems — Total: <strong id="cart-total">{fmt(total)}</strong>
      <button id="cart-clear" type="button" onClick={clear}>Vaciar</button>
    </div>
  )
}
