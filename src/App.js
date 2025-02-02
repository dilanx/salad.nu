import React, { useEffect } from "react";
import configureStore from "./store/configureStore";
import { loadState, saveState } from "./utils/storageUtils";
import "./App.css";
import ReactGA from "react-ga";
import { ToastProvider } from "react-toast-notifications";
import { Provider } from "react-redux";
import Theme from "./components/themes/theme";
import { BrowserRouter as Router } from "react-router-dom";
import AppBody from "./AppBody";

const persistedState = loadState();

const serializedTerm = localStorage.getItem("term"); // VERY temporary fix -> TODO: update to better method (fix tests as well)!!!
if (serializedTerm !== "2022 Fall") {
  localStorage.setItem("term", "2022 Fall");

  if (persistedState !== undefined) {
    const emptySchedule = { list: [] };
    localStorage.setItem("schedule", emptySchedule);
    persistedState.schedule = emptySchedule;
  }
}

const store = configureStore(persistedState);
store.subscribe(() => {
  saveState(store.getState());
});

function App() {
  useEffect(() => {
    const trackingId = "UA-172475057-1";
    ReactGA.initialize(trackingId);
    ReactGA.pageview("/");
  }, []);

  return (
    <ToastProvider>
      <Provider store={store}>
        <Theme>
          <Router>
            <AppBody />
          </Router>
        </Theme>
      </Provider>
    </ToastProvider>
  );
}

export default App;
