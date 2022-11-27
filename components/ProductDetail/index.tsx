import React, { useState } from "react";


function ProductDetail() {
  return (
    <div className="productDetails__container">
      <div className="productDetails__container-img">
       <img 
      //  src={} alt={}
        />
      </div>
      <div className="productDetails__mainContainer">
        <h3 className="productDetails__title">
          {}
        </h3>
        <p className="productDetails__description">
          {}
        </p>
        <span className="productDetails__price">
          {}
        </span>
      </div>
    </div>
  )
}

export default ProductDetail
