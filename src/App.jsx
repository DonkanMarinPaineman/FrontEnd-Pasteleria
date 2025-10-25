import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Categories from './components/Categories.jsx'
import Products from './components/Products.jsx'
import Testimonials from './components/Testimonials.jsx'
import Faq from './components/Faq.jsx'
import Footer from './components/Footer.jsx'
import CartBar from './components/CartBar.jsx'
import { CartProvider } from './context/CartContext.jsx'

export default function App() {
  return (
    <CartProvider>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <About />
                <Categories />
                <Products />
                <Testimonials />
                <Faq />
              </main>
            }
          />
          <Route path="/cart" element={<main style={{padding: '2rem'}}><h2>Carrito</h2><p>Usa la barra inferior para ver el total y limpiar.</p></main>} />
        </Routes>
        <Footer />
        <CartBar />
      </div>
    </CartProvider>
  )
}
