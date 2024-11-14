import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShopPage from '../Pages/ShopPage'
import TodoPage from '../Pages/TodoPage'
import PageNotFound from '../Components/PageNotFound'
import CartPage from '../Pages/CartPage'
import SingleProduct from '../Pages/SingleProduct'
import TopMenu from '../Components/NavBar'
import Formik from '../Pages/Formik'
import Form from '../Pages/Form'

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/shop" Component={ShopPage} />
            <Route path="/" Component={TopMenu} />
            <Route path="/formik" Component={Formik} />
            <Route path="/form" Component={Form} />
            <Route path="/view/:product_id" Component={SingleProduct} />
            <Route path="/cart" Component={CartPage} />
            <Route path="/todo" Component={TodoPage} />
            <Route path="*" Component={PageNotFound} />
        </Routes>
    </BrowserRouter>
}

export default Router
