import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShopPage from '../Pages/ShopPage'
import TodoPage from '../Pages/TodoPage'
import PageNotFound from '../Components/PageNotFound'
import CartPage from '../Pages/CartPage'

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/shop" Component={ShopPage} />
            <Route path="/cart" Component={CartPage} />
            <Route path="/todo" Component={TodoPage} />
            <Route path="*" Component={PageNotFound} />
        </Routes>
    </BrowserRouter>
}

export default Router
