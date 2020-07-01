import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import {store, persistor} from "./redux/store";
import Router from "./route";
import "./globals.scss";
import moment from 'moment'
import 'moment/min/locales'
import { PersistGate } from 'redux-persist/integration/react'

//set the moment language to spanish
moment.locale('es')

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {Router}
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
