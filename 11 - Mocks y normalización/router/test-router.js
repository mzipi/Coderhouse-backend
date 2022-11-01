import { Router } from 'express';
import ApiTestMock from '../api/api-test.js';


const router = Router();
const data = new ApiTestMock();

router.get('/', (req, res) => {
    res.render('test', {
        products: data.getAll()
    })
});

router.get('/:id', ({ params }, res) => {
    data.getById(params).then(n => res.send(n));
});

router.post('/', ({ body }, res) => {
    // data.generar().then(n => res.send(n));
    res.send(data.generar());
});

router.put('/:id', ({ params, body}, res) => {
    data.update(params, body).then(res.end());
});

router.delete('/:id', ({ params }, res) => {
    data.delete(params).then(res.end());
});

export default router;