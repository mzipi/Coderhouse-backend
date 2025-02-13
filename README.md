🛒 Store API
API para gestionar productos y usuarios en una tienda en línea. Construida con Node.js, Express.js y MongoDB.

🚀 Características
✅ CRUD de productos (Crear, Leer, Actualizar, Eliminar).
✅ Autenticación de usuarios con JWT.
✅ Manejo de errores con middleware de Express.
✅ Base de datos con MongoDB y Mongoose.
✅ Rutas protegidas para usuarios autenticados.

🏗️ Tecnologías Utilizadas
Backend: Node.js, Express.js
Base de datos: MongoDB, Mongoose
Autenticación: JSON Web Tokens (JWT)
Otros: dotenv, CORS, bcrypt
⚙️ Instalación y Configuración
1️⃣ Clona este repositorio:

bash
Copy
Edit
git clone https://github.com/mzipi/store-api.git
cd store-api
2️⃣ Instala las dependencias:

bash
Copy
Edit
npm install
3️⃣ Crea un archivo .env en la raíz del proyecto y agrega las variables de entorno necesarias, como:

env
Copy
Edit
PORT=5000
MONGO_URI=mongodb+srv://usuario:contraseña@cluster.mongodb.net/store-api
JWT_SECRET=tu_secreto
4️⃣ Inicia el servidor:

bash
Copy
Edit
npm start
🔌 Endpoints Principales
📦 Productos
Método	Endpoint	Descripción
GET	/api/products	Obtiene todos los productos
POST	/api/products	Crea un nuevo producto
GET	/api/products/:id	Obtiene un producto por ID
PUT	/api/products/:id	Actualiza un producto
DELETE	/api/products/:id	Elimina un producto
👤 Usuarios
Método	Endpoint	Descripción
POST	/api/users	Crea un nuevo usuario (sin permisos adicionales)
POST	/api/users	Crea un nuevo usuario (con permisos de administración)
GET	/api/users	Consulta de datos de registro de usuario
🔑 Autenticación
Método	Endpoint	Descripción
POST	/login	Inicia sesión (usuario o admin)
🛒 Carrito
Método	Endpoint	Descripción
POST	/api/shoppingcartproducts	Agrega productos al carrito
GET	/api/shoppingcartproducts	Lista productos del carrito
DELETE	/api/shoppingcartproducts/:id	Quita un producto del carrito
📦 Órdenes
Método	Endpoint	Descripción
POST	/api/orders	Genera una nueva orden
GET	/api/orders	Obtiene todas las órdenes
🖼️ Imágenes
Método	Endpoint	Descripción
POST	/api/images	Carga fotos para usuarios y productos
🛠️ Próximas Mejoras
☑️ Integración con un frontend (React o Next.js).
☑️ Implementación de roles y permisos.
☑️ Métodos de pago con Stripe o MercadoPago.

📜 Licencia
Este proyecto está bajo la licencia MIT.