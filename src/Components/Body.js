/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_books } from "../Actions/action";
import "../index.css";
// import PdfViewer from "./PdfViewer";
// Import the main component
// import { Viewer } from "@react-pdf-viewer/core"; // install this library
// Plugins
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"; // install this library
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
function Body(props) {
  const dispatch = useDispatch();
  const { Image, Title, Description, id, Url /*, File */ } = props;
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

  // const READER = (File) => {
  //   // <PdfViewer Yo={File} />;
  //   window.open("/reading", "_blank");
  //   // console.log(File);
  //   // window.open("./reading", "_blank");
  // };

  return (
    <React.Fragment>
      <div
        className="card"
        style={{ width: "18rem", margin: "20px", padding: "0.1px" }}
        key={id}
      >
        <img
          src={Image}
          className="card-img-top"
          alt="ImageUrl"
          style={{ width: "18rem", height: "350px" }}
        />
        <div className="card-body" style={{ height: "200px" }}>
          <h5
            className="card-title"
            style={{
              textAlign: "center",
              height: "80px",
              overflow: "hidden",
            }}
          >
            {Title}
          </h5>
          <p
            className="card-text"
            style={{ textAlign: "center", height: "20px" }}
          >
            {Description}
          </p>
          <a
            href={`${Url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ marginLeft: "40px" }}
            onClick={(e) => {
              // e.preventDefault();
              // READER(File);
            }}
          >
            Read
          </a>
          <a
            href="/"
            onClick={() => {
              DeleteHandler(id);
            }}
            style={{ marginLeft: "40px" }}
            className="btn btn-primary"
          >
            Delete
          </a>
        </div>
      </div>

      {/* <PdfViewer Yo={File} /> */}
    </React.Fragment>
  );
}

export default Body;
