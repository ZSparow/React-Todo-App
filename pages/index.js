import { useState } from 'react'

const TodoApp = () => {

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");


  const handlChange = (e) => {
    setTodo(e.target.value);
  };

  const addNew = () => {
    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
    <div className='container'>
      <div className='flex-container'>
        <input placeholder="Write note" value={todo} onChange={handlChange} />
        <button onClick={addNew}>+</button>
      </div>


      <div className="list">
        {todos.map((item, index) => (
          <div key={index} className="list-item flex-container">
            <p>{item}</p>
            <button onClick={() => setTodos(todos.filter((el) => el !== item))}>
              <img className='delete_icon' src="icons/delete.png" />
            </button>
          </div>
        ))}
      </div>

    </div>
  )
}


export default TodoApp;