import sendRequest from './send-request';

const BASE_URL = '/api/orders';

export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

export function addItemToCart(productId) {
  return sendRequest(`${BASE_URL}/cart/products/${productId}`, 'POST');
}

export function setItemQtyInCart(productId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { productId, newQty });
}

export function checkout() {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}