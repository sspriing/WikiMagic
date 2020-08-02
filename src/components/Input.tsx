import React, {Component, Fragment, useState} from 'react';
import {db} from '../App'
import InputNumber from 'react-input-just-numbers';
import{getTime, getDate} from '../lib/FirebaseData'

function Input(){
    const [age, setAge] = useState("성인");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("모자");
    const [cnt, setCnt] = useState(0);
    const [totalPrice, setTP] = useState(0);
    const [warnning, setWranning] = useState("");
    const [soldTime, setSoldTime] = useState("")

    let data = {
        time: "",
        age: age,
        category: category,
        price: price,
        cnt: cnt,
        totalPrice: totalPrice
    }

    var cat
    if(age === "성인"){
        cat = 
            <Fragment>
                <option value = "모자">모자</option>
                <option value = "양말">양말</option>
                <option value = "선글라스">선글라스</option>
                <option value = "헤어밴드">헤어밴드</option>
                <option value = "헤어핀">헤어핀</option>
                <option value = "스카프 / 손수건">스카프 / 손수건</option>
                <option value = "잠옷">잠옷</option>
                <option value = "우양산">우양산</option>
                <option value = "넥타이">넥타이</option>
                <option value = "마스크 / 마스크줄">마스크 / 마스크줄</option>
            </Fragment>
    }    
    if(age === "아동"){
        cat = 
        <Fragment>
            <option value = "모자">모자</option>
            <option value = "양말">양말</option>
            <option value = "선글라스">선글라스</option>
            <option value = "헤어밴드">헤어밴드</option>
            <option value = "헤어핀">헤어핀</option>
            <option value = "반지">반지</option>
            <option value = "가방">가방</option>
            <option value = "기타">기타</option>
        </Fragment>
    }

    function sendToFirebase(){
        if(price === undefined || cnt === undefined || price ===0 || cnt ===0){
            setWranning("단가와 수량을 입력하세요")
            return;
        }
        var date = getDate()
        var time = getTime()
        data.time = time

        // firebase에 저장
        db.collection('wiki')
            .doc('sale')
            .collection(date)
            .doc(time)
            .set({data})

        //저장이 되었는지 확인 후 reload
        db.collection('wiki')
            .doc('sale')
            .collection(date)
            .doc(time)
            .get()
            .then(
                doc =>{
                    window.location.reload(false)
                }
            )
    }

    return(
        <Fragment>
                
                <select id = "age" className = "select_age" onChange =  {(e)=>{
                    let {name, value} = e.target
                    setAge(value)
                    }}>
                    <option value = "성인">성인</option>
                    <option value = "아동">아동</option>
                </select>
                
                <select id = "category" className = "category" onChange =  {(e)=>{
                    let {name, value} = e.target
                    setCategory(value)
                    }}>
                    {cat}
                </select>

                <InputNumber id = "price" placeholder = "단가를 입력하세요" onChange = {(e)=>{
                    setPrice(parseInt(e.target.value))
                    setTP(parseInt(e.target.value)*cnt)
                    console.log(price)
                    console.log(cnt)
                    console.log(totalPrice)
                }}></InputNumber>
                <InputNumber id = "cnt" placeholder = "수량을 입력하세요" onChange = {(e)=>{
                    setCnt(parseInt(e.target.value))
                    setTP(price*parseInt(e.target.value))
                    console.log(price)
                    console.log(cnt)
                    console.log(totalPrice)
                }}></InputNumber>
                <div id = "totalPrice" >총 금액: {totalPrice}
                <button id = "submit" type = "submit" onClick={sendToFirebase}>입력</button>
                </div>
                <div id = "warnning">{warnning}</div>
                
        </Fragment>
    )
}

export default Input