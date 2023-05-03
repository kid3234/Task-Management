import React, { useState } from "react";
import Task from "./Task";
import Popup from "./popup";
import Navbar from "./Navbar";
import PopupModal from "../Utils/PopupModal";
import OneTask from "./OneTask";
import axios from "axios";
export default function Home() {
    const [showPopup, setshowPopup] = useState(false);
    const [selectedTask, setSelecTedtask] = useState()
    const [chossebtn, setChossbtn] = useState()

      
    const handlesubmit = (task) => {
        
        axios.post('http://localhost:8081/Task', task)
            .then(res => {
                console.log(res.data)
                window.location.reload();
            })
            .catch(err => console.log(err))

    }

    const handleModal = (tasks) => {
        setSelecTedtask(tasks)
        setshowPopup(Prev => !Prev);
    }
    
    const model =
        (
            <PopupModal show={showPopup} onClick={handleModal}>
                <Popup handleModal={handleModal} handlesubmit={handlesubmit} tasks={selectedTask} chossebtn={chossebtn} />
            </PopupModal>
        )
    
    return (
        <>
            <Navbar model={model} handleModal={handleModal} showModal={showPopup} setChossbtn={setChossbtn} tasks={selectedTask} />
            <OneTask onClick={handlesubmit} tasks={selectedTask} handleModal={handleModal} setChossbtn={setChossbtn}  />
            <Task model={model} handleModal={handleModal} showModal={showPopup} setChossbtn={setChossbtn} />

        </>
    )
}