import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import { App } from "./App";

export const BLOG_TITLE = "Mini wallet";

const Index = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

window.onload = () => {
  ReactDOM.render(<Index />, document.getElementById("root"));
};

// In Dappy, window is already loaded when this code executes
if (typeof dappyRChain !== "undefined") {
  ReactDOM.render(<Index />, document.getElementById("root"));
  dappyRChain
    .identify()
    .then(a => {
      if (a.identified) {
        try {
          store.dispatch({
            type: "UPDATE_PUBLIC_KEY",
            payload: {
              publicKey: a.publicKey,
              address: blockchainUtils.revAddressFromPublicKey(a.publicKey)
            }
          });
        } catch (err) {
          console.log(err);
          store.dispatch({
            type: "UPDATE_PUBLIC_KEY_ERROR",
            payload: "Failed to parse public key"
          });
        }
      } else {
        store.dispatch({
          type: "UPDATE_PUBLIC_KEY_ERROR",
          payload: "User could not or refused to identify"
        });
      }
    })
    .catch(err => {
      console.log(err);
      store.dispatch({
        type: "UPDATE_PUBLIC_KEY_ERROR",
        payload: "User could not or refused to identify"
      });
    });
}
