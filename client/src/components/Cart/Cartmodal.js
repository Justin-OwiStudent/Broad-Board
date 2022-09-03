import React from "react";
import "./inputStyle.css";

const Cartmodal = () => {
  return (
    <div className="modal">

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

      
        <input type="text" placeholder="Name" className="input-field"/>
       
      
    </div>
  );
};

export default Cartmodal;
