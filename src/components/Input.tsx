import React, {Component, Fragment, useState} from 'react';

function Input(){
    const [age, setAge] = useState("");

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
                
                <select id = "category" className = "category">
                    {

                    }
                </select>
                
            </div>
        </Fragment>
    )
}

export default Input