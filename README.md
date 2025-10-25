# 🎂 Pastelería Mil Sabores - React + Vite

Aplicación web de catálogo de pasteles construida con React y Vite, diseñada para ser desplegada en Vercel.

## 🚀 Características

- ✨ Interfaz moderna y responsiva
- 🛒 Sistema de carrito de compras funcional
- 📱 Diseño mobile-first
- ⚡ Desarrollo rápido con Vite
- 🎨 Estilos personalizados con gradientes vibrantes
- 🧩 Componentes React modulares y reutilizables

## 📋 Secciones

1. **Header** - Encabezado con branding de la pastelería
2. **Hero** - Título del catálogo
3. **About** - Información sobre la pastelería y características
4. **Categories** - Categorías de pasteles (cumpleaños, bodas, infantiles, etc.)
5. **Products** - Catálogo de 6 productos más vendidos con carrito
6. **Testimonials** - Reseñas de clientes satisfechos
7. **FAQ** - Preguntas frecuentes con acordeón interactivo
8. **Footer** - Pie de página
9. **CartBar** - Barra fija inferior con contador y total del carrito

## 🛠️ Tecnologías

- **React 18.3.1** - Librería UI
- **Vite 5.4** - Build tool y dev server
- **React Router DOM 6.26** - Enrutamiento
- **CSS3** - Estilos personalizados

## 📦 Instalación

```powershell
# Clonar el repositorio
git clone https://github.com/DonkanMarinPaineman/FrontEnd-Pasteleria.git

# Navegar al directorio
cd FrontEnd-Pasteleria

# Instalar dependencias
npm install
```

## 🎮 Scripts Disponibles

### Desarrollo
```powershell
npm run dev
```
Inicia el servidor de desarrollo en `http://localhost:5173`

### Build de Producción
```powershell
npm run build
```
Genera la versión optimizada en la carpeta `dist/`

### Preview del Build
```powershell
npm run preview
```
Sirve el build de producción localmente para revisión

## 📁 Estructura del Proyecto

```
FrontEnd-Pasteleria/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Encabezado principal
│   │   ├── Hero.jsx            # Título catálogo
│   │   ├── About.jsx           # Sobre nosotros
│   │   ├── Categories.jsx      # Categorías de pasteles
│   │   ├── Products.jsx        # Catálogo de productos
│   │   ├── Testimonials.jsx    # Testimonios clientes
│   │   ├── Faq.jsx             # Preguntas frecuentes
│   │   ├── Footer.jsx          # Pie de página
│   │   └── CartBar.jsx         # Barra carrito fija
│   ├── context/
│   │   └── CartContext.jsx     # Estado global del carrito
│   ├── main.jsx                # Punto de entrada React
│   ├── App.jsx                 # Componente principal
│   └── styles.css              # Estilos globales
├── imagenes/                   # Imágenes de productos
│   ├── peppa.jpg
│   ├── miki.jpg
│   ├── minion.jpg
│   ├── shuek.jpg
│   ├── rayo.JPG
│   └── dientes.jpg
├── index.html                  # HTML de entrada Vite
├── vite.config.js              # Configuración Vite
├── package.json                # Dependencias
└── README.md                   # Este archivo
```

## 🎨 Características del Carrito

- **Agregar productos**: Click en "Agregar al carrito"
- **Contador de ítems**: Muestra cantidad total en la barra
- **Total acumulado**: Calcula suma en CLP
- **Vaciar carrito**: Botón para resetear contador y total
- **Feedback visual**: Botón muestra "Agregado ✓" al añadir

## 🌐 Despliegue en Vercel

### Configuración Automática
Vercel detecta proyectos Vite automáticamente. Solo conecta tu repositorio.

### Configuración Manual (si es necesaria)

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Pasos para Desplegar

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Importa tu repositorio
4. Vercel detectará la configuración automáticamente
5. Click en "Deploy"

## 🎯 Rutas Disponibles

- `/` - Página principal con todas las secciones
- `/cart` - Página del carrito (básica, se puede expandir)

## 🔧 Personalización

### Modificar Productos

Edita el array `products` en `src/components/Products.jsx`:

```javascript
const products = [
  { 
    id: 'prod-peppa', 
    name: 'Torta de Peppa Pig', 
    desc: 'Torta de vainilla...', 
    price: 14990, 
    img: peppa, 
    alt: 'peppa' 
  },
  // ...más productos
]
```

### Cambiar Colores

Los colores principales están en `src/styles.css`:

- Rosa principal: `#ff4e91`
- Fondo: `#fff8f5`
- Gradiente header: `linear-gradient(123deg, #ff7eb9, #ff65a3, #7afcff)`

### Agregar Categorías

Edita el array `categories` en `src/components/Categories.jsx`

### Modificar FAQs

Edita el array `faqs` en `src/components/Faq.jsx`

## 📱 Responsive Design

- **Desktop**: Grid de 3-4 columnas para productos
- **Tablet**: Grid de 2 columnas
- **Mobile**: Columna única, navegación optimizada

## 🐛 Solución de Problemas

### Error de build con imágenes .JPG

Ya configurado en `vite.config.js`:
```javascript
assetsInclude: ['**/*.JPG']
```

### Problemas con node_modules

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

**Donkan Marin Paineman**

- GitHub: [@DonkanMarinPaineman](https://github.com/DonkanMarinPaineman)

## 🙏 Agradecimientos

- Diseño inspirado en pastelerías modernas
- Iconos de emojis nativos para compatibilidad universal
- Comunidad React por las herramientas increíbles

---

Hecho con ❤️ y mucho 🍰 por Donkan
