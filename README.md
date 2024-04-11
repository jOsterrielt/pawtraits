  <h3 align="center"> PAWTRAITS Plataforma SaaS potenciada con IA</h3>
  
  ![250shots_so](https://github.com/jOsterrielt/pawtraits/assets/126017918/fd9e67eb-a3f9-4735-80e8-1b15b45cb0d1)

<div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Stripe-black?style=for-the-badge&logoColor=white&logo=stripe&color=008CDD" alt="stripe" />
    <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=47A248" alt="mongodb" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

<h2>Introducion</h2>
  <p>
Plataforma SaaS de imágenes con IA que destaca en capacidades de procesamiento de imágenes, integra una infraestructura de pago segura, ofrece funcionalidades avanzadas de búsqueda de imágenes y soporta múltiples características de IA, incluyendo restauración de imágenes, recoloración, eliminación de objetos, relleno generativo y eliminación de fondos.
</p>
<hr>
<h2>Funcionalidades</h2>
<p>
 Autenticación y Autorización: Acceso seguro de usuarios con registro, inicio de sesión y protección de rutas.

Exhibición de Imágenes: Explora transformaciones de usuarios con navegación sencilla usando paginación.

 Búsqueda Avanzada de Imágenes: Encuentra imágenes por contenido u objetos presentes dentro de la imagen de forma rápida y precisa.

 Restauración de Imágenes: Revive imágenes antiguas o dañadas sin esfuerzo.

 Recoloración de Imágenes: Personaliza imágenes reemplazando objetos con colores deseados fácilmente.

 Relleno Generativo de Imágenes: Rellena áreas faltantes de imágenes sin problemas.

 Eliminación de Objetos: Limpia imágenes eliminando objetos no deseados con precisión.

 Eliminación de Fondos: Extrae objetos de fondos con facilidad.

 Descarga de Imágenes Transformadas: Guarda y comparte imágenes transformadas por IA de manera conveniente.

 Detalles de Imágenes Transformadas: Visualiza detalles de transformaciones para cada imagen.

 Gestión de Transformaciones: Control sobre la eliminación y actualización de transformaciones.

 Sistema de Créditos: Compra créditos para transformaciones de imágenes.

 Página de Perfil: Accede a imágenes transformadas e información de créditos personalmente.

 Compra de Créditos: Compra créditos de forma segura a través de Stripe para un uso ininterrumpido.

 UI/UX Responsiva: Una experiencia fluida en todos los dispositivos con una interfaz fácil de usar.

y muchos más, incluyendo arquitectura de código y reutilización.</p>

## <a name="quick-start"> Inicio Rapido</a>

Sigue estos pasos para configurar el proyecto localmente en tu pc.

**Prerequisitos**

Asegurate de tener instalado:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Clonando el Repositorio**

```bash
git clone https://github.com/jOsterrielt/pawtraits.git
cd pawtraits
```

**Instalacion**

Instala las dependencias del proyecto usando npm:

```bash
npm run dev
```

**Configura las Variables de Entorno**

Crea un nuevo archivo llamado `.env.local` en la raiz del proyecto y agrega el siguiente contenido:

```env
#NEXT
NEXT_PUBLIC_SERVER_URL=

#MONGODB
MONGODB_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#CLOUDINARY
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

#STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```


Reemplaza los valores con tus credenciales reales correspondientes. Puedes obtener estas credenciales registrándote en  [Clerk](https://clerk.com/), [MongoDB](https://www.mongodb.com/), [Cloudinary](https://cloudinary.com/) and [Stripe](https://stripe.com)

**Levantando el Proyecto**

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegdor para ver el projeyecto.

