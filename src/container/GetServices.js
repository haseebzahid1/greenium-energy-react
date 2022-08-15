import React from 'react'
import '../components/sass/getServices.scss'
import { getServices } from './Portfolio'

const GetServices = () => {
  return (
    <section class="get">
    <div class="get__get-container">
      <div class="container-fluid">
        <div class="get__get-content">
          <h1 class="get__get-h1">{getServices.title}</h1>
          <p class="get__get-p">{getServices.desc}</p>
          <a href={getServices.link} class="get__get-a">{getServices.btn}</a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default GetServices
