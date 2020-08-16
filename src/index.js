import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import counterReducer from "./store/reducers/counterReducer";
import resultReducer from "./store/reducers/resultReducer";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
});
const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
