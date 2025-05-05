import React from "react";
import "./Navber.css";


function Navber() {
  return (
    <navbar>
      <nav class="navbar navbar-expand-lg border-bottom ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="media/images/logo.png"
              alt="logo"
              style={{ width: "70px", height: "70px", borderRadius: "100px" }}
            />
            <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          </a>
          <div class=""  >
            <form class="d-flex ">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li class="nav-item ">
                  <a className="nav-link" href="abc">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a className="nav-link" href="abc">
                    Doctors
                  </a>
                </li>
                <li class="nav-item">
                  <a className="nav-link" href="abc">
                    Contect Us
                  </a>
                </li>
                <li class="nav-item">
                  <a className="nav-link" href="abc">
                    About
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </navbar>
  );
}

export default Navber;
