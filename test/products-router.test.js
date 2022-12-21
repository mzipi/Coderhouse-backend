import productsRouter from '../src/api/routes/products-router.js';
import { strict as assert } from 'assert';

describe(["Test de integración de productos"], function() {
    it(["Debería agregar producto"], function() {
        const products = new productsRouter()

        products.add("run code")
        assert.strictEqual(products.list().length, 1)
        assert.deepStrictEqual(products.list(), [{ title: 'run code', complete: false }])

        products.add("otra tarea")
        assert.strictEqual(products.list().length, 2)
        assert.deepStrictEqual(products.list(), [
            { title: 'run code', complete: false },
            { title: 'otra tarea', complete: false }
        ])
    })
    it(["Debería mostrar productos"], function() {

    })
    it(["Debería actualizar producto"], function() {
        const products = new productsRouter()

        products.add("run code")
        products.add("otra tarea")

        products.complete("run code")
        assert.deepStrictEqual(products.list(), [
            { title: 'run code', complete: true },
            { title: 'otra tarea', complete: false }
        ])
    })
    it(["Debería eliminar producto"], function() {

    })
})

describe(["Comprobar error en productos"], function() {
    it(["Debería dar error al agregar producto existente"], function() {
        
    })
    it(["Debería dar error al agregar producto sin los datos necesarios"], function() {
        
    })
    it(["Debería dar error al actualizar producto mediante un id inexistente"], function() {
        const products = new productsRouter()
        products.add("run code")

        const errorEsperado = new Error('Tarea no encontrada')
        assert.throws(() => {
            products.complete('una tareas más')
        }, errorEsperado)
    })
    it(["Debería dar error al eliminar producto mediante un id inexistente"], function() {
        const products = new productsRouter()
        products.add("run code")

        const errorEsperado = new Error('Tarea no encontrada')
        assert.throws(() => {
            products.complete('una tareas más')
        }, errorEsperado)
    })
})

describe("comprobando que saveToFilePromises() funcione bien", function () {

    before(function () {
        console.log('\n********* Comienzo TOTAL de Test *********')
    })

    beforeEach(function () {
        console.log('\n********* Comienzo Test *********')
    })

    beforeEach(function () {
        this.products = new productsRouter()
    })

    afterEach(function () {
        console.log('********* Fin Test *********\n')
    })

    afterEach(function () {
        if (existsSync('products.txt')) {
            unlinkSync('products.txt')
        }
    })

    after(function () {
        console.log('\n********* Fin TOTAL de Test *********')
    })

    it('debería guardar una tarea en el archivo products.txt (async/await)', async function () {
        this.products.add('guardar tarea Promises AA')

        await this.products.saveToFilePromise()

        assert.strictEqual(existsSync('products.txt'), true)
        let contenidoEsperado = 'guardar tarea Promises AA,false'
        let content = readFileSync('products.txt').toString();
        assert.strictEqual(content, contenidoEsperado)
    })
})