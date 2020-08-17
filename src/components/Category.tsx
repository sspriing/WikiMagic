import React from 'react'
import {db} from '../App'
import {getDate} from '../lib/FirebaseData'
import { renderItem} from './RenderData';
import firebase from 'firebase';

export async function RecordCategory(date){
    var ct = new Map()
    var pr = new Map()
    console.log(date)

    let data = await db.collection('wiki').doc('sale').collection(date).get()
    data.forEach((doc:any)=>{
            var category = doc.data().data.category

            var num = doc.data().data.cnt
            var price = doc.data().data.totalPrice
            if(ct.has(category)){
                num = ct.get(category)+num
                price = pr.get(category) + price
                ct.set(category, num) 
                pr.set(category, price)
            }
            else{
                ct.set(category,num)
                pr.set(category, price)
        }
    })
    

    console.log(ct.entries())
    // db.collection('wiki').doc('static').collection(date).doc('category').set({
    //     data : ct
    // })

    ct.forEach((value,key, map)=>{
        db.collection('wiki').doc('static').collection(date).doc('category').set({
            cnt: firebase.firestore.FieldValue.arrayUnion({key, value})
        }, {merge:true})
    })

    pr.forEach((value,key, map)=>{
        db.collection('wiki').doc('static').collection(date).doc('category').set({
            price: firebase.firestore.FieldValue.arrayUnion({key, value})
        }, {merge:true})
    })

}
