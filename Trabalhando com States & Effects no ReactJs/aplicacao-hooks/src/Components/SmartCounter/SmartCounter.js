import {useState} from 'react';

function SmartCounter(){
    const [quatity, upQuantity] = useState(1);
    return(
        <>
            <h1>{quatity}</h1>
            <button onClick={() => upQuantity(quatity + 1)}></button>
        </>
    )
}

export default SmartCounter;