import React from 'react'
import '../components/sass/aboutTeam.scss'
import { team } from './Portfolio'

const AboutTeam = () => {
  return (
    <section class="team">
    <div class="team__team-container container-fluid">
        <div class="team__team-top-heading">
            <h2 class="team__team-top-h2 ">{team.mainTitle}</h2>
        </div>

        <div class="team__team-row">
           {team.teamCard.map((e)=>{
            return  <div class="team__team-col">
            <div class="team__team-member">
                <div class="team__team-thumb-container">
                  <div class="team__team-top-img">
                    <img src={e.img} alt={e.alt} class="" />
                    <div class="team__team-hover-effect">
                    
                      <ul class="team__hover-social-icons">
                        <li><a href={e.href}><i class={e.icon}></i></a></li>
                        <li><a href={e.href1}><i class={e.icon1}></i></a></li>
                        <li><a href={e.href2}><i class={e.icon2}></i></a></li>
                        <li><a href={e.href3}><i class={e.icon3}></i></a></li>
                      </ul>
                    
                  </div>
                  </div>
              
                
                </div>
                <div class="team__team-down-content">
                  <h4 class="team__team-h4">{e.title}</h4>
                  <span class="team__team-span">{e.subTitle}</span>
                  <p class="team__team-p">{e.desc}</p>
                </div>
              </div>
        </div>
           })}
  
        </div>
    </div>
</section>
  )
}

export default AboutTeam

