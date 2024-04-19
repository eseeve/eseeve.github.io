import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const el = document.getElementById("root");
if (el === null) throw new Error("Root container missing in index.html");

ReactDOM.createRoot(el).render(<App />);
