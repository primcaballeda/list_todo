import React, {useState} from 'react'

export const EditTodoForm = ({TodoEdit, task}) => {
    const [value, setValue] = useState("")
    const [warning, setWarning] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() === "") {
          setWarning(true);
          return;
        }
        TodoEdit (value, task.id);
        setValue("")
        setWarning(false)
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
  <input 
    type='text' 
    className='todo-input' 
    value = {value} 
    placeholder='Update the task' onChange =
    {(e) => {
      setValue(e.target.value)
    setWarning(false)
    }}
  />
  <button 
    type='submit' 
    className='todo-btn'>
      Update Task
  </button>
  {warning && <p style={{ color: 'red' }}>Please enter a task!</p>}
</form>

  )
}
