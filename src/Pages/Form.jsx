import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Form = () => {

    const [formData, setFormData] = useState({
        name: "", username: "", password: "", confirm_password: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // if (formData.username == "") {
        //     return setError({username: "required"})
        // }
        console.log(formData)
    }

    return (
        <div className='d-flex justify-content-center mt-3'>
            <form onSubmit={handleSubmit} className='w-50 d-flex flex-column gap-2'>
                <input onChange={handleChange} value={formData.name} type="text" name="name" placeholder="Enter name..." className='p-2 border-0 ' style={{outline: 0}}/>
                <input onChange={handleChange} value={formData.username} type="text" name="username" placeholder="Enter username..." className='p-2 border-0 ' style={{outline: 0}}/>
                <input onChange={handleChange} value={formData.password} type="password" name="password" placeholder="Enter password..." className='p-2 border-0 ' style={{outline: 0}}/>
                <input onChange={handleChange} value={formData.confirm_password} type="password" name="confirm_password" placeholder="Confirm password..." className='p-2 border-0 ' style={{outline: 0}}/>
                <button className='btn btn-success w-100 mt-2'>Create Account</button>
            </form>
        </div>
    )
}

export default Form
