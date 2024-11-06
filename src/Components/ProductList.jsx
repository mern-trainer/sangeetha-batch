import { Fragment } from "react";
import { Col, Image } from "react-bootstrap"
import { FaStar } from "react-icons/fa"
import { useCart } from "../Providers/CartProvider";

let element;

const ProductList = ({ product, addToCart, cart }) => {

    const { cartList, setCartList } = useCart()
    
    const removeFromCart = () => {
        const res = cartList.filter(item => item.id !== product.id)
        setCartList(res)
    }

    const handleQuantity = (operator) => {
        if (operator === "-" && product.quantity === 1) {
            return removeFromCart()
        }
        const res = cartList.map(item => {
            if (item.id === product.id) {
                return {
                    ...item,
                    quantity: operator === "+" ? item.quantity + 1 : item.quantity - 1
                }
            }
            return item
        })
        setCartList(res)
    }

    const discountPrice = product.price - (product.price * product.discountPercentage / 100)

    return <Col xs={12} sm={6} md={4} lg={3} xxl={2}>
        <div>
            <Image fluid src={product.images[0]} alt="" style={{aspectRatio: 1/1, objectFit: "contain"}}/>
        </div>
        <div>
            <h5>{product.title}</h5>
            <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center gap-1"><FaStar /> {product.rating}</div>
                <div className="fw-bold"><s className="text-secondary">${(product.price * (product.quantity||1)).toFixed(2)}</s> ${(discountPrice * (product.quantity||1)).toFixed(2)}</div>
            </div>
            {cart ? <Fragment>
                <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-success w-100" onClick={() => handleQuantity("-")}> - </button>
                    <div className="w-100 text-center">{product.quantity}</div>
                    <button className="btn btn-success w-100" onClick={() => handleQuantity("+")}> + </button>
                </div>
                <button className="bg-danger text-light p-1 w-100 mt-2 border-0 rounded-2" onClick={removeFromCart}>Remove From Cart</button>
            </Fragment> : <button onClick={() => addToCart(product)} className="bg-success text-light p-1 w-100 mt-2 border-0 rounded-2">Add To Cart</button>
            }
        </div>
    </Col>
}

export default ProductList