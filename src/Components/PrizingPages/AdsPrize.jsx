import React from 'react'
import {Grid} from "@material-ui/core"
import {FetchSingleAd} from "../../Hooks/FetchSingleAd"
export default function AdsPrize() {
    const [Loading,SingleCard]=FetchSingleAd()
    return (
        <div>
            <Grid item xl={8} lg={8} md={8} sm={12} xs={12} >
                {
                    SingleCard.map((items)=>{
                           <img src={items.AdsImg}></img>
                    })
                }                                                                                                                                                                                                                                                                                                                                                                                                                                       
            </Grid>
        </div>
    )
}
