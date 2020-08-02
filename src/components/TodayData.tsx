import React, {Component, Fragment, useState} from 'react';
import {db} from '../App'
import {getDate} from '../lib/FirebaseData'
import { renderItem } from './RenderData';
import { useEffect } from 'react';

function TodayData(){
    let int = 0

    let data = db.collection('wiki').doc('sale').collection(getDate()).get()
     data.then((snapshot:any)=>{
            snapshot.forEach((doc:any)=>{
                int++
                renderItem(doc,int)
        })
        }
    )

    
    return (
        <Fragment>
        </Fragment>
    )
}

export default TodayData