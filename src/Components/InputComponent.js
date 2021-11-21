/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
// import Body from "./Body";
import MainArray from "./Storage/MainArray";
import { useDispatch } from "react-redux";
import { add_books } from "../Actions/action";
export function InputComponent() {
  const dispatch = useDispatch();
  // const myadd = useSelector((state) => state.main);

  const [Input_Title, setInputTitle] = useState("");
  const [Input_URL, setInputURL] = useState("");
  const [Input_Image, setInputImage] = useState("");
  const [Input_Description, setInputDescripton] = useState("");
  // const a = localStorage.getItem("ITEM");
  // console.log(a);
  const a = JSON.parse(localStorage.getItem("KEY"));
  const [Array1, setArray] = useState(a !== null || a === [] ? a : MainArray);
  const [file, setFile] = useState("");
  const FileHandler = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFile(reader.result);
    };
  };
  // console.log(file);

  const SubmitHandler = () => {
    if (Input_Title === "") {
      alert("Title Required");
    } else if (Input_URL === "") {
      alert("URL Required");
    } else {
      setInputDescripton("");
      setInputImage("");
      setInputTitle("");
      setInputURL("");
      const NewArray = {
        id: Math.random() * 23569898,
        Title: Input_Title,
        Image: Input_Image,
        Description: Input_Description,
        Url: Input_URL,
      };
      setArray([...Array1, NewArray]);
    }
  };

  useEffect(() => {
    dispatch(add_books(Array1));
    localStorage.setItem("KEY", JSON.stringify(Array1));
  }, [Array1]);
  return (
    <React.Fragment>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          Title
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Name"
          aria-describedby="basic-addon1"
          value={Input_Title}
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          URL
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="URL"
          aria-describedby="basic-addon1"
          value={Input_URL}
          onChange={(e) => {
            setInputURL(e.target.value);
          }}
        />
      </div>
      {/* <div class="input-group mb-3">
        <input
          type="file"
          class="form-control"
          placeholder="URL"
          aria-describedby="basic-addon1"
          value={Input_URL}
          onChange={(e) => {
            FileHandler(e);
          }}
        />
      </div> */}
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          Author
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Enter  Author Name"
          aria-describedby="basic-addon1"
          value={Input_Description}
          onChange={(e) => {
            setInputDescripton(e.target.value);
          }}
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          Image Url
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Image url if any ...."
          aria-describedby="basic-addon1"
          value={Input_Image}
          onChange={(e) => {
            setInputImage(e.target.value);
          }}
        />
      </div>

      <button
        style={{ alignSelf: "center" }}
        type="button"
        class="btn btn-dark"
        onClick={() => SubmitHandler()}
      >
        Submit
      </button>
    </React.Fragment>
  );
}
