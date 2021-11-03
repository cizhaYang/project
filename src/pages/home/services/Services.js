import './Services.scss';
import mobileImg from '../../../images/mobileapp.png';
import webdesignImg from '../../../images/webdesign.png';
import marketingImg from '../../../images/marketing.png';
import barandingImg from '../../../images/branding.png';
import circleSvg from '../../../images/circle.svg';
function Services() {
  return (
    <div>
      <section className="services">
        <div className="container">
          <div className="grid-wrapper">
            <div className="gird-box mobileapp">
              <img src={mobileImg} alt="" />
              <h1>Mobile App</h1>
            </div>
            <div className="gird-box webdesign">
              <img src={webdesignImg} alt="" />
              <h1>Web Designs</h1>
            </div>
            <div className="gird-box marketing">
              <img src={marketingImg} alt="" />
              <h1>Marketing</h1>
            </div>
            <div className="gird-box baranding">
              <img src={barandingImg} alt="" />
              <h1>Branding</h1>
            </div>
          </div>
          <div className="services-content">
            <img className="circle-img" src={circleSvg} alt=""/>
            <h1>Our best services</h1>
            <p>
              Since we last traded, our lines have changed beyond recognition.
              While they reflect current European taste, 
              some of our designs are specifically targeted at the Middle Eastern market
            </p>
            <p>
              While they reflect current European taste, 
              some of our designs are specifically targeted at the Middle Eastern market
              Since we last traded, our lines have changed beyond recognition.
            </p>
            <a href="Learn More" className="ctn">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services;