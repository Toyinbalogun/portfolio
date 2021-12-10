import "./about.css";
import Img2 from "../../img/img5.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Img2} alt="second-page-img" className="a-img" />
        </div>
      </div>
      <div className="a-right">
      <h1 className="a-title">About Me...</h1>
        <p className="a-sub">
          Carleton University: Bachelors of Computer Science Honours (Expected graduation Dec 2022).
        </p>
        <p className="a-desc">
        I design and develop solutions using programming languages and
            frameworks like Java, Python, C++, React, etc. to solve problems and
            make services easier. When I am not programming or problem-solving,
            I spend my time playing video games and discovering new science
            fiction books/movies, camping and enjoying food. Welcome to my
            porfolio and have fun browsing through 😊!
        </p>
      </div>
    </div>
  );
};

export default About;
