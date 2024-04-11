import React from 'react';
import "./product.scss";
import Slider from '../../components/slider/Slider';
import { productData, userData } from '../../libs/dummy';
import { CiBookmarkPlus, CiLocationOn } from 'react-icons/ci';
import Map from '../../components/map/Map';
import { IoBedOutline, IoChatboxOutline, IoSchoolOutline } from 'react-icons/io5';
import { BsActivity, BsCurrencyDollar } from 'react-icons/bs';
import { MdOutlinePets } from 'react-icons/md';
import { SlSizeFullscreen } from 'react-icons/sl';
import { TbBath, TbBusStop } from 'react-icons/tb';
import { RiRestaurant2Line } from 'react-icons/ri';


const Product = () => {


  return (
    <div className='product__view__page'>
      <div className="product__detail">
        <div className="product__detail__wrapper">
          <Slider images={productData.img_urls} />

          <div className="product__information">
            <div className="product__info__top">
              <div className="product__top__post">
                <h1>{productData.title}</h1>
                <p className="product__address">
                  <CiLocationOn />
                  <span>{productData.address}</span>
                </p>

                <p className="product__price">$ {productData.price}</p>
              </div>

              <div className="product__post__user">
                <img src={userData.profile_url} alt="User" />
                <p>{userData.username}</p>
              </div>
            </div>

            <div className="product__info__bottom">
              <p className="product__description">{productData.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="product__features">
        <div className="product__features__wrapper">
          <p className='feature__title'>General</p>

          <div className="list__vertical">
            <div className="list__feature">
              <BsActivity className='list__feature__icon' />
              <div className="list__feature__text">
                <span>Utility</span>
                <p>Render is responsible</p>
              </div>
            </div>

            <div className="list__feature">
              <MdOutlinePets className='list__feature__icon' />
              <div className="list__feature__text">
                <span>Pet Policy</span>
                <p>Pet Allowed</p>
              </div>
            </div>

            <div className="list__feature">
              <BsCurrencyDollar className='list__feature__icon' />
              <div className="list__feature__text">
                <span>Property Fees</span>
                <p>Must have to 3x rent in total household income</p>
              </div>
            </div>
          </div>

          <p className='feature__title'>Sizes</p>
          <div className="list__horizontal">
            <div className="list__feature">
              <SlSizeFullscreen className='list__feature__icon' />
              <div className="list__feature__text">
                <span>80sqm</span>
                <p>801sqft</p>
              </div>
            </div>

            <div className="list__feature">
              <IoBedOutline className='list__feature__icon' />
              <div className="list__feature__text">
                <span>2p</span>
                <p>Bed Room (s)</p>
              </div>
            </div>

            <div className="list__feature">
              <TbBath className='list__feature__icon' />
              <div className="list__feature__text">
                <span>1</span>
                <p>Bath Room (s)</p>
              </div>
            </div>

          </div>

          <p className='feature__title'>Nearby Places</p>
          <div className="list__horizontal">
            <div className="list__feature">
              <IoSchoolOutline className='list__feature__icon' />
              <div className="list__feature__text">
                <span>School</span>
                <p>200m away</p>
              </div>
            </div>

            <div className="list__feature">
              <TbBusStop className='list__feature__icon' />
              <div className="list__feature__text">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>

            <div className="list__feature">
              <RiRestaurant2Line className='list__feature__icon' />
              <div className="list__feature__text">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>

          </div>
          <p className='feature__title'>Location</p>
          <div className="map__container">
            <Map items={[productData]} />
          </div>

          <div className="actions">
            <button>
              <IoChatboxOutline className='action__icon' />
              Send the Message
            </button>

            <button>
              <CiBookmarkPlus className='action__icon' />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;