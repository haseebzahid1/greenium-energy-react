import React from 'react'
import '../components/sass/installation.scss'
import { installation, installation1, installation2, installation3 } from './Portfolio'

const Installation = () => {
  return (
    <div>
    <section class="installation installation-1">
    <div class="container-fluid">
      <div class="installation__installation-row">
        <div class="installation__installation-col">
         <div class="installation__installation-content">
          <h1 class="installation__installation-h1">
            {installation.title}
          </h1>
          <p class="installation__installation-p">
            {installation.desc}
          </p>
          <a href="#." class="installation__installation-a">{installation.btn}</a>
         </div>
        </div>
        <div class="installation__installation-col">
          <div class="installation__installation-img">
            <img src={installation.img} alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section class="installation installation-bg-color installation-2">
    <div class="container-fluid">
      <div class="installation__installation-row">
        <div class="installation__installation-col">
          <div class="installation__installation-img installation__installation-img-2">
            <img src={installation1.img} alt="" />
          </div>
        </div>
        <div class="installation__installation-col">
         <div class="installation__installation-content installation__installation-content-2">
          <h1 class="installation__installation-h1 installation__installation-h1-2">
            {installation1.title}
          </h1>
          <p class="installation__installation-p">
            {installation1.desc}
          </p>
          <a href="#." class="installation__installation-a">{installation1.btn}</a>
         </div>
        </div>
       
      </div>
    </div>
  </section>
  
  
  <section class="installation installation-3">
    <div class="container-fluid">
      <div class="installation__installation-row">
        <div class="installation__installation-col">
         <div class="installation__installation-content">
          <h1 class="installation__installation-h1">
            {installation2.title}
          </h1>
          <p class="installation__installation-p">
            {installation2.desc}
          </p>
          <a href="#." class="installation__installation-a">{installation2.btn}</a>
         </div>
        </div>
        <div class="installation__installation-col">
          <div class="installation__installation-img">
            <img src={installation2.img} alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
  <section class="installation installation-bg-color installation-4">
    <div class="container-fluid">
      <div class="installation__installation-row">
        <div class="installation__installation-col">
          <div class="installation__installation-img installation__installation-img-2">
            <img src={installation3.img} alt="" />
          </div>
        </div>
        <div class="installation__installation-col">
         <div class="installation__installation-content installation__installation-content-2">
          <h1 class="installation__installation-h1 installation__installation-h1-2">
            {installation.title}
          </h1>
          <p class="installation__installation-p">
            {installation3.desc}
          </p>
          <a href="#." class="installation__installation-a">{installation3.btn}</a>
         </div>
        </div>
       
      </div>
    </div>
  </section>
    </div>
  )
}

export default Installation
