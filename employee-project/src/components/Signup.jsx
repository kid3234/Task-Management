import { React, useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Validation from './SignupValidation'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Signup() {
    // const [acount, setAcount] = useState(true)
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    const [item, setItem] = useState({
        name: "",
        email: "",
        password: ""
    })
    // const name = useRef(null)
    // const email = useRef(null)
    // const password = useRef(null)

    const handleSignup = (event) => {
        event.preventDefault()
        setErrors(Validation(item))
        if (errors.name === "" && errors.email === "") {
            axios.post('http://localhost:8081/signup', item)
                .then(res => {
                    navigate('/Login')
                })
                .catch(err => console.log(err))
        }
    }
    const handleChange = (event) => {
        setItem(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }




    // function handleAcount() {
    // setAcount(prev => !prev)
    // return(

    // )
    // }
    // function handleSignup() {
    //     setItem(
    //         {
    //             name: name.current.value,
    //             password: password.current.value,
    //             email: email.current.value

    //         }
    //     )
    //     console.log("cliked")
    // }
    // useEffect(() => {
    //     localStorage.setItem('item', JSON.stringify(item))
    //     console.log(localStorage.getItem("item"))
    // }, [item])
    // {acount ? <Login handleAcount={handleAcount} /> :

    return (
        <>
            <div className='Signup-div' >
                <h1>Sign-up</h1>
                <form action='' onSubmit={handleSignup}>
                    <input onChange={handleChange} type='text' placeholder='Full name' name='name' />
                    {errors.name && <span>{errors.name}</span>}
                    <input onChange={handleChange} type='email' placeholder='@gmail.com' name='email' />
                    {errors.email && <span>{errors.email}</span>}
                    <input onChange={handleChange} type='password' placeholder='********' name='password' />
                    {errors.password && <span>{errors.password}</span>}

                    <button className='signup-btn' type='submit'>Sign-up</button>
                    <Link to='/Login'><p  className='signup-p'>Alredy have acount</p></Link>

                </form>

            </div>

        </>


    )
}