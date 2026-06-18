import CounterBtn from '../counter-btn/CounterBtn';
import cn from './ProductDetails.module.css';
const ProductDetails = () => {
  return (
    <section className={cn['product-details']}>
      <div className="container">
        <div className={cn.row}>
          <img src={`${import.meta.env.BASE_URL}product-details/Image.png`} alt="" className={cn.left} />
          <div className={cn.right}>
            <p className={cn.top}>The Dandy Chair</p>
            <p className={cn.price}>£250</p>
            <div className={cn.description}>
              <p className={cn.descriptionTop}>Description</p>
              <p className={cn.descriptionText}>A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
              <ul className={cn.descriptionList}>
                <li className={cn.listItem}>Premium material</li>
                <li className={cn.listItem}>Handmade upholstery</li>
                <li className={cn.listItem}>Quality timeless classic</li>
              </ul>
            </div> 
            <div className={cn.dimensions}>
              <p className={cn.dimensionsTop}>Dimensions</p>
              <div className={cn.metrics}>
                <div className={cn.height}>
                  <p className={cn.heightTop}>Height</p>
                  <p className={cn.heightValue}>110cm</p>
                </div>
                <div className={cn.width}>
                  <p className={cn.widthTop}>Width</p>
                  <p className={cn.widthValue}>75cm</p>
                </div>
                <div className={cn.depth}>
                  <p className={cn.depthTop}>Depth</p>
                  <p className={cn.depthValue}>50cm</p>
                </div>
              </div>
              
              <div className={cn.amount}>
                <div className={cn.counter}>
                  <div className={cn.counterInput}>
                    <p className={cn.amountTop}>Amount:</p>
                    <CounterBtn />
                  </div>
                </div>
                
                <button className={cn.button}>Add to cart</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
