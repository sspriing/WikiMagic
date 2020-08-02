import React, {Component, Fragment, useState} from 'react';
import {db} from '../App'
import {getDate} from './Input'

function TodayData(){
    var docData: {
        id:string,
        data: any
    }
    var docc:any[] = []
    var dot:any[] = []
    var length = 0

    let data = db.collection('wiki').doc('sale').collection(getDate()).get()
    data.then((snapshot:any)=>{
            snapshot.forEach((doc:any)=>{
            var docData = {
                "id" : doc.id,
                "data": doc.data()
            }
            // console.log(doc.id,'=>',doc.data())
            docc.push(docData)
        })
        }
    )

    console.log(docc[0])

    // console.log(d)


    return (

        <Fragment>
            <div>
            {
                
            }
            </div>
        </Fragment>
    )
}

export default TodayData