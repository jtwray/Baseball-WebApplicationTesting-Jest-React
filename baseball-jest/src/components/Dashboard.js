import React from "react"
import {Lamp} from './Lamp'


export const Dashboard = (props,{count,setCount}) => {
 console.log(props.strikes) ;
 const {setBalls,setStrikes,setFouls,setOuts,setHits}=props;
    return (

        <>
{props.count,props.strikes}
            <Lamp onMouseOver={()=>setCount(count+1)}/>
            <button onClick={()=>setStrikes(props.strikes+1)}></button>
            <Lamp onClick={()=>setBalls(props.balls+1)}/>
            <Lamp onClick={()=>setHits(props.hits+1)}/>
            <Lamp onClick={()=>setOuts(props.outs+1)}/>
            <Lamp onClick={()=>setFouls(props.fouls+1)}/>
            <Lamp/>
            <Lamp/>
            <Lamp/>

        </>
    )
}