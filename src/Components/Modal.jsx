import React from 'react'

const Modal = ({ task, setViewTask }) => {
    return (
        <div className='position-fixed bg-dark d-flex justify-content-center align-items-center bg-opacity-75 top-0 start-0' style={{height: "100vh", width: "100vw"}}>
            <div className='text-dark w-50'>
                <div className='bg-light p-3 w-100'>
                    <div>ID: {task.id}</div>
                    <div>Title: {task.title}</div>
                    <div>Completed: {task.completed ? "Yes" : "No"}</div>
                    <div>Created: {task.createdAt}</div>
                    <div>Updated: {task.updatedAt}</div>
                    <button onClick={() => setViewTask(null)}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
