import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="container  pt-2 mb-5 pb-5 ">
      <img
        src="media/images/homeopathy-hero.webp"
        className=" mx-auto d-block mt-5 mb-5"
        style={{ height: "50%", width: "50%",borderRadius:"100px"  }}
        alt="hero"
      />
      <div className="row text-center">
        <h1 className="mt-2 fs-1">BALARAMBATI HOMEOHALL</h1>
        <p className="fs-5 mt-1">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="mt-4 btn btn-primary p-2 fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
    </div>
  );
}

export default Hero;
