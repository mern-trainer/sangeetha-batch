import ProductList from "../Components/ProductList"
import { useCart } from "../Providers/CartProvider"
import { Container, Row } from "react-bootstrap"


const CartPage = () => {
    
    const { cartList, setCartList } = useCart()
 
    return <div>
        <h3 className="my-5">Cart List</h3>
        <Container fluid>
            <Row>
                {
                    cartList.map((product) => {
                        return <ProductList key={product.id} product={product} cart={true} />
                    })
                }
            </Row>
        </Container>
    </div>
}

export default CartPage
