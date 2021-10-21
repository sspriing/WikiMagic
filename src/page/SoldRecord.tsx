import React, {Fragment} from 'react'
import Input from '../components/Input'
import TodayData from '../components/TodayData'
import {getDate} from '../lib/FirebaseData'
import logo from './wikimagic1.png'
import { RecordCategory } from '../components/Category'


//http://localhost:3000/WikiMagic#/home
function RecordSold(){
  const today: string = getDate()
  
  RecordCategory(today)

    return(
        <Fragment>
        {/* <img src = {logo} height = "100px"/> */}
        <h2 style={{marginTop:"2px", marginBottom: "5px", borderBottom:"5px double", paddingBottom: "5px", width:"100vw"}}>{getDate()}</h2>
      <div className = "input-data1">
        <Input/>
        <p style = {{fontSize:"20px", marginTop:"15px", marginBottom:"2px"}}>--종목별 매출--</p>
        <div style = {{marginLeft: "10px"}}>
          <table>
          <thead>
            <tr>
              <th>순위</th><th>카테고리</th><th>판매금액</th><th>수량</th><th>비율</th>
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
        <p id="today-sold">총 매출: <TodayData date={today}/></p>
        <table id = "item-list">
        <colgroup>
            <col width = "5%"></col>
            <col width = "10%"></col>
            <col width = "10%"></col>
            <col width = "5%"></col>
            <col width = "5%"></col>
            <col width = "10%"></col>
            <col width = "3%"></col>
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
            <col width = "10%"></col>
            <col width = "5%"></col>
            <col width = "5%"></col>
            <col width = "10%"></col>
            <col width = "3%"></col>
          </colgroup>
            <tbody id = "item">
            </tbody>
        </table>
        </div>
      </div>
        </Fragment>
        
    )
}

export default RecordSold