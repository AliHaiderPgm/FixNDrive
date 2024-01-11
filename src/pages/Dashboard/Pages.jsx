import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Orders from './Orders/Orders'
import Home from './Home'
import Analytics from './Analytics'
const Pages = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} index />
                <Route path='analytics' element={<Analytics />} />
                <Route path='orders' element={<Orders />} />
            </Routes>
        </>
    )
}

export default Pages
