import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)

  const addItem = (price) => {
    setCount(c => c + 1)
    setTotal(t => t + (Number(price) || 0))
  }
  const clear = () => {
    setCount(0)
    setTotal(0)
  }

  const value = useMemo(() => ({ count, total, addItem, clear }), [count, total])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de <CartProvider>')
  return ctx
}
