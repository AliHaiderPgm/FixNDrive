import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Orders from './Orders/Orders'
import Home from './Home'
import Analytics from './Analytics'
import SellerProfiles from './SellerProfiles'
import UserProfiles from './UserProfiles'
import Services from './Services'
const Pages = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} index />
                <Route path='analytics' element={<Analytics />} />
                <Route path='seller' element={<SellerProfiles />} />
                <Route path='user' element={<UserProfiles />} />
                <Route path='services' element={<Services />} />
                <Route path='orders' element={<Orders />} />
            </Routes>
        </>
    )
}

export default Pages
