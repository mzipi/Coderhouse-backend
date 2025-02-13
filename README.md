# Store API

Esta es la API para un sistema de eCommerce, que permite la gestión de productos, usuarios, autenticación, carritos y órdenes.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Endpoints Principales](#endpoints-principales)
- [Ejemplos de Uso](#ejemplos-de-uso)
- [Instalación](#instalación)
- [Contribuciones](#contribuciones)

## Descripción

Esta API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre productos, gestionar usuarios y manejar carritos de compra y órdenes.

## Tecnologías

- Node.js
- Express
- MongoDB
- JWT (JSON Web Tokens)

## Endpoints Principales

### Productos
| Método | Endpoint                  | Descripción                      |
|--------|---------------------------|----------------------------------|
| GET    | `/api/products`           | Obtiene todos los productos      |
| POST   | `/api/products`           | Crea un nuevo producto           |
| GET    | `/api/products/:id`       | Obtiene un producto por ID       |
| PUT    | `/api/products/:id`       | Actualiza un producto            |
| DELETE | `/api/products/:id`       | Elimina un producto              |

### Usuarios
| Método | Endpoint                  | Descripción                                    |
|--------|---------------------------|------------------------------------------------|
| POST   | `/api/users`             | Crea un nuevo usuario (sin permisos adicionales) |
| POST   | `/api/users`             | Crea un nuevo usuario (con permisos de administración) |
| GET    | `/api/users`             | Consulta de datos de registro de usuario       |

### Autenticación
| Método | Endpoint                  | Descripción                       |
|--------|---------------------------|-----------------------------------|
| POST   | `/login`                  | Inicia sesión (usuario o admin)   |

### Carrito
| Método | Endpoint                  | Descripción                     |
|--------|---------------------------|---------------------------------|
| POST   | `/api/shoppingcartproducts` | Agrega productos al carrito     |
| GET    | `/api/shoppingcartproducts` | Lista productos del carrito     |
| DELETE | `/api/shoppingcartproducts/:id` | Quita un producto del carrito  |

### Órdenes
| Método | Endpoint                  | Descripción                   |
|--------|---------------------------|-------------------------------|
| POST   | `/api/orders`             | Genera una nueva orden        |
| GET    | `/api/orders`             | Obtiene todas las órdenes     |

### Imágenes
| Método | Endpoint                  | Descripción                     |
|--------|---------------------------|---------------------------------|
| POST   | `/api/images`             | Carga fotos para usuarios y productos |

## Ejemplos de Uso

A continuación, se presentan algunos ejemplos de cómo interactuar con la API utilizando cURL.

### Crear un Producto
```bash
curl -X POST {{SERVER}}/api/products \
-H "Authorization: Bearer {{ACCESS_TOKEN}}" \
-H "Content-Type: application/json" \
-d '{
    "name": "Producto Ejemplo",
    "description": "Descripción del producto",
    "price": 100,
    "image": "URL_de_la_imagen"
}'
