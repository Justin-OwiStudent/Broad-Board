const express = require('express');
const productSchema = require('./models/Products');
const orderSchema = require('./models/Orders');
const clientSchema = require('./models/Clients');



const router = express();

//ROUTES
//PRODUCTS ROUTES

router.post('/api/addproduct', (req, res) =>{
    const newProduct = new productSchema({
        productName: req.body.productName,
        Size: req.body.Size,
        Price: req.body.Price,
        DiscountedPrice: req.body.DiscountedPrice,
        inStock: req.body.inStock
    });

    newProduct.save()
    .then(item => {
        res.json(item);
    })
    .catch(err => {
        res.status(400).json({msg: "There was a problem", err:err})
    })
});


router.get('/api/allproducts', async (req, res) =>{
    const findProducts = await productSchema.find();
    res.json(findProducts);
});

router.get('/api/oneproduct/:id', async (req, res) => {
    const findProduct = await productSchema.findById(req.params.id);
    res.json(findProduct);
});

router.delete('/api/deleteproduct/:id', async (req, res) => {
    const delProduct = await productSchema.remove({_id:req.params.id});
    res.json(delProduct);
});

router.patch('/api/updateproduct/:id', async (req, res) => {
    const updProduct = await productSchema.updateOne(
        {_id: req.params.id},
        {$set: {productName: req.body.productName}},
        {$set: {Size: req.body.Size}},
        {$set: {Price: req.body.Price}},
        {$set: {DiscountedPrice: req.body.DiscountedPrice}},
        {$set: {inStock: req.body.inStock}}

    );
    res.json(updProduct);
});





//ORDER ROUTES
router.post('/api/addorder', (req, res) =>{
    const newOrder = new orderSchema({
        ClientName: req.body.ClientName,
        Product: req.body.Product,
        OrderNumber: req.body.OrderNumber,
        OrderDate: req.body.OrderDate
    });

    newOrder.save()
    .then(item => {
        res.json(item);
    })
    .catch(err => {
        res.status(400).json({msg: "There was a problem", err:err})
    })
});


router.get('/api/allorders', async (req, res) =>{
    const findOrder = await orderSchema.find();
    res.json(findOrder);
});

router.get('/api/oneorder/:id', async (req, res) => {
    const findOrder = await orderSchema.findById(req.params.id);
    res.json(findOrder);
});

router.delete('/api/deleteorder/:id', async (req, res) => {
    const delOrder = await orderSchema.remove({_id:req.params.id});
    res.json(delOrder);
});

router.patch('/api/updateorder/:id', async (req, res) => {
    const updOrder = await orderSchema.updateOne(
        {_id: req.params.id},
        {$set: {ClientName: req.body.ClientName}},
        {$set: {Product: req.body.Product}},
        {$set: {OrderNumber: req.body.OrderNumber}},
        {$set: {OrderDate: req.body.OrderDate}}
    );
    res.json(updOrder);
});






//CLIENT ROUTES
router.post('/api/addclient', (req, res) =>{
    const newClient = new clientSchema({
        ClientName: req.body.ClientName,
        Password: req.body.Password,  
    });

    newClient.save()
    .then(item => {
        res.json(item);
    })
    .catch(err => {
        res.status(400).json({msg: "There was a problem", err:err})
    })
});


router.get('/api/allclients', async (req, res) =>{
    const findClient = await clientSchema.find();
    res.json(findClient);
});

router.get('/api/oneclient/:id', async (req, res) => {
    const findClient = await clientSchema.findById(req.params.id);
    res.json(findClient);
});

router.delete('/api/deleteclient/:id', async (req, res) => {
    const delClient = await clientSchema.remove({_id:req.params.id});
    res.json(delClient);
});

router.patch('/api/updateclient/:id', async (req, res) => {
    const updClient = await clientSchema.updateOne(
        {_id: req.params.id},
        {$set: {ClientName: req.body.ClientName}},
        {$set: {Password: req.body.Password}},
    );
    res.json(updClient);
});

module.exports = router;