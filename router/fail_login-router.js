import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.render('fail-login');
});

export default router;