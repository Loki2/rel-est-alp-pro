import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import "./pin.scss";


const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>

        <div className="popup__container">
          <img src={item.img_urls[0]} alt="product" />

          <div className="text__container">
            <Link to={`/${item.id}`}>
              <h1 className="title">{item.title}</h1>
            </Link>
            <span className='bed__rooms'>bed: {item.bed_rooms}</span>
            <p className='price'>$ {item.price}</p>
          </div>
        </div>
      </Popup>
    </Marker>
  )
}

export default Pin;