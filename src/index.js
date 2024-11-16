import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import App from "./App"
import "./index.css"
import { Toaster } from 'react-hot-toast';
import { ContextProvider } from './Providers/CounterProvider';
import { CartProvider } from './Providers/CartProvider';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Provider store={store}>
    <ContextProvider>
        <CartProvider>
            <App />
            <Toaster position="top-right"/>
        </CartProvider>
    </ContextProvider>
</Provider>)
