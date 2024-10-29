// state => Is an object to handle / manage data. => component.
// create => Hooks
// Hooks => A Function to handle state and lifecycle of a component or an element
// state manage => useState()

import { useState } from "react"

const MultiCounter = () => {
    
    const [counter, setCounter] = useState({counterOne: 0, counterTwo: 0})

    const handleIncrementOne = () => {
        setCounter({...counter, counterOne: counter.counterOne + 1})
    }

    const handleDecrementOne = () => {
        setCounter({...counter, counterOne: counter.counterOne - 1})
    }

    const handleIncrementTwo = () => {
        setCounter({...counter, counterTwo: counter.counterTwo + 1})
    }

    const handleDecrementTwo = () => {
        setCounter({...counter, counterTwo: counter.counterTwo - 1})
    }

    return <div className="d-flex justify-content-center mt-5 flex-column align-items-center">
        <div>{counter.counterOne}</div>
        <div className="d-flex gap-2 my-3">
            <button className="btn btn-success" onClick={handleIncrementOne}>Increment 1</button>
            <button className="btn btn-danger" onClick={handleDecrementOne}>Decrement 1</button>
        </div>
        <div>{counter.counterTwo}</div>
        <div className="d-flex gap-2 mt-2">
            <button className="btn btn-success" onClick={handleIncrementTwo}>Increment 2</button>
            <button className="btn btn-danger" onClick={handleDecrementTwo}>Decrement 2</button>
        </div>
    </div>
}

export default MultiCounter