import React, {memo} from 'react'

export const Small = memo(({value}) => {


    console.log('asd');

    return (
        <small>
            {value}
        </small>
    )
})
