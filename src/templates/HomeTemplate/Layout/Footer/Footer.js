import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div className="container" style={{background :"#1a191f", borderTop: "1px solid #1a191f"}}>
  <div className="row">
    <div className="col-12">
      <div className="footer__content">
        <a href="index.html" className="footer__logo">
        <svg width="126" height="23" viewBox="0 0 126 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.2441 22H13.7178V12.7568H5.23633V22H0.695312V0.583984H5.23633V8.97754H13.7178V0.583984H18.2441V22ZM43.1025 11.2627C43.1025 14.8076 42.2236 17.5322 40.4658 19.4365C38.708 21.3408 36.1885 22.293 32.9072 22.293C29.626 22.293 27.1064 21.3408 25.3486 19.4365C23.5908 17.5322 22.7119 14.7979 22.7119 11.2334C22.7119 7.66895 23.5908 4.94922 25.3486 3.07422C27.1162 1.18945 29.6455 0.24707 32.9365 0.24707C36.2275 0.24707 38.7422 1.19434 40.4805 3.08887C42.2285 4.9834 43.1025 7.70801 43.1025 11.2627ZM27.4727 11.2627C27.4727 13.6553 27.9268 15.457 28.835 16.668C29.7432 17.8789 31.1006 18.4844 32.9072 18.4844C36.5303 18.4844 38.3418 16.0771 38.3418 11.2627C38.3418 6.43848 36.54 4.02637 32.9365 4.02637C31.1299 4.02637 29.7676 4.63672 28.8496 5.85742C27.9316 7.06836 27.4727 8.87012 27.4727 11.2627ZM55.8027 22H51.2617V4.36328H45.4463V0.583984H61.6182V4.36328H55.8027V22Z" fill="#F9AB00"/>
<path d="M69.3818 22H64.9141V0.583984H77.1895V4.30469H69.3818V9.82715H76.6475V13.5332H69.3818V22ZM81.3789 22V0.583984H85.9199V18.25H94.6064V22H81.3789ZM98.3418 22V0.583984H102.883V22H98.3418ZM125.588 22H120.402L115.422 13.8994L110.441 22H105.578L112.683 10.9551L106.032 0.583984H111.042L115.656 8.28906L120.183 0.583984H125.075L118.352 11.2041L125.588 22Z" fill="white"/>
</svg>

        </a>
        <span className="footer__copyright">© HOTFLIX, 2019—2021 <br /> Create by <a href="https://themeforest.net/user/dmitryvolkov/portfolio" target="_blank">Dmitry Volkov</a></span>
        <nav className="footer__nav">
          <a href="about.html">About Us</a>
          <a href="contacts.html">Contacts</a>
          <a href="privacy.html">Privacy policy</a>
        </nav>
        <button className="footer__back" type="button">
          <i className="icon ion-ios-arrow-round-up" />
        </button>
      </div>
    </div>
  </div>
</div>

    );
};

export default Footer;