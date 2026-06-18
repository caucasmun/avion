
import ProductDetails from "../components/product-details/ProductDetails"
import Third from "../components/third/Third"
import Second from "../components/second/Second"
import Fifth from "../components/fifth/Fifth"
import Nav from "../components/nav/Nav"

const ProductList = () => {
    return(
        <>
            <ProductDetails />
            <Third title="You might also like"/>
            <Second />
            <Fifth />
        </>
    )
}

export default ProductList