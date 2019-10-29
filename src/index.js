import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

firebase.initializeApp({
    apiKey: "AIzaSyAUiPvjf8hMhZ4_tuYz84X26vwbp097698",   
    authDomain: "togetherclickreact.firebaseapp.com",
    databaseURL: "https://togetherclickreact.firebaseio.com",
    projectId: "togetherclickreact",
    storageBucket: "togetherclickreact.appspot.com",
    messagingSenderId: "315485589831",
    appId: "1:315485589831:web:9c56f31efbbe91ee667c62",
    measurementId: "G-WEDEC3ML7D"
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
