import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './examples.css'

export const Layout = () => {

    const {counter, increment} = useCounter(1);
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { quote } = !!data && data[0];

    const pTag = useRef();

    const [boxsize, setBoxsize] = useState();

    useLayoutEffect(() => {
        
        setBoxsize(pTag.current.getBoundingClientRect());

    }, [quote])

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr></hr>


            <blockquote className="blockquote text-end">
                <p 
                    ref={pTag}
                    className="mb-3">{quote}
                </p>
            </blockquote>

            <pre>
                {JSON.stringify(boxsize,null,3)}
            </pre>


            <button 
                className="btn btn-primary"
                onClick={increment}
            >
                Siguiente quote
            </button>

        </div>
    )
}
