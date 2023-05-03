import {React,useState} from 'react'

export default function Task({handleModal,setChossbtn}) { 
    const changeTOadd=()=>{
        setChossbtn("Add")
    }
    return (
        <div className='addTask'>
            <button className='addTask-btn' onClick={()=>{
                handleModal(),
                changeTOadd()
                }}>+ </button>
            <p className='addTask-p'> Add Task</p>
        </div>
    )
}