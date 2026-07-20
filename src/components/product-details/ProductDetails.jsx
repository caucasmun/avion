import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import CounterBtn from '../counter-btn/CounterBtn';
import cn from './ProductDetails.module.css';
import products from '../data/products.json';
import { addToCart } from '../../store/cartSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = products.find((item) => item.id === id);

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (!product) {
    return (
      <section className={cn['product-details']}>
        <div className="container">
          <h2>Product not found</h2>
        </div>
      </section>
    );
  }

  return (
    <section className={cn['product-details']}>
      <div className="container">
        <div className={cn.row}>
          <img
            src={`${import.meta.env.BASE_URL}${product.image}`}
            alt={product.title}
            className={cn.left}
          />
          <div className={cn.right}>
            <p className={cn.top}>{product.title}</p>
            <p className={cn.price}>{product.currency}{product.price}</p>

            <div className={cn.description}>
              <p className={cn.descriptionTop}>Description</p>
              <p className={cn.descriptionText}>{product.description}</p>

              <ul className={cn.descriptionList}>
                {product.features.map((feature, index) => (
                  <li key={index} className={cn.listItem}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className={cn.dimensions}>
              <p className={cn.dimensionsTop}>Dimensions</p>
              <div className={cn.metrics}>
                <div className={cn.height}>
                  <p className={cn.heightTop}>Height</p>
                  <p className={cn.heightValue}>{product.dimensions.height}</p>
                </div>
                <div className={cn.width}>
                  <p className={cn.widthTop}>Width</p>
                  <p className={cn.widthValue}>{product.dimensions.width}</p>
                </div>
                <div className={cn.depth}>
                  <p className={cn.depthTop}>Depth</p>
                  <p className={cn.depthValue}>{product.dimensions.depth}</p>
                </div>
              </div>

              <div className={cn.amount}>
                <div className={cn.counter}>
                  <div className={cn.counterInput}>
                    <p className={cn.amountTop}>Amount:</p>
                    <CounterBtn
                      value={quantity}
                      onIncrease={handleIncrease}
                      onDecrease={handleDecrease}
                    />
                  </div>
                </div>

                <button className={cn.button} type="button" onClick={handleAddToCart}>
                  {added ? 'Added to cart!' : 'Add to cart'}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
