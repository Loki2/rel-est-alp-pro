import React, { useState } from 'react';
import "./slider.scss";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Slider = ({ images }) => {

  const [imageIndex, setImageIndex] = useState(null);

  const changeSlider = (dir) => {
    if (dir === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1)
      } else {
        setImageIndex(imageIndex - 1)
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0)
      } else {
        setImageIndex(imageIndex + 1)
      }
    }
  }

  return (
    <div className='slider__images'>

      {imageIndex !== null && (<div className="full__slider">
        <div className="arrow__left">
          <BsChevronLeft className='arrow__left__icon' onClick={() => changeSlider("left")} />
        </div>
        <div className="image__container">
          <img src={images[imageIndex]} alt="product" />
        </div>
        <div className="arrow__right">
          <BsChevronRight className='arrow__right__icon' onClick={() => changeSlider("right")} />
        </div>
        <div className="close__slider" onClick={() => setImageIndex(null)}>X</div>
      </div>)}


      <div className="big__image">
        <img src={images[0]} alt="product" onClick={() => setImageIndex(0)} />
      </div>

      <div className="small__image">
        {
          images.slice(1).map((image, idx) => (
            <img src={image} key={idx} alt='product' onClick={() => setImageIndex(idx + 1)} />
          ))
        }
      </div>
    </div>
  )
}

export default Slider