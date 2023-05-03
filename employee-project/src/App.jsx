import { React, useState } from 'react'
import './App.css'
import Home from './components/Home'
import Login from './components/Login';
import Signup from './components/Signup';
import { Routes, Route } from 'react-router-dom';
import { AulthProvider } from './Utils/Aulth';


function App() {
  
  return (
    <AulthProvider>
      <Routes>
        <Route path='/' element={<Signup />}></Route>
        <Route path='Login' element={<Login />}></Route>
        <Route path='Home' element={<Home  />}></Route>
        {/* <Route path='Description' element={<Description taskDisplay={taskDisplay} />}></Route> */}

      </Routes>
    </AulthProvider>



  )
}

export default App
