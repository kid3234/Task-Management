import React from 'react'
import { useAulth } from '../Utils/Aulth'
import { useNavigate } from 'react-router-dom'

export default function Navbar({ model, handleModal, setChossbtn ,showModal}) {
    const aulth = useAulth()
    const navigate = useNavigate()
    const changeTOadd = () => {
        setChossbtn("Add")
    }
    function handleLogout() {
        localStorage.removeItem("id")
        aulth.Logout()
        navigate('/Login')
    }
    return (
        <div className='nav'>
            <h1>Task Management</h1>
            <div className='nav-btn'>
                <p>Add task</p>
                <button onClick={() => {
                    changeTOadd();
                    handleModal()
                }}>+</button>
                <button onClick={handleLogout}>Logout</button>
            </div>
            {showModal && model}
        </div>
    )
}