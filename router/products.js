import { Router } from 'express';
const router = Router();
// import Contenedor from '../contenedores/contenedorArchivoProductos.js';
// const data = new Contenedor('products.json');
import memoriaProductos from "../daos/index.js";

router.get('/:id?', ({ params }, res) => {
    let n;
    if(params.id) {
        // memoriaProductos.getOne(params.id).then(n => res.json(n));
        n = memoriaProductos.getOne(params.id);
    } else {
        // memoriaProductos.getAll().then(n => res.json(n));
        n = memoriaProductos.getAll();
    }
    res.send(n);
});

router.post('/', ({ body }, res) => {
    memoriaProductos.save(body).then(res.end());
});

router.put('/:id', ({ params, body}, res) => {
    memoriaProductos.update(params.id, body).then(res.end());
});

router.delete('/:id', ({ params }, res) => {
    memoriaProductos.deleteById(params.id).then(res.end());
});

export default router;