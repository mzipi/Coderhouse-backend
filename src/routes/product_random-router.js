import { Router } from "express";
import FileContainer from "../containers/file_container.js";
const data = new FileContainer("productRandom.txt");

const productRandomRouter = Router();
let num;

productRandomRouter.get('/', (req, res) => {
    data.getAll().then(n => {
        num = Math.round(Math.random() * n.length);
    })
    data.getById(1).then(m => res.json(m));
});

productRandomRouter.post("/", async (req, res) => {
    await data.save({"id": 2, "name": "arroz", "price": 56})
    res.end();
})

export default productRandomRouter;