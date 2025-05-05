import React from "react";
import "./Doctors.css";

function Doctors() {
  return (
    <div className="doctor">
      <div className="container ">
      <h1 className="text-center">People</h1>
      <div className="row mt-5 pt-2 ">
        <div className="col-2"></div>
        <div className="col-4 text-center ">
          <img
            src="media/images/people3.jpg"
            alt="ceo"
            style={{ borderRadius: "100%", width: "70%" }}
            className="mb-4"
          />
          <h5>Nithin Kamath</h5>
          <p>Founder, CEO</p>
        </div>
        <div className="col-5 mt-4">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="abc">Homepage</a> / <a href="abc">TradingQnA</a>{" "}
            / <a href="abc">Twitter</a>
          </p>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row mt-5 pt-2 ">
        <div className="col-1"></div>
        <div className="col-5 mt-4">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="abc">Homepage</a> / <a href="abc">TradingQnA</a>{" "}
            / <a href="abc">Twitter</a>
          </p>
        </div>
        <div className="col-4 text-center ">
          <img
            src="media/images/people1.jpg"
            alt="ceo"
            style={{ borderRadius: "100%", width: "70%" }}
            className="mb-4"
          />
          <h5>Nithin Kamath</h5>
          <p>Founder, CEO</p>
        </div>
        <div className="col-2"></div>
      </div>
      <div className="row mt-5 pt-2 ">
        <div className="col-2"></div>
        <div className="col-4 text-center ">
          <img
            src="media/images/people2.webp"
            alt="ceo"
            style={{ borderRadius: "100%", width: "70%" }}
            className="mb-4"
          />
          <h5>Nithin Kamath</h5>
          <p>Founder, CEO</p>
        </div>
        <div className="col-5 mt-4">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="abc">Homepage</a> / <a href="abc">TradingQnA</a>{" "}
            / <a href="abc">Twitter</a>
          </p>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
    </div>
  );
}

export default Doctors;
