import React, {Fragment} from 'react'
import Input from '../components/Input'
import TodayData from '../components/TodayData'
import {getDate} from '../lib/FirebaseData'
import logo from './wikimagic1.png'
import { RecordCategory } from '../components/Category'

function RecordSold(){
  const today: string = getDate()
  
  RecordCategory(today)

    return(
        <Fragment>
        <img src = {logo} height = "100px"/>
        <h3 style={{marginTop:"5px"}}>{getDate()}</h3>
      <div className = "input-data">
        <Input/>
        <div id = "category-table-wrap">
          <p>종목별 매출</p>
          <table id = "category-list">
          <thead>
            <tr>
              <th>순위</th><th>카테고리</th><th>판매금액</th><th>수량</th>
            </tr>
          </thead>
          </table>
        </div>
      </div>
      
      <div id = "content" >
        <p id="today-sold">오늘 매출: <TodayData date={today}/></p>
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

export default RecordSold