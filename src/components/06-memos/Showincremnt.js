import React from 'react'

export const Showincremnt = ({increment}) => {
    console.log('Me volvi a generar');
    return (
        <button className="btn btn-primary"
                onClick={()=>{
                    increment(5);
                }}
        >
            Incrementar
        </button>
    )
}
