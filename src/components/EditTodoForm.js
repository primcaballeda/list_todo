import React, {useState} from 'react'

export const EditTodoForm = ({TodoEdit, task}) => {
    const [value, setValue] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        TodoEdit (value, task.id);
        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
  <input 
    type='text' 
    className='todo-input' 
    value = {value} 
    placeholder='Update the task' onChange =
    {(e) => setValue(e.target.value)} 
  />
  <button 
    type='submit' 
    className='todo-btn'>
      Update Task
  </button>
</form>

  )
}
