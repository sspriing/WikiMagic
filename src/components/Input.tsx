import React, {Component, Fragment, useState} from 'react';
import {db} from '../App'
import InputNumber from 'react-input-just-numbers';

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

function Input(){
    const [age, setAge] = useState("adult");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("hat");
    const [cnt, setCnt] = useState(0);
    const [totalPrice, setTP] = useState(0);
    const [warnning, setWranning] = useState("");

    let data = {
        age: age,
        category: category,
        price: price,
        cnt: cnt,
        totalPrice: totalPrice
    }

    var cat
    if(age === "adult"){
        cat = 
            <Fragment>
                <option value = "hat">모자</option>
                <option value = "socks">양말</option>
                <option value = "sunglasses">선글라스</option>
                <option value = "hairband">헤어밴드</option>
                <option value = "hairpin">헤어핀</option>
                <option value = "scarf">스카프 / 손수건</option>
                <option value = "clothes">잠옷</option>
                <option value = "umbrella">우양산</option>
                <option value = "tie">넥타이</option>
                <option value = "mask">마스크 / 마스크줄</option>
            </Fragment>
    }    
    if(age === "kids"){
        cat = 
        <Fragment>
            <option value = "hat">모자</option>
            <option value = "socks">양말</option>
            <option value = "sunglasses">선글라스</option>
            <option value = "hairband">헤어밴드</option>
            <option value = "hairpin">헤어핀</option>
            <option value = "ring">반지</option>
            <option value = "bag">가방</option>
            <option value = "etc">기타</option>
        </Fragment>
    }

    function sendToFirebase(){
        if(price === undefined || cnt === undefined || price ===0 || cnt ===0){
            setWranning("단가와 수량을 입력하세요")
            return;
        }
        var date = getDate()
        var time = getTime()

        db.collection('wiki')
            .doc('sale')
            .collection(date)
            .doc(time)
            .set({data})
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
            <div>
                <select id = "age" className = "select_age" onChange =  {(e)=>{
                    let {name, value} = e.target
                    setAge(value)
                    }}>
                    <option value = "adult">성인</option>
                    <option value = "kids">아동</option>
                </select>
                
                <select id = "category" className = "category" onChange =  {(e)=>{
                    let {name, value} = e.target
                    setCategory(value)
                    }}>
                    {cat}
                </select>

                <InputNumber id = "price" onChange = {(e)=>{
                    setPrice(parseInt(e.target.value))
                    setTP(parseInt(e.target.value)*cnt)
                    console.log(price)
                    console.log(cnt)
                    console.log(totalPrice)
                }}></InputNumber>
                <InputNumber id = "cnt"  onChange = {(e)=>{
                    setCnt(parseInt(e.target.value))
                    setTP(price*parseInt(e.target.value))
                    console.log(price)
                    console.log(cnt)
                    console.log(totalPrice)
                }}></InputNumber>
                <p id = "totalPrice" >{totalPrice}</p>
                <p id = "warnning">{warnning}</p>
                <button type = "submit" onClick={sendToFirebase}>입력</button>
            </div>
        </Fragment>
    )
}

export default Input