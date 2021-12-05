import React /* { useState, useEffect } */ from "react";
// import { add_books } from "../Actions/action";z
import { useSelector } from "react-redux";
import "../index.css";
// Import the main component
import { Viewer } from "@react-pdf-viewer/core"; // install this library
// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"; // install this library
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// Worker
import { Worker } from "@react-pdf-viewer/core"; // install this library
// import { useDispatch } from "react-redux";
function PdfViewer(props) {
  const { Yo } = props;
  const defaultLayoutPluginInstance = new defaultLayoutPlugin();
  const myadd = useSelector((state) => state.main);

  console.log(Yo);
  //   console.log(myadd.myarray.map((items) => console.log(items.File)));

  return (
    <React.Fragment>
      <button
        className="btn btn-primary"
        style={{ width: "100%" }}
        onClick={() => {
          window.open("/");
        }}
      >
        Back
      </button>
      <div className="pdf-container card">
        {myadd.myarray.map((items) => {
          const { id } = items;
          return (
            <React.Fragment key={id}>
              {/* show pdf conditionally (if we have one)  */}
              {Yo && (
                <>
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                    <Viewer
                      fileUrl={Yo}
                      plugins={[defaultLayoutPluginInstance]}
                    />
                  </Worker>
                </>
              )}

              {/* if we dont have pdf or viewPdf state is null */}
              {!Yo && <>No pdf file selected</>}
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default PdfViewer;
