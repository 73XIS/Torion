import React from 'react';
import { images } from '../../constants'

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding'>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant' id='about'>About us</h1>
        <img src={images.waves} alt='about_waves' className='waves__img'/>
        <p className='p__opensans'>Torion Recording Studio is the result of association between two musicians / sound engineers : Nimrod Szedlacsek and Albert András. They are former classmates, bandmates and even more: good friends. Both of them are aiming towards excellence in everything they do. The goal of the two is to bring music production to professional level by deploying know-how, high end gear, acoustically treated studio rooms, seriousness, reliability. Their motto: Creating Musical Perfection encompasses the drive to help every client reach their maximum potential</p>
      </div>
      <div className='app__aboutus-content_divider' />
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.waves} alt='about_waves' className='waves__img'/>
        <p className='p__opensans'>Designed and built by Nimrod, the studio was originally started in 2014 by Nimrod and Jánky Zsolt. During the years, the recording gear was constantly upgraded, including the purchase of an Amek Angela M42 mixing desk. In 2022 Jánky Zsolt took a different road, and Albert András stepped in as co-owner. We were privileged to work with many national and international artists, such as Grimus, Teodora Enache, Funkorporation, Marius Moga, Altar, The Dream Centre (UK), Wirbelsturm (Austria), Detlef Cologne (Germany), Steelover (Belgium). </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
