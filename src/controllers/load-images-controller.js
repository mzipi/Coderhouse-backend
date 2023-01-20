import LoadImageService from '../services/load-images-service.js';

const image = new LoadImageService();

export async function postImageController(req, res) {
    // const data = await image.setData(req);
    res.json(req.file);
}