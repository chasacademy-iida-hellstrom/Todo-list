import React from 'react'

import './App.css';

function App() {
   const [todos, setTodos] = React.useState([])
    const [todo, setTodo] = React.useState("")

    function handleAdd(e) {
      e.preventDefault()

      const newTodo = {
        id: new Date().getTime(),
        title: todo,
        completed: false,
      }

      setTodos([...todos].concat(newTodo))
      setTodo("")
    }

    function deleteTodo(id) {
      const updatedTodos = [...todos].filter((todo => todo.id !== id))
      
      setTodos(updatedTodos)
     }

      function listComplete(id) {
        const updatedTodos = [...todos].map((todo) => {
           if (todo.id === id) {
            todo.completed = !todo.completed
        }
          return todo
      })

      setTodos(updatedTodos)
    }

  return (
    <div className="App">
      <h1>To do- list</h1>
       <form onSubmit={handleAdd}>
        <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo}/>
        <button type="submit">Add</button>
       </form>
       {todos.map((todo) => <div key={todo.id}>
        <div>{todo.title}
        <input type="checkbox" onChange={() => listComplete(todo.id)} 
        checked={todo.completed}/>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
       
        </div></div>)}
    </div>
  );
}

export default App;
