import React from 'react'
import '../components/sass/counter.scss'

const Counter = () => {
  return (
    <div>
    <section class="counter">
    <div class="counter__counter-container">
      <div class="container-fluid ">
        <div class="counter__counter-row">
          <div class="counter__counter-col">
            <div class="counter__counter-content">
              <div class="counter__counter-icon">
                <i class="fal fa-lightbulb"></i>
              </div>
              <div>
                <h1 class="counter__counter-h1">
                  <span class="counter-2">100</span>
                  <span class="counter__plus">+</span>
                </h1>
                <span class="counter__couter-plus">NSTALLED CAPACITY</span>
              </div>
             
            </div>
          </div>
          <div class="counter__counter-col">
            <div class="counter__counter-content">
              <div class="counter__counter-icon">
                <i class="an an-home"></i>
              </div>
              <div>
                <h1 class="counter__counter-h1">
                  <span class="counter-2">250</span>
                  <span class="counter__plus">+</span>
                </h1>
                <span class="counter__couter-plus">HOUSEHOLDS</span>
              </div>
             
            </div>
          </div>
          <div class="counter__counter-col">
            <div class="counter__counter-content">
              <div class="counter__counter-icon">
                <i class="an an-hand-holding-seedling"></i>
              </div>
              <div>
                <h1 class="counter__counter-h1">
                  <span class="counter-2">360</span>
                  <span class="counter__plus">+</span>
                </h1>
                <span class="counter__couter-plus">ENERGY SAVED</span>
              </div>
             
            </div>
          </div>
          <div class="counter__counter-col">
            <div class="counter__counter-content">
              <div class="counter__counter-icon">
                <i class="fal fa-radiation"></i>
              </div>
              <div>
                <h1 class="counter__counter-h1">
                  <span class="counter-2">450</span>
                  <span class="counter__plus">+</span>
                </h1>
                <span class="counter__couter-plus">AREA COVERED</span>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> 
    </div>
  )
}

export default Counter
