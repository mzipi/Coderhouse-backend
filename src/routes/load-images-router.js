import { Router } from 'express';
import multer from 'multer';

import { postImageController } from '../controllers/load-images-controller.js';

const loadImageRouter = Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'src/static/images/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

loadImageRouter.post('/', upload.single('avatar'), postImageController);

export default loadImageRouter;