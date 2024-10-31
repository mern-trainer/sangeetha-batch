
// context api => state, props, context api => global state management
// Hooks => functions, to handle state and lifecycle of a component

import { useContext } from "react"
import { counterContext } from "../App"

// createContext() from react, useContext() 

const ContextPage = () => {

    const {counter, setCounter} = useContext(counterContext)

    return <div className="d-flex flex-column align-items-center">
        {counter}
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
}

export default ContextPage
