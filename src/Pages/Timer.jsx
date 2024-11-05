import { useEffect, useState } from "react"

const Timer = () => {
    
    const [timer, setTimer] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer => timer + 1)
        }, 1000) // 1000 --ms, 1s
        return () => {
            clearInterval(interval) // clearing prev time interval
        }
    }, [count])

    return <div className="d-flex flex-column align-items-center mt-5">
        <div>{timer}</div>
        <div>{count}</div>
        <button className="btn btn-danger mt-3" onClick={() => setCount(count + 1)}>Increment</button>
    </div>
}

export default Timer
