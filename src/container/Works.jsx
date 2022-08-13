import React from 'react'
import '../components/sass/how-it-works.scss'
import { work } from './Portfolio'

const Works = () => {
  return (
   
    <section class="works ">
    <div class="works__works-container container-fluid">
      <div class="works__works-row">
        <div class="works__works-main-left">
          <div class="works__left-container">
            <h1 class="works__works-h1">{work.workMainTitle}</h1>
            <p class="works__works-p">{work.workText}</p>

            <div class="works__works-left-row">

            {work.workSite.map((workCode)=>{
              return   <div class="works__works-left-col">
              <div class="works__works-img">
                <img src={workCode.img} alt="" />
              </div>
              <div class="works__works-content">
                <h2 class="works__works-h2">{workCode.workSubTitle}</h2>
                <p class="works__works-p2">
                 {workCode.subText}
                </p>
              </div>
            </div>
            })}

            </div>


            <div class="work">
             <a href="#." class="works__works-btn">{work.btn1}</a>
           </div>
          </div>
        </div>
        <div class="works__works-main-right">
          <div class="works__works-right-container">
            <h1 class="works__works-h1 works__works-pl">{work.getMainTitle}</h1>
            <ul class="works__works-right-list">
            {work.get.map((span)=>{
              return <span>{span.getSpan}</span>
              
            })}
                
                
            </ul>
            <div class="works__works-house-bg">
              <img src="assets/img/green-energy-24.png" alt="" />
            </div>
          </div>
        </div>
      </div>
     
    </div>
</section>  
 
  )
}

export default Works
