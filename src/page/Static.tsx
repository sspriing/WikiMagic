import React, { Fragment } from 'react'
// import Calendar from 'rc-calendar'
import Calendar from 'react-calendar'
import { useState } from 'react'
import TodayData from '../components/TodayData';
import { getDate, dateToString } from '../lib/FirebaseData';
import Monthly from '../components/Monthly';
import { RecordCategory } from '../components/Category';

function Static(){
    var today = new Date();
    const [date, setDate] = useState(today);
    RecordCategory(dateToString(date))

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

        RecordCategory(dateToString(date))
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
        <Monthly/>
        </div>


       <p id="today-sold">매출: <TodayData date={dateToString(date)}/></p>
        <table id = "item-list">
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