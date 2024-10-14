
# GymBack - Backend para Gestión de Gimnasios

GymBack es un sistema de backend desarrollado para la gestión de un gimnasio, que permite a los usuarios y administradores gestionar planes de entrenamiento, ejercicios, rutinas y más. Está construido con **Node.js**, **Express**, **MongoDB Atlas** y **TypeScript**, siguiendo una arquitectura modular basada en capas para mantener el código organizado y escalable.

---

## Tecnologías Utilizadas
- **Node.js**: Plataforma de desarrollo del backend.
- **Express**: Framework para manejar las rutas y controladores.
- **MongoDB Atlas**: Base de datos NoSQL en la nube.
- **TypeScript**: Superset de JavaScript que agrega tipado estático.
- **JWT (JSON Web Tokens)**: Manejo de autenticación y autorización.
- **Multer**: Para la carga y manejo de archivos de imagen.

---

## Arquitectura
El proyecto sigue una **arquitectura en capas**, que permite mantener un código limpio, modular y fácil de escalar. Las capas principales son:

1. **Controllers**: Maneja la lógica de entrada y salida de datos.
2. **Services**: Contiene la lógica de negocio.
3. **Repositories**: Encargada de las interacciones con la base de datos.
4. **Models**: Define los esquemas de las colecciones de MongoDB.

---

## Requisitos Previos
Antes de levantar el proyecto, asegúrate de tener instalado:

- **Node.js** (versión LTS recomendada)
- **MongoDB Atlas** (configurado con una conexión válida)
- **npm** o **yarn**

---

## Configuración y Ejecución del Proyecto

1. **Clonar el Repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd GymBack
   ```

2. **Instalar Dependencias:**
   ```bash
   npm install
   ```

3. **Configurar Variables de Entorno:**
   Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```
   PORT=3000
   MONGO_URI=<tu_conexion_mongodb_atlas>
   JWT_SECRET=<tu_secreto_jwt>
   ```

4. **Levantar el Servidor:**
   ```bash
   npm run dev
   ```

   El servidor estará disponible en: `http://localhost:3000`

---

## Endpoints Principales

- **POST /api/auth/register**: Registro de un usuario.
- **POST /api/auth/login**: Inicio de sesión y generación de token JWT.
- **GET /api/routines/user**: Obtener rutinas del usuario autenticado.
- **POST /api/routines**: Crear una rutina para un usuario específico.
- **GET /api/exercises**: Listar todos los ejercicios disponibles.

---

## Licencia
Este proyecto está bajo la licencia MIT.
