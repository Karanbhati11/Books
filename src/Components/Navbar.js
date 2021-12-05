/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useDispatch } from "react-redux";
import { search_books } from "../Actions/action";
import { InputComponent } from "./InputComponent";
import "../index.css";
function Navbar() {
  const dispatch = useDispatch();
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
              // value={input}
              onChange={(e) => {
                dispatch(search_books(e.target.value));
              }}
            />
          </form>
        </div>
      </nav>
      <div
        className="accordion accordion-flush"
        style={{ textAlign: "center" }}
        id="accordionFlushExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed "
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
              <h4
                className="ADD_BOOKS"
                style={{ textAlign: "center", alignItems: "center" }}
              >
                Click Here Add Your Books
              </h4>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{ textAlign: "center", backgroundColor: "black" }}
            >
              <InputComponent />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
