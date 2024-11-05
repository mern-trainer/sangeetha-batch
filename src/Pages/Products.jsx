import { Fragment } from "react"
import Header from "../Components/Header"
import { products } from "../Constants/products"
import { Container, Row } from "react-bootstrap"
import { useCart } from "../Providers/CartProvider"
import ProductList from "../Components/ProductList"

const ProductsPage = () => {

    const { cartList, setCartList } = useCart()

    const addToCart = (product) => {
        const index = cartList.findIndex(item => item.id === product.id)
        if (index > -1) {
            return alert("Product Already exist")
        }
        setCartList([product, ...cartList])
    }

    return <Fragment>
        <Header />
        <Container fluid>
            <Row>
                {
                    products.map((product) => {
                        return <ProductList key={product.id} product={product} addToCart={addToCart}/>
                    })
                }
            </Row>
        </Container>
        <h3 className="my-5">Cart List</h3>
        <Container fluid>
            <Row>
                {
                    cartList.map((product) => {
                        return <ProductList key={product.id} product={product} addToCart={addToCart} cart={true} />
                    })
                }
            </Row>
        </Container>
    </Fragment>
}

export default ProductsPage