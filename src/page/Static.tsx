import React, { Fragment } from 'react'
// import Calendar from 'rc-calendar'
import Calendar from 'react-calendar'
import { useState } from 'react'
import TodayData from '../components/TodayData';
import { getDate, dateToString, getMonth } from '../lib/FirebaseData';
import Monthly from '../components/Monthly';
import { RecordCategory, RecordMonthlyCategory } from '../components/Category';
import { renderMonthData } from '../components/MonthData';
import Input from '../components/Input';


//http://localhost:3000/WikiMagic#/static
function Static(){
    var today = new Date();
    const [date, setDate] = useState(today);
    // RecordCategory(dateToString(date))

    //달력 날짜 클릭시 발생하는 이벤트
    //데이터 호출 컴포넌트에 날짜정보 넘겨주고 테이블내용 리셋시킨다
    function showSales(date:Date){
        const itemList = document.getElementById("item"); 
        if(itemList){
            itemList.innerHTML = "";
        }
        setDate(date) 
        console.log(date)

        var categorySold = document.querySelector("#category-list")
        if(categorySold){
            categorySold.innerHTML=""
        }
        var monthCategorySold = document.querySelector("#month-category-list")
        if(monthCategorySold){
          monthCategorySold.innerHTML=""
        }
        renderMonthData(getMonth(dateToString(date)))

        RecordCategory(dateToString(date))
        RecordMonthlyCategory(dateToString(date))

    }

    return(
    <Fragment>
        <div>
        <Calendar 
            onChange ={(date:any)=> showSales(date)} 
            value = {date}
            style={{
                display:"inline-block", 
                margin:"10px",
            }}
        />
        {/* <Monthly/> */}
        <div>
            <p id = "month-total"></p>
        </div>
        </div>
        <div className = "input-data" style = {{marginRight:"2vw", display:"table"}}>
        <p style = {{fontSize:"20px", marginTop:"15px", marginBottom:"2px"}}>--일별 종목별 매출--</p>
        <div style = {{marginLeft: "10px"}}>
          <table style = {{width:"44vw", minWidth:"310px", display:"table"}}>
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

      <div className = "input-data" style = {{display:"table"}}>
        <p style = {{fontSize:"20px", marginTop:"15px", marginBottom:"2px"}}>--월별 종목별 매출--</p>
        <div style = {{marginLeft: "10px"}}>
          <table style = {{width:"44vw", minWidth:"310px"}}>
          <thead>
            <tr>
              <th>순위</th><th>카테고리</th><th>판매금액</th><th>수량</th>
            </tr>
          </thead>
          </table>
        <div id = "category-table-wrap">
          <table>
          <tbody id = "month-category-list">
          </tbody>
          </table>
          </div>
        </div>
      </div>


       <div style = {{height:"40px", width:"100%", display:"inline-block"}}>       
          <p id="today-sold" style = {{marginRight:"40px"}}>매출: <TodayData date={dateToString(date)}/></p>
      </div>
        <table id = "item-list" style = {{width:"95vw", marginLeft:"10px"}} >
          <thead>
            <tr>
              <th>번호</th><th>판매시간</th><th>상품명</th><th>수량</th><th>단가</th><th>총금액</th><th>삭제</th>
            </tr>
          </thead>
            <tbody id = "item"></tbody>
        </table>
    </Fragment>
    )
}

export default Static