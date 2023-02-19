
import React from "react"
import data from "./data.js"
import Travel from "./components/Travel.js"

export default function Travel_Journal(){

    const [list, updateList] = React.useState([]);
    console.log(data)

    React.useEffect( () => {
        updateList(() => data.map( travel => {
            return(<Travel {...travel}/>)
        }));
    },[])

    return(
        <div>
            <div id="header">
                <p id="title">Meziyum's Travel Journal</p>
            </div>
            <div id="list">
                {list}
            </div>
        </div>
    )
}