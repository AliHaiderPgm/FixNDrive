import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from './AddProduct/AddProduct'
import Orders from './Orders/Orders'
import Home from './Home'
const Pages = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} index />
                <Route path='addProduct' element={<AddProduct />} />
                <Route path='orders' element={<Orders />} />
            </Routes>
        </>
    )
}

export default Pages
