/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./App.css";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
import { useSelector } from "react-redux";
// import PdfViewer from "./Components/PdfViewer";
function App() {
  const myadd = useSelector((state) => state.main);
  const selector = useSelector((state) => state.search);
  // console.log(selector.searchparam1);
  // console.log(myadd.myarray);
  const [searchfilterarray, setSearchFilterArray] = useState(myadd.myarray);
  // console.log(searchfilterarray);
  const [isFiltered, setIsfiltred] = useState(false);
  useEffect(() => {
    if (selector.searchparam1 === "") {
      setSearchFilterArray(myadd.myarray);
      // console.log("UN");
    } else {
      setIsfiltred(true);
      console.log("FILTERED");
      setSearchFilterArray(
        myadd.myarray.filter((val) =>
          val.Title.toLowerCase().includes(selector.searchparam1.toLowerCase())
        )
      );
    }
  }, [selector]);

  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <div className="row">
          {!isFiltered &&
            myadd.myarray.map((items) => {
              const { id, Title, Description, Url, Image, File } = items;
              return (
                <React.Fragment key={id}>
                  <Body
                    id={id}
                    Title={Title}
                    Description={Description}
                    Url={Url}
                    Image={Image}
                    File={File}
                  />
                </React.Fragment>
              );
            })}
          {isFiltered &&
            searchfilterarray.map((items) => {
              const { id, Title, Description, Url, Image, File } = items;
              return (
                <React.Fragment key={id}>
                  <Body
                    id={id}
                    Title={Title}
                    Description={Description}
                    Url={Url}
                    Image={Image}
                    File={File}
                  />
                </React.Fragment>
              );
            })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
