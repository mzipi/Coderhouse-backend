import { Router } from 'express';
import register from "../middlewares/register.js";

const router = Router();

router.get('/', (req, res) => {
    res.render('fail-register');
});

export default router;