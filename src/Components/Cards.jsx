import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { FaShoppingCart } from "react-icons/fa"

const Cards = () => {

    const array = [
        { id: 1, img: "./xtream.png", label: "Xtream 1", desc: "Xtream sample description 1" },
        { id: 2, img: "./xtream.png", label: "Xtream 2", desc: "Xtream sample description 2" },
        { id: 3, img: "./xtream.png", label: "Xtream 3", desc: "Xtream sample description 3" },
        { id: 4, img: "./xtream.png", label: "Xtream 4", desc: "Xtream sample description 4" },
        { id: 5, img: "./xtream.png", label: "Xtream 5", desc: "Xtream sample description 5" },
        { id: 6, img: "./xtream.png", label: "Xtream 6", desc: "Xtream sample description 6" },
        { id: 7, img: "./xtream.png", label: "Xtream 7", desc: "Xtream sample description 7" },
        { id: 8, img: "./xtream.png", label: "Xtream 8", desc: "Xtream sample description 8" },
    ];

    return <Container fluid className="my-5">
        <Row>
            {
                array.map((element) => {
                    // identifier => key => 
                    return <Col key={element.id} xs={12} sm={6} md={4} lg={3} xxl={2}>
                        <Card>
                            <Card.Img variant="top" src={element.img} />
                            <Card.Body>
                                <Card.Title>{element.label}</Card.Title>
                                <Card.Text className="">{element.desc}</Card.Text>
                                <Button className="w-100 d-flex align-items-center justify-content-center gap-2" variant="success"><FaShoppingCart />Add To Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                })
            }
        </Row>
    </Container>
}

// CSR => CLIENT SIDE RENDERING

export default Cards
