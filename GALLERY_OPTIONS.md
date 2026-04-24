# Opciones de Diseño para Galería de Proyectos - Salazar Obras Integrales

## Opción 1: Galería de Tarjetas Antes/Después (Recomendada)

### Presentación Visual
Cada proyecto se muestra en una tarjeta con dos imágenes lado a lado: **Antes** y **Después**. Al pasar el mouse, se activa una transición suave que cambia de una imagen a otra.

### Estructura de Datos por Proyecto
```
{
  id: 1,
  title: "Refacción Integral de Vivienda",
  category: "Residencial",
  location: "Salta, Argentina",
  imageBefore: "url-imagen-antes",
  imageAfter: "url-imagen-despues",
  description: "Transformación completa de vivienda de 120m² con albañilería, electricidad, plomería y pintura.",
  services: ["Albañilería", "Electricidad", "Pintura"],
  duration: "3 meses"
}
```

### Ventajas
- Muestra claramente el impacto del trabajo
- Muy visual y atractivo
- Fácil de entender el antes/después
- Genera confianza en el cliente

### Diseño
- Tarjetas en grid de 2 columnas en desktop, 1 en mobile
- Cada tarjeta tiene dos imágenes que se intercambian al hover
- Overlay con información del proyecto
- Botón "Ver Detalles" para abrir modal con más información

---

## Opción 2: Galería Filtrable por Categoría

### Presentación Visual
Galería completa con filtros por tipo de proyecto (Residencial, Comercial, Refacciones, Construcción en Seco, etc.). Las imágenes se muestran en un grid masónico que se reorganiza según el filtro seleccionado.

### Estructura de Datos por Proyecto
```
{
  id: 1,
  title: "Local Comercial Llave en Mano",
  category: "Comercial",
  subcategory: "Retail",
  location: "Centro, Salta",
  images: ["url1", "url2", "url3"],
  thumbnail: "url-thumbnail",
  description: "Diseño y ejecución de local comercial de 80m²",
  services: ["Diseño", "Construcción", "Instalaciones", "Pintura"],
  duration: "2 meses",
  budget: "Presupuesto a consultar"
}
```

### Ventajas
- Muestra más variedad de trabajos
- Permite al cliente encontrar proyectos similares al suyo
- Más profesional y moderno
- Escalable para muchos proyectos

### Diseño
- Barra de filtros horizontal en la parte superior
- Grid masónico (3-4 columnas en desktop)
- Cada imagen con overlay que aparece al hover
- Lightbox para ver imágenes en tamaño completo

---

## Opción 3: Galería Interactiva con Carrusel por Proyecto

### Presentación Visual
Cada proyecto se muestra como una tarjeta grande con carrusel de imágenes. Puedes navegar entre múltiples fotos del mismo proyecto con flechas o puntos indicadores.

### Estructura de Datos por Proyecto
```
{
  id: 1,
  title: "Construcción Residencial Integral",
  category: "Residencial",
  location: "Barrio Norte, Salta",
  images: ["url1", "url2", "url3", "url4"],
  description: "Casa de 200m² con construcción desde cero",
  highlights: [
    "Estructura de hormigón armado",
    "Instalaciones eléctricas certificadas",
    "Acabados de lujo",
    "Terminación en 4 meses"
  ],
  services: ["Obra Civil", "Electricidad", "Plomería", "Pintura"],
  testimonial: {
    client: "Juan Pérez",
    text: "Excelente trabajo, muy profesionales"
  }
}
```

### Ventajas
- Muestra múltiples ángulos de cada proyecto
- Permite contar una historia por proyecto
- Incluye testimonios
- Muy interactivo y atractivo

### Diseño
- Tarjetas grandes (full-width o 2 columnas)
- Carrusel de imágenes con navegación
- Información del proyecto debajo del carrusel
- Testimonios de clientes

---

## Mi Recomendación: Opción 1 + Opción 2 Combinadas

Implementar una **Galería Híbrida**:
- **Sección Principal**: Galería de Antes/Después (Opción 1) con 6-8 proyectos destacados
- **Sección Secundaria**: Galería Filtrable (Opción 2) con todos los proyectos

Esta combinación ofrece:
1. Impacto visual inmediato con antes/después
2. Profundidad con galería completa filtrable
3. Flexibilidad para mostrar muchos proyectos
4. Mejor experiencia de usuario

---

## Estructura HTML/CSS Propuesta

### Para Opción 1 (Antes/Después)
```tsx
<div className="project-card">
  <div className="image-comparison">
    <div className="image-before">
      <img src="before.jpg" alt="Antes" />
      <span className="label">Antes</span>
    </div>
    <div className="image-after" style={{ opacity: 0 }}>
      <img src="after.jpg" alt="Después" />
      <span className="label">Después</span>
    </div>
  </div>
  <div className="project-info">
    <h3>{title}</h3>
    <p className="category">{category}</p>
    <p className="description">{description}</p>
    <div className="services">
      {services.map(s => <span key={s}>{s}</span>)}
    </div>
    <button>Ver Detalles</button>
  </div>
</div>
```

### Estilos CSS
```css
.image-comparison {
  position: relative;
  overflow: hidden;
  height: 300px;
}

.image-before, .image-after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.4s ease-in-out;
}

.project-card:hover .image-after {
  opacity: 1 !important;
}

.label {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
}
```

---

## Cómo Agregar Nuevos Proyectos

Una vez implementada la galería, agregar nuevos proyectos será tan simple como:

1. Subir las imágenes con `manus-upload-file --webdev`
2. Agregar el objeto del proyecto al array `projects` en el componente
3. El sitio se actualiza automáticamente

Ejemplo:
```tsx
const projects = [
  {
    id: 1,
    title: "Tu Proyecto",
    category: "Categoría",
    imageBefore: "url-antes",
    imageAfter: "url-despues",
    description: "Descripción",
    services: ["Servicio1", "Servicio2"],
    duration: "X meses"
  }
  // Agregar más proyectos aquí
];
```

---

## Próximos Pasos

¿Cuál opción prefieres?
1. **Opción 1**: Antes/Después simple
2. **Opción 2**: Galería filtrable
3. **Opción 3**: Carrusel interactivo
4. **Híbrida**: Combinación de Opción 1 + Opción 2 (Recomendada)

Una vez que me indiques tu preferencia, implementaré la galería con componentes reutilizables y listos para que agregues tus propias fotos.
