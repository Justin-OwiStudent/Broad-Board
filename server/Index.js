const e = require('express');
const express = require('express');
const products = require('./products');

const app = express();


// const refine = (req,res,next) => {
//     let value = products.inventory[0].productName;
//     res.send(value);
//     next();
// };

// app.use(refine);




//cant use post method without this middelware
app.use(express.json());
app.use(express.urlencoded({extended:false}));



//defines what info we give the url
//get all products 
//send - sending markup to browser

app.get('/api/products', (req, res) => {
    res.json(products);
});



//Get one product based on ID value 
// : define what we want to get

app.get('/api/products/:id', (req, res) => {
    const found = products.inventory.some(item => item.id === parseInt(req.params.id));

    if(found){
        res.json(products.inventory.filter(item => item.id === parseInt(req.params.id)));
    }else{
        res.status(400).json({msg: "This product was not found"});
    }

});


app.post('/api/addproduct/:id',(req,res) => {
    const newProduct = {
        id: +req.params.id,
        productName: req.body.productName,
        inStock: req.body.inStock,
        availStock: req.body.availStock
    }
 
    if(!newProduct.id || !newProduct.productName || !newProduct.inStock || !newProduct.availStock){
        return res.status(400).json({msg: "You are missing some information STUPID"})
    }

    products.inventory.push(newProduct);
    res.json(products);
});

app.put('/api/updateproducts/:id', (req, res) => {
    
    const found = products.inventory.some(item => item.id === parseInt(req.params.id));

    if(found){
        const updProduct = req.body;
        products.inventory.forEach(item => {
            if(item.id === +req.params.id){
                item.productName = updProduct.productName ? updProduct.productName : item.productName;
                item.inStock = updProduct.inStock ? updProduct.inStock : item.inStock;
                res.json({msg:'Product Updated' , item});
            }
        });
    } else {
        res.status(400).json({msg: "This product was not found?"});
    }
});


app.delete('/api/deleteproducts/:id', (req, res) => {

    const found = products.inventory.some(item => item.id === parseInt(req.params.id));

    if(found){
        res.json({
            msg: "Product Deleted",
            deleted: products.inventory.filter(item => item.id === parseInt(req.params.id)),
            products: products.inventory.filter(item => item.id !== parseInt(req.params.id)),
        });
    } else {
        res.status(400).json({msg: "This product was not found?"});
    }
})



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {console.log(`Server started on port ${PORT}` )});