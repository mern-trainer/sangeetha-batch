import { useEffect, useState } from "react"
import ProductList from "../Components/ProductList"
import { useCart } from "../Providers/CartProvider"
import { Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { FaShoppingBag } from "react-icons/fa"
import TopMenu from "../Components/NavBar"


const ShopPage = () => {
    
    const { cartList, setCartList } = useCart()
    const [products, setProducts] = useState([])

    const handleFetchData = async () => {
        const response = await fetch("https://dummyjson.com/products?limit=10")
        const result = await response.json()
        setProducts(result.products)
    }

    useEffect(() => {
        handleFetchData() // side effect handling
    }, [])

    const addToCart = (product) => {
        const index = cartList.findIndex(item => item.id === product.id)
        if (index === -1) {
            product.quantity = 1
            setCartList([product, ...cartList])
        } else {
            const res = cartList.map(item => {
                if (item.id === product.id) {
                    return {...item, quantity: item.quantity + 1}
                }
                return item
            })
            setCartList(res)
        }
    }

    const navigate = useNavigate()

    const handleNavigation = () => {
        navigate("/cart")
    }

    return <div>
        <TopMenu />
        <FaShoppingBag size={30} cursor={"pointer"} onClick={handleNavigation}/>
        <Container fluid>
            <Row>
                {
                    products.map((product) => {
                        return <ProductList key={product.id} product={product} addToCart={addToCart}/>
                    })
                }
            </Row>
        </Container>
       
    </div>
}

export default ShopPage
