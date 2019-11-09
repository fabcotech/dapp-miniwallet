import { createStore } from "redux";

const initialState = {
  publicKey: undefined,
  address: undefined,
  publicKeyError: undefined,
  balance: undefined,
  i: 0,
  transactionMessage: undefined
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "UPDATE_PUBLIC_KEY": {
      return {
        ...state,
        publicKey: action.payload.publicKey,
        address: action.payload.address,
        publicKeyError: action.payload ? undefined : state.publicKeyError
      };
    }

    case "UPDATE_PUBLIC_KEY_ERROR": {
      return {
        ...state,
        publicKey: action.payload ? undefined : state.publicKey,
        address: action.payload ? undefined : state.address,
        publicKeyError: action.payload
      };
    }

    case "TRANSACTION_SUCCESFULL": {
      return {
        ...state,
        i: state.i + 1,
        transactionMessage: action.payload
      };
    }
    case "TRANSACTION_ERROR": {
      return {
        ...state,
        transactionMessage: action.payload
      };
    }

    case "UPDATE_BALANCE": {
      return {
        ...state,
        balance: action.payload
      };
    }

    case "REMOVE_TRANSACTION_MESSAGE": {
      return {
        ...state,
        transactionMessage: undefined
      };
    }

    default: {
      return state;
    }
  }
};

export const store = createStore(reducer);
