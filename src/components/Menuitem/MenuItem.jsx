import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className='app__serviceitem'>
    <div className='app__serviceitem-head'>
      <div className='app__serviceitem-name'>
        <p className='p__opensans' align='center' style={{ color: '#FFF'}}>{title}</p>
      </div>

      <div className='app__serviceitem-dash' />

      <div className='app__serviceitem-price'>
        <p className='p__opensans' align ='center'>{price}</p>
      </div>
    </div>
    <div className='app__serviceitem-sub'>
      <p className='p__opensans' align='center'>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
