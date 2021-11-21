import React from "react";
import "./App.css";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
import { useSelector } from "react-redux";

function App() {
  const myadd = useSelector((state) => state.main);
  // console.log(myadd.myarray);

  return (
    <React.Fragment>
      <Navbar />
      <div class="container">
        <div class="row">
          {myadd.myarray.map((items) => {
            const { id, Title, Description, Url, Image } = items;
            return (
              <Body
                id={id}
                Title={Title}
                Description={Description}
                Url={Url}
                Image={Image}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
