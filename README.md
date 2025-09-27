# Yego React App - Partner de Yango

Una aplicación web moderna construida con React, TypeScript, Tailwind CSS, Zustand y Lucide Icons.

## 🚀 Tecnologías Utilizadas

- **React 18** con **TypeScript** - Framework principal
- **Tailwind CSS v3** - Framework de utilidades para estilos
- **Zustand** - Gestión de estado ligera y simple
- **Lucide React** - Iconografía moderna y consistente
- **JSON Web Tokens (JWT)** - Autenticación segura
- **Vite** - Herramienta de construcción rápida
- **React Router DOM** - Enrutamiento del lado del cliente

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 16 o superior)
- **npm** o **yarn**

### Instalación de Node.js

Si no tienes Node.js instalado:

1. Ve a [nodejs.org](https://nodejs.org/)
2. Descarga la versión LTS (recomendada)
3. Ejecuta el instalador y sigue las instrucciones
4. Verifica la instalación ejecutando en la terminal:
   ```bash
   node --version
   npm --version
   ```

## 🛠️ Instalación y Configuración

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_JWT_SECRET=tu-clave-secreta-aqui
VITE_API_URL=http://localhost:3000/api
```

### 3. Ejecutar en Modo Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### 4. Construir para Producción

```bash
npm run build
```

Los archivos de producción se generarán en la carpeta `dist/`

### 5. Vista Previa de Producción

```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ServiciosDestacados.tsx
│   ├── Servicios.tsx
│   ├── YegoPremium.tsx
│   ├── PlanesFinanciamiento.tsx
│   ├── Nosotros.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   └── FloatingIcons.tsx
├── data/               # Datos mock y configuraciones
│   ├── services.ts
│   └── plans.ts
├── hooks/              # Hooks personalizados
│   ├── useAuth.ts
│   ├── useTheme.ts
│   └── useNavigation.ts
├── store/              # Estado global con Zustand
│   └── useAppStore.ts
├── types/              # Definiciones de TypeScript
│   └── index.ts
├── utils/              # Utilidades
│   ├── cn.ts
│   └── auth.ts
├── App.tsx             # Componente principal
├── main.tsx            # Punto de entrada
└── index.css           # Estilos globales con Tailwind
```

## 🎨 Características Principales

### ✨ Diseño Moderno
- **Tailwind CSS v3** para estilos consistentes y responsivos
- **Lucide Icons** para iconografía moderna
- **Gradientes y animaciones** suaves
- **Diseño responsive** para todos los dispositivos

### 🔐 Autenticación
- **JWT** para autenticación segura
- **Gestión de sesiones** persistente
- **Roles de usuario** (driver, admin)
- **Protección de rutas**

### 📱 Estado Global
- **Zustand** para gestión de estado
- **Persistencia** en localStorage
- **Temas personalizables** (colores e iconos)
- **Navegación** con scroll suave

### 🚀 Performance
- **Vite** para desarrollo rápido
- **TypeScript** para código más seguro
- **Lazy loading** de componentes
- **Optimización** de imágenes

## 🎯 Funcionalidades

### 🏠 Página Principal
- **Hero section** con llamada a la acción
- **Servicios destacados** con animaciones
- **Navegación** suave entre secciones
- **Temas personalizables** en tiempo real

### 🚗 Servicios
- **YEGO MI AUTO** - Plan de financiamiento
- **YEGO PRO** - Compartir ganancias
- **YEGO PREMIUM** - Beneficios exclusivos
- **Conductores Yango** - Comunidad

### 💎 Yego Premium
- **Tabla de calificación** de viajes
- **Niveles Plata y Oro** con beneficios
- **Beneficios detallados** por categoría
- **Canales de contacto** integrados

### 📋 Planes de Financiamiento
- **Modalidades** de entrega (Sorteo, Remate, Inmediata)
- **Descuentos** por viajes semanales
- **Requisitos** de inscripción
- **Calculadoras** de costos

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Vista previa de producción
npm run lint         # Linter de código
```

## 🌐 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. Despliega automáticamente

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run build`
3. Configura el directorio de publicación: `dist`

### Servidor Tradicional
1. Ejecuta `npm run build`
2. Sube la carpeta `dist/` a tu servidor
3. Configura tu servidor web para servir archivos estáticos

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico o preguntas:
- **Email**: sac@yego.pro
- **WhatsApp**: +1(669)231-5122
- **TikTok**: @yegoenvivo

---

**¡Gracias por usar Yego! 🚗💨**

