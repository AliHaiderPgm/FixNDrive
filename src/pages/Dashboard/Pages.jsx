import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Orders from './Orders'
import Home from './Home'
import Analytics from './Analytics'
import SellerProfiles from './SellerProfiles'
import UserProfiles from './UserProfiles'
import Services from './Services'
import Banners from './Banners'
import Settings from './Settings'
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
                <Route path='banners' element={<Banners />} />
                <Route path='settings' element={<Settings />} />
            </Routes>
        </>
    )
}

export default Pages
