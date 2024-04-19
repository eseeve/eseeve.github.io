import React from "react";
import aaltoLogo from "./images/aalto-sci.png";
import wapiceLogo from "./images/Wapice_Logo_White_(No_Slogan).png";
import portrait from "./images/portrait.jpg";
import Navbar from "./Navbar";
import Skills from "./Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center md:space-x-8 items-center m-8">
        <div className="flex flex-col justify-center space-y-4 w-80">
          <img src={portrait} alt="Portrait" width={400} />
          <div className="text-3xl font-semibold text-center">Elias Seeve</div>
          <div className="text-center">
            Full Stack Developer, Climber, Vinyl Collector, Book Lover
          </div>
        </div>
        <div className="flex flex-col justify-center w-80 ">
          <div>
            <a href="https://www.aalto.fi/en/school-of-science">
              <img
                className="mt-4"
                src={aaltoLogo}
                alt="Aalto University Logo"
              />
            </a>
          </div>
          <div>Master of Science - Computer Science, Graduated 2023</div>
          <div>
            <a href="https://www.wapice.com/">
              <img className="mt-4" src={wapiceLogo} alt="Wapice Logo" />
            </a>
          </div>
          <div>Software Developer - Full Stack developer, 2022 - Present</div>
          <Skills />
        </div>
      </div>
    </>
  );
};

export default App;
