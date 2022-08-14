import React from 'react'
import '../components/sass/renewable.scss'
import { renewable } from './Portfolio'

const Renewable = () => {
  return (
    <section class="renewable">
      <div class="renewable__renewable-container">
        <div class="renewable__renewable-bg">
          <div class="container-fluid">
            <div class="renewable__renewable-row">
              <div class="renewable__renewable-col-1">
                <div class="renewable__renewable-img">
                  <img src={renewable.img} alt="" />
                 
                </div>
                
              </div>
              <div class="renewable__renewable-col-2">
                <div class="renewable__renewable-pos-img">
                  <img src={renewable.bgImg} alt="" class="" />
                 </div>
                <div class="renewable__renewable-content">
                  <div class="renewable__renewable-h4">{renewable.smallTitle}</div>
                  <div class="renewable__renewable-h1">{renewable.title}</div>
                  <p class="renewable__renewable-p">
                    {renewable.desc1}<br /><br />{renewable.desc2}
                  </p>
                  <a href="#." class="renewable__renewable-a">{renewable.btn}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
        
      
    </section>
  )
}

export default Renewable
