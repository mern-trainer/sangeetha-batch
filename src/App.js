import ContextPage from "./Pages/ContextPage"
import ProductsPage from "./Pages/Products"
import { CartProvider } from "./Providers/CartProvider"
import { ContextProvider } from "./Providers/CounterProvider"

const App = () => {
    return <ContextProvider>
        {/* <ContextPage /> */}
        <CartProvider>
            <ProductsPage />
        </CartProvider>
    </ContextProvider>
}

export default App
