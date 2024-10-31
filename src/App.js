import { createContext, Fragment, useState } from "react"
import ContextPage from "./Pages/ContextPage"

export const counterContext = createContext()

const App = () => {

    const [counter, setCounter] = useState(0)

    const values = { counter, setCounter }

    return <counterContext.Provider value={values}>
        {/* <TodoPage /> */}
        {/* <Props /> */}
        <ContextPage />
        {counter}
    </counterContext.Provider>
}

export default App
