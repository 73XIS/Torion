import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';


const FindUs = () => (
  <div className='app__wrapper section__padding' style={{background: '#0C0C0C'}}id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='Find us' />
      <h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>Contact</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Address</p>
        <p className='p__cormorant' style={{margin: '2rem 0'}}>Address</p>
        <p className='p__opensans'>Address</p>
        <p className='p__opensans'>Address</p>
      </div>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt='findus' />
    </div>
  </div>
);

export default FindUs;
