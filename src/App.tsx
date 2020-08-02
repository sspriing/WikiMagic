import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input'
import firebase from 'firebase'
import TodayData from './components/TodayData';
import { getDate, delItem } from './lib/FirebaseData';

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
        <h2>위키매직 판매일보</h2>
        <h3>{getDate()}</h3>
      <div className = "input-data">
        <Input/>
      </div>
      
      <div id = "content">
        <p id="today-sold">오늘 매출: <TodayData/></p>
        <table id = "item-list">
          <thead>
            <tr>
              <th>번호</th><th>판매시간</th><th>상품명</th><th>수량</th><th>단가</th><th>총금액</th><th>삭제</th>
            </tr>
            
          </thead>
          <tbody id = "item"></tbody>
        </table>
      </div>
      
      
    </div>
  );
}


export default App;
