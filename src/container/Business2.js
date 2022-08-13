import React from 'react'
import '../components/sass/business.scss'
import { solorSolution2 } from './Portfolio'

const Business2 = () => {
  return (
  
    <section class="business">
    <div class="  business__solor-container">
      <div class="container-fluid business__container-position">
        <div class=" business__solor-content">
          <h1 class=" business__solor-h1">{solorSolution2.title}<br />{solorSolution2.title2}</h1>
          <p class=" business__solor-p">
          {solorSolution2.desc}
          </p>
          <div class=" business__solor-btn">
            <a href="#.">{solorSolution2.btn}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
 
  )
}

export default Business2
