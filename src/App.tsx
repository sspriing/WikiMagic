import React, {Fragment} from 'react';
import './App.css';
import firebase from 'firebase'
import {Route, HashRouter,BrowserRouter, Switch} from 'react-router-dom'
import RecordSold from './page/SoldRecord';
import Purchase from './page/Purchase';
import WritePurchaseRecord from './page/WritePurchaseRecord';
import ShowPurchaseRecord from './page/ShowPurchaseRecord'
import Static from './page/Static';


const firebaseConfig = {
  apiKey: "AIzaSyAuMUMqkpuvevgi9pu_NM6ZqUBniwvhuQs",
  authDomain: "wikimagic-4ce55.firebaseapp.com",
  databaseURL: "https://wikimagic-4ce55.firebaseio.com",
  projectId: "wikimagic-4ce55",
  storageBucket: "wikimagic-4ce55.appspot.com",
  messagingSenderId: "999608533978",
  appId: "1:999608533978:web:1328133731ac663f2836e3",
  measurementId: "G-K3WGGRGWHB"
}

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore();

function App() {
  return (
    <Fragment>
      <div className = "App">
        <BrowserRouter basename = {process.env.PUBLIC_URL}>
            <Route excat path = "/home" component = {RecordSold}/>
            <Route path = "/purchase" component = {Purchase}/>
            <Route path = "/static" component = {Static}/>
            <Route path = "/write-purchase-record" component = {WritePurchaseRecord}/>
            <Route path = "/show-purchase-record" component = {ShowPurchaseRecord}/>
        </BrowserRouter>
      </div>
        
    </Fragment>
  );
}


export default App;
