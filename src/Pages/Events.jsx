import { useEffect, useState } from "react"

const Events = () => {

    const [axis, setAxis] = useState({
        x: 0,
        y: 0
    })

    const handleMouseMove = (event) => {
        setAxis({
            x: event.pageX,
            y: event.pageY
        })
    }

    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove)
        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    return <div className="d-flex flex-column align-items-center mt-5">
        <div className="position-fixed rounded-circle bg-danger" style={{
            left: `${axis.x}px`,
            top: `${axis.y}px`,
            width: "30px",
            height: "30px",
            filter: "blur(10px)",
            pointerEvents: "none",
            transition: "1s"
        }}>
            
       </div>
    </div>
}

export default Events
