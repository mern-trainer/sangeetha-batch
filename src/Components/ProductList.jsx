import { Col, Image } from "react-bootstrap"
import { FaStar } from "react-icons/fa"

let element;

const ProductList = ({ product, addToCart, cart }) => {

    const discountPrice = product.price - (product.price * product.discountPercentage / 100)

    if (cart) {
        element = <button className="bg-danger text-light p-1 w-100 mt-2 border-0 rounded-2">Remove From Cart</button>
    } else {
        element = <button onClick={() => addToCart(product)} className="bg-success text-light p-1 w-100 mt-2 border-0 rounded-2">Add To Cart</button>
    }

    return <Col xs={12} sm={6} md={4} lg={3} xxl={2}>
        <div>
            <Image fluid src={product.images[0]} alt="" />
        </div>
        <div>
            <h5>{product.title}</h5>
            <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center gap-1"><FaStar /> {product.rating}</div>
                <div className="fw-bold"><s className="text-secondary">${product.price}</s> ${discountPrice.toFixed(2)}</div>
            </div>
            {element}
        </div>
    </Col>
}

export default ProductList