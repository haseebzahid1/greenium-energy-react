import React from 'react'
import '../components/sass/aboutServices.scss'

const AboutServices = () => {
  return (
    <section class="aboutServices">
  <div class="aboutServices__aboutServices-container">
    <div class="container-fluid">
      <div class="aboutServices__aboutServices-row">

        <div class="aboutServices__aboutServices-col">
          <div class="aboutServices__aboutServices-card">
            <div class="aboutServices__card-header">
              <div class="aboutServices__card-icon">
                <i class="fas fa-cog"></i>
              </div>
            </div>

            <div class="aboutServices__card-body">
              <div class="aboutServices__card-content">
                <h4>Product Management</h4>
                <p>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
                <a href="#." class="filled-button">Read More</a>
              </div>
            </div>
          </div>
        </div>

        <div class="aboutServices__aboutServices-col">
          <div class="aboutServices__aboutServices-card">
            <div class="aboutServices__card-header">
              <div class="aboutServices__card-icon">
                <i class="fas fa-cog"></i>
              </div>
            </div>

            <div class="aboutServices__card-body">
              <div class="aboutServices__card-content">
                <h4>Customer Relations</h4>
                <p>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
                <a href="#." class="filled-button">Details</a>
              </div>
            </div>
          </div>
        </div>

        <div class="aboutServices__aboutServices-col">
          <div class="aboutServices__aboutServices-card">
            <div class="aboutServices__card-header">
              <div class="aboutServices__card-icon">
                <i class="fas fa-cog"></i>
              </div>
            </div>

            <div class="aboutServices__card-body">
              <div class="aboutServices__card-content">
                <h4>Global Collection</h4>
                <p>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
                <a href="#." class="filled-button">Read More</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
  )
}

export default AboutServices
