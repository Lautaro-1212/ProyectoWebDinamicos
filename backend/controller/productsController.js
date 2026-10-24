import express from 'express';
import { getProdutcs, getProductById, getProductByCode, saveProduct, updateProduct, deleteProduct } from '../service/productsService';

const router = express.Router();

router.get("/", (req,res) => {
    let data = getProdutcs();
    res.send({data});
});

router.get("/:id", (req, res) =>{
    let data = getProductById(req.params.id);
    res.send({data});
})

router.get("/code/:code", (req, res) => {
    const data = getProductByCode(req.params.code);
    res.send({ data });
});

router.post("/", (req, res) => {
    const product = req.body;
    const data = saveProduct(product);

    res.status(201).send({ data });
})

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const product = req.body;

    const data = updateProduct(id, product);

    res.send({ data });
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const data = deleteProduct(id);

    res.send({ data });
});

export default router;