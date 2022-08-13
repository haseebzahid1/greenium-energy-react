import React from 'react'
import '../components/sass/business.scss'
import { solorSolution } from './Portfolio'

const Business = () => {
  return (
   
    <section class="business">
    <div class="business__business-container">
      <div class="container-fluid business__container-position">
        <div class="business__business-content">
          <h1 class="business__business-h1">{solorSolution.title}<br />{solorSolution.title1}</h1>
          <p class="business__business-p">
            {solorSolution.desc}
          </p>
          <div class="business__business-btn">
            <a href="#.">{solorSolution.btn}</a>
          </div>
        </div>
      </div>
    </div>
  </section> 
    
  )
}

export default Business
