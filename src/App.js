import React from "react";
import { connect } from "react-redux";
import { Form } from "./Form";
import { store } from "./store";

const AppComponent = props => {
  if (props.publicKeyError) {
    return (
      <div className="container loading">Error : {props.publicKeyError}</div>
    );
  }

  if (!props.publicKey) {
    return <div className="container loading">Loading ...</div>;
  }

  return (
    <div className="container">
      <h2 className="title is-2">RChain mini-wallet</h2>
      <h2 className="title is-3">
        Welcome <span className="public-key">{props.address}</span>
      </h2>
      <Form
        key={props.i}
        removeTransactionMessage={props.removeTransactionMessage}
        transactionMessage={props.transactionMessage}
        sendRChainPaymentRequest={(to, amount) =>
          props.sendRChainPaymentRequest(props.address, to, amount)
        }
      ></Form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    publicKey: state.publicKey,
    address: state.address,
    publicKeyError: state.publicKeyError,
    balance: state.balance,
    transactionMessage: state.transactionMessage,
    i: state.i
  };
};

export const App = connect(
  mapStateToProps,
  dispatch => {
    return {
      removeTransactionMessage: () =>
        dispatch({ type: "REMOVE_TRANSACTION_MESSAGE" }),
      sendRChainPaymentRequest: (f, t, a) =>
        dappyRChain
          .requestPayment({
            from: f,
            to: t,
            amount: a
          })
          .then(a => {
            console.log(a);
            store.dispatch({
              type: "TRANSACTION_SUCCESFULL",
              payload: "Transaction aired succesfully"
            });
          })
          .catch(err => {
            console.log(err);
            store.dispatch({
              type: "TRANSACTION_ERROR",
              payload: err.transaction.value.message
            });
          })
    };
  }
)(AppComponent);
