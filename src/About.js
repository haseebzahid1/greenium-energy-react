import React from 'react'
import AboutServices from './container/AboutServices'
import AboutTeam from './container/AboutTeam'
import Contact from './container/Contact'
import Footer from './container/Footer'
import OurAbout from './container/OurAbout'


const about = () => {
  return (
    <>
     <Contact />
    <OurAbout />
    <AboutTeam />
    <AboutServices />
    <Footer />
    </>
  )
}

export default about
