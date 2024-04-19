import React from "react";
import GitHubLogo from "./images/GitHub-Mark-Light-32px.png";
import lnLogo from "./images/In-White-34.png";

const Navbar = () => {
  return (
    <div className="flex flex-row h-8">
      <a href="https://github.com/eseeve">
        <img className="m-2" src={GitHubLogo} alt="Link to GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/elias-seeve/">
        <img className="m-2" src={lnLogo} alt="Link to GitHub" />
      </a>
    </div>
  );
};

export default Navbar;
