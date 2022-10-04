import ContenedorArchivoProductos from "../contenedores/contenedorArchivoProductos.js";
import ContenedorFirebaseProductos from "../contenedores/contenedorFirebaseProductos.js";
import ContenedorMemoriaProductos from "../contenedores/contenedorMemoriaProductos.js";
import ContenedorMongoProductos from "../contenedores/contenedorMongoProductos.js";
import ContenedorArchivoCarro from "../contenedores/contenedorArchivoCarro.js";
import ContenedorFirebaseCarro from "../contenedores/contenedorFirebaseCarro.js";
import ContenedorMemoriaCarro from "../contenedores/contenedorMemoriaCarro.js";
import ContenedorMongoCarro from "../contenedores/contenedorMongoCarro.js";

const archivoProductos = new ContenedorArchivoProductos('./products.json');
const firebaseProductos = new ContenedorFirebaseProductos('products');
const memoriaProductos = new ContenedorMemoriaProductos();
const mongoProductos = new ContenedorMongoProductos('../options/mongodb.js', 'products');
const archivoCarro = new ContenedorArchivoCarro('./cart.json');
const firebaseCarro = new ContenedorFirebaseCarro('cart');
const memoriaCarro = new ContenedorMemoriaCarro();
const mongoCarro = new ContenedorMongoCarro('../options/mongodb.js', 'cart');

export { archivoProductos, archivoCarro };