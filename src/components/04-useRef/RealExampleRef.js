import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'
import './useref.css'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    const handleClick = () =>{
        setShow(!show)
    }
    
    return (
        <div>
            <h1>Real example ref</h1>
            <hr></hr>

            {show && <MultipleCustomHooks />}

            <button
                className="btn btn-primary mt-5"
                onClick={handleClick}
            >
                Show/Hide
            </button>
        </div>
    )
}
