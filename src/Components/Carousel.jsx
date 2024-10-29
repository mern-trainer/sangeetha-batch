import { Carousel, Image } from "react-bootstrap"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const CarouselTemplate = () => {
    return <Carousel nextIcon={<FaArrowAltCircleRight />} prevIcon={<FaArrowAltCircleLeft />}>
        <Carousel.Item interval={2000}>
            <Image src="./ad1.png" alt="carousel 1" className="w-100" style={{height: "500px"}}/>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
            <Image src="./ad2.png" alt="carousel 2" className="w-100" style={{height: "500px"}}/>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
            <Image src="./ad3.png" alt="carousel 3" className="w-100" style={{height: "500px"}}/>
        </Carousel.Item>
    </Carousel>
}

export default CarouselTemplate
