import { db } from "../App";
import { getDate, numberWithCommas, getTime } from "../lib/FirebaseData";

export function testRenderItem(doc,int, date){
    const itemList = document.querySelector("#item")
    var todaySold = document.querySelector("#today-sold")

    var ts = db.collection('wiki').doc('static').collection(date).doc('total sales')

    let li = document.createElement('tr');
    let number = document.createElement('td')
    let time = document.createElement('td')
    let name = document.createElement('td')
    let cnt = document.createElement('td')
    let price = document.createElement('td')
    let totalPrice = document.createElement('td')
    let del = document.createElement('td')
    let delBtn = document.createElement('button')
    let refundBtn = document.createElement('button')


    li.setAttribute('data-id', doc.id)

    number.className = "item-number"
    time.className = "item-time"
    name.className = "item-name"
    cnt.className = "item-cnt"
    price.className = "item-price"
    totalPrice.className = "item-totalPrice"
    del.className = "item-del"
    delBtn.id = "item-del"
    refundBtn.className = "item-refund"

    delBtn.addEventListener("click",delClick,false)
    async function delClick(e){
        var result = window.alert("권한이 없습니다")
    }

    refundBtn.addEventListener("click", refundClick, false)
    async function refundClick(e){
        var result = window.alert("권한이 없습니다.")
    }

    async function refundItem(refundCnt:number){
        window.alert("권한이 없습니다")
    }

    number.textContent = int
    time.textContent = doc.id.slice(0,5)
    if(doc.data().data.memo)
        name.textContent= doc.data().data.category + "\r\n" + doc.data().data.memo
    else
        name.textContent = doc.data().data.category
    cnt.textContent = doc.data().data.cnt
    price.textContent = numberWithCommas(doc.data().data.price)
    totalPrice.textContent = numberWithCommas(doc.data().data.totalPrice)
    delBtn.textContent="X"
    delBtn.value = doc.id
    refundBtn.textContent = "환불"
    refundBtn.value = doc.id

    if(date === getDate())
        del.appendChild(delBtn)
    else 
        del.appendChild(refundBtn)

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


   
    ts.get().then((doc:any)=>{
        if (doc.exists && todaySold&& !isNaN(doc.data().sold)){
            todaySold.textContent= "총 매출: " + numberWithCommas(doc.data().sold)
        }

        else if(todaySold){
            db.collection('wiki').doc('static').collection(date).doc("total sales").set({sold: totalPrice.textContent})
            todaySold.textContent= "총 매출: " + totalPrice.textContent
        }
    })
}

export function renderItem(doc, int, date){
    const itemList = document.querySelector("#item")
    var todaySold = document.querySelector("#today-sold")

    var ts = db.collection('wiki').doc('static').collection(date).doc('total sales')

    let li = document.createElement('tr');
    let number = document.createElement('td')
    let time = document.createElement('td')
    let name = document.createElement('td')
    let cnt = document.createElement('td')
    let price = document.createElement('td')
    let totalPrice = document.createElement('td')
    let del = document.createElement('td')
    let delBtn = document.createElement('button')
    let refundBtn = document.createElement('button')


    li.setAttribute('data-id', doc.id)

    number.className = "item-number"
    time.className = "item-time"
    name.className = "item-name"
    cnt.className = "item-cnt"
    price.className = "item-price"
    totalPrice.className = "item-totalPrice"
    del.className = "item-del"
    delBtn.id = "item-del"
    refundBtn.className = "item-refund"

    delBtn.addEventListener("click",delClick,false)
    async function delClick(e){
        var result = window.confirm("삭제하시겠습니까?")
        if(result){
            db.collection('wiki').doc('sale').collection(date).doc(doc.id).delete()
            var beforePrice = await ts.get().then((doc: any) => {
                return doc.data().sold;
            })
            beforePrice -= doc.data().data.totalPrice
            ts.set({sold: beforePrice})
            setTimeout(()=>window.location.reload(),1000)
        }
    }

    refundBtn.addEventListener("click", refundClick, false)
    async function refundClick(e){
        var result = window.confirm("환불처리 하시겠습니까?")
        if(result){
            if(doc.data().data.cnt === 1){
                refundItem(1)
            }
            else{
                var isAll = window.confirm("전체환불입니까?")
                if(isAll){
                    refundItem(doc.data().data.cnt)
                }
                else{
                    var askCount = window.prompt("몇 개 환불입니까?")
                    if(askCount!=null){
                        askCount = askCount.replace(/[^0-9]/g,'')
                        if(parseInt(askCount) >0 && parseInt(askCount) <= doc.data().data.cnt)
                            refundItem(parseInt(askCount))
                        else{
                            window.alert("0 이상 "+ doc.data().data.cnt+" 이하 숫자로 입력하세요")
                        }
                    }
                    else{
                        window.alert("숫자를 입력하세요")
                    }
                    
                }
            }
        }
        else{}
    }

    async function refundItem(refundCnt:number){
        var today = getDate()
        var now = getTime()
        let data = {
            time: now,
            age: doc.data().data.age,
            category: "환불",
            price: doc.data().data.price * -1,
            cnt: refundCnt,
            totalPrice: doc.data().data.price* -1 * refundCnt,
            memo: date + " " +doc.data().data.time + " " + doc.data().data.category +" "+ refundCnt+ "개"
        }
        db.collection('wiki').doc('sale').collection(today).doc(now).set({data})
        window.alert("처리 되었습니다")
    }

    number.textContent = int
    time.textContent = doc.id.slice(0,5)
    if(doc.data().data.memo)
        name.textContent= doc.data().data.category + "\r\n" + doc.data().data.memo
    else
        name.textContent = doc.data().data.category
    cnt.textContent = doc.data().data.cnt
    price.textContent = numberWithCommas(doc.data().data.price)
    totalPrice.textContent = numberWithCommas(doc.data().data.totalPrice)
    delBtn.textContent="X"
    delBtn.value = doc.id
    refundBtn.textContent = "환불"
    refundBtn.value = doc.id

    if(date === getDate())
        del.appendChild(delBtn)
    else 
        del.appendChild(refundBtn)

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


   
    ts.get().then((doc:any)=>{
        if (doc.exists && todaySold&& !isNaN(doc.data().sold)){
            todaySold.textContent= "총 매출: " + numberWithCommas(doc.data().sold)
        }

        else if(todaySold){
            db.collection('wiki').doc('static').collection(date).doc("total sales").set({sold: totalPrice.textContent})
            todaySold.textContent= "총 매출: " + totalPrice.textContent
        }
    })
    


}

