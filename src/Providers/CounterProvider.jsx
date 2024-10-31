import { createContext, useState } from "react";

export const CounterContext = createContext()

export const ContextProvider = ({ children }) => {

    const [counter, setCounter] = useState(0)

    const values = { counter, setCounter }

    return <CounterContext.Provider value={values}>
        {children}
    </CounterContext.Provider>
}

