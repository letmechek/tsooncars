import sendRequest from './send-request';

const BASE_URL = '/api/orders';

export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

export function addItemToCart(vehicleId) {
  return sendRequest(`${BASE_URL}/cart/vehicles/${vehicleId}`, 'POST');
}

export function setItemQtyInCart(vehicleId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { vehicleId, newQty });
}

export function checkout(orderId) {
  return sendRequest(`${BASE_URL}/create-checkout-session/${orderId}`, 'POST');
}