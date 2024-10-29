import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import App from "./App"
import "./index.css"
import { Fragment } from 'react';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Fragment>
    <App />
    <Toaster position="top-right"/>
</Fragment>)
