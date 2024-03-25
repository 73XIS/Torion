import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants'


import './Services.css';

const Services = () => (
  <div className='app__services flex__center section__padding' id='services'>
    <div className='app__services-title'>
      <SubHeading title='Creating Musical Perfection' />
      <h1 className='headtext__cormorant'>Studio Services</h1>
    </div>
    <div className='app__services-list'>
      <div className='app__services-list_offers'>
        <p className='app__services-list_heading'></p>
        <div className='app__services-list_items'></div>
          {data.services.map((service, index) => (
            <MenuItem key={service.title + index} title={service.title} price={service.price} tags={service.tags} />
          ))}
      </div>
    </div>
    <div style={{marginTop: '15px'}}>
    </div>
  </div>
);

export default Services;
