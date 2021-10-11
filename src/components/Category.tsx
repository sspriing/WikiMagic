import React from 'react'
import {db} from '../App'
import {dateToString, getDate, getDay, getMonth, numberWithCommas} from '../lib/FirebaseData'
import { renderItem} from './RenderData';
import firebase from 'firebase';

//일별 카테고리 매출 조회 및 출력
export async function RecordCategory(date){
    var ct = new Map()
    var pr = new Map()
    var total = 0;

    let data = await db.collection('wiki').doc('sale').collection(date).get()
    data.forEach((doc:any)=>{
            var category = doc.data().data.category

            var num = doc.data().data.cnt
            var price = doc.data().data.totalPrice
            total += price
            if(ct.has(category)){
                num = ct.get(category)+num
                price = pr.get(category) + price
                ct.set(category, num) 
                pr.set(category, price)
            }
            else{
                ct.set(category,num)
                pr.set(category, price)
        }
    })

    var sorted = new Map([...pr.entries()].sort((a,b)=>b[1]-a[1]))

    var categorySold = document.querySelector("#category-list")

    var int = 1

    sorted.forEach((value, key)=>{
        let tr = document.createElement('tr')
        let rank = document.createElement('td')
        let name = document.createElement('td')
        let cnt = document.createElement('td')
        let price = document.createElement('td')
        let percent = document.createElement('td')

        rank.textContent = int.toString()
        name.textContent = key
        cnt.textContent = numberWithCommas(ct.get(key))
        price.textContent = numberWithCommas(value)
        percent.textContent = (value / total*100).toString().slice(0,4) + "%"

        tr.appendChild(rank)
        tr.appendChild(name)
        tr.appendChild(price)
        tr.appendChild(cnt)
        tr.appendChild(percent)

        categorySold?.appendChild(tr)

        int++
    })

}

export async function RecordMonthlyCategory(date){
    var month = getMonth(date)
    var today
    if(month === getMonth(getDate()))
        today = getDay(getDate())
    else
        today = 31
	
    let list: string[]=[];

    for(var i=0;i<today;i++){
        // console.log(month.concat("-").concat(String(i).padStart(2,'0')))
        list.push(month.concat("-").concat(String(i).padStart(2,'0')))
    }

    var ct = new Map()
    var pr = new Map()
    var total = 0;

    for(var i=0;i<today;i++){
        list.push(month.concat("-").concat(String(i).padStart(2,'0')))
    }

    for(var i=0;i<today;i++){
        let data = await db.collection('wiki').doc('sale').collection(list[i]).get()
        data.forEach((doc:any)=>{
                var category = doc.data().data.category

                var num = doc.data().data.cnt
                var price = doc.data().data.totalPrice
                total += price
                if(ct.has(category)){
                    num = ct.get(category)+num
                    price = pr.get(category) + price
                    ct.set(category, num) 
                    pr.set(category, price)
                }
                else{
                    ct.set(category,num)
                    pr.set(category, price)
            }
        })
    }


    var sorted = new Map([...pr.entries()].sort((a,b)=>b[1]-a[1]))

    var categorySold = document.querySelector("#month-category-list")

    var int = 1

    sorted.forEach((value, key)=>{
        let tr = document.createElement('tr')
        let rank = document.createElement('td')
        let name = document.createElement('td')
        let cnt = document.createElement('td')
        let price = document.createElement('td')
        let percent = document.createElement('td')

        rank.textContent = int.toString()
        name.textContent = key
        cnt.textContent = numberWithCommas(ct.get(key))
        price.textContent = numberWithCommas(value)
        percent.textContent = (value / total*100).toString().slice(0,4) + "%"

        tr.appendChild(rank)
        tr.appendChild(name)
        tr.appendChild(price)
        tr.appendChild(cnt)
        tr.appendChild(percent)

        categorySold?.appendChild(tr)

        int++
    })
}
