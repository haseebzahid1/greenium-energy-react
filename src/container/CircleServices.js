import React from 'react'
import '../components/sass/circleText.scss'
import { circleText } from './Portfolio'

const CircleServices = () => {
  return (
    <section class="circleText">
  <div class="container-fluid">
    <div class="circleText__circleText-content">
      <h2 class="circleText__circleText-h2">
        {circleText.title}
      </h2>
    </div>
  </div>
</section>
  )
}

export default CircleServices
