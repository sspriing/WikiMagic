import React, {Fragment} from 'react';
import './App.css';
import firebase from 'firebase'
import {Route, HashRouter,BrowserRouter, Switch} from 'react-router-dom'
import RecordSold from './page/SoldRecord';
import Purchase from './page/Purchase';
import WritePurchaseRecord from './page/WritePurchaseRecord';
import ShowPurchaseRecord from './page/ShowPurchaseRecord'
import Static from './page/Static';
import TestRecordSold from './test/test'
import 'react-calendar/dist/Calendar.css'


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

const App=()=> {
  return (
    <Fragment>
      <div className = "App">
        <HashRouter>
            <Route path = "/purchase" component = {Purchase}/>
            <Route path = "/static" component = {Static}/>
            <Route path="/test" component = {TestRecordSold}/>
            <Route path = "/write-purchase-record" component = {WritePurchaseRecord}/>
            <Route path = "/show-purchase-record" component = {ShowPurchaseRecord}/>
            <Route excat path = "/home" component = {RecordSold}/>
        </HashRouter>
      </div>
        
    </Fragment>
  );
}


export default App;
