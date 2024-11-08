import React from 'react';
import './ShoppingCart.css';

const ShoppingCart = ({ cart, handleQuantityChange, handleRemoveFromCart }) => {
  // Calcular el precio total del carrito
  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className="cart">
      <h2>Resumen del Carrito</h2>
      {cart.length === 0 ? (
        <p>No has seleccionado productos aún.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id} className="cart-item">
              <img src={product.image} alt={product.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{product.name}</h3>
                <p>Precio: $ {product.price}</p>
                <p>Cantidad: {product.quantity}</p>
                {/* Control de cantidad para cada producto en el carrito */}
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(product.id, 'decrease')}>-</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => handleQuantityChange(product.id, 'increase')}>+</button>
                </div>
                <button onClick={() => handleRemoveFromCart(product.id)} className="remove-from-cart">
                  Quitar del carrito
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default ShoppingCart;
  