//index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import reportWebVitals from "./reportWebVials";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
reportWebVitals();
