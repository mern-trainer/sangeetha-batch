import { useFormik } from 'formik'
import React, { useState } from 'react'

const Formik = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            username: "",
            password: "",
            confirm_password: ""
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <div className='d-flex justify-content-center mt-3'>
            <form onSubmit={formik.handleSubmit} className='w-50 d-flex flex-column gap-2'>
                <input onChange={formik.handleChange} value={formik.values.name} type="text" name="name" placeholder="Enter name..." className='p-2 border-0 ' style={{outline: 0}}/>
                <input onChange={formik.handleChange} value={formik.values.username} type="text" name="username" placeholder="Enter username..." className='p-2 border-0 ' style={{outline: 0}}/>
                <input onChange={formik.handleChange} value={formik.values.password} type="password" name="password" placeholder="Enter password..." className='p-2 border-0 ' style={{outline: 0}}/>
                <input onChange={formik.handleChange} value={formik.values.confirm_password} type="password" name="confirm_password" placeholder="Confirm password..." className='p-2 border-0 ' style={{outline: 0}}/>
                <button type="submit" className='btn btn-success w-100 mt-2'>Create Account</button>
            </form>
        </div>
    )
}

export default Formik
