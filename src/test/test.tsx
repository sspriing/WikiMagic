import React, {Fragment, useState} from 'react'
import TestTodayData from './TestTodayData'
import logo from './wikimagic1.png'
import { RecordCategory } from '../components/Category'
import InputNumber from 'react-input-just-numbers';
import{getTime, getDate, numberWithCommas} from '../lib/FirebaseData'

function TestInput(){
  const [age, setAge] = useState("성인");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("마스크 / 마스크줄");
  const [cnt, setCnt] = useState(1);
  const [totalPrice, setTP] = useState(0);
  const [warnning, setWranning] = useState("");
  const [ts, setTS] = useState(0)

  let data = {
      time: "",
      age: age,
      category: category,
      price: price,
      cnt: cnt,
      totalPrice: totalPrice
  }

  var cat
  if(age === "성인"){
      cat = 
          <Fragment>
              <option value = "마스크 / 마스크줄">마스크 / 마스크줄</option>
              <option value = "모자">모자</option>
              <option value = "양말">양말</option>
              <option value = "잠옷">잠옷</option>
              <option value = "헤어핀">헤어핀</option>
              <option value = "헤어밴드">헤어밴드</option>
              <option value = "스카프 / 손수건">스카프 / 손수건</option>
              <option value = "선글라스">선글라스</option>
              <option value = "우양산">우양산</option>
              <option value = "넥타이">넥타이</option>
              <option value = "매출 누락">매출 누락</option>
          </Fragment>
  }    
  if(age === "아동"){
      cat = 
      <Fragment>
          <option value = "헤어밴드">헤어밴드</option>
          <option value = "반지">반지</option>
          <option value = "가방">가방</option>
          <option value = "모자">모자</option>
          <option value = "양말">양말</option>
          <option value = "헤어핀">헤어핀</option>
          <option value = "선글라스">선글라스</option>
          <option value = "기타">기타</option>
      </Fragment>
  }

  async function sendToFirebase(){
      if(price === undefined || cnt === undefined || price ===0 || cnt ===0 || isNaN(price) || isNaN(cnt)){
          setWranning("단가와 수량을 입력하세요")
          return;
      }
      setWranning("현재 페이지는 시범용 페이지로 데이터는 입력되지 않습니다.")
  }

  return(
      <Fragment>
              <div style = {{width: "300px", display: "inline-block"}}>

              <select id = "age" className = "select_age" onChange =  {(e)=>{
                  let {name, value} = e.target
                  setAge(value)
                  }}>
                  <option value = "성인">성인</option>
                  <option value = "아동">아동</option>
              </select>
              
              <select id = "category" className = "category" onChange =  {(e)=>{
                  let {name, value} = e.target
                  setCategory(value)
                  }}>
                  {cat}
              </select>

              <InputNumber id = "price" placeholder = "단가를 입력하세요" onChange = {(e)=>{
                  setPrice(parseInt(e.target.value))
                  setTP(parseInt(e.target.value)*cnt)
                  console.log(price)
                  console.log(cnt)
                  console.log(totalPrice)
              }}></InputNumber>
              <InputNumber id = "cnt" placeholder = "1 (기본값)" onChange = {(e)=>{
                  
                  console.log(typeof(e.target.value))
                  if(e.target.value=== undefined || isNaN(e.target.value) || e.target.value === "") {
                      setCnt(1)
                      setTP(price)
                  }
                  else{
                      setCnt(parseInt(e.target.value))
                      setTP(price*parseInt(e.target.value))
                      console.log(price)
                      console.log(cnt)
                      console.log(totalPrice)
                  }

              }}></InputNumber>
              <div id = "totalPrice" >총 금액: {numberWithCommas(totalPrice)}
              <button id = "submit" type = "submit" onClick={sendToFirebase}>입력</button>
              </div>
              <div id = "warnning">{warnning}</div>
              </div>
      </Fragment>
  )
}


function TestRecordSold(){
  const today: string = getDate()
  
  RecordCategory(today)

    return(
        <Fragment>
        <img src = {logo} height = "100px"/>
        <h2 style={{marginTop:"2px", marginBottom: "5px", borderBottom:"5px double", paddingBottom: "5px"}}>{getDate()}</h2>
      <div className = "input-data">
        <TestInput/>
        <p style = {{fontSize:"20px", marginTop:"15px", marginBottom:"2px"}}>--종목별 매출--</p>
        <div style = {{marginLeft: "10px"}}>
          <table>
          <thead>
            <tr>
              <th>순위</th><th>카테고리</th><th>판매금액</th><th>수량</th>
            </tr>
          </thead>
          </table>
        <div id = "category-table-wrap">
          <table>
          <tbody id = "category-list">
          </tbody>
          </table>
          </div>
        </div>
      </div>
      
      <div id = "content" >
        <p id="today-sold">총 매출: <TestTodayData date={today}/></p>
        <table id = "item-list">
        <colgroup>
            <col width = "5%"></col>
            <col width = "10%"></col>
            <col width = "15%"></col>
            <col width = "5%"></col>
            <col width = "5%"></col>
            <col width = "5%"></col>
            <col width = "5%"></col>
          </colgroup>
          <thead>
            <tr>
              <th>번호</th><th>판매시간</th><th>상품명</th><th>수량</th><th>단가</th><th>총금액</th><th>삭제</th>
            </tr>
          </thead>
          </table>
        <div id = "table-wrap">
        <table id = "item-list">
          <colgroup>
            <col width = "5%"></col>
            <col width = "10%"></col>
            <col width = "15%"></col>
            <col width = "5%"></col>
            <col width = "5%"></col>
            <col width = "5%"></col>
            <col width = "5%"></col>
          </colgroup>
            <tbody id = "item">
            </tbody>
        </table>
        </div>
      </div>
        </Fragment>
        
    )
}

export default TestRecordSold