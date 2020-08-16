import React, {Fragment} from 'react'
import Input from '../components/Input'
import TodayData from '../components/TodayData'
import {getDate} from '../lib/FirebaseData'
import {Link} from 'react-router-dom'

function RecordSold(){
  const today: string = getDate()

  window.onload = function(){


  }

    return(
        <Fragment>
        <h2>위키매직 판매일보</h2>
        <h3>{getDate()}</h3>
      <div className = "input-data">
        <Input/>
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