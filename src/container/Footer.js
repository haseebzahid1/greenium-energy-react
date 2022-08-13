import React from 'react'
import '../components/sass/footer.scss'

const Footer = () => {
  return (
    <div>
    <footer class="footer">
    <div class="footer__footer-container">
      <div class="container-fluid">
        <div class="footer__footer-flex">
          <div class="footer__footer-left">
            <span class="footer__span-left">2021 Sympl | All Rights Reserved</span>
          </div>
          <div class="footer__footer-right">
            <a href="#." class="footer__footer-icon"><i class="fab fa-facebook-f"></i></a>
            <a href="#." class="footer__footer-icon"><i class="fab fa-twitter"></i></a>
            <a href="#." class="footer__footer-icon"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer
