/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { InputComponent } from "./InputComponent";
function Navbar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">Books</a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div
        class="accordion accordion-flush"
        style={{ textAlign: "center" }}
        id="accordionFlushExample"
      >
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={{
                backgroundColor: "rgb(33,37,41)",
                color: "white",
                textAlign: "center",
              }}
            >
              <h4 style={{ textAlign: "center" }}>Click here Add Your Books</h4>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body" style={{ textAlign: "ce" }}>
              <InputComponent />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
