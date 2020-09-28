import { useState, useEffect, useRef } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const enterRef = useRef(null);
  useEffect(() => {
    let localData = localStorage.getItem("todos");

    setTodos(JSON.parse(localData));
  }, []);

  const handlChange = (e) => {
    setTodo(e.target.value);
  };

  const addNew = () => {
    setTodos([...todos, todo]);
    localStorage.setItem("todos", JSON.stringify([...todos, todo]));
    setTodo("");
  };
  const addWithEnter = (e) => {
    if (e.key === "Enter") {
      addNew();
      // console.log("this is me");
      enterRef.current.focus();
    }
  };

  return (
    <div className="container">
      <div className="flex-container">
        <input
          placeholder="Write note"
          value={todo}
          onChange={handlChange}
          ref={enterRef}
          onKeyDown={addWithEnter}
        />
        <button onClick={addNew}>+</button>
      </div>

      <div className="list">
        {todos.map((item, index) => (
          <div key={index} className="list-item flex-container">
            <p>{item}</p>
            <button
              onClick={() => {
                setTodos(todos.filter((el) => el !== item));
                localStorage.setItem(
                  "todos",
                  JSON.stringify(todos.filter((el) => el !== item))
                );
              }}
            >
              <img className="delete_icon" src="icons/delete.png" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
