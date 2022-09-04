const express = require('express');
const productSchema = require('./models/Products');
const orderSchema = require('./models/Orders');
const clientSchema = require('./models/Clients');
const multer = require('multer');
const path = require('path');
const router = express();


const productImageStore = multer.diskStorage({
    destination: (req, file, CB) => {
        CB(null, './productImages')
    },

    filename: (req, file, CB) => {
        console.log(file)
        CB(null, Date.now() + path.extname(file.originalname))
    }
});

const uploadProductImage = multer({storage: productImageStore});
//ROUTES
//PRODUCTS ROUTES

router.post('/api/addproduct', uploadProductImage.single('image') ,(req, res) =>{

    let data = JSON.parse(req.body.information);

    console.log(req.file.filename);

    const newProduct = new productSchema({
        SKU: data.SKU,
        ProductName: data.ProductName,
        Price: data.Price,
        DiscountedPrice: data.DiscountedPrice,
        Description: data.Description,
        stock: data.stock,
        date: data.date,
        Sizes: {
            sevenHalf: data.Sizes.sevenHalf,
            eight: data.Sizes.eight,
            eightHalf: data.Sizes.eightHalf,
        },
        image: req.file.filename
    });

    // const newProduct = new productSchema({
    //     SKU: req.body.SKU,
    //     ProductName: req.body.ProductName,
    //     Price: req.body.Price,
    //     DiscountedPrice: req.body.DiscountedPrice,
    //     Description: req.body.Description,
    //     stock: req.body.stock,
    //     date: req.body.date,
    //     Sizes: {
    //         sevenHalf: req.body.Sizes.sevenHalf,
    //         eight: req.body.Sizes.eight,
    //         eightHalf: req.body.Sizes.eightHalf,
    //     }
    // });

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
    const findProduct = await productSchema.remove({_id:req.params.id});
    res.json(findProduct);
});

router.patch('/api/updateproduct/:id', async (req, res) => {
let stock = +req.body.SizeOne + +req.body.SizeTwo + +req.body.SizeThree

    const findProduct = await productSchema.updateOne(
        {_id: req.params.id},
        {$set: {
            SKU: req.body.SKU,
            ProductName: req.body.ProductName,
            Price: req.body.Price,
            stock: stock,
            DiscountedPrice: req.body.DiscountedPrice,
            Description: req.body.Description,
            Date: req.body.Date,
            Sizes: {
                sevenHalf: req.body.SizeOne,
                eight: req.body.SizeTwo,
                eightHalf: req.body.SizeThree,
        }
    }}
    );
    res.json(findProduct);
});





//ORDER ROUTES
router.post('/api/addorder', (req, res) =>{
    const newOrder = new orderSchema({
        OrderNum: req.body.OrderNum,
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