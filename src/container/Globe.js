import React from 'react'
import '../components/sass/globe.scss'

const Globe = () => {
  return (
    <div>
    <section class="globe">
    <div class="globe__globe-container">
      <div class="container-fluid">
        <div class="globe__globe-content">
          <h1 class="globe__globe-h1">A Solar Solution for All<br />Markets Across The Globe</h1>
          <p class="globe__globe-p">
           Solar power has been adopted globally for multiple reasons, including grid independence, adoption of clean energy, net-metering, and lower electricity bills. For countries in the developing world with un-stable grids, such as Pakistan, India, Bangladesh, Nigeria & various countries in Africa, the main purpose of Solar Solutions is to provide continuous electricity amidst frequent power outages. SkyElectric solves the problem of load-shedding along with the benefits of solar solutions that homes and businesses enjoy in the West.
          </p>
          
          <div class="globe__globe-btn">
            <a href="#.">Contact us</a>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Globe
