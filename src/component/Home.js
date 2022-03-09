import React from "react";
import Product from "./Product";

const Home = () => {
  return (
    <div className="container-fluid">
        <div className="hero">
      <div className="card bg-dark text-white">
        <img className="card-img" src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lJTIwc2hvcHBpbmd8ZW58MHx8MHx8&w=1000&q=80"  alt="background"/>
        <div className="card-img-overlay ">
          <h5 className="card-title display-3 fw-bolder mb-0">NEW SESION ARRIVALS</h5>
          <p className="card-text lead fs-2">
          CKECK OUT ALL THE TRENDS
          </p>
          
        </div>
      </div>
    </div>
    <Product />
    </div>
  );
};
export default Home;
