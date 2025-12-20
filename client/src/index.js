import React from "react";
import reactDOM from "react-dom/client";
import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import { Provider } from "react-redux";

const store = configureStore({ reducer: reducers });

const root = reactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
