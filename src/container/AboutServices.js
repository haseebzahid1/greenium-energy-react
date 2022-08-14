import React from 'react'
import '../components/sass/aboutServices.scss'
import { aboutServices } from './Portfolio'

const AboutServices = () => {
  return (
    <section class="aboutServices">
  <div class="aboutServices__aboutServices-container">
    <div class="container-fluid">
      <div class="aboutServices__aboutServices-row">

       {aboutServices.aboutServicesCard.map((e)=>{
        return  <div class="aboutServices__aboutServices-col">
        <div class="aboutServices__aboutServices-card">
          <div class="aboutServices__card-header">
            <div class="aboutServices__card-icon">
              <i class={e.icon}></i>
            </div>
          </div>

          <div class="aboutServices__card-body">
            <div class="aboutServices__card-content">
              <h4>{e.title}</h4>
              <p>{e.desc}</p>
              <a href={e.link} class="filled-button">{e.btn}</a>
            </div>
          </div>
        </div>
      </div>
       })}

        

      </div>
    </div>
  </div>
</section>
  )
}

export default AboutServices
