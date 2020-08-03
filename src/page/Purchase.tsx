import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import WritePurchaseRecord from './WritePurchaseRecord'
import ShowPurchaseRecord from './ShowPurchaseRecord'

function Purchase(){
    return(
        <Fragment>
            <p>
                <Link to = '/write-purchase-record'>구입내역 기록</Link>
            </p>
            <p>    
                <Link to = '/show-purchase-record'>구입내역 조회</Link>
            </p>
        </Fragment>
    )
    
}

export default Purchase