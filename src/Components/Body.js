/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_books } from "../Actions/action";
// import MainArray from "./Storage/MainArray";
function Body(props) {
  const dispatch = useDispatch();
  const { Image, Title, Description, id, Url } = props;
  const myadd = useSelector((state) => state.main);
  const [Ara, setAra] = useState(myadd.myarray);
  const DeleteHandler = (id) => {
    const a = myadd.myarray.filter((items) => items.id !== id);
    localStorage.clear("KEY");
    setAra(a);
  };

  useEffect(() => {
    dispatch(add_books(Ara));
    localStorage.setItem("KEY", JSON.stringify(Ara));
  }, [Ara]);
  return (
    <React.Fragment>
      <>
        <div
          className="card"
          style={{ width: "18rem", margin: "20px", padding: "2px" }}
          key={id}
        >
          <img
            src={Image}
            className="card-img-top"
            alt="ImageUrl"
            style={{ width: "18rem", height: "350px" }}
          />
          <div className="card-body" style={{ height: "200px" }}>
            <h5 className="card-title" style={{ textAlign: "center" }}>
              {Title}
            </h5>
            <p className="card-text" style={{ textAlign: "center" }}>
              {Description}
            </p>
            <a
              href={Url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginLeft: "40px" }}
            >
              Read
            </a>
            <button
              onClick={() => {
                DeleteHandler(id);
              }}
              style={{ marginLeft: "40px" }}
              className="btn btn-primary"
            >
              Delete
            </button>
          </div>
        </div>
      </>
    </React.Fragment>
  );
}

export default Body;
