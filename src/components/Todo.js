import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, toggleComplete,TodoDelete, TodoEdit}) => {
  return (
    <div className='Todo'>
       <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
        <FontAwesomeIcon icon = {faPenToSquare}onClick = {() =>
        TodoEdit(task.id)}/>
        <FontAwesomeIcon icon = {faTrash} onClick={() => TodoDelete(task.id)}/>

        </div>
    </div>
  )
}
