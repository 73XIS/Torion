import React from 'react';

import './GearItem.css';

const GearItem = ({ title, gear}) => (
  <div className='app__gearitem'>
    <div className='app__gearitem-head'>
      <div className='app__gearitem-name'>
        <p className='p__opensans' align='center' style={{ color: '#FFF'}}>{title}</p>
      </div>

      <div className='app__gearitem-dash' />

      <div className='app__gearitem-gear'>
        <p className='p__opensans' align ='center'>{gear}</p>
      </div>
    </div>
  </div>
);

export default GearItem;
