import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import Digit from "./components/Digit";

function Home({dgts}){
    return(
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="d-flex justify-content-center align-items-center wh-100 bg-black text-light fs-1 rounded-2">
                <div className="me-5 mt-3 ms-5 mb-3"><FontAwesomeIcon icon={faClock}/></div>
                {dgts.map((dg)=>{
                    return <Digit dg={dg}/>
                })}
            </div>
        </div>
    )
}

export default Home