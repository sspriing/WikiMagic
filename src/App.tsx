import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input'
import firebase from 'firebase'
import TodayData from './components/TodayData';

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
    <div className="App">
      위키매직
      <Input/>
      <TodayData/>
    </div>
  );
}

export default App;
