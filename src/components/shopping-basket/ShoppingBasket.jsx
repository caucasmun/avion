import { useState } from "react";
import CounterBtn from "../counter-btn/CounterBtn";
import cn from "./ShoppingBasket.module.css";

const ShoppingBasket = () => {
  const imageSrc1 = `${import.meta.env.BASE_URL}shopping/GraystoneVase.png`
  const imageSrc2 = `${import.meta.env.BASE_URL}shopping/WhiteVase.png`
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Graystone vase",
      description: "A timeless ceramic vase with a tri color grey glaze.",
      price: 85,
      quantity: 1,
      image: imageSrc1
    },
    {
      id: 2,
      name: "Basic white vase",
      description: "Beautiful and simple this is one for the classics.",
      price: 125,
      quantity: 1,
      image: imageSrc2
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <div className="container">
      <div className={cn.shoppingBasket}>
        <h1 className={cn.title}>Your shopping cart</h1>
        
        <div className={cn.basket}>
          <div className={cn.rowTexts}>
            <p className={cn.productTitle}>Product</p>
            <p className={cn.productQuantity}>Quantity</p>
            <p className={cn.productTotal}>Total</p>
          </div>

          <div className={cn.products}>
            {cartItems.map(item => (
              <div className={cn.product} key={item.id}>
                <div className={cn.productRow}>
                  <div className={cn.productMain}>
                    <img src={item.image} alt={item.name} className={cn.productImage} />
                    <div className={cn.productInfo}>
                      <p className={cn.productName}>{item.name}</p>
                      <p className={cn.productDescription}>{item.description}</p>
                      <p className={cn.productPrice}>£{item.price}</p>
                    </div> 
                  </div>
                  
                  <CounterBtn 
                    value={item.quantity} 
                    onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                    onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
                  /> 
                  
                  <p className={cn.productTotal}>£{item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={cn.summaryBlock}>
            <div className={cn.subtotalRow}>
              <span className={cn.subtotalText}>Subtotal</span>
              <span className={cn.subtotalPrice}>£{calculateSubtotal()}</span>
            </div>
            <p className={cn.taxNotice}>
              Taxes and shipping are calculated at checkout
            </p>
            <button className={cn.checkoutBtn} type="button">
              Go to checkout
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ShoppingBasket;
