// import ContextPage from "./Pages/ContextPage"
// import Effect from "./Pages/Effect"
// import ProductsPage from "./Pages/Products"
import Events from "./Pages/Events"
// import Timer from "./Pages/Timer"
import { CartProvider } from "./Providers/CartProvider"
import { ContextProvider } from "./Providers/CounterProvider"

const App = () => {
    return <ContextProvider>
        {/* <ContextPage /> */}
        <CartProvider>
            {/* <Effect /> */}
            <Events />
        </CartProvider>
    </ContextProvider>
}

export default App
