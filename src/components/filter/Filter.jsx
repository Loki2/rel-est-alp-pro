import React from 'react';
import "./filter.scss";
import { BsSearch } from 'react-icons/bs';

const Filter = () => {
  return (
    <div className="filter__container">
      <h1>Search Result For <b>London</b></h1>
      <div className="top__filter__content">
        <div className="filter__item">
          <label htmlFor="city">Location</label>
          <input type="text" id='city' name='city' placeholder='City Location' />
        </div>
      </div>

      <div className="bottom__filter__content">
        <div className="filter__item">
          <label htmlFor="type">Types</label>
          <select name="type" id="type">
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="filter__item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="Condo">Condo</option>
            <option value="house">House</option>
            <option value="land">Land</option>
            <option value="mansion">Mansion</option>
            <option value="restaurant">Restaurant</option>
            <option value="studio">Studio</option>
            <option value="shop">Shop</option>
          </select>
        </div>
        <div className="filter__item">
          <label htmlFor="minPrice">Min | Price</label>
          <input type="number" id='minPrice' name='minPrice' placeholder='any' />
        </div>
        <div className="filter__item">
          <label htmlFor="maxPrice">Max | Price</label>
          <input type="number" id='maxPrice' name='maxPrice' placeholder='any' />
        </div>
        <div className="filter__item">
          <label htmlFor="bedRooms">Bed Rooms</label>
          <input type="number" id='bedRooms' name='bedRooms' placeholder='any' />
        </div>

        <button>
          <BsSearch className='btn__filter__icon' />
        </button>
      </div>
    </div>
  )
}

export default Filter;