import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";

import rootReducer from "./redux/reducers";

const history = createBrowserHistory();
let store = null;
// logger,
if (process.env.NODE_ENV === "development") {
	store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
} else {
	store = createStore(rootReducer, applyMiddleware(thunk));
}

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById("root")
);
