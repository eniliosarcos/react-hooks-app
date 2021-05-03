

import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';
import './examples.css';

export const Memorize = () => {

    const {counter, increment} = useCounter(10);

    const [show, setShow] = useState(true);

    const handleClickShow = () => {
        setShow(!show);
    }

    return (
        <div>
            <h1>Counter: <Small value={counter}/></h1>
            <hr/>

            <button className="btn btn-primary"
                    onClick={increment}>
                +1
            </button>

            <button className="btn btn-outline-primary ml-3"
                    onClick={handleClickShow}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
