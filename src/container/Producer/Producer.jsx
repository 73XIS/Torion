import React from 'react';
import { images } from '../../constants'
import { SubHeading } from '../../components';


import './Producer.css';

const Producer = () => (
  <div className='app__bg app__wrapper section__padding' id='founder'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.nimrod} alt='producer' />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Creating Musical Perfection" />
      <h1 className='headtext__cormorant'>Mixing Engineer</h1>

      <div className='app__producer-content'></div>
        <div className='app__producer-content_story'>
          <p className='p__opensans'>Passionate about music since a young age, Nimrod was a pioneer of rock music in Romania. He founded one of the first metal bands in his country, Altar, in 1991. Over the last 30 years, he has performed on stage and mixed live shows countless times. During these years, he developed his mixing and music production skills. in 2014 he designed his own recording studio. Since then he mainly focused on studio work, providing quality musical services.  </p>
        </div>

        <div className='app__producer-sign'>
          <p>Nimrod Szedlacsek</p>
        </div>
    </div>
  </div>
);

export default Producer;
