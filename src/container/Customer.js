import React from 'react'
import '../components/sass/customer.scss'
import { price } from './Portfolio'

const Customer = () => {
  return (
    <div>
    <section class="customer">
    <div class="customer__customer-container">
      <div class="container-fluid ">
        <div class="customer__top-content">
        
          <p class="customer__customer-top-p">{price.smallTitle}</p>
          <h1 class="customer__customer-h1">{price.mainTitle}</h1>
          
        </div>
        <div class="customer__customer-row">
        {price.priceCard.map((price)=>{
          return <div class={price.bgCenter}>
          <div class="customer__customer-content">
         <div class={price.contentCenter}>
           <h2 class="customer__customer-h2">{price.title}</h2>
           <p class="customer__customer-p">{price.totalPrice}</p>
           <span class="customer__customer-span">{price.month}</span>
           <div class="customer__customer-pos-img">
             <img src={price.img} alt =""  />
           </div>
         </div>

         <div class="customer__customer-body">
           <div class="customer__customer-list-flex">
             <span class="customer__customer-li">{price.span1}</span>
             <span class={price.class}>
               <i class="an an-check"></i>
             </span>
           </div>
           <div class="customer__customer-list-flex">
             <span class="customer__customer-li">{price.span2}</span>
             <span class="customer__customer-li">
               <i class="an an-check"></i>
             </span>
           </div>
           <div class="customer__customer-list-flex">
             <span class="customer__customer-li">{price.span3}</span>
             <span class={price.class2}>
               <i class="an an-times"></i>
             </span>
           </div>
           <div class="customer__customer-list-flex">
             <span class="customer__customer-li">{price.span4}</span>
             <span class={price.class2}>
               <i class="an an-times"></i>
             </span>
           </div>
           <div class="customer__customer-list-flex">
             <span class="customer__customer-li">{price.span5}</span>
             <span class={price.class2}>
               <i class="an an-times"></i>
             </span>
           </div>
           

          
         </div>
         <a href="#." class="customer__customer-btn">{price.btn}</a>
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

export default Customer
