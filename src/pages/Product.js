import React,{useEffect} from 'react'
import { useState } from 'react';
import "../css/Home.css";
import { Outlet,Link } from "react-router-dom";

export default function Product() {
  const tempArry = [
    {
      "id": "1",
        "name": "allu",
        "price": "500",
        "desc": "international"
    },
    {
      "id": "2",
        "name": "ritik",
        "price": "50",
        "desc": "desi"
    },
    {
      "id" : "3",
        "name": "russian",
        "price": "5000",
        "desc": "hot"
    },
    {
      "id" : "4",
        "name": "russian",
        "price": "5000",
        "desc": "hot"
    },
]
  const [itemCount, setitemCount] = useState(0);
  const [prodArry, setProdArry] = useState([])

  useEffect(() => {
   
    // console.log(prodArry);
  })

  const renderProduts=()=>{
    let prodArray = []
    for (let i = 0; i < tempArry.length; i++) {
      prodArray.push(
        <div class="card" style={{ width: "250px" }}>
        <img
          src="https://previews.123rf.com/images/dashu83/dashu831910/dashu83191000170/132733246-shoping-bags-boxes-and-cart-on-laptop-online-shopping-concept.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{tempArry[i]["name"]}</h5>
          <p class="card-text">
          {tempArry[i]["desc"]}
          </p>
          <p class="card-text">
          {tempArry[i]["price"]}
          </p>
          <div class="cart-btn">
            <Link class="btn btn-primary"  to="/productdetail">
              Buy Now</Link>
            {itemCount == 0 ? (
              <a
                href="#"
                class="btn btn-primary"
                onClick={() => setitemCount(itemCount + 1)}
              >
                Add To Cart
              </a>
            ) : (
              <div>
                <a
                  href="#"
                  class="btn btn-primary"
                  onClick={() => setitemCount(itemCount - 1)}
                >
                  -
                </a>
                <span>{itemCount}</span>
                <a
                  href="#"
                  class="btn btn-primary"
                  onClick={() => setitemCount(itemCount + 1)}
                >
                  +
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      )
    }
    return prodArray
  }
  
  return (
    <div class="home-page">
      {renderProduts()}
     
    </div>
  )         
}
