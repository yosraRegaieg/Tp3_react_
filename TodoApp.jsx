import React, { useState } from 'react';

function TodoApp() {

const [todos, setTodos] = useState([]);
const [task, setTask] = useState("");

const addTask = () => { if (task.trim() !== "") {
setTodos([...todos, { id: Date.now(), text: task, completed: false }]); setTask("");
}
};

const toggleCompletion = (id) => {
setTodos(todos.map(todo => todo.id === id ?
{ ...todo, completed: !todo.completed } : todo )); };

const deleteTask = (id) => {
setTodos(todos.filter(todo => todo.id !== id));
};
return (
<div className="todo-app">
<h1>Todo List</h1>
<input type="text" value={task} onChange={(e) => setTask(e.target.value)}
placeholder="Ajouter une tâche" />
<button onClick={addTask}>Ajouter</button>
<ul>
{todos.map(todo => (
<li key={todo.id} className={todo.completed ? 'completed' : ''}>

<span onClick={() => toggleCompletion(todo.id)}>{todo.text}</span>
<button onClick={() => deleteTask(todo.id)}>Supprimer</button>
</li> ))}
</ul>
</div>
);
}
function App() {
return ( <div className="App"> <TodoApp /> </div> );
}
export default App;