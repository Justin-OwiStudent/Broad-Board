import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from './Cart.module.css'
import CartItem from "./CartItem";


const Cartmodal = (props) => {
  
  // sessionStorage.getItem("props");
console.log(props)
  const closeModal = () => {
    props.close();
  };

  let productId = sessionStorage.getItem("productId");

  const [imgURL, setImgURL] = useState();

  const [readProducts, setReadProducts] = useState();
  const [renderProducts, setRenderProducts] = useState(false);

  const [productData, setProductData] = useState({
    productName: "",
    description: "",
    Price: "",
    DiscPrice: "",
    inStock: "",
    SizeOne: "",
    SizeTwo: "",
    SizeThree: "",
    image: ""
  });
  
  useEffect(() => {
    Axios.get('http://localhost:5000/api/allproducts').then((res) => {
      let data = res.data;
      const productItem = data.map((item) => (
        <CartItem
          key={item._id}
          SKU={item.SKU}
          productId={item._id}
          ProductName={item.ProductName}
          Price={item.Price}
          Desc={item.Description}
          DiscPrice={item.DiscountedPrice}
          stock={item.stock}
          Sizes={item.Sizes}
          SizeOne={item.Sizes.sevenHalf}
          SizeTwo={item.Sizes.eight}
          SizeThree={item.Sizes.eightHalf}
          image={item.image}
          editRender={setRenderProducts}
        />
      ));
      // let URL = 'http://localhost:5000/productImages/' + data.image;
      // setImgURL(URL);
      console.log(productItem)
      setReadProducts(productItem);
      setRenderProducts(false);
    });
  }, [renderProducts]);

  // useEffect(()=>{
  //   Axios.get('http://localhost:5000/api/oneproduct/' + productId)
  //   .then(res => {
  //     let data = res.data = data.map((item) => (
  //       <CartItem
  //         key={item._id}
  //         SKU={item.SKU}
  //         productId={item._id}
  //         ProductName={item.ProductName}
  //         Price={item.Price}
  //         Desc={item.Description}
  //         DiscPrice={item.DiscountedPrice}
  //         stock={item.stock}
  //         Sizes={item.Sizes}
  //         SizeOne={item.Sizes.sevenHalf}
  //         SizeTwo={item.Sizes.eight}
  //         SizeThree={item.Sizes.eightHalf}
  //         image={item.image}
  //         editRender={setRenderProducts}
  //       />
  //     ))
    
  //   })
  //   .catch()
  // }, []);

  // let productId = sessionStorage.getItem("productId");
  // let ProductName = sessionStorage.getItem("ProductName")
  // let Price = sessionStorage.getItem("Price")

  //   console.log(productId)
  //   console.log(ProductName)
  //   console.log(Price)

  // const [readProducts, setReadProducts] = useState();
  // const [renderProducts, setRenderProducts] = useState(false);

  // useEffect(()=>{
  //   Axios.get('http://localhost:5000/api/oneproduct/' + productId)
  //   .then(res => {
  //     let data = res.data;
  //     const productItems = data.map((item) => (
  //       <CartItem
  //         key={item._id}
  //         productId={productId}
  //         ProductName={ProductName}
  //         price={Price}
  //         editRender={setRenderProducts}
  //       />
  //     ));
  //     console.log(productItems)
  //     setReadProducts(productItems);
  //     setRenderProducts(false);
  //   });
  // }, [renderProducts]);


    // sessionStorage.setItem('ProductId', props.ProductId);
    // sessionStorage.setItem('productName', props.ProductName);
    // sessionStorage.setItem('Price', props.Price);



    // const [productData, setProductData] = useState({
    //     productName: "",
    //     description: "",
    //     Price: "",
    //     DiscPrice: "",
    //     inStock: "",
    //     SizeOne: "",
    //     SizeTwo: "",
    //     SizeThree: ""
    //   });
    
      // useEffect(()=>{
      //   Axios.get('http://localhost:5000/api/oneproduct/' + productId)
      //   .then(res => {
      //     let data = res.data;
      //     setProductData({
      //       ProductName: data.ProductName,
      //       Description: data.Description,
      //       Price: data.Price,
      //       DiscPrice: data.DiscountedPrice,
      //       stock: data.stock,
      //       SizeOne: data.Sizes.sevenHalf,
      //       SizeTwo: data.Sizes.eight,
      //       SizeThree: data.Sizes.eightHalf
      //     })
      //   })
      //   .catch()
      // }, []);

      // const [readProducts, setReadProducts] = useState();
      // const [renderProducts, setRenderProducts] = useState(false);

      // useEffect(()=>{
      //   Axios.get('http://localhost:5000/api/oneproduct/' + productId)
      //   .then(res => {
      //     let data = res.data;
      //     // console.log(data)
      //     const productItem = data.map((item) => (
      //       <CartItem
      //         key={item._id}
      //         SKU={item.SKU}
      //         productId={item._id}
      //         ProductName={item.ProductName}
      //         Price={item.Price}
      //         Desc={item.Description}
      //         DiscPrice={item.DiscountedPrice}
      //         stock={item.stock}
      //         // Sizes={item.Sizes}
      //         SizeOne={item.Sizes.sevenHalf}
      //         SizeTwo={item.Sizes.eight}
      //         SizeThree={item.Sizes.eightHalf}
      //         editRender={setRenderProducts}
      //       />
      //     ));
      //     console.log(productItem)
      //     setReadProducts(productItem);
      //     setRenderProducts(false);
      //   });
      // }, [renderProducts]);
     
      // console.log(readProducts)


      // useEffect(() => {
      //   Axios.get("http://localhost:5000/api/allproducts").then((res) => {
      //     let data = res.data;
      //     const productItem = data.map((item) => (
      //       <ItemCard
      //         key={item._id}
      //         SKU={item.SKU}
      //         productId={item._id}
      //         ProductName={item.ProductName}
      //         Price={item.Price}
      //         Desc={item.Description}
      //         DiscPrice={item.DiscountedPrice}
      //         stock={item.stock}
      //         Sizes={item.Sizes}
      //         SizeOne={item.Sizes.sevenHalf}
      //         SizeTwo={item.Sizes.eight}
      //         SizeThree={item.Sizes.eightHalf}
      //         editRender={setRenderProducts}
      //       />
      //     ));
      //     console.log(productItem)
      //     setReadProducts(productItem);
      //     setRenderProducts(false);
      //   });
      // }, [renderProducts]);
// console.log(productData)
   

  return (
    <div className={classes.CartModal}>
      <h1 className={classes.CartTitle}> Cart </h1>
      <div className={classes.innerCart}>
      {readProducts}
      </div>

      {/* <div className={classes.CartPiece}>
            <div className={classes.CartImage}></div>
            <h2 className={classes.CartName}>{productData.ProductName} Product Name</h2>
            <h2 className={classes.CartPrice}>{productData.Price}   </h2>

            <div className={classes.DelIt}></div>
        </div> */}

      

      {/* <CartItem/> */}

      {/* {readProducts} */}








      {/* <div className="one">
        <div class="form__group field">
          <input
            type="input"
            class="form__field"
            placeholder="Name"
            name="name"
            id="name"
            required
          />
          <label for="name" class="form__label">
            Name
          </label>
        </div>
      </div>

      <div className="two">
        <div class="form__group field">
          <input
            type="input"
            class="form__field"
            placeholder="Name"
            name="name"
            id="name"
            required
          />
          <label for="name" class="form__label">
            Name
          </label>
        </div>
      </div> */}

      
        
      
      <button className={classes.close} onClick={closeModal}> Close </button>
       <Link to='/Cart'>
        <button className={classes.Check}>Checkout</button>
       </Link>
      
    </div>
  );
};

export default Cartmodal;
