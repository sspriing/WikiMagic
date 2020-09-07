import React from 'react'
import {db} from '../App'
import { getDate, getDay, getMinusDate, numberWithCommas, getMonth } from '../lib/FirebaseData';

export async function renderMonthData(month:string){
    var monthTotal =0;
    var doc =  db.collection('wiki').doc('static')
    var today;
    if(month === getMonth(getDate()))
        today = getDay(getDate())
    else
        today = 31
	
    let list: string[]=[];

    for(var i=0;i<today;i++){
        // console.log(month.concat("-").concat(String(i).padStart(2,'0')))
        list.push(month.concat("-").concat(String(i).padStart(2,'0')))
    }
    
    for(var i=0;i<today;i++){
        await doc.collection(list[i]).doc("total sales").get().then((doc:any)=>{
            if(doc.data()!=undefined){
                console.log(doc.data().sold)
                monthTotal += doc.data().sold
                return doc.data().sold
            }
        })
    }

    const mt = document.querySelector("#month-total")
    if(mt)
        mt.textContent =  "이번달 총 매출: "+numberWithCommas(monthTotal)
}