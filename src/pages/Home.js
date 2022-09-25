import React from "react";
import "../css/Home.css";

export default function Home() {
  return (
    <div class="home">
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
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
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
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
