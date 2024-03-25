import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi'
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding-final' id='contact'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <FaPhone className='app__footer-links_sideicons'/>
        <p className='p__opensansLc'>+40 722 522 712</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.logo} style={{width: '90%'}}/>
        <p className='p__cormorant'>Creating Musical Perfection</p>
        <img src={images.waves} alt='waves' className='wave__img' style={{marginTop: 15}}/>
        <div className='app__footer-links_icons'>
          <a href='https://www.facebook.com/TorionRecordingStudio'><FiFacebook /></a>
          <a href='https://www.instagram.com/torionrecordingstudio/'><FiInstagram /></a>
          <a href='https://www.youtube.com/@greatrecords2886'><FiYoutube /></a>
        </div>
      </div>
      <div className='app__footer-links_work'>
        <IoIosMail className='app__footer-links_sideicons' />
        <p className='p__opensansLc'>openskyprod@yahoo.com</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2024 Torion Recording Studios. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
