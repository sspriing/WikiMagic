import React from 'react'

export function getDate(): string{
    var today = new Date()
    var dd = String(today.getDate()).padStart(2,'0')
    var mm = String(today.getMonth()+1).padStart(2,'0')
    var yyyy = today.getFullYear();
    return(yyyy+ "-"+mm+"-"+dd) 
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
