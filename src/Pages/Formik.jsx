import { useFormik } from 'formik'
import React, { useState } from 'react'
import { object, ref, string } from 'yup'

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
        },
        validationSchema: object().shape({
            name: string()
                .required("Name is required!")
                .min(4, "Min 4 char. required!")
                .max(12, "Max 12 char. required!"),
            username: string()
                .required("Username is required!")
                .min(4, "Min 4 char. required!")
                .max(12, "Max 12 char. required!"),
            password: string()
                .required("password is required!")
                .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%@&? "])[a-zA-Z0-9!#@$%&?]{8,20}$/, { message: "Password is invalid" }),
            confirm_password: string()
                .required("Confirm password is required!")
                .oneOf([ref("password")], "Password does not match!")
        })
    })

    return (
        <div className='d-flex justify-content-center mt-3'>
            <form onSubmit={formik.handleSubmit} className='w-50 d-flex flex-column gap-2'>
                <input onChange={formik.handleChange} value={formik.values.name} type="text" name="name" placeholder="Enter name..." className='p-2 border-0 ' style={{outline: 0}}/>
                <span>{formik.errors.name}</span>
                <input onChange={formik.handleChange} value={formik.values.username} type="text" name="username" placeholder="Enter username..." className='p-2 border-0 ' style={{ outline: 0 }} />
                <span>{formik.errors.username}</span>
                <input onChange={formik.handleChange} value={formik.values.password} type="password" name="password" placeholder="Enter password..." className='p-2 border-0 ' style={{outline: 0}}/>
                <span>{formik.errors.password}</span>
                <input onChange={formik.handleChange} value={formik.values.confirm_password} type="password" name="confirm_password" placeholder="Confirm password..." className='p-2 border-0 ' style={{outline: 0}}/>
                <span>{formik.errors.confirm_password}</span>
                <button type="submit" className='btn btn-success w-100 mt-2'>Create Account</button>
            </form>
        </div>
    )
}

export default Formik
