import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const galleryImages = [images.gallery02, images.gallery03, images.gallery04, images.gallery05, images.gallery06, images.gallery07, images.gallery08];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if(direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className='app__gallery app__bg flex__center' id='gallery'>
      <div className='app__gallery-content'>
        <SubHeading title='Creating Musical Perfection'/>
        <h1 className='headtext__cormorant'>Gallery</h1>
        <p className='p__opensans' style={{color: '#AAA', marginTop: '2rem'}}></p>
        <a href='https://www.instagram.com/torionrecordingstudio/'><button type='button' className='custom__button'>View More</button></a>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
              <img src={image} alt='galleryimage'/>
              <a href='https://www.instagram.com/torionrecordingstudio/' className='gallery__image-icon'><BsInstagram /></a>
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
