import React from 'react';
import { IoMdHome } from 'react-icons/io';
import { IoMdMenu } from 'react-icons/io';

import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return(
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='app logo'/>
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#about'>About</a></li>
        <li className='p__opensans'><a href='#services'>Services</a></li>
        <li className='p__opensans'><a href='#founder'>Engineer</a></li>
        <li className='p__opensans'><a href='#gallery'>Gallery</a></li>
        <li className='p__opensans'><a href='#gear'>Gear</a></li>
        <li className='p__opensans'><a href='#contact'>Contact</a></li>
      </ul>
      <div className='app__navbar-smallscreen'>
        <IoMdMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>
        
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <IoMdHome fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}/>
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href='#home' onClick={() => setToggleMenu(false)}>Home</a></li>
              <li className='p__opensans'><a href='#about' onClick={() => setToggleMenu(false)}>About</a></li>
              <li className='p__opensans'><a href='#services' onClick={() => setToggleMenu(false)}>Services</a></li>
              <li className='p__opensans'><a href='#founder' onClick={() => setToggleMenu(false)}>Engineer</a></li>
              <li className='p__opensans'><a href='#gallery' onClick={() => setToggleMenu(false)}>Gallery</a></li>
              <li className='p__opensans'><a href='#gear' onClick={() => setToggleMenu(false)}>Gear</a></li>
              <li className='p__opensans'><a href='#contact' onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul> 
          </div>
        )}
      </div>
    </nav>
  )
};

export default Navbar;
