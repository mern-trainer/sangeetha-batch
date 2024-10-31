import ContextPage from "./Pages/ContextPage"
import { ContextProvider } from "./Providers/CounterProvider"

const App = () => {
    return <ContextProvider>
        <ContextPage />
    </ContextProvider>
}

export default App
