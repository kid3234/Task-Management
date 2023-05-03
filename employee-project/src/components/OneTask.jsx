import { React, useEffect, useState } from 'react'
import axios from 'axios'
export default function OneTask({ handlesubmit,handleModal,setChossbtn,tasks,handleDelete}) {
    const [task, setTask] = useState([])
    const [checked,setChecked]=useState({
        cid:null,
        tstatus:"false"
    })
    const changeTOupdate=()=>{
        setChossbtn("update")
        console.log("clicked")
    }
    const changeTODelete=()=>{
        setChossbtn("delete")
        console.log("clicked")
    }
    const handleCheck=(taskcheked)=>{
        console.log(taskcheked)
        setChecked({cid:taskcheked.id,tstatus:!checked.tstatus})
        console.log('cheked')
    }
const CheckComplet=()=>{
    axios.put(`http://localhost:8081/item/${checked.cid}`,checked)
    .then(res=>{
        console.log(res.data)
        window.location.reload();
    })
}
    useEffect(() => {
        const taskDisplay = () => {
            const id = localStorage.getItem("id")
            axios.get(`http://localhost:8081/${id}`)
                .then(res => {
                    setTask(res.data.tasks)
                })
        }
        taskDisplay()

    }, [])
    return (
        <div className='onetask-div'>

            {
                task.map((tasks) =>
                    <div key={tasks.id} className='one-task'>
                        <h3>Task title: {tasks.title}</h3>
                        <p className='desc-p'>Description: {tasks.description}</p>
                        <p className='date-p'>Date: {tasks.date.split("T")[0]}</p>
                        <div className='onetask-conponent'>
                        <div className='onetask-chekbox'>
                                <label htmlFor='complet'>{tasks.IsCompleted ? 'completed' :'incomplet'}</label>
                                <input onClick={()=>{
                                       handleCheck(tasks),
                                       CheckComplet();
                                }} id='complet' type='checkbox' />
                            </div>
                            <button className='onetask-btn' onClick={()=>{
                                changeTOupdate(),
                               handleModal(tasks);
                            }}>update</button>
                            <button className='onetask-btn' onClick={()=>{
                                   handleModal(tasks)
                                   changeTODelete()
                               }
                           }>Delete</button>
                            
                        </div>
                    </div>

                )
            }

        </div>

    )
}
