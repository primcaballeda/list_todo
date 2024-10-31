import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const [warning, setWarning] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() === "") {
          setWarning(true);
          return;
        }
        addTodo (value);
        setValue("");
        setWarning(false);
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
  <input 
    type='text' 
    className='todo-input' 
    value = {value} 
    placeholder='Enter the task today' 
    onChange = {(e) => {
      setValue(e.target.value);
      setWarning(false);
    }}
    
  />
  <button 
    type='submit' 
    className='todo-btn'>
      Add Task
  </button>
  {warning && <p style={{ color: 'red' }}>Please enter a task!</p>}
</form>

  )
}
