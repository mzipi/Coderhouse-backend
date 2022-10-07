import { faker } from '@faker-js/faker';
faker.locale = 'es';

function generarProducto() {
    return {
        name: faker.commerce.product(),
        price: faker.commerce.price(),
        image: faker.image.food(512, 512, true)
    }
}
export default generarProducto;