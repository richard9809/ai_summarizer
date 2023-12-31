import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

import App from "./App.jsx";
import { store } from "./services/store";
import { articleApi } from "./services/article.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={articleApi}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);
