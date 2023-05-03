import React, { useRef, useState } from 'react'
import { useAulth } from '../Utils/Aulth'
import { useNavigate, Link } from 'react-router-dom'
import Validation from './LoginValidation'
import axios from 'axios'
export default function Login(props) {
    const [userId, setUserId] = useState()
    const [item, setitem] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()


    const handleSubmit = (event) => {
        event.preventDefault()
        setErrors(Validation(item))
        if (errors.email === "") {
            axios.post('http://localhost:8081/Login', item)
                .then(res => {
                    console.log(res.data)
                    if (res.data.status === "Success") {
                        // console.log(res.data.id)
                        localStorage.setItem("id", res.data.id);
                        // setUserId(res.data.id)
                        navigate('/Home')
                    } else {
                        alert("No record exist")
                    }
                })
                .catch(err => console.log(err))
        }
    }
    const handleChange = (event) => {
        setitem(prev => ({
            ...prev,
            [event.target.name]: [event.target.value]
        }))
    }

    return (
        <div className='login-div' >
            <h1>Login</h1>
            <form action='' onSubmit={handleSubmit}>
                <input onChange={handleChange} type='email' placeholder='@gmail.com' name="email" />
                {errors.email && <span>{errors.email}</span>}
                <input onChange={handleChange} type='password' placeholder='********' name="password" />
                {errors.password && <span>{errors.password}</span>}

                <button className='login-btn' type="submit" >Login</button>
                <Link to="/"><p className='login-p'>Create Acount</p></Link>

            </form>

        </div>
    )
}