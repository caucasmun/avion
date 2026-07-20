import { useDispatch, useSelector } from 'react-redux';
import CounterBtn from '../counter-btn/CounterBtn';
import cn from './ShoppingBasket.module.css';
import {
  selectCartItems,
  selectCartSubtotal,
  updateQuantity,
  removeFromCart,
} from '../../store/cartSlice';

const ShoppingBasket = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const subtotal = useSelector(selectCartSubtotal);

  return (
    <div className="container">
      <div className={cn.shoppingBasket}>
        <h1 className={cn.title}>Your shopping cart</h1>

        {cartItems.length === 0 ? (
          <p className={cn.emptyCart}>Your cart is empty</p>
        ) : (
          <div className={cn.basket}>
            <div className={cn.rowTexts}>
              <p className={cn.productTitle}>Product</p>
              <p className={cn.productQuantity}>Quantity</p>
              <p className={cn.productTotal}>Total</p>
            </div>

            <div className={cn.products}>
              {cartItems.map((item) => (
                <div className={cn.product} key={item.id}>
                  <div className={cn.productRow}>
                    <div className={cn.productMain}>
                      <img
                        src={`${import.meta.env.BASE_URL}${item.image}`}
                        alt={item.title}
                        className={cn.productImage}
                      />
                      <div className={cn.productInfo}>
                        <p className={cn.productName}>{item.title}</p>
                        <p className={cn.productDescription}>{item.description}</p>
                        <p className={cn.productPrice}>{item.currency}{item.price}</p>
                        <button
                          type="button"
                          className={cn.removeBtn}
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <CounterBtn
                      value={item.quantity}
                      onIncrease={() =>
                        dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                      }
                      onDecrease={() =>
                        dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                      }
                    />

                    <p className={cn.productTotal}>
                      {item.currency}{item.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className={cn.summaryBlock}>
              <div className={cn.subtotalRow}>
                <span className={cn.subtotalText}>Subtotal</span>
                <span className={cn.subtotalPrice}>£{subtotal}</span>
              </div>
              <p className={cn.taxNotice}>
                Taxes and shipping are calculated at checkout
              </p>
              <button className={cn.checkoutBtn} type="button">
                Go to checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingBasket;
