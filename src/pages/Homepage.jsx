import React from 'react'
// import Nav from '../components/Nav'
import HomeTab from '../components/HomeTab'
import WebHosting from '../components/WebHosting'
import LemonWares from '../components/LemonWares'
import Lodre from '../components/Lodre'
import TouchWithUs from '../components/TouchWithUs'
import RealCustomers from '../components/RealCustomers'


const Homepage = () => {
    return (
        <div>
            <Lodre />
            <HomeTab/>
            <WebHosting/>
            <LemonWares/>
            <RealCustomers/>
            <TouchWithUs/>
           


        </div>
    )
}

export default Homepage