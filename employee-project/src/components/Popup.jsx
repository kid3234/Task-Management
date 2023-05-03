import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
export default function popup({ handleModal, handlesubmit, tasks, chossebtn }) {
  const title = useRef()
  const description = useRef()
  const date = useRef()
  const [task, setTask] = useState()
  
  const handleClick = (e) => {
    e.preventDefault();
    handlesubmit(task);
  }
  const id = localStorage.getItem("id");
  const tid = localStorage.getItem("tid")
  const handleChange = (event) => {
    setTask({ title: title.current.value, description: description.current.value, date: date.current.value, uid: id })
  }
  
  const handleDelete = () => {
    
      axios.delete(`http://localhost:8081/${tasks.id}`)
        .then(res => {
          console.log(res.data)
          window.location.reload();
        })
    


  }


  const taskDisplay = (e) => {
    e.preventDefault();
    console.log(task)
    axios.put(`http://localhost:8081/${tasks.id}`, task)
      .then(res => {
        console.log(res.data)
        window.location.reload();
      })
    console.log(task)
  }

  const update = () => (
    <>
      <div className='form-div'>

        <div className="n-div">
          <h1>Update task</h1>
          <button className='x-btn' onClick={handleModal}>x</button>
        </div>
        <form action='' onSubmit={taskDisplay}>
          <div className='labl-div'>
            <label className='task' htmlFor="task">  Task title: </label>
            <input ref={title} onChange={handleChange} id='task' type='text' placeholder='Task title' name='title' defaultValue={tasks?.title} />
          </div>

          <div className='labl-div'>
            <label className='desc' htmlFor="desc"> Description: </label>
            <textarea onChange={handleChange} ref={description} id="desc" type='text' placeholder='description' name="description" defaultValue={tasks?.description} />
          </div>
          <div className='labl-div'>
            <label className='date' htmlFor="date">  Date:  </label>
            <input onChange={handleChange} id='date' ref={date} type='date' placeholder='Task title' name='date' defaultValue={tasks?.date.split("T")[0]} />
          </div>
          <button type='submit' className='popup-btn'>Update</button>
        </form>
      </div>
    </>
  )
  const Delete = (
    <div className='delete-popup'>
      <div className="delete-div">
        <h1>Are you sure  </h1>
        <button className='delete-x delete-btn' onClick={handleModal}>x</button>
      </div>
      <button className='delete-yes delete-btn' onClick={handleDelete}>yes</button>
      <button className='delete-no delete-btn' >No</button>
    </div>
  )
  const Add = () => (
    <>
      <div className='form-div'>

        <div className="n-div">
          <h1>Add new task</h1>
          <button className='x-btn' onClick={handleModal}>x</button>
        </div>
        <form action='' onSubmit={handleClick}>
          <div className='labl-div'>
            <label className='task' htmlFor="task">  Task title: </label>
            <input ref={title} onChange={handleChange} id='task' type='text' placeholder='Task title' name='title' />
          </div>

          <div className='labl-div'>
            <label className='desc' htmlFor="desc"> Description:</label>
            <textarea onChange={handleChange} ref={description} id="desc" type='text' placeholder='description' name="description" />
          </div>
          <div className='labl-div'>
            <label className='date' htmlFor="date">  Date: </label>
            <input onChange={handleChange} ref={date} id='date' type='date' placeholder='Task title' name='date' />
          </div>
          <button type='submit' className='popup-btn'>Add</button>
        </form>

      </div>
    </>
  )
  let display

  if (chossebtn === "update") {
    display = update()
  } else if (chossebtn === "Add") {
    display = Add()
  } else if (chossebtn === "delete") {
    display = Delete
  }


  return (

    <>
      {display}
    </>

  )
}
