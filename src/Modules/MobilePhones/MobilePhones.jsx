import React from "react"
import { Suspense } from "react-is"
const ExampleComponent=React.lazy(()=>import ('../Houses/Houses'))
export default function MobilePhones(){
    return(
        <>
        <Suspense fallback={<div>Loading...</div>}>
<ExampleComponent/>
        </Suspense>
        <div>MobilePhones</div>
        </>
    )
}