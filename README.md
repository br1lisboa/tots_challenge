# Tots Challenge

## Descripción

**Tots Challenge** es una SPA (Single Page Application) desarrollada en Next.js que consume una API GraphQL para obtener y renderizar datos en un mapa interactivo. La aplicación permite realizar búsquedas por URL, lo que facilita el mantenimiento de estados y permite compartir URLs, una técnica comúnmente utilizada en tiendas internacionales.

La aplicación utiliza tanto `fetch` como `Apollo Client` para las consultas GraphQL. Los usuarios pueden navegar a rutas dinámicas desde los modales del mapa para ver más información sobre los elementos seleccionados, incluyendo un slider con imágenes relacionadas.

El proyecto incluye características como protección de rutas, rutas permitidas, manejo de errores dinámicos, una página de 404 personalizada, y componentes cargados dinámicamente con `Suspense` y `dynamic()`.

Puedes ver la aplicación desplegada en Vercel aquí: [Tots Challenge](https://tots-challenge-lisboa.vercel.app/).

## Tecnologías Utilizadas

- **Next.js**: Framework de React para la creación de aplicaciones web.
- **GraphQL**: Lenguaje de consulta para APIs que permite obtener solo los datos necesarios.
- **Apollo Client**: Cliente GraphQL para gestionar datos en aplicaciones React.
- **Leaflet**: Librería de mapas interactivos.
- **Vercel**: Plataforma de hosting para aplicaciones web.

## Funcionalidades Clave

- **Mapa Interactivo**: Renderización de marcadores con datos obtenidos a través de GraphQL.
- **Proyecto Responsive**: Se puede utilizar y visualizar perfectamente desde dispositivos mobiles.
- **Búsqueda por URL**: Permite mantener y compartir estados específicos de la aplicación.
- **Protección de Rutas**: Se pueden a acceder a rutas existentes solo de los países disponibles.
- **Rutas Dinámicas**: Navegación a rutas dinámicas con más detalles e imágenes.
- **Manejo de Errores**: Páginas personalizadas para errores y rutas no encontradas (404).
- **Componentes Dinámicos y Suspense**: Carga de componentes de manera eficiente.

## Deploy en Local

Sigue estos pasos para desplegar y correr el proyecto en tu entorno local:

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/tu_usuario/tots-challenge.git
   cd tots-challenge```

1. **Instala dependencias**:

   ```bash
   pnpm install```

1. **Inicia el servidor de desarrollo:**:

   ```bash
   pnpm run dev```