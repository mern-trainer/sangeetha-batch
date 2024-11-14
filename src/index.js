import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import App from "./App"
import "./index.css"
import { Fragment } from 'react';
import { Toaster } from 'react-hot-toast';
import { ContextProvider } from './Providers/CounterProvider';
import { CartProvider } from './Providers/CartProvider';
import TopMenu from './Components/NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<ContextProvider>
    <CartProvider>
        <App />
        <Toaster position="top-right"/>
    </CartProvider>
</ContextProvider>)
