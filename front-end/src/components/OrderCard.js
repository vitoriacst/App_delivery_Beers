import React from 'react';
import propTypes from 'prop-types';
import OrderStatus from './OrderStatus';
import { convert, convertDate } from '../utils/convert';

function OrderCard({ order, userType, orderType }) {
  const { id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber } = order;
  const date = convertDate(saleDate);

  return (
    <section>
      <div>
        <p data-testid={ `${userType}_orders__element-order-id-${id}` }>
          Pedido
          <br />
          { id }
        </p>
      </div>
      <OrderStatus
        status={ status }
        id={ id }
        userType={ userType }
        orderType={ orderType }
      />
      <div>
        <p data-testid={ `${userType}_orders__element-order-date-${id}` }>
          { date }
        </p>
        <p
          data-testid={ `${userType}_orders__element-card-price-${id}` }
        >
          {convert(totalPrice)}
        </p>
      </div>
      {
        userType === 'seller'
        && (
          <div>
            <p data-testid={ `seller_orders__element-card-address-${id}` }>
              {`${deliveryAddress}, ${deliveryNumber}`}
            </p>
          </div>
        )
      }
    </section>
  );
}

OrderCard.propTypes = {
  order: propTypes.shape({
    id: propTypes.number,
    status: propTypes.string,
    saleDate: propTypes.string,
    totalPrice: propTypes.string,
    deliveryAddress: propTypes.string,
    deliveryNumber: propTypes.string,
  }).isRequired,
  userType: propTypes.string.isRequired,
  orderType: propTypes.string.isRequired,
};

export default OrderCard;
