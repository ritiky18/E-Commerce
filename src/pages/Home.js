import React,{useState} from "react";
import "../css/Home.css";

export default function Home() {
  const [itemCount, setitemCount] = useState(0)
  function BuyNow() {
    alert("Buy Now!!");
  }
  // const AddToCart = () => {
  //   setitemCount(itemCount + 1)
  // };
  return (
    <div class="home-page">
      <div class="card" style={{ width: "250px" }}>
        <img
          src="https://previews.123rf.com/images/dashu83/dashu831910/dashu83191000170/132733246-shoping-bags-boxes-and-cart-on-laptop-online-shopping-concept.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div class="cart-btn">
            <a href="#" class="btn btn-primary">
              Buy Now
            </a>
            <a href="#" class="btn btn-primary">
              Add To Cart
            </a>
          </div>
        </div>
      </div>

      <div class="card" style={{ width: "250px" }}>
        <img
          src="https://previews.123rf.com/images/dashu83/dashu831910/dashu83191000170/132733246-shoping-bags-boxes-and-cart-on-laptop-online-shopping-concept.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div class="cart-btn">
            <a href="#" class="btn btn-primary" onClick={() => BuyNow()}>
              Buy Now
            </a>
            {itemCount==0?
            (
              <a href="#" class="btn btn-primary" onClick={() => setitemCount(itemCount + 1)}>
              Add To Cart
            </a>
            )
          :
          (
            <div>
            <a href="#" class="btn btn-primary" onClick={() => setitemCount(itemCount - 1)}>
              -
            </a>
            <span>{itemCount}</span>
            <a href="#" class="btn btn-primary" onClick={() => setitemCount(itemCount + 1)}>
              +
            </a>
          </div>
          )
          }
           
          </div>
        </div>
      </div>
    </div>
  );
}
