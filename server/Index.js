const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
require('dotenv/config');
const app = express();



app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(routes);


mongoose.connect(process.env.DB_CONNECTION, (err) => {
    if (err) {
        console.log('There was an issue')
    } else {
        console.log('Mongo DB Atlas Connection Established')
    };
});



// app.get('/api/products', (req, res) => {
//     res.json(products);
// });


// app.get('/api/products/:id', (req, res) => {
//     const found = products.inventory.some(item => item.id === parseInt(req.params.id));

//     if(found){
//         res.json(products.inventory.filter(item => item.id === parseInt(req.params.id)));
//     }else{
//         res.status(400).json({msg: "This product was not found"});
//     }

// });

// app.post('/api/addproduct/:id',(req,res) => {
//     const newProduct = {
//         id: +req.params.id,
//         productName: req.body.productName,
//         inStock: req.body.inStock,
//         availStock: req.body.availStock
//     }
 
//     if(!newProduct.id || !newProduct.productName || !newProduct.inStock || !newProduct.availStock){
//         return res.status(400).json({msg: "You are missing some information STUPID"})
//     }

//     products.inventory.push(newProduct);
//     res.json(products);
// });

// app.put('/api/updateproducts/:id', (req, res) => {
    
//     const found = products.inventory.some(item => item.id === parseInt(req.params.id));

//     if(found){
//         const updProduct = req.body;
//         products.inventory.forEach(item => {
//             if(item.id === +req.params.id){
//                 item.productName = updProduct.productName ? updProduct.productName : item.productName;
//                 item.inStock = updProduct.inStock ? updProduct.inStock : item.inStock;
//                 res.json({msg:'Product Updated' , item});
//             }
//         });
//     } else {
//         res.status(400).json({msg: "This product was not found?"});
//     }
// });


// app.delete('/api/deleteproducts/:id', (req, res) => {

//     const found = products.inventory.some(item => item.id === parseInt(req.params.id));

//     if(found){
//         res.json({
//             msg: "Product Deleted",
//             deleted: products.inventory.filter(item => item.id === parseInt(req.params.id)),
//             products: products.inventory.filter(item => item.id !== parseInt(req.params.id)),
//         });
//     } else {
//         res.status(400).json({msg: "This product was not found?"});
//     }
// })



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {console.log(`Server started on port ${PORT}` )});