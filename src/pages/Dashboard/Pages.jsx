import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FirstPage from './Home/FirstPage'
import AddProduct from './AddProduct/AddProduct'
import Orders from './Orders/Orders'
const Pages = () => {
    return (
        <main className='min-h-dvh'>
            <Routes>
                <Route path='/' element={<FirstPage />} />
                <Route path='addProduct' element={<AddProduct />} />
                <Route path='orders' element={<Orders />} />
            </Routes>
        </main>
    )
}

export default Pages
