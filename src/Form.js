import React, { useState } from "react";

const FormComponent = props => {
  const [amount, setAmount] = useState(0);
  const [address, setAdress] = useState(undefined);

  return (
    <div className="form send-rev writing">
      <p>
        Use this mini-wallet top send REVs to other RChain addresses . <br />
        <br />
        This application is a web application 100% distributed by the RChain
        blockchain. It delegate the private key and identity managment to Dappy
        browser by using the <b>dappyRChain.identify</b> and{" "}
        <b>dappyRChain.requestPayment</b> functions .<br />
        <br />
        Source code : https://github.com/fabcotech/dapp-miniwallet
        <br />
        <br />
      </p>
      {props.transactionMessage ? (
        <div onClick={props.removeTransactionMessage} className="message">
          <div className="message-body">{props.transactionMessage}</div>
        </div>
      ) : (
        undefined
      )}
      <div className="field">
        <label className="label">Amount</label>
        <div className="control">
          <input
            onChange={e => {
              setAmount(e.target.value);
            }}
            className="input is-medium"
            type="number"
            placeholder="10"
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Address (REV)</label>
        <div className="control">
          <input
            onChange={e => {
              setAdress(e.target.value);
            }}
            className="input is-medium"
            type="text"
            placeholder="REV address"
          />
        </div>
      </div>
      <br />
      <div>
        <a
          type="button"
          disabled={!address || !amount}
          className="button is-link is-medium"
          onClick={() => props.sendRChainPaymentRequest(address, amount)}
        >
          Send REVs
        </a>
      </div>
    </div>
  );
};

export const Form = FormComponent;
