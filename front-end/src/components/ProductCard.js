import React from 'react';
import propTypes from 'prop-types';

export default function ProductCard({ id, name, price, image, add }) {
  const convertedPrice = parseFloat(price).toFixed(2).replace('.', ',');

  return (
    <div className="white">
      <span data-testid={ `customer_products__element-card-price-${id}` }>
        {convertedPrice}
      </span>
      <div>
        <div>
          <img
            data-testid={ `customer_products__img-card-bg-image-${id}` }
            src={ image }
            alt={ name }
            width="200"
            height="200"
          />
        </div>
        <p data-testid={ `customer_products__element-card-title-${id}` }>{name}</p>
      </div>
      <div>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }

        >
          -

        </button>
        <input
          type="text"
          placeholder="0"
          data-testid={ `customer_products__input-card-quantity-${id}` }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ () => add({ id, name, price }) }
        >
          +

        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  add: propTypes.func.isRequired,

};
