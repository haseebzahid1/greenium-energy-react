import React from 'react'
import '../components/sass/counter.scss'
import { counter } from './Portfolio'


const Counter = () => {
  return (
    <div>
    <section class="counter">
    <div class="counter__counter-container">
      <div class="container-fluid ">
        <div class="counter__counter-row">
          {counter.counterCard.map((counter)=>{
            return <div class="counter__counter-col">
            <div class="counter__counter-content">
              <div class="counter__counter-icon">
                <i class={counter.iocn}></i>
              </div>
              <div>
                <h1 class="counter__counter-h1">
                  <span class="counter-2">{counter.totalCount}</span>
                  <span class="counter__plus">+</span>
                </h1>
                <span class="counter__couter-plus">{counter.title}</span>
              </div>
             
            </div>
          </div>
          })}
          
        </div>
      </div>
    </div>
  </section> 
    </div>
  )
}

export default Counter
