import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Redux/counterSlice'

const Redux = () => {

    const { num } = useSelector((store) => store.counter)

    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(increment(1))
    }
    const handleDecrement = () => {
        dispatch(decrement(1))
    }

    return (
        <div className='d-flex flex-column align-items-center gap-3'>
            <div>{num}</div>
            <button className='btn btn-primary' onClick={handleIncrement}>INCREMENT</button>
            <button className='btn btn-danger' onClick={handleDecrement}>DECREMENT</button>
        </div>
    )
}

export default Redux
