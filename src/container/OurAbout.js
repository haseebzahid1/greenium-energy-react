import React from 'react'
import '../components/sass/ourAbout.scss'

const OurAbout = () => {
  return (
    <section class="about">
    <div class="about__about-container container-fluid">
        <div class="about__about-top-heading">
            <h2 class="about__about-top-h2">Our Background</h2>
          </div>
        <div class="about__about-row">
            <div class="about__about-col-1">
                <div class="about__about-left-img">
                    <img src="assets/img/about-left-img.jpg" alt="" srcset="" />
                </div>
            </div>
            <div class="about__about-col-2">
                <div class="about__about-content">
                    <div class="about__right-content">
                        <h4 class="about__about-h4">Who we are &amp; What we do?</h4>
                        <p class="about__about-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis.</p>
                        <ul class="about__about-social-icons">
                          <li><a href="#."><i class="anb an-facebook"></i></a></li>
                          <li><a href="#."> <i class="anb an-twitter"></i></a></li>
                          <li><a href="#."><i class="anb an-linkedin"></i></a></li>
                          <li><a href="#."><i class="anb an-whatsapp"></i></a></li>
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
