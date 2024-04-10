
import React from 'react';
import "./products.scss";
import { products } from '../../libs/dummy';
import Filter from '../../components/filter/Filter';
import ItemCard from '../../components/card/Card';
import Map from '../../components/map/Map';

const Products = () => {

  const data = products;

  console.log("products from dummy", data);
  return (
    <div className='products__main__page'>
      <div className="list__product__container">
        <div className="list__container__wrapper">
          <Filter />

          {
            data.map(item => (
              <ItemCard item={item} key={item.id} />
            ))
          }
        </div>
      </div>
      <div className="map__products__container">
        <Map items={data} />
      </div>
    </div>
  )
}

export default Products;