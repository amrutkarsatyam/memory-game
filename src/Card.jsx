import React from 'react'
export default function Card(props){
    const clsy=(props.isFlipped)?'card-flip':'card'
    return (<button className={clsy} onClick={!props.disabled?props.flip:()=>{}} disabled={props.disabled||props.isFound}>
        <h1>{props.isFlipped||props.isFound?props.icon:"❓"}</h1>
    </button>

    )
}