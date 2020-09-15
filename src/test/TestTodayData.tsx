import React, {Component, Fragment, useState} from 'react';
import {db} from '../App'
import {getDate} from '../lib/FirebaseData'
import {testRenderItem} from '../components/RenderData';

function TestTodayData(date){
    let int = 0
    let data = db.collection('wiki').doc('sale').collection(date.date).get()
     data.then((snapshot:any)=>{
            snapshot.forEach((doc:any)=>{
                int++
                testRenderItem(doc,int,date.date)
        })
        }
    )

    
    return (
        <Fragment>
        </Fragment>
    )
}

export default TestTodayData