import React from "react";
import classes from './Cart.module.css'
import CartItem from "./CartItem";


const Cartmodal = (props) => {

  const closeModal = () => {
    props.close();
  };

  // const [productData, setProductData] = useState({
  //   productName: "",
  //   description: "",
  //   Price: "",
  //   DiscPrice: "",
  //   inStock: "",
  //   SizeOne: "",
  //   SizeTwo: "",
  //   SizeThree: ""
  // });

  sessionStorage.getItem("productId");

  // useEffect(()=>{
  //   Axios.get('http://localhost:5000/api/oneproduct/' + productId)
  //   .then(res => {
  //     let data = res.data;
  //   //   console.log(data)
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

  return (
    <div className={classes.CartModal}>
      <h1 className={classes.CartTitle}> Cart </h1>

      <CartItem/>

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
       
      <button className={classes.Check}>Checkout</button>
    </div>
  );
};

export default Cartmodal;
