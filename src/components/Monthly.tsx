import React, { Fragment } from 'react'
import {db} from '../App'
import { getMonth } from '../lib/FirebaseData';

function Monthly(date){
    

    return(
        <Fragment>
            <div className = "input-data">
                <div style={{display:"inline-block", width: "800px", textAlign:"center"}}>
                    <p style = {{fontSize:"20px", marginTop:"15px", marginBottom:"2px"}}>--종목별 매출--</p>
                    <div style = {{marginLeft: "10px"}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>순위</th><th>카테고리</th><th>판매금액</th><th>수량</th>
                                </tr>
                            </thead>
                        </table>
                        <div id = "category-table-wrap">
                            <table>
                                <tbody id = "category-list">
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
            

        </Fragment>
    )
}

export default Monthly;