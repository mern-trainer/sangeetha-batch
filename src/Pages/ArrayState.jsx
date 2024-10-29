import { useState } from "react"

const ArrayState = () => {

    const [list, setList] = useState([])

    const handleRandomNumber = () => {
        const random = Math.floor(Math.random() * 10)
        setList([...list, random])
    }

    return <div>
        <button onClick={handleRandomNumber}>Generate Random Number</button>
        {
            list.map((num, index) => {
                return <div key={index}>{num}</div>
            })
        }
    </div>
}

export default ArrayState
