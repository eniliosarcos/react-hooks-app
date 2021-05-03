import React, { useCallback, useState } from 'react';
import './examples.css';
import { Showincremnt } from './Showincremnt';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);


    // const increment = () =>{
    //     setCounter(counter+1);
    // }

    const increment = useCallback(
        (num) => {
            setCounter(c => c+num);
        },
        [setCounter],
    )

    return (
        <div>
            <h1>useCallBack hook: {counter}</h1>
            <hr/>

            <Showincremnt increment={increment}/>
        </div>
    )
}
