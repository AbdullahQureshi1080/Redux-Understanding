// import { createStore } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./bugs";
import reducer from "./projects";

export default function () {
  return configureStore({ reducer });
}