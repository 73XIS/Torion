import React from 'react';
import { SubHeading } from "../../components"
import { images } from "../../constants"
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Creating musical perfection"/>
      <h1 className="app__header-h1">Torion recording studio</h1>
      <p className="p__opensans" style={{ margin: "4rem 0 4rem 0"}}> Music Production | Recording | Editing | Mixing | Mastering</p>
    </div>
    <div className="app__wrapper_img">
      <img src={images.header_img} alt="header img"/>
    </div>
  </div>
);

export default Header;
