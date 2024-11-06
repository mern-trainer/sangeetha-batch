import { useEffect, useState } from "react"

const Timer = () => {
    
    const [timer, setTimer] = useState("")
    const [count, setCount] = useState(0)

    useEffect(() => {
        const timeInterval = setInterval(() => {
            const currentDateTime = new Date().toLocaleString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true
            }).toUpperCase()
            setTimer(currentDateTime)
        }, 1000);
        return () => {
            clearInterval(timeInterval)
        }
    }, [count])

    return <div className="d-flex flex-column align-items-center mt-5">
        <div>{timer}</div>
        <div>{count}</div>
        <button className="btn btn-danger mt-3" onClick={() => setCount(count + 1)}>Increment</button>
    </div>
}

export default Timer
