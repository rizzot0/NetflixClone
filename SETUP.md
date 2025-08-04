# 🚀 Configuración del Proyecto Netflix Clone

## 📋 Requisitos Previos

- Node.js 18+ (tienes v22.14.0 ✅)
- npm o yarn
- Base de datos PostgreSQL

## 🔧 Pasos para Configurar

### 1. Crear archivo .env

Crea un archivo `.env` en la raíz del proyecto con:

```env
# Database
DATABASE_URL="postgresql://usuario:password@host:puerto/database"

# NextAuth
NEXTAUTH_SECRET="tu-secret-super-seguro-aqui"
NEXTAUTH_URL="http://localhost:3000"

# Para desarrollo local
NODE_ENV="development"
```

### 2. Opciones de Base de Datos

#### Opción A: NeonDB (Recomendado - Gratis)
1. Ve a [neon.tech](https://neon.tech)
2. Crea una cuenta gratuita
3. Crea un nuevo proyecto
4. Copia la URL de conexión
5. Reemplaza `DATABASE_URL` en el .env

#### Opción B: PostgreSQL Local
Si tienes PostgreSQL instalado:
```env
DATABASE_URL="postgresql://postgres:tu-password@localhost:5432/netflix_clone"
```

### 3. Instalar Dependencias
```bash
npm install
```

### 4. Sincronizar Base de Datos
```bash
npx prisma db push
```

### 5. Crear Datos de Ejemplo
```bash
node setup-db.js
```

### 6. Iniciar el Proyecto
```bash
npm run dev
```

## 🎯 Credenciales de Prueba

Después de ejecutar `setup-db.js`:
- **Email**: test@example.com
- **Contraseña**: 123456

## 📁 Estructura del Proyecto

```
app/
├── (routes)/
│   ├── (auth)/          # Login/Registro
│   ├── (home)/          # Página principal
│   ├── movie/[movieId]/ # Reproductor de películas
│   ├── profiles/        # Selección de perfiles
│   └── upload-movies/   # Panel de administración
├── api/                 # API routes
└── globals.css          # Estilos globales
```

## 🛠️ Tecnologías Usadas

- **Next.js 14** - Framework React
- **TypeScript** - Tipado estático
- **Prisma** - ORM para base de datos
- **NextAuth.js** - Autenticación
- **Tailwind CSS** - Estilos
- **ShadCN/UI** - Componentes
- **Zustand** - Gestión de estado

## 🎬 Funcionalidades

- ✅ Autenticación de usuarios
- ✅ Múltiples perfiles por usuario
- ✅ Reproductor de películas
- ✅ Panel de administración
- ✅ Diseño responsive
- ✅ Sistema de trending

## 🐛 Solución de Problemas

### Error: "Environment variable not found: DATABASE_URL"
- Verifica que el archivo `.env` existe
- Asegúrate de que `DATABASE_URL` esté correctamente configurado

### Error: "Database connection failed"
- Verifica que la base de datos esté activa
- Comprueba las credenciales en `DATABASE_URL`

### Error: "Prisma schema validation"
- Ejecuta `npx prisma generate`
- Luego `npx prisma db push`

## 🚀 Despliegue

Para desplegar en Vercel:
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno en Vercel
3. ¡Listo!

---

¡Disfruta tu clon de Netflix! 🎉 