import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './App.css';



function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newStatus, setNewStatus] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem = {
        title: newTodo,
        description: newDescription,
        status: newStatus
      };

      setTodos([...todos, newTodoItem]);
      setNewTodo('');
      setNewDescription('');
      setNewStatus('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list-container">
      <h2>Todo List</h2>
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new task..."
        />
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="Enter a description"
        />
        <select
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value)}
        >
          <option value="">Select a status</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <button onClick={addTodo}>Add Task</button>
      </div>

      <ul className="todo-items">
        {todos.map((todo, index) => (
          <li key={index}>
            <div className="todo-item">
              <div>
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
              </div>
              <div>
                <span>Status: {todo.status}</span>
                <button onClick={() => removeTodo(index)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;