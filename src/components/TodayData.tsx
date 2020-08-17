import React, {Component, Fragment, useState} from 'react';
import {db} from '../App'
import {getDate} from '../lib/FirebaseData'
import { renderItem} from './RenderData';
import { useEffect } from 'react';

function TodayData(date){
    let int = 0
    let data = db.collection('wiki').doc('sale').collection(date.date).get()
     data.then((snapshot:any)=>{
            snapshot.forEach((doc:any)=>{
                int++
                renderItem(doc,int,date.date)
        })
        }
    )

    
    return (
        <Fragment>
        </Fragment>
    )
}

export default TodayData