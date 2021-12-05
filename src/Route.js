import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PdfViewer from "./Components/PdfViewer";
function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/reading" element={<PdfViewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoutes;
