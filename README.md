## Tabla de Contenidos

- [Introducción](#introducción)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [Endpoints](#endpoints)
- [Ejemplos de Uso](#ejemplos-de-uso)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Introducción

Store API es una API RESTful para la gestión de productos en una tienda. Está construida con Node.js y utiliza MongoDB para almacenar datos.

## Características

- CRUD para productos
- Autenticación de usuarios
- Carga de archivos
- Notificaciones por correo electrónico
- Manejo de errores
- Comunicación en tiempo real

## Tecnologías Utilizadas

* **Backend**: Node.js, Express.js
* **Base de datos**: MongoDB, Mongoose
* **Autenticación**: JSON Web Tokens (JWT)
* **Otros**: dotenv, CORS, bcrypt


## Instalación

1. Clona el repositorio: `git clone https://github.com/mzipi/store-api.git`
2. Navega a la carpeta del proyecto: `cd store-api`
3. Instala las dependencias: `npm install`
4. Configura las variables de entorno necesarias.

## Configuración

Asegúrate de crear un archivo `.env` en la raíz del proyecto y agregar las siguientes variables:

- `MONGO_URI`: URI de conexión a tu base de datos MongoDB.
- `PORT`: Puerto en el que se ejecutará la API (por defecto, 8080).
- `JWT_SECRET`: Secreto para firmar los tokens JWT.
- `EMAIL_USER`: Usuario para las notificaciones por correo electrónico.
- `EMAIL_PASS`: Contraseña para el usuario de correo electrónico.

## Uso

Inicia la API con: `npm start`. Accede en `http://localhost:8080`.

## Endpoints

| Método  | Endpoint                   | Descripción                               |
|---------|----------------------------|-------------------------------------------|
| GET     | `/api/products`            | Obtener todos los productos               |
| GET     | `/api/products/:id`        | Obtener un producto por su ID             |
| POST    | `/api/products`            | Crear un nuevo producto                   |
| PUT     | `/api/products/:id`        | Actualizar un producto por su ID          |
| DELETE  | `/api/products/:id`        | Eliminar un producto por su ID            |
| POST    | `/api/users/register`      | Registrar un nuevo usuario                |
| POST    | `/api/users/login`         | Iniciar sesión de un usuario              |
| GET     | `/api/cart`                | Obtener el carrito del usuario            |
| POST    | `/api/cart`                | Añadir un producto al carrito             |
| DELETE  | `/api/cart/:id`            | Eliminar un producto del carrito          |
| POST    | `/api/orders`              | Crear una nueva orden                     |
| GET     | `/api/orders/:id`          | Obtener detalles de una orden por su ID   |
| POST    | `/api/images/upload`       | Subir una nueva imagen                    |

## Ejemplos de Uso

```bash
# Obtener todos los productos
wget --method=GET --header="Content-Type: application/json" http://localhost:3000/api/products

# Obtener un producto por ID
wget --method=GET --header="Content-Type: application/json" http://localhost:3000/api/products/1

# Crear un nuevo producto
wget --method=POST --header="Content-Type: application/json" --body-data='{
  "name": "Nuevo Producto",
  "price": 150,
  "description": "Descripción del nuevo producto"
}' http://localhost:3000/api/products

# Actualizar un producto por ID
wget --method=PUT --header="Content-Type: application/json" --body-data='{
  "name": "Producto Actualizado",
  "price": 200,
  "description": "Descripción actualizada del producto"
}' http://localhost:3000/api/products/1

# Eliminar un producto por ID
wget --method=DELETE --header="Content-Type: application/json" http://localhost:3000/api/products/1

# Registrar un nuevo usuario
wget --method=POST --header="Content-Type: application/json" --body-data='{
  "email": "nuevo_usuario@example.com",
  "password": "nueva_contraseña"
}' http://localhost:3000/api/users/register

# Iniciar sesión de un usuario
wget --method=POST --header="Content-Type: application/json" --body-data='{
  "email": "usuario@example.com",
  "password": "contraseña123"
}' http://localhost:3000/api/users/login

# Obtener el carrito del usuario
wget --method=GET --header="Content-Type: application/json" http://localhost:3000/api/cart

# Añadir un producto al carrito
wget --method=POST --header="Content-Type: application/json" --body-data='{
  "productId": "1",
  "quantity": 1
}' http://localhost:3000/api/cart

# Eliminar un producto del carrito
wget --method=DELETE --header="Content-Type: application/json" http://localhost:3000/api/cart/1

# Crear una nueva orden
wget --method=POST --header="Content-Type: application/json" --body-data='{
  "cartId": "carrito-id",
  "address": "Dirección de envío"
}' http://localhost:3000/api/orders

# Obtener detalles de una orden
wget --method=GET --header="Content-Type: application/json" http://localhost:3000/api/orders/123

# Subir una nueva imagen
wget --method=POST --header="Content-Type: multipart/form-data" --body-file=@imagen.png http://localhost:3000/api/images/upload
```

## Contribuciones

Contribuciones son bienvenidas. Abre un issue o un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.

## Contacto

Más información en [GitHub](https://github.com/mzipi/store-api).
