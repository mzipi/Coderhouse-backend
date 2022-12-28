import mongoose from 'mongoose';
import supertest from 'supertest';
import { expect } from 'chai';
import generarProducto from '../../../src/api/product-generator.js';
import app from '../../../src/server.js';
import { MONGO_URL2 } from '../../../src/config/config.js';

let request;
let server;

describe('Test de api RESTful', () => {

    before(async function () {
        await connectDb();
        server = await startServer();
        request = supertest(`http://localhost:${server.address().port}/api/productos`);
    });

    after(function () {
        mongoose.disconnect();
        server.close();
    });

    describe('GET request', () => {
        it('debería retornar un status 200', async () => {
            const response = await request.get('/');
            expect(response.status).to.eql(200);
        });
    });

    describe('POST request', () => {
        it('debería agregar un producto', async () => {
            const fakeProduct = generarProducto();

            const response = await request.post('/').send(fakeProduct);
            expect(response.status).to.eql(200);

            const product = response.body;
            expect(product).to.include.keys('name', 'price', 'image');
            expect(product.name).to.eql(fakeProduct.name);
            expect(product.price).to.eql(fakeProduct.price);
            expect(product.image).to.eql(fakeProduct.image);
        });
    });

    describe('PUT request', () => {
        it('debería actualizar un producto', async () => {
            const fakeProduct = generarProducto();
            const response = await request.put('/8c1ecfb869ff6b305b90').send(fakeProduct);
            expect(response.status).to.eql(200);
            
            const product = response.body;
            expect(product).to.include.keys('name', 'price', 'image');
            expect(product.name).to.eql(fakeProduct.name);
            expect(product.price).to.eql(fakeProduct.price);
            expect(product.image).to.eql(fakeProduct.image);
        });
    });

    describe('DELETE request', () => {
        it('debería eliminar un producto', async () => {
            const response = await request.delete('/faa1a068-78cb-4fd4-92fa-38a37f538253');
            expect(response.status).to.eql(200);
        });
    });
});

async function connectDb() {
    try {
        mongoose.connect(MONGO_URL2);
        console.log('Base de datos conectada!');
    } catch (error) {
        throw new Error(`Error de conexión en la base de datos: ${error}`);
    };
};

async function startServer() {
    return new Promise((resolve, reject) => {
        const PORT = 8080;
        const server = app.listen(PORT, () => {
            console.log(`Servidor express escuchando en el puerto ${server.address().port}`);
            resolve(server);
        });
        server.on('error', error => {
            console.log(`Error en Servidor: ${error}`);
            reject(error);
        });
    });
};