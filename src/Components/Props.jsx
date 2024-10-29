import React, { useState } from 'react'
import Child from './Child'

const Props = () => { // parent comp.

    const [a, setA] = useState(1230)
    // state is an object to handle data or informations in a component

    // props [property] => to send data from p to c
    
    return (
        <div>
            {/* {a} */}
            {/* child comp. */}
            <button onClick={() => setA(a + 1)}>Hi</button>
            <Child state={a} />            
        </div>
    )
}

export default Props
