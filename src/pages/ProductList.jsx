import { useParams } from "react-router-dom"
import ProductDetails from "../components/product-details/ProductDetails"
import Third from "../components/third/Third"
import Second from "../components/second/Second"
import Fifth from "../components/fifth/Fifth"

const ProductList = () => {
    const { id } = useParams() 

    return (
        <>
            {id && <ProductDetails />}
            
            <Third title="You might also like"/>
            <Second />
            <Fifth />
        </>
    )
}

export default ProductList
