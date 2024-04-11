import React from 'react';
import "./product.scss";
import Slider from '../../components/slider/Slider';
import { productData, userData } from '../../libs/dummy';
import { CiLocationOn } from 'react-icons/ci';

const Product = () => {



  return (
    <div className='product__view__page'>
      <div className="product__detail">
        <div className="product__detail__wrapper">
          <Slider images={productData.images_urls} />

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
          <h1>Product feature</h1>
        </div>
      </div>
    </div>
  )
}

export default Product;