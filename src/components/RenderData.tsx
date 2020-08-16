import { db } from "../App";
import { getDate, numberWithCommas } from "../lib/FirebaseData";

var ts = 0

export function renderItem(doc, int, date){
    const itemList = document.querySelector("#item")
    var todaySold = document.querySelector("#today-sold")
    

    let li = document.createElement('tr');
    let number = document.createElement('td')
    let time = document.createElement('td')
    let name = document.createElement('td')
    let cnt = document.createElement('td')
    let price = document.createElement('td')
    let totalPrice = document.createElement('td')
    let del = document.createElement('td')
    let delBtn = document.createElement('button')


    li.setAttribute('data-id', doc.id)

    number.className = "item-number"
    time.className = "item-time"
    name.className = "item-name"
    cnt.className = "item-cnt"
    price.className = "item-price"
    totalPrice.className = "item-totalPrice"
    del.className = "item-del"
    delBtn.id = "item-del"

    delBtn.addEventListener("click",btnClick,false)
    function btnClick(e){
        db.collection('wiki').doc('sale').collection(date).doc(doc.id).delete()
        
        setTimeout(()=>window.location.reload(),1000)
    }
    
    if(int===1){
        ts=0

    }
        
    ts += doc.data().data.totalPrice

    db.collection('wiki').doc('static').collection(date).doc("total sales").set({
        sold: ts
    })

    number.textContent = int
    time.textContent = doc.id.slice(0,5)
    name.textContent= doc.data().data.category
    cnt.textContent = doc.data().data.cnt
    price.textContent = numberWithCommas(doc.data().data.price)
    totalPrice.textContent = numberWithCommas(doc.data().data.totalPrice)
    delBtn.textContent="X"
    delBtn.value = doc.id
    del.appendChild(delBtn)

    li.appendChild(number)
    li.appendChild(time)
    li.appendChild(name)
    li.appendChild(cnt)
    li.appendChild(price)
    li.appendChild(totalPrice)
    li.appendChild(del)

    if(int === 0)
    itemList?.appendChild(li)
else{
    itemList?.insertBefore(li, itemList.firstChild)
}
    if(todaySold){
        todaySold.textContent= "총 매출: " + numberWithCommas(ts)
    }
}

export function renderItemNoDelete(doc, int, date){
    const itemList = document.querySelector("#item")
    var todaySold = document.querySelector("#today-sold")
    

    let li = document.createElement('tr');
    let number = document.createElement('td')
    let time = document.createElement('td')
    let name = document.createElement('td')
    let cnt = document.createElement('td')
    let price = document.createElement('td')
    let totalPrice = document.createElement('td')
    let del = document.createElement('td')


    li.setAttribute('data-id', doc.id)

    number.className = "item-number"
    time.className = "item-time"
    name.className = "item-name"
    cnt.className = "item-cnt"
    price.className = "item-price"
    totalPrice.className = "item-totalPrice"
    del.className = "item-del"

    if(int===1){
        ts=0

    }
        
    ts += doc.data().data.totalPrice

    db.collection('wiki').doc('static').collection(date).doc("total sales").set({
        sold: ts
    })

    number.textContent = int
    time.textContent = doc.id.slice(0,5)
    name.textContent= doc.data().data.age + " - " +doc.data().data.category
    cnt.textContent = doc.data().data.cnt
    price.textContent = numberWithCommas(doc.data().data.price)
    totalPrice.textContent = numberWithCommas(doc.data().data.totalPrice)

    li.appendChild(number)
    li.appendChild(time)
    li.appendChild(name)
    li.appendChild(cnt)
    li.appendChild(price)
    li.appendChild(totalPrice)

    if(int === 0)
        itemList?.appendChild(li)
    else{
        itemList?.insertBefore(li, itemList.firstChild)
    }
        
    // itemList?.appendChild(li)
    if(todaySold){
        todaySold.textContent= "총 매출: " + numberWithCommas(ts)
    }

        
}