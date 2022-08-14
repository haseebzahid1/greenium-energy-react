import React from 'react'
import '../components/sass/ourAbout.scss'
import { ourBackground } from './Portfolio'

const OurAbout = () => {
  return (
    <section class="about">
    <div class="about__about-container container-fluid">
        <div class="about__about-top-heading">
            <h2 class="about__about-top-h2">{ourBackground.title}</h2>
            
          </div>
        <div class="about__about-row">
            <div class="about__about-col-1">
                <div class="about__about-left-img">
                    <img src={ourBackground.img} alt="" srcset="" />
                </div>
            </div>
            <div class="about__about-col-2">
                <div class="about__about-content">
                    <div class="about__right-content">
                        <h4 class="about__about-h4">{ourBackground.smallTitle} &amp; {ourBackground.smallTitle2}</h4>
                        <p class="about__about-p">{ourBackground.desc}<br /><br />{ourBackground.desc1}</p>
                        <ul class="about__about-social-icons">
                          {ourBackground.iconCard.map((e)=>{
                            return <li><a href={e.link}><i class={e.icon}></i></a></li>
                          })}
                          
                        </ul>
                </div>
            </div>
        </div>
    </div>
    <div/>
    </div>
</section>
  )
}

export default OurAbout
