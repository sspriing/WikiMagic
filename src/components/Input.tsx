import React, {Component, Fragment, useState} from 'react';
import {db} from '../App'
import InputNumber from 'react-input-just-numbers';
import{getTime, getDate, numberWithCommas} from '../lib/FirebaseData'

//판매항목 입력부분
function Input(){
    const [age, setAge] = useState("성인");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("양말");
    const [cnt, setCnt] = useState(1);
    const [totalPrice, setTP] = useState(0);
    const [warnning, setWranning] = useState("");
    const [ts, setTS] = useState(0)

    let data = {
        time: "",
        age: age,
        category: category,
        price: price,
        cnt: cnt,
        totalPrice: totalPrice
    }

    var cat
        cat = <Fragment>
                    <option value = "양말">양말</option>
                    <option value = "모자">모자</option>
                    <option value = "장갑">장갑</option>
                    <option value = "귀마개">귀마개</option>
                    <option value = "레깅스">레깅스</option>
                    <option value = "헤어핀">헤어핀</option>
                    <option value = "헤어링">헤어링</option>
                    <option value = "헤어밴드">헤어밴드</option>
                    <option value = "손수건">손수건</option>
                    <option value = "스카프">스카프</option>
                    <option value = "원피스">원피스</option>
                    <option value = "바지">바지</option>
                    <option value = "잠옷세트">잠옷세트</option>
                    <option value = "선글라스">선글라스</option>
                    <option value = "우양산">우양산</option>
                    <option value = "가방">가방</option>
                    <option value = "방향제">방향제</option>
                    <option value = "매출 누락">매출 누락</option>
                </Fragment>
    

    async function sendToFirebase(){
        if(price === undefined || cnt === undefined || price ===0 || cnt ===0 || isNaN(price) || isNaN(cnt)){
            setWranning("단가와 수량을 입력하세요")
            return;
        }

        var date = getDate()
        var time = getTime()
        data.time = time

        var todaySold = document.querySelector("#today-sold")
        var todaySoldInt = todaySold?.textContent?.toString().replace(/[^0-9]/g,'');
        if(todaySoldInt !== undefined && todaySoldInt !== null){
            setTS(parseInt(todaySoldInt) + totalPrice)
            console.log(parseInt(todaySoldInt) + totalPrice)
            db.collection('wiki').doc('static').collection(date).doc("total sales").set({sold: parseInt(todaySoldInt) + totalPrice})
        }

        else db.collection('wiki').doc('static').collection(date).doc("total sales").set({sold: 0})

        // firebase에 저장
        db.collection('wiki')
            .doc('sale')
            .collection(date)
            .doc(time)
            .set({data}).then(doc=>{
                                    console.log("setting")
                                    console.log(data)
                                    window.location.reload()
                                })
        
        

        //저장이 되었는지 확인 후 reload
        // db.collection('wiki')
        //     .doc('sale')
        //     .collection(date)
        //     .doc(time)
        //     .get()
        //     .then(
        //         doc =>{
        //             // window.location.reload(true)
        //             // // console.log("okdokey")
        //             // console.log(doc)
        //         }
        //     )
    }

    return(
        <Fragment>
                <div style = {{width: "300px", display: "inline-block"}}>

                <select id = "age" className = "select_age" onChange =  {(e)=>{
                    let {name, value} = e.target
                    setAge(value)
                    }}>
                    <option value = "성인">성인</option>
                </select>
                
                <select id = "category" className = "category" onChange =  {(e)=>{
                    let {name, value} = e.target
                    setCategory(value)
                    }}>
                    {cat}
                </select>

                <InputNumber style = {{width:"250px"}} id = "price" placeholder = "단가를 입력하세요" onChange = {(e)=>{
                    setPrice(parseInt(e.target.value))
                    setTP(parseInt(e.target.value)*cnt)
                    // console.log(price)
                    // console.log(cnt)
                    // console.log(totalPrice)
                }}></InputNumber>
                <InputNumber style = {{width:"250px"}} id = "cnt" placeholder = "1 (기본값)" onChange = {(e)=>{
                    
                    console.log(typeof(e.target.value))
                    if(e.target.value=== undefined || isNaN(e.target.value) || e.target.value === "") {
                        setCnt(1)
                        setTP(price)
                    }
                    else{
                        setCnt(parseInt(e.target.value))
                        setTP(price*parseInt(e.target.value))
                        console.log(price)
                        console.log(cnt)
                        console.log(totalPrice)
                    }

                }}></InputNumber>
                <div id = "totalPrice" >총 금액: {numberWithCommas(totalPrice)}
                <button id = "submit" type = "submit" onClick={sendToFirebase}>입력</button>
                </div>
                <div id = "warnning">{warnning}</div>
                </div>
        </Fragment>
    )
}

export default Input