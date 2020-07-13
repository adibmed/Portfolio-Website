import BNavbar from "../components/nav";
import React from "react";
import Hero from "../components/background.js";

const Header = () => (
  <div id="header">
    <BNavbar />
    <div className="center">
      <h1 className="m-0 white">Adibe Mohamed</h1>
      <h2 className="m-0 pt-2 pb-4 white">
        Hi,I'am Adibe Mohamed & Welcome to my home{" "}
        <i aria-hidden="true" className="heart icon red"></i>
      </h2>

      <div role="list" className="sm ui mini  horizontal list w-100">
        <div role="listitem" className="item">
          <a href="https://web.facebook.com/adibe.official" target="_blank">
            <img src="../icons/facebook.png" className="ui small image" />
          </a>
        </div>
        <div role="listitem" className="item">
          <a href="https://www.instagram.com/adibe_mohamed" target="_blank">
            <img src="../icons/instagram.png" className="ui small image" />
          </a>
        </div>
        <div role="listitem" className="item">
          <a href="https://twitter.com/adibe_official" target="_blank">
            <img src="../icons/twitter.png" className="ui small image" />
          </a>
        </div>
        <div role="listitem" className="item">
          <a href="https://www.linkedin.com/in/adibe-mohamed" target="_blank">
            <img src="../icons/linkedin.png" className="ui small image" />
          </a>
        </div>
        <div role="listitem" className="item">
          <a href="https://github.com/adibemohamed" target="_blank">
            <img src="../icons/github.png" className="ui small image" />
          </a>
        </div>
        <div role="listitem" className="item">
          <a href="https://youtube.com/" target="_blank">
            <img src="../icons/youtube.png" className="ui small image" />
          </a>
        </div>
      </div>
    </div>
    <Hero />
  </div>
);
export default Header;
