import './Numbers.scss';
import '../services/Services.scss';
import mockup from '../../../images/team-mockup.png'
function Numbers() {
  return (
    <div>
      <section className="services numbers">
        <h1 className="numbers-title">We lead from front</h1>
        <p className="numbers-p">
          Since we last traded, 
          our lines have changed beyond recognition.
          While they reflect current European taste,
          some of our designs are specifically 
          targeted at the Middle Eastern market.
          It has highly interactive and customizable features such as magnification,
          virtual scrolling, page navigation, text selection, text search, 
          document link navigation, and bookmark navigation
        </p>
        <div className="container">
          <div className="grid-wrapper">
            <div className="gird-box hpyclinets number-box">
              <h1 className="numbers-h1">2500+</h1>
              <h2>Happy Clients</h2>
            </div>
            <div className="gird-box prjcompleted number-box">
              <h1 className="numbers-h1">750+</h1>
              <h2>Projects Completed</h2>
            </div>
            <div className="gird-box runninggprj number-box">
              <h1 className="numbers-h1">500+</h1>
              <h2>Running Projects</h2>
            </div>
            <div className="gird-box designs number-box">
              <h1 className="numbers-h1">700+</h1>
              <h2>Awesome Designs</h2>
            </div>
          </div>
          <div className="mockup-img">
            <img src={mockup} alt=""/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Numbers;