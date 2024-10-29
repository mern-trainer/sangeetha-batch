import { Fragment } from "react"
import TopMenu from "../Components/NavBar"
import CarouselTemplate from "../Components/Carousel"
import Cards from "../Components/Cards"
import { Dropdown, Form, Stack, Table } from "react-bootstrap"

const LandingPage = () => {

    return <Fragment>
        <TopMenu />
        <CarouselTemplate />
        <Cards />
    </Fragment>
}

export default LandingPage