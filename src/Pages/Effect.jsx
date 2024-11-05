// Hooks => Functions, to handle state and lifecycle of component
// useState, useContext, useEffect
// Lifecycle => Mounting, updating, Unmounting

import { useEffect, useState } from "react"

// Mounting => Called after first / initial render
// Updating => state or Props changed / change in component
// Unmounting => Called before removing component from DOM.

const Effect = () => {

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log(counter)
        return () => {
            console.log("Unmounting..") // cleanup function
        }
    }, [counter]) // dependency list

    return <div className="d-flex flex-column align-items-center mt-5">
        <div>{counter}</div>
        <div className="mt-4">
            <button className="btn btn-success" onClick={() => setCounter(counter + 1)}>Increment</button>
        </div>
    </div>
}

export default Effect
