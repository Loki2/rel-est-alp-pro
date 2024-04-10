import React from 'react';
import { Link } from 'react-router-dom';
import "./card.scss";
import { CiBookmarkPlus, CiLocationOn } from 'react-icons/ci';
import { IoBedOutline, IoChatboxOutline } from 'react-icons/io5';
import { MdOutlineBathroom } from 'react-icons/md';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

const ItemCard = ({ item }) => {
  return (
    <div className="product__card">

      <Link to={`/${item.id}`} className="images__container">
        <img src={item.img_urls} alt="product" />
      </Link>

      <div className="text__container">
        <h1 className="product__title">
          <Link to={`/${item.id}`}>
            {item.title}
          </Link>
        </h1>

        <p className="address">
          <CiLocationOn />
          <span>{item.address}</span>
        </p>

        <p className="price">$ {item.price} </p>

        <div className="rate__types">
          <div className="rate__content">
            <BsStarFill className='rate__content__icon' />
            <BsStarFill className='rate__content__icon' />
            <BsStarFill className='rate__content__icon' />
            <BsStarHalf className='rate__content__icon' />
            <BsStar />
          </div>

          <div className="type__content">
            <h2 className="type__title">{item.type}</h2>
          </div>
        </div>

        <div className="text__content__bottom">
          <div className="bottom__feature">
            <div className="feature__item">
              <IoBedOutline className='feature__item__icon' />
              <span>{item.bed_rooms} rooms</span>
            </div>

            <div className="feature__item">
              <MdOutlineBathroom className='feature__item__icon' />
              <span>{item.bath_rooms} rooms</span>
            </div>
          </div>

          <div className="bottom__option">
            <div className="btn__option">
              <CiBookmarkPlus className='btn__option__icon' />
            </div>
            <div className="btn__option">
              <IoChatboxOutline className='btn__option__icon' />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ItemCard;