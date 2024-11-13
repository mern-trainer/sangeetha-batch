import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {

    const { product_id } = useParams()

    const [product, setProduct] = useState(null)
    const [currentImage, setCurrentImage] = useState("")

    const handleFetchData = async () => {
        const response = await fetch("https://dummyjson.com/products/" + product_id)
        const result = await response.json()
        setProduct(result)
        setCurrentImage(result.images[0]) 
    }

    useEffect(() => {
        handleFetchData() // side effect handling
    }, [product_id])

    return (
        <Fragment>
            {
                product && <div className='d-flex justify-content-between'>
                    <div className='w-100'>
                        <img src={currentImage} alt="product image" className='w-100' />
                        <div>
                            {
                                product.images.map((image, index) => {
                                    return <img key={index} src={image} onMouseOver={() => setCurrentImage(image)} alt="product image" width={80} />
                                })
                            }
                        </div>
                    </div>
                    <div className='w-100'>
                        <div>{product.title}</div>
                        <div>{product.description}</div>
                        <div className='d-flex gap-2'>
                            <s>${product.price}</s>
                            <b className='text-success'>${(product.price - (product.price * product.discountPercentage / 100)).toFixed(2)}</b>
                        </div>
                        
                        <div>
                            {/* add to cart */}
                            {/* buy now */}
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default SingleProduct
