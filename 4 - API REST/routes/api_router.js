const express = require('express');
const router = express.Router();

let data = [{id: 1, title: "UnTitulo", price: 45, thumnail: "www.google.com"}, {title: "OtroTitulo", price: 120, thumnail: "www.microsoft.com"}];
let id = 1;

router.get('/', (req, res) => {
    // devuelve todos los productos
    res.json({msg: 'Todos los productos', query: data});
});

router.get('/:id', ({ params }, res) => {
    // devuelve un productos
    let q = finder(params.id);
    if (q){
    	res.json({msg: 'Petición get', query: q});
    } else {
	res.json(error());
    }
});

router.post('/', ({ body }, res) => {
    // agrega un producto y lo devuelve con id
    id++;
    const newBody = { id, ...body }
    data.push(newBody);
    res.json({msg:'Petición Post', query: newBody});
});

router.put('/:id', ({ params, body }, res) => {
    // actualiza un producto
    let q = finder(params.id);
    if (q){
    	q.id = parseInt(body.id);
	res.json({msg: 'Petición put', query: q});
    } else {
	res.json(error());
    }
});

router.delete('/:id', ({ params }, res) => {
    // elimina un producto
    let q = finder(params.id);
    if (q){
    	const producto = data.filter(item => item.id !== parseInt(params.id));
    	data = producto;
	res.json({msg: 'Petición delete', query: data})
    } else {
	res.json(error());
    }
});

function finder(id){
    const q = data.find(item => item.id === parseInt(id));
    return q;
}

function error(){
    return {error: "Producto no encontrado"};
}

module.exports = router;
