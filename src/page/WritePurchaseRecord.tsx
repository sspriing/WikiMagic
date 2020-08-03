import React, { Fragment, useState } from 'react'
import Calendar from 'rc-calendar';
import InputNumber from 'react-input-just-numbers';

function WritePurchaseRecord(){
    return(
        <Fragment>
            <Calendar/>
            <div className = "input-data">
                <select>
                    <option value = "a">카테고리</option>
                </select>
                <select>
                    <option value = "a">업체</option>
                </select>
                <InputNumber id = "price" placeholder = "단가를 입력하세요" onChange = {(e)=>{

                    }}></InputNumber>
            </div>
            

            
            <table id = "item-list">
                <thead>
                    <tr>
                        <th>품목</th><th>수량</th><th>단가</th><th>총금액</th><th>삭제</th>
                    </tr>
                </thead>
                <tbody id = "item"></tbody>
            </table>

            <p>
                <button > 확인</button>
            </p>
        </Fragment>
        
    )
}

export default WritePurchaseRecord