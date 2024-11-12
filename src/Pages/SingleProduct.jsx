import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {

    const { product_id } = useParams()

    const [product, setProduct] = useState({})

    const handleFetchData = async () => {
        const response = await fetch("https://dummyjson.com/products/" + product_id)
        const result = await response.json()
        setProduct(result)
    }

    useEffect(() => {
        handleFetchData() // side effect handling
    }, [product_id])

    return (
        <div>
            { product?.title }
        </div>
    )
}

export default SingleProduct
