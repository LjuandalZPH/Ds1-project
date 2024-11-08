import React, { useState } from 'react';
import './ProductList.css';
import ShoppingCart from '../shoppingCart/ShoppingCart';

// Lista de productos de ejemplo
const products = [
  { id: 1, name: 'Computador Asus i5', price: 2000000 , image: 'https://co.store.asus.com/media/catalog/product/a/s/asus_vivobook_16_x1605za-mb639w_01.png?store=es_CO&image-type=image' },
  { id: 2, name: 'Smartphone', price: 499.99, image: 'https://img01.huaweifile.com/sg/ms/co/pms/uomcdn/CO_HW_B2C/pms/202403/gbom/6942103117787/428_428_780D0669C19BF3999DE83DFA11E34563mp.png' },
  { id: 3, name: 'Headphones', price: 199.99, image: 'https://images.philips.com/is/image/philipsconsumer/c7dfa5caf34949b1b6c0b0c0004b1a17?wid=700&hei=700&$pnglarge$' },
  { id: 4, name: 'Smartwatch', price: 149.99, image: 'https://exitocol.vtexassets.com/arquivos/ids/24623227/reloj-inteligente-smartwatch-gt5-nfc-siri-carga-inalambrica.jpg?v=638617513625630000' },
  { id: 5, name: 'Tablet', price: 299.99, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRNeEq0Leqx8qhRmqKRL_XVvJi02wdQzjzeLnzaY1MJlV4lRYUOEf37aAoE-M5jd8dyz76Ty9Nkx_Own30Ih64TzLHSv8as0pBcedJDTPUmltauOgW3XNOQ&usqp=CAE' },
  { id: 6, name: 'Camera', price: 799.99, image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

// Componente de producto individual
const Product = ({ product, handleAddToCart, handleQuantityChange, addedMessage }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <div className="quantity-controls">
        <button onClick={() => handleQuantityChange(product.id, 'decrease')}>-</button>
        <span>{product.quantity}</span>
        <button onClick={() => handleQuantityChange(product.id, 'increase')}>+</button>
      </div>
      <button className="add-to-cart-btn" onClick={() => handleAddToCart(product.id)}>
        Añadir al carrito
      </button>
      {addedMessage && <p className="added-message">¡Añadido al carrito!</p>}
    </div>
  );
};

// Componente de lista de productos
const ProductList = () => {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = 0;
      return acc;
    }, {})
  );
  const [addedMessages, setAddedMessages] = useState({});

  const handleQuantityChange = (productId, action) => {
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      if (action === 'increase') {
        newQuantities[productId] += 1;
      } else if (action === 'decrease' && newQuantities[productId] > 0) {
        newQuantities[productId] -= 1;
      }
      return newQuantities;
    });
  };

  const handleAddToCart = (productId) => {
    if (quantities[productId] > 0) {
      const product = products.find((p) => p.id === productId);

      setCart((prevCart) => {
        const existingProduct = prevCart.find(item => item.id === productId);
        if (existingProduct) {
          return prevCart.map(item =>
            item.id === productId
              ? { ...item, quantity: item.quantity + quantities[productId] }
              : item
          );
        }
        return [...prevCart, { ...product, quantity: quantities[productId] }];
      });

      setAddedMessages((prevMessages) => ({
        ...prevMessages,
        [productId]: true,
      }));

      setTimeout(() => {
        setAddedMessages((prevMessages) => ({
          ...prevMessages,
          [productId]: false,
        }));
      }, 2000);
    }
  };
  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };
  

  return (
    <div className="product-list">
      <div className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            product={{ ...product, quantity: quantities[product.id] }}
            handleAddToCart={handleAddToCart}
            handleQuantityChange={handleQuantityChange}
            addedMessage={addedMessages[product.id]}
          />
        ))}
      </div>

      {/* Renderizar ShoppingCart una sola vez fuera del map */}
      <ShoppingCart
        cart={cart}
        handleQuantityChange={handleQuantityChange}
        handleRemoveFromCart={handleRemoveFromCart}  // Añade esta función si necesitas eliminar del carrito
      />
    </div>
  );
};

export default ProductList;
