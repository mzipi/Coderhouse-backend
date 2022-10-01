import { Router } from 'express';
import ApiTestMock from '../api/api-test.js';

const router = Router();

router.get('/', (req, res) => {
    data.getAll().then(n => res.send(n));
});

router.get('/:id', ({ params }, res) => {
    data.getById(params).then(n => res.send(n));
});

router.post('/', ({ body }, res) => {
    data.save(body).then(n => res.send(n));
});

router.put('/:id', ({ params, body}, res) => {
    data.update(params, body).then(res.end());
});

router.delete('/:id', ({ params }, res) => {
    data.delete(params).then(res.end());
});

export default router;