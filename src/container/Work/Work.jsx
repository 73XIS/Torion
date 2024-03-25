import React from 'react';
import { SubHeading, GearItem } from '../../components';
import { images, data } from '../../constants'
import './Work.css';

const Work = () => (
  <div className='app__work flex__center  section__padding' id='gear'>
    <div className='app__work-title'>
      <SubHeading title='Create Musical Perfection'/>
      <h1 className='headtext__cormorant'>Our Gear</h1>
    </div>
    <div className='app__work-list'>
      <div className='app__work-list_offers'>
        <p className='app__work-list_heading'></p>
        <div className='app__work-list_items'></div>
          {data.work.map((work, index) => (
            <GearItem key={work.title + index} title={work.title} gear={work.gear} />
          ))}
      </div>
    </div>
  </div>
);

export default Work;
