import logo from "../../images/logo.png";
import headerImage from "../../images/header-bg.png";
import heroImage from "../../images/hero-img.svg";
import "./Home.scss";
import Services from "./services/Services";
import Numbers from "./numbers/Numbers";
function Home() {
  return (
    <div className="home-view">
      <header
        className="header"
        style={{
          backgroundImage: `url(${headerImage})`,
        }}
      >
        <nav className="navbar">
          <img className="logo" src={logo} alt="logo" />
          <ul className="nav-list">
            <li>
              <a href="fdfsd">Home</a>
            </li>
            <li>
              <a href="fdfsd">About</a>
            </li>
            <li>
              <a href="fdfsd">Services</a>
            </li>
            <li>
              <a href="fdfsd">Portfolio</a>
            </li>
            <li>
              <a href="fdfsd">Blog</a>
            </li>
            <li>
              <a href="fdfsd" className="ctn">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="row">
          <div className="header-content">
            <h1 className="header-title">We are startup createive agency</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,ut
              debitis soluta cum nisi eos alias minus ipsam quos mollita
              doloribus, amet, unde harum beatae qui landantium vitae iure?
              Itaque.
            </p>
            <a href="learn-more" className="learn-more">
              Learn More
            </a>
            <a href="contact us" className="ctn">
              Contact Us
            </a>
          </div>
          <div className="hero-img">
            <img src={heroImage} alt=""/>
          </div>
        </div>
      </header>
      {/* 服务部分 */}
      <Services />
      <Numbers />
    </div>
  );
}

export default Home;
