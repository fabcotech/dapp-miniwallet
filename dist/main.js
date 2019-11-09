!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactRedux},function(e,t){e.exports=ReactDOM},function(e,t){e.exports=Redux},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(2),o=n.n(i),c=n(1),l=n(3);function s(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach(function(t){d(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p={publicKey:void 0,address:void 0,publicKeyError:void 0,balance:void 0,i:0,transactionMessage:void 0},y=Object(l.createStore)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"UPDATE_PUBLIC_KEY":return u({},e,{publicKey:t.payload.publicKey,address:t.payload.address,publicKeyError:t.payload?void 0:e.publicKeyError});case"UPDATE_PUBLIC_KEY_ERROR":return u({},e,{publicKey:t.payload?void 0:e.publicKey,address:t.payload?void 0:e.address,publicKeyError:t.payload});case"TRANSACTION_SUCCESFULL":return u({},e,{i:e.i+1,transactionMessage:t.payload});case"TRANSACTION_ERROR":return u({},e,{transactionMessage:t.payload});case"UPDATE_BALANCE":return u({},e,{balance:t.payload});case"REMOVE_TRANSACTION_MESSAGE":return u({},e,{transactionMessage:void 0});default:return e}});function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var f=function(e){var t=m(Object(a.useState)(0),2),n=t[0],i=t[1],o=m(Object(a.useState)(void 0),2),c=o[0],l=o[1];return r.a.createElement("div",{className:"form send-rev writing"},r.a.createElement("p",null,"Use this mini-wallet top send REVs to other RChain addresses . ",r.a.createElement("br",null),r.a.createElement("br",null),"This application is a web application 100% distributed by the RChain blockchain. It delegate the private key and identity managment to Dappy browser by using the ",r.a.createElement("b",null,"dappyRChain.identify")," and"," ",r.a.createElement("b",null,"dappyRChain.requestPayment")," functions .",r.a.createElement("br",null),r.a.createElement("br",null),"Source code : https://github.com/fabcotech/dapp-miniwallet",r.a.createElement("br",null),r.a.createElement("br",null)),e.transactionMessage?r.a.createElement("div",{onClick:e.removeTransactionMessage,className:"message"},r.a.createElement("div",{className:"message-body"},e.transactionMessage)):void 0,r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Amount"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{onChange:function(e){i(e.target.value)},className:"input is-medium",type:"number",placeholder:"10"}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Address (REV)"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{onChange:function(e){l(e.target.value)},className:"input is-medium",type:"text",placeholder:"REV address"}))),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("a",{type:"button",disabled:!c||!n,className:"button is-link is-medium",onClick:function(){return e.sendRChainPaymentRequest(c,n)}},"Send REVs")))},b=Object(c.connect)(function(e){return{publicKey:e.publicKey,address:e.address,publicKeyError:e.publicKeyError,balance:e.balance,transactionMessage:e.transactionMessage,i:e.i}},function(e){return{removeTransactionMessage:function(){return e({type:"REMOVE_TRANSACTION_MESSAGE"})},sendRChainPaymentRequest:function(e,t,n){return dappyRChain.requestPayment({from:e,to:t,amount:n}).then(function(e){console.log(e),y.dispatch({type:"TRANSACTION_SUCCESFULL",payload:"Transaction aired succesfully"})}).catch(function(e){console.log(e),y.dispatch({type:"TRANSACTION_ERROR",payload:e.transaction.value.message})})}}})(function(e){return e.publicKeyError?r.a.createElement("div",{className:"container loading"},"Error : ",e.publicKeyError):e.publicKey?r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"title is-2"},"RChain mini-wallet"),r.a.createElement("h2",{className:"title is-3"},"Welcome ",r.a.createElement("span",{className:"public-key"},e.address)),r.a.createElement(f,{key:e.i,removeTransactionMessage:e.removeTransactionMessage,transactionMessage:e.transactionMessage,sendRChainPaymentRequest:function(t,n){return e.sendRChainPaymentRequest(e.address,t,n)}})):r.a.createElement("div",{className:"container loading"},"Loading ...")});n.d(t,"BLOG_TITLE",function(){return E});var E="Mini wallet",v=function(){return r.a.createElement(c.Provider,{store:y},r.a.createElement(b,null))};window.onload=function(){o.a.render(r.a.createElement(v,null),document.getElementById("root"))},"undefined"!=typeof dappyRChain&&(o.a.render(r.a.createElement(v,null),document.getElementById("root")),dappyRChain.identify().then(function(e){if(e.identified)try{y.dispatch({type:"UPDATE_PUBLIC_KEY",payload:{publicKey:e.publicKey,address:blockchainUtils.revAddressFromPublicKey(e.publicKey)}})}catch(e){console.log(e),y.dispatch({type:"UPDATE_PUBLIC_KEY_ERROR",payload:"Failed to parse public key"})}else y.dispatch({type:"UPDATE_PUBLIC_KEY_ERROR",payload:"User could not or refused to identify"})}).catch(function(e){console.log(e),y.dispatch({type:"UPDATE_PUBLIC_KEY_ERROR",payload:"User could not or refused to identify"})}))}]);