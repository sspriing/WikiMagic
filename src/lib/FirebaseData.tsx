import React from 'react'
import { db } from "../App";

export function getDate():string{
    var today = new Date()
    var strDay: string;
    var dd = String(today.getDate()).padStart(2,'0')
    var mm = String(today.getMonth()+1).padStart(2,'0')
    var yyyy = today.getFullYear();
    strDay = yyyy+ "-"+mm+"-"+dd
    return(strDay) 
}

export function dateToString(date:Date):string{
    var strDay: string;
    var dd = String(date.getDate()).padStart(2,'0')
    var mm = String(date.getMonth()+1).padStart(2,'0')
    var yyyy = date.getFullYear();
    strDay = yyyy+ "-"+mm+"-"+dd
    return(strDay) 
}

export function getTime():string{
    var now = new Date()
    var hh = String(now.getHours()).padStart(2,'0')
    var mm = String(now.getMinutes()).padStart(2,'0')
    var ss = String(now.getSeconds()).padStart(2,'0')
    return(hh+":"+mm+":"+ss)
}

export function delItem(){
    
}

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function getMonthSales(month){

}