import React from 'react'
import CircleServices from './container/CircleServices'
import Footer from './container/Footer'
import GetServices from './container/GetServices'
import Installatioin from './container/Installatioin'
import MainServices from './container/MainServices'
import Renewable from './container/Renewable'

const Services = () => {
  return (
    <div>
    <MainServices />
    <Renewable />
    <CircleServices />
    <Installatioin />
    <GetServices />
    <Footer />
    </div>
  )
}

export default Services
